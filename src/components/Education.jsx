
import React from 'react';

const educationDetails = [
  {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'Agni College of Technology, Chennai',
    period: '2022–2026',
    result: 'CGPA: 8.6'
  },
  {
    degree: 'Higher Secondary (HSC)',
    institution: 'St. Pius X Mat. Hr. Sec. School, Chennai',
    period: '2021–2022',
    result: 'Percentage: 90%'
  },
  {
    degree: 'Secondary School (SSLC)',
    institution: 'St. Pius X Mat. Hr. Sec. School, Chennai',
    period: '2019–2020',
    result: 'Percentage: 90.8%'
  }
];

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>

      <div className="education-grid">
        {educationDetails.map(({ degree, institution, period, result }) => (
          <article className="education-card" key={degree}>
            <h3>{degree}</h3>
            <p>{institution}</p>
            <p className="details">{period}</p>
            <p className="details">{result}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
