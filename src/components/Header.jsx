import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentActive = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; 
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentActive = section.id;
        }
      });
      setActiveLink(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    const hash = window.location.hash.substring(1);
    if (hash) {
      setActiveLink(hash);
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setActiveLink(id);
    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#home" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={(e) => handleNavLinkClick(e, 'home')}>Home</a>
        <a href="#about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={(e) => handleNavLinkClick(e, 'about')}>About</a>
        <a href="#education" className={`nav-link ${activeLink === 'education' ? 'active' : ''}`} onClick={(e) => handleNavLinkClick(e, 'education')}>Education</a>
        <a href="#skills" className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} onClick={(e) => handleNavLinkClick(e, 'skills')}>Skills</a>
        <a href="#projects" className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a>
        <a href="#certifications" className={`nav-link ${activeLink === 'certifications' ? 'active' : ''}`} onClick={(e) => handleNavLinkClick(e, 'certifications')}>Certifications</a>
        <a href="#achievements" className={`nav-link ${activeLink === 'achievements' ? 'active' : ''}`} onClick={(e) => handleNavLinkClick(e, 'achievements')}>Achievements</a>
        <a href="#contact" className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;