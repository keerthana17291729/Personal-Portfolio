import React from 'react';
import { 
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaComments, FaUsers, 
  FaHandshake, FaJs, FaReact, FaDatabase, FaGithub 
} from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa6';
import { SiNumpy, SiPandas, SiSpringboot, SiFastapi, SiScikitlearn, SiPostman } from 'react-icons/si';
import { MdScience } from "react-icons/md";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">

        {/* Python */}
        <div className="skill-item">
          <FaPython className="skill-icon" />
          <p>Python</p>
        </div>

        {/* Java */}
        <div className="skill-item">
          <FaJava className="skill-icon" />
          <p>Java</p>
        </div>

        {/* JavaScript */}
        <div className="skill-item">
          <FaJs className="skill-icon" />
          <p>JavaScript</p>
        </div>

        {/* HTML */}
        <div className="skill-item">
          <FaHtml5 className="skill-icon" />
          <p>HTML</p>
        </div>

        {/* CSS */}
        <div className="skill-item">
          <FaCss3Alt className="skill-icon" />
          <p>CSS</p>
        </div>

        {/* MySQL */}
        <div className="skill-item">
          <FaDatabase className="skill-icon" />
          <p>MySQL</p>
        </div>

        {/* Numpy */}
        <div className="skill-item">
          <SiNumpy className="skill-icon" />
          <p>NumPy</p>
        </div>

        {/* Pandas */}
        <div className="skill-item">
          <SiPandas className="skill-icon" />
          <p>Pandas</p>
        </div>

        {/* Matplotlib */}
        <div className="skill-item">
          <MdScience className="skill-icon" />
          <p>Matplotlib</p>
        </div>

        {/* Scikit-learn */}
        <div className="skill-item">
          <SiScikitlearn className="skill-icon" />
          <p>Scikit-learn</p>
        </div>

        {/* FastAPI */}
        <div className="skill-item">
          <SiFastapi className="skill-icon" />
          <p>FastAPI</p>
        </div>

        {/* Spring Boot */}
        <div className="skill-item">
          <SiSpringboot className="skill-icon" />
          <p>Spring Boot</p>
        </div>

        {/* Machine Learning */}
        <div className="skill-item">
          <MdScience className="skill-icon" />
          <p>Machine Learning</p>
        </div>

        {/* Deep Learning */}
        <div className="skill-item">
          <MdScience className="skill-icon" />
          <p>Deep Learning</p>
        </div>

        {/* GitHub */}
        <div className="skill-item">
          <FaGithub className="skill-icon" />
          <p>GitHub</p>
        </div>

        {/* Postman */}
        <div className="skill-item">
          <SiPostman className="skill-icon" />
          <p>Postman</p>
        </div>

        {/* Communication */}
        <div className="skill-item">
          <FaComments className="skill-icon" />
          <p>Communication</p>
        </div>

        {/* Leadership */}
        <div className="skill-item">
          <FaHandshake className="skill-icon" />
          <p>Leadership</p>
        </div>

        {/* Problem Solving */}
        <div className="skill-item">
          <FaLightbulb className="skill-icon" />
          <p>Problem Solving</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
