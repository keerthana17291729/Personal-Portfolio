import React from 'react';
import { FaDownload } from 'react-icons/fa'; 

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="profile-picture-container">
          <img src="/assets/images/Keerthana image 2.jpg" alt="Your Picture" className="profile-picture" />
        </div>
        <h1>Hi, I'm <span className="highlight">KEERTHANA</span></h1>
        <p className="tagline">A passionate Student dedicated to Front end web development.</p>
        <a href="/assets/docs/Resume Keerthana M.pdf" download className="btn download-cv-btn">
          <FaDownload /> Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;