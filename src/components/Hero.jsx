import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="profile-picture-container">
          <img
            src="/assets/images/Keerthana image1.png"
            alt="Keerthana"
            className="profile-picture"
          />
        </div>
        <h1>Hi, I'm <span className="highlight">KEERTHANA</span></h1>
        <p className="tagline">
          AI & Software Development | Web Applications | Machine Learning
        </p>
        <a
          href="/assets/docs/Resume Keerthana M.pdf"
          download
          className="btn download-cv-btn"
        >
          <FaDownload /> Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
