import React from 'react';
import { FaCertificate, FaCogs, FaExternalLinkAlt } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-grid">
        <div className="achievement-item">
          <FaCertificate className="achievement-icon" />
          <h3>30th Topper in NPTEL Data Science for Engineers course</h3>
          <p className="achievement-year">Year: 2024</p>
          <a href="https://nptel.ac.in/courses/106106179" target="_blank" rel="noopener noreferrer" className="btn view-cert-btn achievement-view-btn">
            Visit <FaExternalLinkAlt />
          </a>
        </div>
        <div className="achievement-item">
          <FaCertificate className="achievement-icon" />
          <h3>Topper in NPTEL Deep Learning Course</h3>
          <p className="achievement-year">Year: 2024</p>
          <a href="https://nptel.ac.in/courses/106106184" target="_blank" rel="noopener noreferrer" className="btn view-cert-btn achievement-view-btn">
            Visit <FaExternalLinkAlt />
          </a>
        </div>
        <div className="achievement-item">
          <FaCogs className="achievement-icon" />
          <h3>Outstanding Achiever Award</h3>
          <p className="achievement-year">Year: 2023</p>
          <a href="/assets/images/Outstanding achiever award.jpg" target="_blank" rel="noopener noreferrer" className="btn view-cert-btn achievement-view-btn">
            View <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;