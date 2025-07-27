// components/Banner.jsx
import React from 'react';
import { useRouter } from 'next/router';

const Banner = () => {
  const router = useRouter();

  const handleNavigation = (page) => {
    window.location.href = `/${page}/`;
  };

  return (
    <div style={{
      width: '100%',
      height: '350px',
      marginBottom: '2rem',
      background: 'linear-gradient(transparent, transparent), url(/images/banner.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Top content area */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',
        flex: 1
      }}>
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: '4px solid white',
          backgroundImage: 'url(/images/profile.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginRight: '2rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
        }}>
        </div>
        <div style={{ color: 'white', flex: 1 }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            fontFamily: 'Georgia, serif',
            marginBottom: '0.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            margin: '0 0 0.5rem 0'
          }}>
            Adam Shafik Jovine
          </h1>
          <div style={{
            fontSize: '1.25rem',
            fontWeight: '300',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            New York, New York ⋄ <a href="mailto:asj53@cornell.edu" style={{ color: 'white', textDecoration: 'underline' }}>asj53@cornell.edu</a>
          </div>
        </div>
      </div>

      {/* Navigation Buttons - flush with bottom */}
      <div style={{
        display: 'flex',
        height: '80px'
      }}>
        {/* Navigation Buttons */}
        <div style={{ display: 'flex', flex: 1 }}>
          {['about-me', 'projects', 'publications', 'awards'].map((page, index) => (
            <React.Fragment key={page}>
              <button
                onClick={() => handleNavigation(page)}
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
                }}
              >
                {page.replace('-', ' ')}
              </button>
              {index < 3 && (
                <div style={{
                  width: '2px',
                  backgroundColor: 'white',
                  opacity: 0.6
                }} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Separator */}
        <div style={{
          width: '2px',
          backgroundColor: 'white',
          opacity: 0.6
        }} />

        {/* Social Links */}
        <div style={{ display: 'flex' }}>
          <a
            href="https://www.linkedin.com/in/adam-jovine-b4296a1a4/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '120px',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              border: 'none',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: '500',
              cursor: 'pointer',
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 119, 181, 0.6)'; // LinkedIn blue
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
            }}
          >
            LinkedIn
          </a>

          <div style={{
            width: '2px',
            backgroundColor: 'white',
            opacity: 0.6
          }} />

          <a
            href="https://github.com/AdamJovine"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '120px',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              border: 'none',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: '500',
              cursor: 'pointer',
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(88, 96, 105, 0.6)'; // GitHub gray
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
            }}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;