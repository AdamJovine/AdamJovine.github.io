// pages/projects/[slug].js

import { useRouter } from 'next/router';
import Image from 'next/image';
import Banner from '../../components/Banner';

const projectData = {
  'reflective-optimization': {
    title: 'Reflective Optimization',
    description: 'Enhancing scheduling decisions with LLM‑guided trade‑off reasoning.',
    images: [],
    website: 'https://github.com/your-org/reflective-optimization',
    fullDescription: `This project explores the intersection of Large Language Models and optimization algorithms to create more intelligent scheduling systems. By incorporating reflective reasoning capabilities, we can make more nuanced trade-off decisions in complex scheduling scenarios.`,
    technologies: ['Python', 'PyTorch', 'OpenAI API', 'Integer Programming', 'Machine Learning'],
    status: 'In submission to NeurIPS 2025',
    authors: 'A. Jovine, P. Frazier, D. Shmoys, T. Ye',
    paper: '/papers/reflective-optimization.pdf'
  },
  'blade-bo': {
    title: 'BLADE‑BO',
    description: 'Quality diversity optimization for exam scheduling.',
    images: [
      '/images/blade-bo.png',
      '/images/AqExperiment.png'
    ],
    website: 'https://github.com/your-org/blade-bo',
    fullDescription: `BLADE‑BO introduces quality diversity principles to Bayesian Optimization for improved exam scheduling. This approach generates diverse, high‑quality solutions that balance multiple competing objectives in university scheduling scenarios. We developed a new method that actively balances time spent on each stage of the algorithm, avoiding hyperparameter sensitivity common in cost‑aware sequential‑BO techniques like LAMBO and CarBO.`,
    technologies: ['Python', 'Bayesian Optimization', 'Quality Diversity', 'Scheduling Algorithms'],
    status: 'In submission to AutoML 2025',
    authors: 'A. Jovine, P. Frazier, D. Shmoys, T. Ye',
    paper: '/papers/AutoMLWorkshop.pdf'
  },
  'exam-scheduling-benchmarks': {
    title: 'Exam Scheduling Benchmarks',
    description: 'Distributional MIPLIB benchmarks for IP‑ML research.',
    images: [],
    website: 'https://github.com/your-org/exam-scheduling-benchmarks',
    fullDescription: `A comprehensive benchmarking suite for exam scheduling problems, providing standardized test cases for Integer Programming and Machine Learning research. This work contributes new, realistic instances to the MIPLIB community.`,
    technologies: ['Integer Programming', 'MIPLIB', 'Benchmarking', 'Optimization'],
    status: 'In submission to MIPLIB',
    authors: 'T. Ye, A. Jovine',
    paper: '/papers/exam-scheduling-benchmarks.pdf'
  },
  'final-exam-scheduling': {
    title: 'Exam Scheduling Algorithms',
    description: 'Using multistage MIPs to optimize exam scheduling at Cornell.',
    images: [
      '/images/block-assign.png',
      '/images/sequencing.png',
      '/images/post-proc.png',
      '/images/final-exam-scheduling.jpg',
    ],
    website: 'https://cornellschedulingteam.com/',
    fullDescription: [
      'As lead of the Cornell Scheduling Team’s Research Subteam (Aug 2023–May 2025), I oversaw four specialized groups—Finals Scheduling, Prelims Scheduling, Forecasting, and Modeling—that together deliver data‑driven, conflict‑free exam timetables for the university.',
      'Finals Scheduling uses integer programming in Python to produce optimal end‑of‑semester schedules, testing different sequencing parameters to balance workloads and eliminate clashes.',
      'Prelims Scheduling focuses on aligning exam dates with professor preferences and student needs, continuously refining slots based on historical data and stakeholder feedback.',
      'Forecasting analyzes pre‑enrollment data to predict post add‑drop trends, builds feature sets, and applies machine learning models to guide both prelim and finals scheduling.',
      'Modeling develops and iterates on algorithms for schedule generation—gathering user feedback to improve efficiency, minimize back‑to‑back exams, and maximize practicality.'
    ],
    achievements: [
      'Scheduled **240,000** final exams for Fall 2023 and Spring 2024 with the lowest conflicts in Cornell history.',
      'Automated the scheduling pipeline on Google Cloud, slashing manual effort.',
      'Built a four‑lecture training curriculum and recruited 18 new student team members.',
      'Developed a real‑time notification tool for professor‑reported conflicts.',
      'Piloted cross‑institutional schedules with UC Riverside, UC Davis, and LSE.',
      'Cut “bad events” (back‑to‑back or 24 hr exams) from 10,000 to 5,000 via a multi‑stage model.',
      'Co‑authored an IJAA paper and co‑built a Bayesian‑optimization Pareto front with Peter Frazier.',
      'Won **1st place** at Cornell Undergraduate Research Symposium 2024 and the **Computing Research Award**.'
    ],
    technologies: ['Integer Programming', 'Optimization', 'Scheduling'],
    status: 'Accepted in IJAA',
    authors: 'T. Ye, A. Jovine, W. van Osselaer, Q. Zhu, D. Shmoys',
    paper: '/papers/2409.04959v3.pdf'
  }
};

export default function ProjectDetail({ project }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading…</div>;

  if (!project) {
    return (
      <>
        <Banner />
        <div style={{
          maxWidth: '80rem',
          margin: '2rem auto',
          padding: '2rem',
          background: 'rgba(207, 212, 224, 1)',
          backdropFilter: 'blur(5px)',
          borderRadius: '12px',
          border: '1px solid rgba(113, 121, 139, 0.2)',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 600 }}>Project Not Found</h1>
          <p style={{ marginTop: '1rem', color: '#4b5563' }}>We couldn’t find that project.</p>
        </div>
      </>
    );
  }

  const {
    title,
    description,
    images,
    website,
    fullDescription,
    achievements,
    technologies,
    status,
    authors,
    paper
  } = project;

  return (
    <div style={{
      background: 'rgba(207, 212, 224, 1)',
      backdropFilter: 'blur(5px)',
      minHeight: '100vh',
      paddingBottom: '4rem'
    }}>
      <Banner />

      <main style={{
        maxWidth: '80rem',
        margin: '2rem auto',
        padding: '2rem',
        background: 'rgba(207, 212, 224, 0.9)',
        borderRadius: '12px',
        border: '1px solid rgba(113, 121, 139, 0.2)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start'
      }}>
        {/* Left Column: Text Content */}
        <div style={{ flex: 2 }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>
            {title}
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', fontStyle: 'italic', marginBottom: '1rem' }}>
            {description}
          </p>
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginBottom: '1.5rem',
                padding: '0.5rem 1rem',
                background: '#3b82f6',
                color: '#fff',
                borderRadius: '8px',
                textDecoration: 'none'
              }}
            >
              Visit Project Site
            </a>
          )}

          <section style={{ marginBottom: '1.5rem', lineHeight: 1.7, color: '#374151' }}>
            {Array.isArray(fullDescription)
              ? fullDescription.map((p, i) => <p key={i} style={{ marginBottom: '1rem' }}>{p}</p>)
              : <p>{fullDescription}</p>}
          </section>

          {achievements && (
            <section style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.5rem' }}>
                Key Achievements
              </h2>
              <ul style={{ listStyle: 'disc inside', color: '#374151' }}>
                {achievements.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </section>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: '1 1 200px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Technologies</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {technologies.map(tech => (
                  <span
                    key={tech}
                    style={{
                      background: 'rgba(184, 188, 197, 0.6)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      color: '#374151'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ flex: '1 1 200px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Details</h3>
              <ul style={{ color: '#374151', lineHeight: 1.5 }}>
                <li><strong>Status:</strong> {status}</li>
                <li><strong>Authors:</strong> {authors}</li>
                <li>
                  <strong>Paper:</strong>{' '}
                  <a href={paper} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
                    Download PDF
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Image Thumbnails */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {images.map((src, idx) => (
            <div
              key={idx}
              style={{
                width: '100%',
                position: 'relative',
                paddingBottom: '56.25%' // 16:9 aspect ratio
              }}
            >
              <Image
                src={src}
                alt={`${title} screenshot ${idx + 1}`}
                layout="fill"
                style={{
                  objectFit: 'contain',        // ← fit entire image
                  borderRadius: '8px',
                  border: '1px solid rgba(113,121,139,0.2)'
                }}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(projectData).map(slug => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      project: projectData[params.slug] || null
    }
  };
}
