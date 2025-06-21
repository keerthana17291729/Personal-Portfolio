import React from 'react';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-grid">
        <div className="certification-item">
          <FaAward className="certification-icon" />
          <h3>Data Science for Engineers</h3>
          <p>Issued by: NPTEL</p>
          <p>Date: Jul-Sep 2024</p>
          <a href="/assets/docs/certificates/Data science for engineers.pdf" target="_blank" rel="noopener noreferrer" className="btn view-cert-btn">
            View Certificate <FaExternalLinkAlt />
          </a>
        </div>
        <div className="certification-item">
          <FaAward className="certification-icon" />
          <h3>The Joy of Computing using Python</h3>
          <p>Issued by: NPTEL</p>
          <p>Date: Jan-Apr 2023</p>
          <a href="/assets/docs/certificates/python.pdf" target="_blank" rel="noopener noreferrer" className="btn view-cert-btn">
            View Certificate <FaExternalLinkAlt />
          </a>
        </div>
        <div className="certification-item">
          <FaAward className="certification-icon" />
          <h3>Java Foundations Professional Certificate by JetBrains</h3>
          <p>Issued by: LinkedIn Learning</p>
          <p>Date: Feb 2025</p>
          <a href="/assets/docs/certificates/java.pdf" target="_blank" rel="noopener noreferrer" className="btn view-cert-btn">
            View Certificate <FaExternalLinkAlt />
          </a>
        </div>
        <div className="certification-item">
          <FaAward className="certification-icon" />
          <h3>Ultimate MySQL bootcamp 2025: from Zero to Hero</h3>
          <p>Issued by: Udemy</p>
          <p>Date: May 2025</p>
          <a href="/assets/docs/certificates/mysql.pdf" target="_blank" rel="noopener noreferrer" className="btn view-cert-btn">
            View Certificate <FaExternalLinkAlt />
          </a>
        </div>
        <div className="certification-item">
          <FaAward className="certification-icon" />
          <h3>Deep Learning</h3>
          <p>Issued by: NPTEL</p>
          <p>Date: Jul-Oct 2024</p>
          <a href="/assets/docs/certificates/Deep learning.pdf" target="_blank" rel="noopener noreferrer" className="btn view-cert-btn">
            View Certificate <FaExternalLinkAlt />
          </a>
        </div>
        <div className="certification-item">
          <FaAward className="certification-icon" />
          <h3>Business Intelligence & Analytics</h3>
          <p>Issued by: NPTEL</p>
          <p>Date: Jan-Apr 2025</p>
          <a href="/assets/docs/certificates/Business Intelligence & Analytics.pdf" target="_blank" rel="noopener noreferrer" className="btn view-cert-btn">
            View Certificate <FaExternalLinkAlt />
          </a>
        </div>
        <div className="certification-item">
          <FaAward className="certification-icon" />
          <h3>Career Essentials in Software Development by Microsoft and LinkedIn</h3>
          <p>Issued by: LinkedIn Learning</p>
          <p>Date: March 2025</p>
          <a href="/assets/docs/certificates/Software Development.pdf" target="_blank" rel="noopener noreferrer" className="btn view-cert-btn">
            View Certificate <FaExternalLinkAlt />
          </a>
        </div>
        <div className="certification-item">
          <FaAward className="certification-icon" />
          <h3>Speaking Effectively</h3>
          <p>Issued by: NPTEL</p>
          <p>Date: Jan-Mar 2023</p>
          <a href="/assets/docs/certificates/Speaking effectively.pdf" target="_blank" rel="noopener noreferrer" className="btn view-cert-btn">
            View Certificate <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;