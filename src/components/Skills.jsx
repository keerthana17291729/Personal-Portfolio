import React from 'react';
import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaReact
} from 'react-icons/fa';
import { SiFastapi, SiSpringboot } from 'react-icons/si';
import { MdScience, MdPsychology, MdAccountTree } from 'react-icons/md';
import { GrGithub } from 'react-icons/gr';
import { BiCloud } from 'react-icons/bi';
import { GiBrain } from 'react-icons/gi';

const skills = [
  { label: 'Python', Icon: FaPython },
  { label: 'Java', Icon: FaJava },
  { label: 'JavaScript', Icon: FaJs },
  { label: 'React.js', Icon: FaReact },
  { label: 'HTML', Icon: FaHtml5 },
  { label: 'CSS', Icon: FaCss3Alt },
  { label: 'FastAPI', Icon: SiFastapi },
  { label: 'Spring Boot', Icon: SiSpringboot },
  { label: 'MySQL', Icon: FaDatabase },
  { label: 'Data Science', Icon: MdScience },
  { label: 'Machine Learning', Icon: MdPsychology },
  { label: 'Deep Learning', Icon: GiBrain },
  { label: 'Data Structures & Algorithms', Icon: MdAccountTree },
  { label: 'Git & GitHub', Icon: GrGithub },
  { label: 'Cloud & DevOps', Icon: BiCloud }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map(({ label, Icon }) => (
          <div className="skill-item" key={label}>
            <Icon className="skill-icon" aria-hidden="true" />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
