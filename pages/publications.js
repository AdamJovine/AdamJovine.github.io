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
              <p style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.25rem' }}>
                <a href="https://arxiv.org/abs/2510.25799" target="_blank" rel="noopener noreferrer" style={{ color: '#1f2937' }}>
                  LISTEN to Your Preferences: An LLM Framework for Multi-Objective Selection
                </a>
              </p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', fontStyle: 'italic', marginBottom: '0.25rem' }}>arXiv:2510.25799 (2025)</p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>A. S. Jovine, T. Ye, F. Bahk, J. Wang, M. Ford, D. B. Shmoys, P. I. Frazier</p>
            </div>

            <div className="publication-item publication-published">
              <p style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.25rem' }}>
                <a href="https://doi.org/10.1287/inte.2024.0165" target="_blank" rel="noopener noreferrer" style={{ color: '#1f2937' }}>
                  Cornell University Uses Integer Programming to Optimize Final Exam Scheduling
                </a>
              </p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', fontStyle: 'italic', marginBottom: '0.25rem' }}>INFORMS Journal on Applied Analytics, 56(2):159–177</p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>T. Ye, A. S. Jovine, W. Van Osselaer, Q. Zhu, D. B. Shmoys</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publications;