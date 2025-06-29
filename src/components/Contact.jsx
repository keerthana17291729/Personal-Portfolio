import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/mjkrepqv", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus('error');
        const data = await response.json();
        console.error("Formspree error:", data);
        alert(`Failed to send message: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Network or submission error:", error);
      setStatus('error');
      alert("There was a problem sending your message. Please try again later.");
    } finally {
        if (status === 'success' || status === 'error') {
             setTimeout(() => setStatus(''), 5000);
        }
    }
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-intro">Feel free to connect with me!</p>
      <div className="contact-links">
        <a href="tel:+919150616088" className="contact-link"><FaPhone /> +91 9150616088</a>
        <a href="mailto:keerthanamurugan1729@gmail.com" className="contact-link"><FaEnvelope /> Email</a>
        <a href="https://www.linkedin.com/in/keerthana-m-7b639624b/" target="_blank" rel="noopener noreferrer" className="contact-link"><FaLinkedin /> LinkedIn</a>
        <a href="https://github.com/keerthana17291729" target="_blank" rel="noopener noreferrer" className="contact-link"><FaGithub /> GitHub</a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send me a message:</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn submit-btn" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p style={{ color: 'green', marginTop: '1rem', textAlign: 'center' }}>
            Message sent successfully! Thank you.
          </p>
        )}
        {status === 'error' && (
          <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;