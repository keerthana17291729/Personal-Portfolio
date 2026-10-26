
import React, { useEffect, useState } from 'react';
import {
  FaBriefcase,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

const experiences = [
  {
    role: 'Research & Development Intern',
    company: 'Garuda Aerospace Ltd.',
    period: 'Feb–Mar 2026',
    details:
      'Contributed to UAV-based multispectral crop-imaging and agricultural monitoring workflows. Worked with vegetation-index analysis, agricultural imagery, image processing, and data-processing workflows for crop-health assessment.'
  },
  {
    role: 'Data Science Intern',
    company: 'Lokey Future Technologies',
    period: 'Oct 2023–Apr 2024',
    details:
      'Worked on data preprocessing, data cleaning, and exploratory data analysis using Python-based workflows. Also supported task automation and analysis activities to improve workflow efficiency.'
  },
  {
    role: 'Machine Learning & Web Development Intern',
    company: 'Tamizhan Skills',
    period: 'Dec 2025',
    details:
      'Worked with Python-based machine-learning concepts and web-application features. Assisted with debugging, testing, application improvements, and integration of frontend and backend functionality.'
  }
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 600) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 1000) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);

    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, experiences.length - visibleCount);

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  const previous = () => {
    setCurrentIndex((index) => Math.max(0, index - 1));
  };

  const next = () => {
    setCurrentIndex((index) => Math.min(maxIndex, index + 1));
  };

  const visibleExperiences = experiences.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>

      <div className="portfolio-carousel">
        <button
          type="button"
          className="carousel-arrow"
          onClick={previous}
          disabled={currentIndex === 0}
          aria-label="Show previous experience"
          title="Previous experience"
        >
          <FaChevronLeft />
        </button>

        <div className="portfolio-carousel-viewport" aria-live="polite">
          <div
            className="portfolio-carousel-track"
            style={{ '--carousel-visible': visibleCount }}
          >
            {visibleExperiences.map((experience) => (
              <article
                className="experience-card carousel-card"
                key={experience.company}
              >
                <FaBriefcase className="experience-icon" />

                <h3>{experience.role}</h3>

                <p className="experience-company">
                  {experience.company}
                </p>

                <p className="experience-period">
                  {experience.period}
                </p>

                <p className="experience-details">
                  {experience.details}
                </p>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="carousel-arrow"
          onClick={next}
          disabled={currentIndex >= maxIndex}
          aria-label="Show next experience"
          title="Next experience"
        >
          <FaChevronRight />
        </button>
      </div>

      <p className="carousel-position">
        Showing {currentIndex + 1}–
        {Math.min(currentIndex + visibleCount, experiences.length)} of{' '}
        {experiences.length} experiences
      </p>
    </section>
  );
};

export default Experience;
