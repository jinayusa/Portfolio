// experience.js
import React from 'react';
import styled from 'styled-components';
import {
  Section,
  Container,
  LiquidBackground,
} from './styles';
import AnimatedText from './AnimatedText';
import DecisionTheaterImage from '../assets/images/Experience/DecisionTheater.jpg';
import KiVeeImage from '../assets/images/Experience/kiveesoftech.jpg';
import KintuDesignsImage from '../assets/images/Experience/kintusdesigns.jpg';


const experienceData = [
  {
    title: "Software Developer",
    company: "Decision Theater Network (ASU)",
    period: "June 2024 - Present",
    image: DecisionTheaterImage,
    responsibilities: [
      "Led a team to develop CuRVE, serving 2,000+ users monthly.",
      "Optimized queries, reducing execution time by 50%.",
      "Implemented scalable RESTful APIs with security measures.",
      "Conducted performance testing with Locust for traffic surge readiness.",
    ],
    technologies: "Flask, PostgreSQL, SQLAlchemy, React.js, Jenkins, GitHub Actions",
  },
  {
    title: "Sr. Software Developer",
    company: "KiVee Softech",
    period: "June 2022 - July 2023",
    image: KiVeeImage,
    responsibilities: [
      "Developed a voice recognition application for secure banking.",
      "Optimized distributed SQL queries, reducing costs by 20%.",
      "Mentored junior developers and fostered team collaboration.",
    ],
    technologies: "Python, AI Libraries, Distributed SQL, Cloud APIs",
  },
  {
    title: "Software Developer",
    company: "Kintu Designs Pvt.",
    period: "February 2021 - January 2022",
    image: KintuDesignsImage,
    responsibilities: [
      "Developed a data-driven food recommendation chatbot with ML.",
      "Achieved 95% user satisfaction through intuitive interfaces.",
      "Implemented AI-powered customer support chatbots.",
      "Enhanced system scalability through optimized algorithms.",
    ],
    technologies: "Django, JavaScript, AI Libraries, Machine Learning",
  }
];
const MacWindow = styled.div`
  border-radius: 12px;
  border: 1px solid #ccc;
  background-color: #f7f7f7;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  margin-bottom: 40px;
`;

const MacTitleBar = styled.div`
  height: 30px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 6px;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const ExperienceItem = ({ experience, reverse }) => (
  <MacWindow>
    <MacTitleBar>
      <Circle color="#ff5f56" />
      <Circle color="#ffbd2e" />
      <Circle color="#27c93f" />
    </MacTitleBar>
    <div style={{ display: 'flex', padding: '20px' }}>
      <img
        src={experience.image}
        alt={experience.company}
        style={{ width: '120px', height: '120px', objectFit: 'contain', marginRight: '20px' }}
      />
      <div>
        <AnimatedText delay="0.2s">
          <h2>{experience.title}</h2>
        </AnimatedText>
        <AnimatedText delay="0.4s">
          <h4>{experience.company} — {experience.period}</h4>
        </AnimatedText>
        <AnimatedText delay="0.6s">
          <ul>
            {experience.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </AnimatedText>
        <AnimatedText delay="0.8s">
          <p><strong>Technologies:</strong> {experience.technologies}</p>
        </AnimatedText>
      </div>
    </div>
  </MacWindow>
);

const Experience = () => (
  <Section id="experience">
    <LiquidBackground />
    <Container>
      {experienceData.map((exp, index) => (
        <ExperienceItem key={index} experience={exp} reverse={index % 2 !== 0} />
      ))}
    </Container>
  </Section>
);

export default Experience;
