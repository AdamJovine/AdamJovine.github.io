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
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '1.5rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(113, 121, 139, 0.4)',
              fontFamily: 'Georgia, serif',
            }}
          >
            About Me
          </h2>
          <div
            style={{
              background: 'rgba(207, 212, 224, 1)',
              backdropFilter: 'blur(5px)',
              borderRadius: '12px',
              padding: '2rem',
              lineHeight: '1.7',
              color: '#374151',
            }}
          >
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              I'm a Software Engineer and Researcher. I graduated from Cornell as a Computer Science and Operations Research major.
              I love solving complex optimization problems using cutting-edge machine learning techniques. My research
              focuses on the intersection of artificial intelligence and mathematical optimization, particularly
              in developing novel approaches for scheduling and resource allocation problems.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Currently, I'm working in <a href="https://people.orie.cornell.edu/pfrazier/" target="_blank" rel="noopener noreferrer">Professor Frazier's Lab</a> on projects that combine Large Language Models with traditional
              optimization methods to create more intelligent and adaptive decision-making systems. My work on
              reflective optimization and quality diversity methods has been recognized at multiple conferences
              and symposiums.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Beyond research, I'm passionate about teaching, playing the Piano, JS Bach, and cooking.
              Feel free to email me, if you would like to talk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
