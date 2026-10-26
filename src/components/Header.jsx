
import { useState, useEffect, useCallback } from 'react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
];

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 120;
    let currentActive = 'home';

    sections.forEach((section) => {
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionBottom
      ) {
        currentActive = section.id;
      }
    });

    setActiveLink(currentActive);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    const hash = window.location.hash.substring(1);

    if (hash) {
      const targetElement = document.getElementById(hash);

      if (targetElement) {
        setActiveLink(hash);
        requestAnimationFrame(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        });
      }
    } else {
      handleScroll();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleNavLinkClick = (event, id) => {
    event.preventDefault();

    const targetElement = document.getElementById(id);

    if (!targetElement) return;

    setActiveLink(id);
    window.history.pushState(null, '', `#${id}`);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="navbar-container">
        <div className="portfolio-name">
          <a
            href="#home"
            className="portfolio-link"
            onClick={(event) => handleNavLinkClick(event, 'home')}
          >
            KEERTHANA
          </a>
        </div>

        <nav className="navbar-links" aria-label="Main navigation">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${
                activeLink === id ? 'active' : ''
              }`}
              onClick={(event) => handleNavLinkClick(event, id)}
              aria-current={activeLink === id ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
