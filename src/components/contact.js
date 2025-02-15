import React, { useState } from 'react';
import {
  contactContainerStyle,
  contactHeadingStyle,
  contactTextStyle,
  messageFormStyle,
  inputFieldStyle,
  messageInputStyle,
  sendButtonStyle,
  socialLinksContainerStyle,
  socialLinkStyle
} from './styles';

import { FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.subject || !formData.message) {
      alert("All fields are required!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ email: '', subject: '', message: '' });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };
  
  
  return (
    <section id="contact" style={contactContainerStyle}>
      <h2 style={contactHeadingStyle}>Contact Me</h2>
      <p style={contactTextStyle}>📧 jshah86@asu.edu</p>
      <p style={contactTextStyle}>📧 jinayusa@gmail.com</p>

      <form style={messageFormStyle} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          style={inputFieldStyle}
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          style={inputFieldStyle}
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          style={messageInputStyle}
          rows="3"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" style={sendButtonStyle}>
          Send <FaPaperPlane />
        </button>
      </form>

      <div style={socialLinksContainerStyle}>
        <a href="https://github.com/jinayshah" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/jinayshah" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://www.instagram.com/jinay.shah" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
          <FaInstagram /> Instagram
        </a>
      </div>
    </section>
  );
}

export default Contact;
