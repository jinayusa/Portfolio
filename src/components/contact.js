import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaPaperPlane, FaEnvelope, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';
import contactImage from '../assets/images/Others/contact-image.jpg'; // Replace with your image path

// Styled Components
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 80px 20px;
  background-color: #2a2d3e;
  color: #fff;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 10px;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  margin-right: 30px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const Sidebar = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const ContactInfo = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #f2a365;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #f2a365;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  &:hover {
    color: #eb5e28;
  }
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: #f2a365;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid #f2a365;
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;

  &:focus {
    border-color: #e07a5f;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  font-size: 1rem;
  height: 150px;
  border-radius: 8px;
  border: 2px solid #f2a365;
  outline: none;
  resize: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;

  &:focus {
    border-color: #e07a5f;
  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #e07a5f;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #eb5e28;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;

  img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

function Contact() {
  const [formData, setFormData] = useState({ email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    setFormData({ email: '', subject: '', message: '' });
  };

  return (
    <Container>
      <Sidebar>
        <ImageContainer>
          <img src={contactImage} alt="Contact" />
        </ImageContainer>
        <ContactInfo>
          <FaEnvelope /> Email: jshah86@asu.edu
        </ContactInfo>
        <ContactInfo>
          <FaPhone /> Number: +1 (203) 512-6561
        </ContactInfo>
        <SocialLinks>
          <SocialIcon href="https://github.com/jinayusa" target="_blank">
            <FaGithub /> GitHub
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/jinay24" target="_blank">
            <FaLinkedin /> LinkedIn
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/_jinshah_" target="_blank">
            <FaInstagram /> Instagram
          </SocialIcon>
        </SocialLinks>
      </Sidebar>
      <FormContainer>
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
          <Button type="submit">
            Send <FaPaperPlane />
          </Button>
        </ContactForm>
      </FormContainer>
    </Container>
  );
}

export default Contact;