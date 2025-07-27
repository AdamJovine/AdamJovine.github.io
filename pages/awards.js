import React from 'react';
import Banner from '../components/Banner';

const Awards = () => {
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
        
        .awards-content {
          background: rgba(207, 212, 224, 1);
          backdrop-filter: blur(5px);
          border-radius: 12px;
          padding: 1.5rem;
        }
        
        .award-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(184, 188, 197, 0.3);
          backdrop-filter: blur(5px);
          border-radius: 8px;
          border-left: 4px solid #10b981;
        }
        
        .award-bullet {
          color: #10b981;
          margin-right: 0.75rem;
          margin-top: 0.25rem;
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .award-content {
          flex: 1;
        }
        
        .award-title {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.25rem;
        }
        
        .award-description {
          color: #4b5563;
          font-size: 0.95rem;
        }
      `}</style>

      <Banner />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
        <div className="content-container">
          <h2 className="section-title">Awards & Recognition</h2>
          <div className="awards-content" style={{ color: '#374151' }}>
            <div className="award-item">
              <span className="award-bullet">🏆</span>
              <div className="award-content">
                <div className="award-title">1st Place, Cornell Undergraduate Research Board (CURB) Symposium</div>
                <div className="award-description">2024 · Also received 2nd Place in 2023 and 2025</div>
              </div>
            </div>

            <div className="award-item">
              <span className="award-bullet">👨‍🏫</span>
              <div className="award-content">
                <div className="award-title">Teaching Excellence Award</div>
                <div className="award-description">Cornell TA of the Year – Spring 2025</div>
              </div>
            </div>

            <div className="award-item">
              <span className="award-bullet">🔬</span>
              <div className="award-content">
                <div className="award-title">CRA Outstanding Undergraduate Researcher</div>
                <div className="award-description">Computing Research Association – 2024</div>
              </div>
            </div>

            <div className="award-item">
              <span className="award-bullet">📊</span>
              <div className="award-content">
                <div className="award-title">Mogensen Research Excellence Award</div>
                <div className="award-description">Omega Rho Honors Scholar</div>
              </div>
            </div>

            <div className="award-item">
              <span className="award-bullet">📚</span>
              <div className="award-content">
                <div className="award-title">Dean's List</div>
                <div className="award-description">Cornell University – Spring 2021 to Spring 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;