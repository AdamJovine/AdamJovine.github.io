// scripts/sync-scholar.mjs
//
// Refreshes data/publications.json from the Google Scholar profile.
//
// Fail-safe by design: if Scholar is unreachable, serves a CAPTCHA, or yields
// zero parseable rows, this exits with code 2 WITHOUT touching the data file.
// A bad scrape must never wipe the publications page.
//
// Hand-curated fields live in the "overrides" object, keyed by Scholar id.
// This script never rewrites "overrides" — edit it by hand and it survives.

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SCHOLAR_USER = 've_NbCMAAAAJ';
const PROFILE_URL = `https://scholar.google.com/citations?user=${SCHOLAR_USER}&hl=en&cstart=0&pagesize=100`;
const DATA_FILE = join(dirname(fileURLToPath(import.meta.url)), '..', 'data', 'publications.json');

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function fail(message) {
  console.error(`sync-scholar: ${message}`);
  process.exit(2);
}

function decode(text) {
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function get(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9' },
  });
  if (!res.ok) fail(`HTTP ${res.status} fetching ${url}`);
  const html = await res.text();
  if (/unusual traffic|not a robot|\/sorry\/index|g-recaptcha/i.test(html)) {
    fail('Scholar served a CAPTCHA instead of the profile (datacenter IP blocked)');
  }
  return html;
}

// Scholar truncates long author lists on the profile listing. When that
// happens, fall back to the per-publication detail page for the full list.
async function fullAuthors(citationId) {
  const url =
    `https://scholar.google.com/citations?view_op=view_citation&hl=en` +
    `&user=${SCHOLAR_USER}&citation_for_view=${citationId}`;
  try {
    const html = await get(url);
    const match = html.match(
      /<div class="gsc_oci_field">Authors<\/div><div class="gsc_oci_value">([\s\S]*?)<\/div>/
    );
    return match ? decode(match[1]) : null;
  } catch {
    return null;
  }
}

function parseVenue(raw) {
  // "arXiv preprint arXiv:2510.25799" -> "arXiv:2510.25799"
  const arxiv = raw.match(/arXiv:\s*(\d{4}\.\d{4,5})/i);
  if (arxiv) return { venue: `arXiv:${arxiv[1]}`, arxivId: arxiv[1], preprint: true };
  const preprint = /preprint|working paper|submitted|under review/i.test(raw);
  return { venue: raw, arxivId: null, preprint };
}

const html = await get(PROFILE_URL);

const rows = [...html.matchAll(/<tr class="gsc_a_tr">([\s\S]*?)<\/tr>/g)].map((m) => m[1]);
if (rows.length === 0) fail('parsed 0 publication rows — Scholar markup may have changed');

const publications = [];
for (const row of rows) {
  const link = row.match(/<a href="([^"]*citation_for_view=([^"&]+)[^"]*)"[^>]*class="gsc_a_at"[^>]*>([\s\S]*?)<\/a>/);
  const grays = [...row.matchAll(/<div class="gs_gray">([\s\S]*?)<\/div>/g)].map((m) => m[1]);
  const yearMatch = row.match(/<span class="gsc_a_h[^"]*"[^>]*>(\d{4})<\/span>/);
  if (!link || grays.length < 2) continue;

  const id = decode(link[2]);
  const title = decode(link[3]);
  let authors = decode(grays[0]);
  const rawVenue = decode(grays[1]).replace(/,\s*\d{4}$/, '');
  const year = yearMatch ? Number(yearMatch[1]) : null;

  if (/[.…]{3}$|…$/.test(authors)) {
    const full = await fullAuthors(id);
    if (full) authors = full;
  }

  const { venue, arxivId, preprint } = parseVenue(rawVenue);

  publications.push({
    id,
    title,
    authors,
    venue,
    year,
    url: arxivId
      ? `https://arxiv.org/abs/${arxivId}`
      : `https://scholar.google.com/citations?view_op=view_citation&hl=en&user=${SCHOLAR_USER}&citation_for_view=${id}`,
    published: !preprint,
  });
}

if (publications.length === 0) fail('parsed 0 usable publications — refusing to write');

publications.sort((a, b) => (b.year ?? 0) - (a.year ?? 0) || a.title.localeCompare(b.title));

let existing = { overrides: {} };
try {
  existing = JSON.parse(await readFile(DATA_FILE, 'utf8'));
} catch {
  // First run — no data file yet.
}

const next = {
  source: `https://scholar.google.com/citations?user=${SCHOLAR_USER}&hl=en`,
  generated: new Date().toISOString().slice(0, 10),
  overrides: existing.overrides ?? {},
  publications,
};

// Compare ignoring "generated" so an unchanged profile is a true no-op.
const stripDate = (o) => JSON.stringify({ ...o, generated: null });
if (stripDate(existing) === stripDate(next)) {
  console.log(`sync-scholar: no change (${publications.length} publications)`);
  process.exit(0);
}

await writeFile(DATA_FILE, JSON.stringify(next, null, 2) + '\n');
console.log(`sync-scholar: updated (${publications.length} publications)`);
