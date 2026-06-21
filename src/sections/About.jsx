import React from 'react';
import myAvatar from '../assets/images/final.png';

const About = () => {
  return (
    <section id="about" className="about-fullscreen-section">
      <div className="about-grid-container">
        
        {/* Left: 3D Avatar Area */}
        <div className="avatar-column">
          <div className="avatar-wrapper">
            <div className="avatar-glow"></div>
            <img src={myAvatar} alt="Vansh Singh Avatar" className="avatar-image" />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="text-column">
          <h2 className="about-heading" style={{ color: 'var(--glow-blue)', letterSpacing: '4px', marginBottom: '20px' }}>
            ABOUT ME
          </h2>
          <p className="about-body" style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#a3a3b8' }}>
            I am currently pursuing my B.Tech at IIT Delhi, with a strong foundation in building scalable systems. I love turning complex challenges into robust, future-ready web solutions and exploring the exciting intersections of applied machine learning and quantum computing.
          </p>
          {/* <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-gradient" style={{ display: 'inline-block', marginTop: '30px', textDecoration: 'none' }}>
            View Resume 📄
          </a> */}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-premium-gradient">
            <span>View Resume</span>
            {/* Download Icon SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;