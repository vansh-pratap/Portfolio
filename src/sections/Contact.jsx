import React from 'react';
import logo from '../assets/images/Indian_Institute_of_Technology_Delhi_Logo.png'

const Contact = () => {
  return (
    <section id="contact" className="footer-contact-section">
      
      {/* Standard Section Heading */}
      <h2 className="contact-heading">CONTACT</h2>

      <div className="footer-grid">
        
        {/* Left Column: Education (Wrapped) */}
        <div className="footer-col education-col">
          <span className="info-label">Education</span>
          <div className="edu-details">
            {/* Placeholder for the IIT Logo */}
            <div className="edu-logo-placeholder">
              <img src={logo} alt="IITD" />
            </div>
            <p className="edu-text">
              Undergrad<br />
              Indian Institute Of Technology<br />
              Delhi — Expected 2027
            </p>
          </div>
        </div>

        {/* Middle Column: Social Links */}
        <div className="footer-col social-col">
          <span className="info-label">Social</span>
          <ul className="social-links">
            <li>
              <a href="https://github.com/vansh-pratap" target="_blank" rel="noreferrer">
                GitHub <span className="arrow">↗</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vansh-pratap-singh-a59a90250/" target="_blank" rel="noreferrer">
                LinkedIn <span className="arrow">↗</span>
              </a>
            </li>
            <li>
              <a href="mailto:vanshpsingh1312@gmail.com">
                Email <span className="icon">✉</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column: Credits */}
        <div className="footer-col credits-col">
          <div className="credits-top">
            <p className="credits-text">
              Designed and Developed<br />
              by <span className="highlight-name">Vansh Singh</span>
            </p>
          </div>
          <div className="credits-bottom">
            <p className="copyright-text">© {new Date().getFullYear()}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;