import { useRouter } from 'next/router';
import Banner from '../../components/Banner';

const projectData = {
  'reflective-optimization': {
    title: 'Reflective Optimization',
    description: 'Enhancing scheduling decisions with LLM‑guided trade‑off reasoning.',
    fullDescription: 'This project explores the intersection of Large Language Models and optimization algorithms to create more intelligent scheduling systems. By incorporating reflective reasoning capabilities, we can make more nuanced trade-off decisions in complex scheduling scenarios.',
    technologies: ['Python', 'PyTorch', 'OpenAI API', 'Integer Programming', 'Machine Learning'],
    status: 'In submission to NeurIPS 2025',
    authors: 'A. Jovine, P. Frazier, D. Shmoys, T. Ye',
    github: 'https://github.com/AdamJovine/reflective-optimization',
    paper: '/papers/reflective-optimization.pdf'
  },
  'blade-bo': {
    title: 'BLADE-BO',
    description: 'Quality diversity optimization for exam scheduling.',
    fullDescription: 'BLADE-BO introduces quality diversity principles to Bayesian Optimization for improved exam scheduling. This approach generates diverse, high-quality solutions that balance multiple competing objectives in university scheduling scenarios.',
    technologies: ['Python', 'Bayesian Optimization', 'Quality Diversity', 'Scheduling Algorithms'],
    status: 'In submission to AutoML 2025',
    authors: 'A. Jovine, P. Frazier, D. Shmoys, T. Ye',
    github: 'https://github.com/AdamJovine/blade-bo',
    paper: '/papers/blade-bo.pdf'
  },
  'exam-scheduling-benchmarks': {
    title: 'Exam Scheduling Benchmarks',
    description: 'Distributional MIPLIB benchmarks for IP-ML research.',
    fullDescription: 'A comprehensive benchmarking suite for exam scheduling problems, providing standardized test cases for Integer Programming and Machine Learning research. This work contributes to MIPLIB with realistic, diverse problem instances.',
    technologies: ['Integer Programming', 'MIPLIB', 'Benchmarking', 'Optimization'],
    status: 'In submission to MIPLIB',
    authors: 'T. Ye, A. Jovine',
    github: 'https://github.com/AdamJovine/exam-scheduling-benchmarks',
    paper: '/papers/exam-scheduling-benchmarks.pdf'
  }
};

export default function ProjectDetail({ project, slug }) {
  if (!project) {
    return (
      <div>
        <style jsx global>{`
          body {
            background: rgba(207, 212, 224, 1);
            min-height: 100vh;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            margin: 0;
            padding: 0;
          }
        `}</style>
        <Banner />
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem 1.5rem' }}>
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <style jsx global>{`
        body {
          background: rgba(207, 212, 224, 1);
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          margin: 0;
          padding: 0;
        }
      `}</style>

      <Banner />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
        <div style={{ marginBottom: '3rem', paddingTop: '2rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '1rem',
            fontFamily: 'Georgia, serif'
          }}>
            {project.title}
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: '#4b5563',
            marginBottom: '2rem',
            fontStyle: 'italic'
          }}>
            {project.description}
          </p>

          <div style={{
            background: 'rgba(207, 212, 224, 1)',
            backdropFilter: 'blur(5px)',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Overview
            </h2>
            <p style={{
              lineHeight: '1.7',
              color: '#374151',
              marginBottom: '1.5rem'
            }}>
              {project.fullDescription}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '0.5rem'
              }}>
                Status
              </h3>
              <p style={{ color: '#4b5563', fontStyle: 'italic' }}>
                {project.status}
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '0.5rem'
              }}>
                Authors
              </h3>
              <p style={{ color: '#4b5563' }}>
                {project.authors}
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '0.5rem'
              }}>
                Technologies
              </h3>
              <div>
                {project.technologies.map((tech) => (
                  <span key={tech} style={{
                    background: 'rgba(184, 188, 197, 0.6)',
                    color: '#374151',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    display: 'inline-block',
                    margin: '0.25rem 0.5rem 0.25rem 0',
                    border: '1px solid rgba(113, 121, 139, 0.2)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(153, 168, 201, 1)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s'
                }}
              >
                📂 View Code
              </a>
              <a
                href={project.paper}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(113, 121, 139, 1)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s'
                }}
              >
                📄 Read Paper
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(projectData).map((slug) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const project = projectData[slug];

  if (!project) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      project,
      slug
    }
  };
}