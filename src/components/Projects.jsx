import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      {/* PROJECT 1 – Women Safety Web App */}
      <div className="project-card">
        <img 
          src="/assets/images/women-safety.png" 
          alt="Women Safety Web App" 
          className="project-image"
        />
        <h3>Women Safety Web App</h3>
        <p>
          Built a full-stack safety application designed to help women quickly reach
          trusted contacts during emergencies. Includes secure authentication,
          real-time location sharing, and a one-tap SOS alert that instantly sends 
          the user’s live location to emergency contacts.
        </p>

        <div className="project-buttons-container">
          <a 
            href="https://github.com/keerthana17291729/womensafety-app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn project-link"
          >
            View Code <FaGithub />
          </a>
        </div>
      </div>

      {/* PROJECT 2 – AI Assistance Chatbot */}
      <div className="project-card">
        <img 
          src="/assets/images/ai-chatbot.png"
          alt="AI Assistance Chatbot"
          className="project-image"
        />
        <h3>AI Assistance Chatbot</h3>
        <p>
          Developed an AI-powered voice assistant using Google Gemini LLM, 
          real-time speech-to-text, and natural text-to-speech. Built with FastAPI 
          and a responsive frontend, it delivers fast, context-aware responses and 
          fully interactive conversations.
        </p>

        <div className="project-buttons-container">
          <a 
            href="https://github.com/keerthana17291729/Ai-assistant-chatbot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn project-link"
          >
            View Code <FaGithub />
          </a>
        </div>

        <div className="project-buttons-container">
          <a 
            href="https://ai-assistant-chatbot-wdr3.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn project-link"
          >
            View Website
          </a>
        </div>
      </div>

      {/* PROJECT 3 – Recipe Hub Website */}
      <div className="project-card">
        <img 
          src="/assets/images/Recipe-hub.png" 
          alt="Recipe Hub Website"
          className="project-image"
        />
        <h3>Recipe Hub Website</h3>
        <p>
          Developed a responsive and user-friendly recipe browsing website using HTML, 
          CSS, and JavaScript. Users can view recipes, ingredients, preparation steps, 
          and search for dishes using the integrated search function.
        </p>

        <div className="project-buttons-container">
          <a 
            href="https://github.com/keerthana17291729/recipe-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="btn project-link"
          >
            View Code <FaGithub />
          </a>
        </div>

        <div className="project-buttons-container">
          <a 
            href="https://recipe-hub-k.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn project-link"
          >
            View Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
