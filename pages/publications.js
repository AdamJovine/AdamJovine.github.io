import React from 'react';
import Banner from '../components/Banner';

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
            <div className="publication-item">
              <p style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.25rem' }}>Reflective Optimization</p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', fontStyle: 'italic', marginBottom: '0.25rem' }}>(in submission to NeurIPS 2025)</p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.25rem' }}>A. Jovine, P. Frazier, D. Shmoys, T. Ye</p>
              <p style={{ fontSize: '0.875rem' }}>Enhancing scheduling decisions with LLM‑guided trade‑off reasoning.</p>
            </div>

            <div className="publication-item">
              <p style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.25rem' }}>BLADE‑BO</p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', fontStyle: 'italic', marginBottom: '0.25rem' }}>(in submission to AutoML 2025)</p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.25rem' }}>A. Jovine, P. Frazier, D. Shmoys, T. Ye</p>
              <p style={{ fontSize: '0.875rem' }}>Quality diversity optimization for exam scheduling.</p>
            </div>

            <div className="publication-item">
              <p style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.25rem' }}>Exam Scheduling Benchmarking for IP‑ML</p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', fontStyle: 'italic', marginBottom: '0.25rem' }}>(in submission to MIPLIB)</p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.25rem' }}>T. Ye, A. Jovine</p>
              <p style={{ fontSize: '0.875rem' }}>Distributional MIPLIB benchmarks.</p>
            </div>

            <div className="publication-item publication-published">
              <p style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.25rem' }}>Integer Programming to Optimize Final Exam Scheduling</p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', fontStyle: 'italic', marginBottom: '0.25rem' }}>(INFORMS IJAA 2025)</p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>T. Ye, A. Jovine, W. Van Osselaer, Q. Zhu, D. Shmoys.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publications;