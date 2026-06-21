import React from 'react';
import myLogo from '../assets/images/logo.png'

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        

        <a href="#home" className="logo-link">
          <img src={myLogo} alt="VS Logo" className="nav-logo" />
        </a>
        
        <nav className="main-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
        <a href="#contact" className="btn-outline">
          Hire Me
        </a>
        
      </div>
    </header>
  );
};

export default Header;