// pages/projects/index.js (Main projects page)
import React from 'react';
import Banner from '../../components/Banner';
import ProjectGrid from '../../components/ProjectGrid';

export default function Projects() {
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
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '1.5rem',
            paddingBottom: '0.5rem',
            borderBottom: '2px solid rgba(113, 121, 139, 0.4)',
            fontFamily: 'Georgia, serif'
          }}>
            Projects
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            maxWidth: '100%'
          }}>
            <ProjectGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
