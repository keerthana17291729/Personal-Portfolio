
import React, { useEffect, useState } from 'react';
import {
  FaAward,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

const certifications = [
  {
    title: 'The Joy of Computing Using Python',
    issuer: 'NPTEL',
    date: 'Jan–Apr 2023',
    file: '/assets/docs/certificates/python.pdf'
  },
  {
    title: 'Java Foundations Professional Certificate',
    issuer: 'LinkedIn Learning',
    date: 'Feb 2025',
    file: '/assets/docs/certificates/java.pdf'
  },
  {
    title: 'Career Essentials in Software Development',
    issuer: 'Microsoft & LinkedIn',
    date: 'Mar 2025',
    file: '/assets/docs/certificates/Software Development.pdf'
  },
  {
    title: 'Data Science for Engineers',
    issuer: 'NPTEL · Elite + Gold',
    date: 'Jul–Sep 2024',
    file: '/assets/docs/certificates/Data science for engineers.pdf'
  },
  {
    title: 'Introduction to Machine Learning',
    issuer: 'NPTEL',
    date: 'Jul–Oct 2025',
    file: '/assets/docs/certificates/Introduction to Machine Learning.pdf'
  },
  {
    title: 'Deep Learning',
    issuer: 'NPTEL · Elite + Silver',
    date: 'Jul–Oct 2024',
    file: '/assets/docs/certificates/Deep learning.pdf'
  }
];

const Certifications = () => {
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

  const maxIndex = Math.max(0, certifications.length - visibleCount);

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  const previous = () => {
    setCurrentIndex((index) => Math.max(0, index - 1));
  };

  const next = () => {
    setCurrentIndex((index) => Math.min(maxIndex, index + 1));
  };

  const visibleCertifications = certifications.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>

      <div className="portfolio-carousel">
        <button
          type="button"
          className="carousel-arrow"
          onClick={previous}
          disabled={currentIndex === 0}
          aria-label="Show previous certifications"
          title="Previous certifications"
        >
          <FaChevronLeft />
        </button>

        <div className="portfolio-carousel-viewport" aria-live="polite">
          <div
            className="portfolio-carousel-track"
            style={{ '--carousel-visible': visibleCount }}
          >
            {visibleCertifications.map((certification) => (
              <article
                className="certification-item carousel-card"
                key={certification.title}
              >
                <FaAward className="certification-icon" />

                <h3>{certification.title}</h3>

                <p>Issued by: {certification.issuer}</p>

                <p>Date: {certification.date}</p>

                <a
                  href={certification.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn view-cert-btn"
                >
                  View Certificate <FaExternalLinkAlt />
                </a>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="carousel-arrow"
          onClick={next}
          disabled={currentIndex >= maxIndex}
          aria-label="Show next certifications"
          title="Next certifications"
        >
          <FaChevronRight />
        </button>
      </div>

      <p className="carousel-position">
        Showing {currentIndex + 1}–
        {Math.min(currentIndex + visibleCount, certifications.length)} of{' '}
        {certifications.length} certifications
      </p>
    </section>
  );
};

export default Certifications;
