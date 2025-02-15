// experience.js
import React from 'react';
import styled from 'styled-components';
import {
  Section,
  Container,
  ContentSection,
  cardStyle,
  detailsStyle,
  LiquidBackground,
} from './styles';
import AnimatedText from './AnimatedText';
import DecisionTheaterImage from '../assets/images/Experience/DecisionTheater.jpg';
import KiVeeImage from '../assets/images/Experience/kiveesoftech.jpg';
import KintuDesignsImage from '../assets/images/Experience/kintusdesigns.jpg';

const ExperienceSectionWrapper = styled(ContentSection)`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

const ExperienceItem = ({ experience, reverse }) => (
  <div style={{ display: 'flex', flexDirection: reverse ? 'row-reverse' : 'row', alignItems: 'flex-start', marginBottom: '60px' }}>
    <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
      <div style={cardStyle}>
        <img
          src={experience.image}
          alt={experience.company}
          style={{ width: '500px', height: 'auto', borderRadius: '8px 8px 0 0', objectFit: 'cover' }}
        />
        <div style={detailsStyle}></div>
      </div>
    </div>
    <div style={{ flex: 1, padding: '20px' }}>
      <AnimatedText delay="0.2s">
        <h3>{experience.title}</h3>
      </AnimatedText>
      <AnimatedText delay="0.4s">
        <h4>{experience.company} - {experience.period}</h4>
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
);

const experienceData = [
  {
    title: "Software Developer",
    company: "Decision Theater Network (ASU)",
    period: "June 2024 - Present",
    image: DecisionTheaterImage,
    responsibilities: [
      "Led a cross-functional team in building CuRVE, an interactive tool for analyzing Colorado River shortages, serving 2,000+ monthly users using Flask, PostgreSQL, and SQLAlchemy.",
      "Enhanced system performance by reducing query execution time by 50% through SQL profiling, optimization, and indexing, improving data retrieval and system responsiveness",
      "Designed and implemented scalable RESTful APIs with rate-limiting, caching, and authentication mechanisms, improving API response rates by 60% and ensuring high system reliability",
      "Conducted performance testing using Locust, preparing the system for a 40% traffic surge.",
    ],
    technologies: "Flask, PostgreSQL, SQLAlchemy, React.js, Jenkins, GitHub Actions",
  },
  {
    title: "Sr. Software Developer",
    company: "KiVee Softech",
    period: "June 2022 - July 2023",
    image: KiVeeImage,
    responsibilities: [
      "Developed a voice recognition application for secure banking transactions.",
      "Optimized distributed SQL queries, reducing database costs by 20%.",
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
      "Initiated and developed a machine learning-based, data-driven food recommendation chatbot, benefiting over 100,000 users and improving health outcomes for 10,000+ individuals.",
      "Designed user-friendly interfaces with Django and JavaScript, achieving a 95% user satisfaction rate.",
      "Implemented AI-powered Chatbots for customer support, reducing query resolution time by 60%.",
      "Enhanced system scalability and performance by applying algorithms and data structures.",
    ],
    technologies: "Django, JavaScript, AI Libraries, Machine Learning",
  }
];

const Experience = () => (
  <Section id="experience">
    <LiquidBackground />
    <Container>
      <ExperienceSectionWrapper>
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} reverse={index % 2 !== 0} />
        ))}
      </ExperienceSectionWrapper>
    </Container>
  </Section>
);

export default Experience;
