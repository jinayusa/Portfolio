import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import styled from 'styled-components';

// Styled Components
const Section = styled.section`
  width: 1470px;
  height: 800px;
  padding: 80px 20px;
  background-color: #2a2d3e;
  color: #fff;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Heading = styled.h2`
  margin-top: 30px;
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2a365;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 450px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 12px;
  width: 100%;
  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid #f2a365;
  outline: none;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #e07a5f;
  }
`;

const Textarea = styled.textarea`
  ${Input}
  resize: none;
  height: 120px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #e07a5f;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eb5e28;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  font-size: 1.8rem;
  color: #f2a365;
  transition: color 0.3s;

  &:hover {
    color: #eb5e28;
  }
`;

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
    alert("Your message has been sent!");
    setFormData({ email: '', subject: '', message: '' });
  };

  return (
    <Section>
      <Heading>Contact Me</Heading>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send <FaPaperPlane /></Button>
      </ContactForm>
      <SocialLinks>
        <SocialIcon href="https://github.com/jinayusa" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/jinay2" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/_jinshah_" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIcon>
      </SocialLinks>
    </Section>
  );
}

export default Contact;
