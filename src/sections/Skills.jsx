import React from 'react';

const skillsData = [
  // Languages & Development
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  
  // Frameworks & Databases
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
  
  // Tools & UI
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="text-gradient section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
        Skills & Technologies
      </h2>
      
      <div className="skills-grid-container">
        {skillsData.map(skill => (
          <div key={skill.name} className="glass-card skill-card">
            <div className="skill-icon-wrapper">
              <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
            </div>
            <h4 className="skill-name">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;