import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Fa0, FaWebAwesome, FaWebflow } from 'react-icons/fa6';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Project</h2>
      <div className="project-card">
        <img src="/assets/images/Project.png" alt="Personal Portfolio Website" className="project-image" />
        <h3>Recipe Hub Website</h3>
        <p>Developed a Recipe App which is a responsive and user-friendly web application developed using HTML, CSS, and JavaScript. It allows users to explore a variety of recipes with detailed information such as ingredients and preparation steps. The app includes a search feature for easy navigation and delivers a smooth, interactive experience across devices. This project highlights my front-end development skills and ability to build functional, visually appealing web interfaces using core web technologies.
</p>
        <div className="project-buttons-container">
          <a href="https://github.com/keerthana17291729/recipe-hub" target="_blank" rel="noopener noreferrer" className="btn project-link">
            View Code <FaGithub />
          </a>
        </div>
        <div className="project-buttons-container">
          <a href="https://recipe-hub-k.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn project-link">
            View Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;