import React from 'react';
import Banner from '../components/Banner';
import ProjectGrid from '../components/ProjectGrid';

const Projects = () => {
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
        
        .projects-grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 100%;
        }
        
        .projects-grid-container > * {
          aspect-ratio: 1;
          background: rgba(207, 212, 224, 1);
          backdrop-filter: blur(5px);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          border: 1px solid rgba(113, 121, 139, 0.2);
          transition: all 0.3s ease;
        }
        
        .projects-grid-container > *:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          background: rgba(184, 188, 197, 0.5);
        }
      `}</style>

      <Banner />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
        <div className="content-container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid-container">
            <ProjectGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;