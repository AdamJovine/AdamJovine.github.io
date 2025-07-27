// pages/index.js
import React from 'react';
import Banner from '../components/Banner';

const AboutMe = () => {
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
            About Me
          </h2>
          <div style={{
            background: 'rgba(207, 212, 224, 1)',
            backdropFilter: 'blur(5px)',
            borderRadius: '12px',
            padding: '2rem',
            lineHeight: '1.7',
            color: '#374151'
          }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              I'm a Computer Science and Operations Research student at Cornell University with a passion for
              solving complex optimization problems using cutting-edge machine learning techniques. My research
              focuses on the intersection of artificial intelligence and mathematical optimization, particularly
              in developing novel approaches for scheduling and resource allocation problems.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Currently, I'm working on innovative projects that combine Large Language Models with traditional
              optimization methods to create more intelligent and adaptive decision-making systems. My work on
              reflective optimization and quality diversity methods has been recognized at multiple conferences
              and symposiums.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Beyond research, I'm passionate about teaching and have been recognized with excellence awards
              for my work as a teaching assistant. I enjoy mentoring fellow students and making complex
              computational concepts accessible to others.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
                Technical Skills & Interests
              </h3>
              <div>
                {['Machine Learning', 'Operations Research', 'Python', 'Optimization', 'Large Language Models',
                  'Bayesian Optimization', 'Integer Programming', 'Quality Diversity', 'Scheduling Algorithms',
                  'Research', 'Teaching'].map((skill) => (
                    <span key={skill} style={{
                      background: 'rgba(184, 188, 197, 0.6)',
                      color: '#374151',
                      padding: '0.4rem 1rem',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      display: 'inline-block',
                      margin: '0.25rem 0.5rem 0.25rem 0',
                      backdropFilter: 'blur(5px)',
                      border: '1px solid rgba(113, 121, 139, 0.2)'
                    }}>
                      {skill}
                    </span>
                  ))}
              </div>
            </div>

            <a
              href="/resume.pdf"
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
                transition: 'all 0.2s',
                marginTop: '1rem'
              }}
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '1.5rem',
            paddingBottom: '0.5rem',
            borderBottom: '2px solid rgba(113, 121, 139, 0.4)',
            fontFamily: 'Georgia, serif'
          }}>
            Education
          </h2>
          <div style={{
            background: 'rgba(207, 212, 224, 1)',
            backdropFilter: 'blur(5px)',
            borderRadius: '12px',
            padding: '2rem',
            lineHeight: '1.7',
            color: '#374151'
          }}>
            <p style={{ fontWeight: '600', fontSize: '1.125rem', color: '#1f2937', marginBottom: '0.25rem' }}>
              Cornell University
            </p>
            <p style={{ color: '#4b5563', marginBottom: '0.5rem' }}>
              BS in Computer Science & Operations Research
            </p>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', fontStyle: 'italic', marginBottom: '1rem' }}>
              August 2021 – May 2025 · Magna cum Laude · Honors in OR & CS · GPA: 3.8
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Concentrated in artificial intelligence, machine learning, and mathematical optimization.
              Completed advanced coursework in algorithms, data structures, linear programming, and
              statistical learning theory. Active in research since sophomore year with publications
              in top-tier venues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;