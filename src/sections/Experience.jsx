import React from 'react';

const experienceData = [
    {
    id: 1,
    role: 'AI Data Annotator/Quality Analyst',
    company: 'Outlier AI',
    date: 'April 2026 - Present',
    location: 'Remote',
    details: [
      'Conducted qualitative assessments of LLM outputs across diverse prompts and domains, identifying edge cases, factual errors, and reasoning flaws in AI model responses'
    ]
  },
  {
    id: 2,
    role: 'Backend Engineer',
    company: 'WorthWell Papers Pvt. Ltd.',
    date: 'Nov 2024 - Feb 2025',
    location: 'New Delhi, India',
    details: [
      'Developed real-time data pipelines using Node.js, WebSockets, and Redis to process high-frequency market data.',
      'Architected secure REST APIs with JWT authentication and RBAC, implementing a concurrent trade-clearing engine for reliable transaction handling.'
    ]
  },
  {
    id: 3,
    role: 'Fundraising Intern',
    company: 'Basti Ki Pathshala',
    date: 'May 2024 - June 2024',
    location: 'New Delhi, India',
    details: [
      'Strategized and executed fundraising campaigns to support educational initiatives for underprivileged children.',
      'Managed stakeholder communications, coordinating with reporting managers to streamline fundraising operations.'
    ]
  },
  {
    id: 4,
    role: 'Smart Indian Hackathon Finalist',
    company: 'Hackathon by Govt. of India',
    date: '2023',
    location: 'New Delhi, India',
    details: [
      'Selected to the zonal round of Smart India Hackathon (SIH) 2023 for developing an Automatic Drug Dispenser based on digital prescriptions. Led the product design and CAD development efforts, collaborating with a multidisciplinary team to rapidly prototype an innovative healthcare solution under a national-level competitive environment.'
    ]
  },
  {
    id: 5,
    role: 'Undergraduate',
    company: 'Indian Institue of Technology Delhi',
    date: '2022',
    location: 'New Delhi, India',
    details: [
      'My journey began at IIT Delhi, where I built a strong foundation in engineering, problem-solving, and software development. Over time, I evolved into a full-stack developer, developing a keen interest in modern web technologies, applied AI, machine learning, and intelligent systems that solve real-world problems.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2 className="contact-heading">My Journey & Milestones</h2>
      </div>

      <div className="timeline-container">
        {experienceData.map((exp) => (
          <div key={exp.id} className="timeline-item">

            <div className="timeline-node"></div>
            

            <div className="glass-card timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="role-title">{exp.role}</h3>
                  <h4 className="company-name">{exp.company}</h4>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-date">{exp.date}</span>
                  <span className="timeline-location">{exp.location}</span>
                </div>
              </div>
              
              <ul className="timeline-details">
                {exp.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;