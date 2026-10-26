
import React, { useEffect, useState } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 600) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 1000) {
        setVisibleCount(2);
      } else {
        setVisibleCount(2);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);

    return () => {
      window.removeEventListener('resize', updateVisibleCount);
    };
  }, []);

  const projects = [
    {
      title: 'Multispectral Crop Imaging Drone',
      image: '/assets/images/multispectral image.jpeg',
      alt: 'Multispectral Crop Imaging Drone',
      description:
        'Developed a crop-monitoring application that uses multispectral imagery and vegetation indices to support crop-health analysis. The system combines image processing, machine-learning-based classification, backend APIs, and visual analytics for agricultural monitoring.',
      tech: 'React.js · FastAPI · Python · Machine Learning',
      code: 'https://github.com/keerthana17291729/multispectral-crop-imaging-drone'
    },
    {
      title: 'Women Safety Web App',
      image: '/assets/images/women-safety.png',
      alt: 'Women Safety Web App',
      description:
        'Built a full-stack safety application that helps users contact trusted people during emergencies. It includes authentication, emergency-contact management, location-based tracking, and an SOS alert workflow.',
      tech: 'Java · Spring Boot · MySQL · REST APIs',
      code: 'https://github.com/keerthana17291729/womensafety-app'
    },
    {
      title: 'AI Assistance Chatbot',
      image: '/assets/images/ai-chatbot.png',
      alt: 'AI Assistant Chatbot',
      description:
        'Developed an AI-powered voice assistant that supports interactive conversations through an LLM, speech-to-text, and text-to-speech. The application integrates a dynamic frontend with backend APIs to provide context-aware responses.',
      tech: 'Python · FastAPI · Google Gemini API',
      code: 'https://github.com/keerthana17291729/Ai-assistant-chatbot',
      website: 'https://ai-assistant-chatbot-wdr3.onrender.com/'
    },
    {
      title: 'Recipe Hub Website',
      image: '/assets/images/Recipe-hub.png',
      alt: 'Recipe Hub Website',
      description:
        'Built a responsive recipe-browsing website where users can explore recipes, review ingredients and preparation steps, and search for dishes. The interface uses dynamic content rendering and responsive layouts for a smooth browsing experience.',
      tech: 'HTML · CSS · JavaScript',
      code: 'https://github.com/keerthana17291729/recipe-hub',
      website: 'https://recipe-hub-k.vercel.app/'
    }
  ];

  const maxIndex = Math.max(0, projects.length - visibleCount);

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  const previousProjects = () => {
    setCurrentIndex((index) => Math.max(0, index - 1));
  };

  const nextProjects = () => {
    setCurrentIndex((index) => Math.min(maxIndex, index + 1));
  };

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="portfolio-carousel">
        <button
          type="button"
          className="carousel-arrow"
          onClick={previousProjects}
          disabled={currentIndex === 0}
          aria-label="Show previous projects"
          title="Previous projects"
        >
          <FaChevronLeft />
        </button>

        <div className="portfolio-carousel-viewport" aria-live="polite">
          <div
            className="portfolio-carousel-track"
            style={{ '--carousel-visible': visibleCount }}
          >
            {projects.slice(currentIndex, currentIndex + visibleCount).map((project) => (
              <article className="project-card carousel-card" key={project.title}>
                <img
                  src={project.image}
                  alt={project.alt}
                  className="project-image"
                  loading="lazy"
                />

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <p className="project-tech">{project.tech}</p>

                <div className="project-buttons-container">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn project-link"
                  >
                    View Code <FaGithub />
                  </a>
                </div>

                {project.website && (
                  <div className="project-buttons-container">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn project-link"
                    >
                      View Website
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="carousel-arrow"
          onClick={nextProjects}
          disabled={currentIndex >= maxIndex}
          aria-label="Show next projects"
          title="Next projects"
        >
          <FaChevronRight />
        </button>
      </div>

      <p className="carousel-position">
        Showing {currentIndex + 1}–{Math.min(currentIndex + visibleCount, projects.length)} of {projects.length} projects
      </p>
    </section>
  );
};

export default Projects;
