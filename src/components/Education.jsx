import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        <div className="education-card">
          <h3>Bachelor of Technology in Artificial Intelligence and Data Science</h3>
          <p>Agni College of Technology, Thalambur OMR road</p>
          <p className="details">Expected Graduation: 2026</p>
          <p className="details">CGPA: 8.74 (till 5th Semester)</p>
        </div>
        <div className="education-card">
          <h3>Higher Secondary Course (12th Grade)</h3>
          <p>St. Pius X Mat. Hr. Sec. School, Chennai</p>
          <p className="details">Year of Completion: 2022</p>
          <p className="details">Percentage: 90%</p>
        </div>
        <div className="education-card">
          <h3>Secondary School Course (SSLC / 10th Grade)</h3>
          <p>St. Pius X Mat. Hr. Sec. School, Chennai</p>
          <p className="details">Year of Completion: 2020</p>
          <p className="details">Percentage: 90.8%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;