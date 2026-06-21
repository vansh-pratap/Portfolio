import React from "react";

const servicesData = [
  {
    id: 1,
    title: "UI/UX Website Design",
    desc: "Clean, user-focused layouts with clear structure, smooth navigation, and strong visual hierarchy.",
    badges: ["Modern Layouts", "Responsive Design"],
  },
  {
    id: 2,
    title: "Frontend Development",
    desc: "Responsive interfaces using HTML, CSS, and JavaScript for clean, consistent, reliable performance.",
    badges: ["Clean HTML/CSS", "Smooth Interactions"],
  },
  {
    id: 3,
    title: "Performance & Responsiveness",
    desc: "Fast, mobile-first websites optimized for speed, accessibility, and dependable performance.",
    badges: ["Speed Optimization", "Asset Efficiency"],
  },
  {
    id: 4,
    title: "WordPress Implementation",
    desc: "Lightweight WordPress setups with easy updates, fast loading, and scalable layouts.",
    badges: ["Theme Setup", "Easy Management"],
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-intro">
        <h2>Services</h2>
        <p>Designing clean scalable responsive websites</p>
      </div>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="card-badges">
              {service.badges.map((badge, idx) => (
                <span key={idx}>{badge}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
