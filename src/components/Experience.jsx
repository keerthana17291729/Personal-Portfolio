import React from 'react';
import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>

      <div className="experience-card">
        <FaBriefcase className="experience-icon" />

        <h3>Data Science & Analytics Intern</h3>
        <p className="experience-company">Lokey Future Technology</p>

        <p className="experience-details">
          Performed data cleaning, preprocessing, and feature engineering using Pandas and NumPy. 
          Conducted exploratory data analysis using Matplotlib and Seaborn to identify important 
          trends and patterns for decision-making.
        </p>

        <a 
          href="/assets/docs/certificates/Lokey internship certicificate.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="btn view-cert-btn"
        >
          View Certificate <FaExternalLinkAlt />
        </a>
      </div>
    </section>
  );
};

export default Experience;
