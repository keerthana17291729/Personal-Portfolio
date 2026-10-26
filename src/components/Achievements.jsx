
import React, { useEffect, useState } from 'react';
import {
  FaCode,
  FaCertificate,
  FaAward,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

const Achievements = () => {
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

    return () => {
      window.removeEventListener('resize', updateVisibleCount);
    };
  }, []);

  const achievements = [
    {
      title: 'LeetCode Problem Solving',
      description: 'Solved 100+ problems in LeetCode',
      year: '2026',
      icon: <FaCode />,
      link: 'https://leetcode.com/u/keerthanamurugan1729/',
      label: 'View',
      type: 'profile'
    },
    {
      title: 'NPTEL Domain Scholar in Data Science',
      description: '',
      year: '2025',
      icon: <FaCertificate />,
      link: '/assets/docs/certificates/Data Science Domain Certificate.jpg',
      label: 'View',
      type: 'certificate'
    },
    {
      title: '30th Topper in NPTEL Data Science for Engineers',
      description: '',
      year: '2024 · Elite + Gold',
      icon: <FaCertificate />,
      link: 'https://nptel.ac.in/courses/106106179',
      label: 'View',
      type: 'course'
    },
    {
      title: 'Topper in NPTEL Deep Learning',
      description: '',
      year: '2024 · Elite + Silver',
      icon: <FaCertificate />,
      link: 'https://nptel.ac.in/courses/106106184',
      label: 'View',
      type: 'course'
    },
    {
      title: 'Outstanding Achiever Award',
      description: '',
      year: '2023',
      icon: <FaAward />,
      link: '/assets/images/Outstanding achiever award.jpg',
      label: 'View',
      type: 'certificate'
    }
  ];

  const maxIndex = Math.max(0, achievements.length - visibleCount);

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  const previousAchievements = () => {
    setCurrentIndex((index) => Math.max(0, index - 1));
  };

  const nextAchievements = () => {
    setCurrentIndex((index) => Math.min(maxIndex, index + 1));
  };

  return (
    <section id="achievements" className="section">
      <h2 className="section-title">Achievements</h2>

      <div className="portfolio-carousel">
        <button
          type="button"
          className="carousel-arrow"
          onClick={previousAchievements}
          disabled={currentIndex === 0}
          aria-label="Show previous achievements"
          title="Previous achievements"
        >
          <FaChevronLeft />
        </button>

        <div className="portfolio-carousel-viewport" aria-live="polite">
          <div
            className="portfolio-carousel-track"
            style={{ '--carousel-visible': visibleCount }}
          >
            {achievements
              .slice(currentIndex, currentIndex + visibleCount)
              .map((achievement) => (
                <article className="achievement-item carousel-card" key={achievement.title}>
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>

                  <h3>{achievement.title}</h3>

                  {achievement.description && (
                    <p className="achievement-description">
                      {achievement.description}
                    </p>
                  )}

                  <p className="achievement-year">{achievement.year}</p>

                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn view-cert-btn achievement-view-btn"
                  >
                    {achievement.label} <FaExternalLinkAlt />
                  </a>
                </article>
              ))}
          </div>
        </div>

        <button
          type="button"
          className="carousel-arrow"
          onClick={nextAchievements}
          disabled={currentIndex >= maxIndex}
          aria-label="Show next achievements"
          title="Next achievements"
        >
          <FaChevronRight />
        </button>
      </div>

      <p className="carousel-position">
        Showing {currentIndex + 1}–{Math.min(currentIndex + visibleCount, achievements.length)} of {achievements.length} achievements
      </p>
    </section>
  );
};

export default Achievements;
