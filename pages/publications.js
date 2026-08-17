import React from 'react';
import Banner from '../components/Banner';
import publicationData from '../data/publications.json';

// Scholar writes initials as "AS Jovine"; render them as "A. S. Jovine".
const formatAuthors = (authors) =>
  authors
    .split(',')
    .map((name) =>
      name
        .trim()
        .split(' ')
        .map((token) =>
          /^[A-Z]{1,3}$/.test(token) ? token.split('').map((c) => `${c}.`).join(' ') : token
        )
        .join(' ')
    )
    .join(', ');

// data/publications.json is rewritten weekly by scripts/sync-scholar.mjs.
// Hand-curated corrections live in its "overrides" map and win here.
const publications = publicationData.publications.map((pub) => ({
  ...pub,
  ...(publicationData.overrides?.[pub.id] ?? {}),
}));

const Publications = () => {
  return (
    <>
      <style jsx global>{`
        body {
          background: rgba(207, 212, 224, 1);
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        }

        .content-container {
          margin-bottom: 3rem;
          padding: 2rem 0;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(113, 121, 139, 0.4);
          font-family: Georgia, serif;
        }

        .publication-item {
          border-left: 4px solid #71798b;
          padding-left: 1rem;
          margin-bottom: 1.5rem;
          background: rgba(184, 188, 197, 0.3);
          backdrop-filter: blur(5px);
          border-radius: 8px;
          padding: 1rem 1rem 1rem 2rem;
        }

        .publication-published {
          border-left-color: #10b981;
        }
      `}</style>

      <Banner />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
        <div className="content-container">
          <h2 className="section-title">Publications</h2>
          <div style={{ color: '#374151' }}>
            {publications.map((pub) => (
              <div
                key={pub.id}
                className={`publication-item${pub.published ? ' publication-published' : ''}`}
              >
                <p style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.25rem' }}>
                  <a href={pub.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1f2937' }}>
                    {pub.title}
                  </a>
                </p>
                <p style={{ fontSize: '0.875rem', color: '#4b5563', fontStyle: 'italic', marginBottom: '0.25rem' }}>
                  {pub.venue}
                  {pub.year ? ` (${pub.year})` : ''}
                </p>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>{formatAuthors(pub.authors)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Publications;
