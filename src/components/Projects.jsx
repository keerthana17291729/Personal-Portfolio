import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="project-card">
        <img src="/assets/images/Project.png" alt="Personal Portfolio Website" className="project-image" />
        <h3>Personal Portfolio Website</h3>
        <p>Developed this responsive personal portfolio website from scratch using **HTML, CSS, and JavaScript**. This project showcases my front-end development skills, including **layout design, styling with 2D-like effects, responsiveness, and interactive elements**. It serves as a central hub for my resume, skills, and other projects.</p>
        <div className="project-buttons-container">
          <a href="https://github.com/keerthana17291729/Personal-Portfolio" target="_blank" rel="noopener noreferrer" className="btn project-link">
            View Code <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;