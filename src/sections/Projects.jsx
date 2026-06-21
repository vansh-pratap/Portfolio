import React, { useState } from 'react';

import cryptoImg from '../assets/images/crypto-aggregator.png';
import movieImg from '../assets/images/ai-insight-builder.png';


const projectData = [
  {
    id: 1,
    title: 'Crypto Aggregator',
    subtitle: 'High-Concurrency Data Pipeline',
    desc: 'Developed a high-concurrency Backend-for-Frontend (BFF) service to aggregate and normalize high-frequency data from multiple DEX providers. Reduced API latency to under 50ms via Redis caching and decoupled background data ingestion, utilizing Map-based deduplication logic for O(1) processing efficiency.',
    tech: 'Node.js, Redis, WebSockets, Jest',
    liveUrl: 'https://www.youtube.com/watch?v=9mPCwtwXwyk',
    githubUrl: 'https://github.com/vansh-pratap/EternaLabs-Backend',
    projectPreview: cryptoImg
  },
  {
    id: 2,
    title: 'AI Movie Insight Builder',
    subtitle: 'LLM-Powered Analytics Platform',
    desc: 'A full-stack application that analyzes and synthesizes massive sets of movie review data. Integrated Generative AI to parse audience sentiment, providing concise, actionable insights and automated summaries directly to the client interface.',
    tech: 'React, Next.js, Generative AI, MongoDB',
    liveUrl: 'https://ai-movie-insighter-mno1m6eew-vansh-prataps-projects.vercel.app/',
    githubUrl: 'https://github.com/vansh-pratap/ai-movie-insight-builder',
    projectPreview: movieImg
  },
  {
    id: 3,
    title: 'Scalable Auth REST API',
    subtitle: 'Enterprise Backend Infrastructure',
    desc: 'Architected secure and highly scalable REST APIs featuring comprehensive JWT authentication and Role-Based Access Control (RBAC). Implemented concurrent transaction engines to ensure reliable and secure data handling across distributed systems.',
    tech: 'Express, Node.js, MongoDB, JWT',
    liveUrl: '#',
    githubUrl: '#',
    projectPreview: '#'
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projectData[currentIndex];
  const displayNum = `0${currentIndex + 1}`.slice(-2);

  return (
    <section id="projects" className="showcase-section">
      <div className="showcase-header">
        <h2 className="text-gradient">My Projects</h2>
        <div className="showcase-divider"></div>
      </div>

      <div className="carousel-container">
        <button className="nav-arrow left-arrow" onClick={handlePrev}>
          &#8592;
        </button>

        <div className="carousel-content-wrapper">
          <div className="project-details">
            <div className="project-title-group">
              <span className="project-number">{displayNum}</span>
              <div>
                <h3 className="project-title">{currentProject.title}</h3>
                <span className="project-subtitle">{currentProject.subtitle}</span>
              </div>
            </div>

            <p className="project-description">{currentProject.desc}</p>

            <div className="project-tools">
              <h4>TOOLS & STACK</h4>
              <p>{currentProject.tech}</p>
            </div>

            <div className="project-actions">
              <a href={currentProject.liveUrl} target="_blank" rel="noreferrer" className="btn-live">
                View Live &#8599;
              </a>
              <a href={currentProject.githubUrl} target="_blank" rel="noreferrer" className="btn-github">
                GitHub
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="project-visual">
            <div className="image-placeholder">
              <div className="mock-image-content">
                {/* 2. Update this tag to use currentProject.projectPreview */}
                <img
                  src={currentProject.projectPreview}
                  alt={`${currentProject.title} Dashboard`}
                  className="project-image"
                />
              </div>
            </div>
          </div>
        </div>

        <button className="nav-arrow right-arrow" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Projects;