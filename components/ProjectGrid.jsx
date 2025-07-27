// components/ProjectGrid.jsx
import React from 'react';
import { useRouter } from 'next/router';

const ProjectGrid = () => {
  const router = useRouter();

  const projects = [
    {
      slug: 'reflective-optimization',
      title: 'Reflective Optimization',
      description: 'LLM-guided scheduling with trade-off reasoning',
      status: 'NeurIPS 2025'
    },
    {
      slug: 'blade-bo',
      title: 'BLADE-BO',
      description: 'Quality diversity for exam scheduling',
      status: 'AutoML 2025'
    },
    {
      slug: 'exam-scheduling-benchmarks',
      title: 'Exam Scheduling Benchmarks',
      description: 'Distributional MIPLIB benchmarks',
      status: 'MIPLIB'
    },
    {
      slug: 'final-exam-scheduling',
      title: 'Scheduling Team',
      description: "Lead Cornell's largest undergraduate research organization. Scheduling courses, prelims, and finals.",
      status: 'IJAA'
    },

    // Add more projects as needed
  ];

  const handleProjectClick = (slug) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.slug}
          onClick={() => handleProjectClick(project.slug)}
          style={{
            aspectRatio: '1',
            background: 'rgba(207, 212, 224, 1)',
            backdropFilter: 'blur(5px)',
            borderRadius: '12px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            border: '1px solid rgba(113, 121, 139, 0.2)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            e.target.style.background = 'rgba(184, 188, 197, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
            e.target.style.background = 'rgba(207, 212, 224, 1)';
          }}
        >
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '0.5rem',
            fontFamily: 'Georgia, serif'
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
          <span style={{
            background: 'rgba(153, 168, 201, 0.7)',
            color: '#1f2937',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: '500'
          }}>
            {project.status}
          </span>
        </div>
      ))}
    </>
  );
};

export default ProjectGrid;