import React from 'react';
import Link from 'next/link';

const ProjectGrid = () => {
  const projects = [
    {
      id: 'reflective-optimization',
      title: 'Reflective Optimization',
      description: 'LLM-guided trade-off reasoning for scheduling decisions',
      tech: ['Python', 'LLMs', 'Optimization']
    },
    {
      id: 'blade-bo',
      title: 'BLADE-BO',
      description: 'Quality diversity optimization for exam scheduling',
      tech: ['Bayesian Optimization', 'Machine Learning']
    },
    {
      id: 'exam-scheduling',
      title: 'Exam Scheduling',
      description: 'Integer programming approach to optimize final exam scheduling',
      tech: ['Integer Programming', 'Operations Research']
    },
    {
      id: 'miplib-benchmarks',
      title: 'MIPLIB Benchmarks',
      description: 'Distributional benchmarks for mixed-integer programming',
      tech: ['Benchmarking', 'Mathematical Optimization']
    },
    {
      id: 'research-project-5',
      title: 'Another Project',
      description: 'Description of another research project',
      tech: ['Machine Learning', 'Data Science']
    },
    {
      id: 'research-project-6',
      title: 'Final Project',
      description: 'Description of final research project',
      tech: ['Computer Science', 'Research']
    }
  ];

  return (
    <>
      {projects.map((project) => (
        <Link key={project.id} href={`/projects/${project.id}`}>
          <div style={{
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.5rem'
            }}>
              {project.title}
            </h3>
            <p style={{
              fontSize: '0.875rem',
              color: '#4b5563',
              marginBottom: '1rem',
              lineHeight: '1.4'
            }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  style={{
                    background: 'rgba(113, 121, 139, 0.8)',
                    color: 'white',
                    padding: '0.125rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProjectGrid;