import React from 'react';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaComments, FaUsers, FaHandshake, FaJs, FaReact } from 'react-icons/fa'; // <--- ADD FaJs and FaReact here
import { FaDatabase, FaLightbulb } from 'react-icons/fa6';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        <div className="skill-item">
          <FaPython className="skill-icon" />
          <p>Python</p>
        </div>
        <div className="skill-item">
          <FaJava className="skill-icon" />
          <p>Java</p>
        </div>
        <div className="skill-item">
          <FaHtml5 className="skill-icon" />
          <p>HTML5</p>
        </div>
        <div className="skill-item">
          <FaCss3Alt className="skill-icon" />
          <p>CSS3</p>
        </div>
        <div className="skill-item">
          <FaJs className="skill-icon" /> 
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <FaReact className="skill-icon" /> 
          <p>React Js</p>
        </div>
        <div className="skill-item">
          <FaDatabase className="skill-icon" />
          <p>MySQL</p>
        </div>
        <div className="skill-item">
          <FaLightbulb className="skill-icon" />
          <p>Logical Thinking</p>
        </div>
        <div className="skill-item">
          <FaComments className="skill-icon" />
          <p>Communication</p>
        </div>
        <div className="skill-item">
          <FaUsers className="skill-icon" />
          <p>Team Collaboration</p>
        </div>
        <div className="skill-item">
          <FaHandshake className="skill-icon" />
          <p>Leadership</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;