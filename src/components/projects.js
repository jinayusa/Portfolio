// Projects.js
import React from 'react';
import styled from 'styled-components';
import { 
  Section, 
  Container, 
  LiquidBackground, 
  RightScrollIndicator, 
  DownArrow, 
  ContentSection,
  cardStyle,
  detailsStyle
} from './styles';
// Reuse your AnimatedText component (defined in your AboutMe component or a separate file)
import AnimatedText from './AnimatedText';

// Import project images (update these paths to your actual image files)
import securePixImg from '../assets/images/ProjectImages/securepix.jpg';
import imageRecognitionImg from '../assets/images/ProjectImages/imageRecognition.jpg';
import multiplayerImg from '../assets/images/ProjectImages/multiplayer.jpg';
import automatedLogAnalysisImg from '../assets/images/ProjectImages/automatedLogAnalysis.jpg';
import awsIAMImg from '../assets/images/ProjectImages/awsIAM.png';
import awsCloudSupportImg from '../assets/images/ProjectImages/awsCloudSupport.png';
import aiResumeParserImg from '../assets/images/ProjectImages/aiResumeParser.jpg';
import scalableIAMImg from '../assets/images/ProjectImages/scalableIAM.png';
import twitterAnalysisImg from '../assets/images/ProjectImages/twitterAnalysis.png';
import dreamHouseImg from '../assets/images/ProjectImages/dreamHouse.jpg';

// Styled wrapper for each project section, using a similar layout to AboutMe
const ProjectSectionWrapper = styled(ContentSection)`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: flex-start;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Reusable component for a single project section
const ProjectSection = ({ project, reverse }) => (
  <ProjectSectionWrapper reverse={reverse}>
    <div style={{ flex: 1, padding: '20px' }}>
      <AnimatedText delay="0.2s">
        <h3>{project.title}</h3>
      </AnimatedText>
      <AnimatedText delay="0.4s">
        <p>{project.introduction}</p>
      </AnimatedText>
      <AnimatedText delay="0.6s">
        <h3>Objective</h3>
        <p>{project.objective}</p>
      </AnimatedText>
      <AnimatedText delay="0.8s">
        <h3>Technologies Used</h3>
        <p>{project.technologies}</p>
      </AnimatedText>
      <AnimatedText delay="1.0s">
        <h3>Skills Gained</h3>
        <p>{project.skills}</p>
      </AnimatedText>
    </div>
    <AnimatedText delay="0.6s">
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}> {/* Center the card */}
        <div style={cardStyle}> {/* Apply cardStyle */}
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '500px', // Make image fill the card
              height: 'auto', // Maintain aspect ratio
              borderRadius: '8px 8px 0 0', // Round top corners
              objectFit: 'cover'
            }}
          />
          <div style={detailsStyle}> {/* Apply detailsStyle for image overlay */}
            {/* You can add overlay content here if needed */}
            {/* For example, a semi-transparent background and the title */}
            {/* <div style={{backgroundColor: 'rgba(0,0,0,0.5)', padding: '10px', color: 'white', borderRadius: '0 0 8px 8px'}}>
              <h3>{project.title}</h3>
            </div> */}
          </div>
        </div>
      </div>
    </AnimatedText>
  </ProjectSectionWrapper>
);

// Project data array – update these objects with your full project details
const projectsData = [
  {
    title: "SecurePix: Image Encryption and Decryption Tool",
    introduction: "A web-based application built with Django and Python that provides secure image encryption and decryption using AES.",
    objective: "Develop a secure and user-friendly tool for image encryption and decryption, ensuring data confidentiality and secure user authentication.",
    technologies: "Django, Python, HTML, CSS, JavaScript, PyCryptodome, SQLite/PostgreSQL",
    skills: "Backend development, AES encryption, secure authentication, database management, web security, deployment",
    image: securePixImg
  },
  {
    title: "Image Recognition as a Service",
    introduction: "A cloud-based face recognition system designed for real-time processing and accurate face detection using AWS, TensorFlow, and OpenCV, with a React.js dashboard for monitoring.",
    objective: "Develop a scalable and cost-efficient face recognition service with real-time insights.",
    technologies: "AWS (EC2, S3, SQS), TensorFlow, OpenCV, Node.js, React.js, PostgreSQL, Docker, Kubernetes",
    skills: "Cloud services, real-time processing, face recognition, asynchronous processing, containerization, orchestration",
    image: imageRecognitionImg
  },
  {
    title: "Multiplayer Game Development",
    introduction: "A real-time multiplayer game built using Unity and Photon PUN, with a backend hosted on Azure for matchmaking, synchronization, and scalable performance.",
    objective: "Create an engaging multiplayer game with smooth gameplay, efficient matchmaking, and high scalability.",
    technologies: ".NET, C#, Unity, Photon PUN, Azure, Azure Cosmos DB",
    skills: "Real-time game development, networking, cloud backend management, matchmaking, performance optimization",
    image: multiplayerImg
  },
  {
    title: "Automated Log Analysis System",
    introduction: "A cloud-based solution for real-time log ingestion, analysis, and anomaly detection using the ELK Stack deployed on AWS.",
    objective: "Automate log analysis to reduce downtime and speed up incident resolution.",
    technologies: "Python, ELK Stack (Elasticsearch, Logstash, Kibana), AWS (Lambda, S3, CloudWatch), Docker",
    skills: "Log analysis, automation, ELK Stack management, cloud deployment, real-time monitoring",
    image: automatedLogAnalysisImg
  },
  {
    title: "AWS IAM-Based Access Management System",
    introduction: "An enterprise-grade access management system built with Java Spring Boot and AWS services, providing fine-grained control using RBAC.",
    objective: "Provide secure authentication and authorization using role-based access control in a scalable environment.",
    technologies: "Java Spring Boot, AWS (Cognito, DynamoDB, API Gateway), RBAC, JWT, OAuth 2.0",
    skills: "Secure backend development, RBAC implementation, API security, cloud integration, microservices",
    image: awsIAMImg
  },
  {
    title: "AWS Cloud Support Tools",
    introduction: "A cloud-native monitoring and troubleshooting system integrating AWS CloudWatch, Lambda, SNS, and S3 for real-time alerts and automated issue resolution.",
    objective: "Automate issue detection and troubleshooting to reduce downtime and improve operational efficiency.",
    technologies: "AWS (CloudWatch, Lambda, SNS, S3, API Gateway, DynamoDB), Python, Docker, CloudFormation",
    skills: "Cloud monitoring, serverless automation, real-time alerting, troubleshooting, AWS integration",
    image: awsCloudSupportImg
  },
  {
    title: "AI-Powered Resume Parser",
    introduction: "A web-based tool that uses NLP to extract key information from resumes, built with Flask and React.js.",
    objective: "Automate resume data extraction to streamline the recruitment process.",
    technologies: "Flask, React.js, Python, SpaCy, PyPDF2/pdfplumber, SQLite/MongoDB, Docker",
    skills: "API development, NLP, resume parsing, database management, full-stack development, deployment",
    image: aiResumeParserImg
  },
  {
    title: "Scalable Identity & Access Management System",
    introduction: "An enterprise-level IAM solution built using Python, Go, OAuth 2.0, and JWT to implement a zero-trust security model with multi-tenancy support.",
    objective: "Provide secure, scalable authentication and authorization for multi-tenant environments.",
    technologies: "Python (FastAPI), Go, OAuth 2.0, JWT, AWS (Cognito, API Gateway, DynamoDB), Docker, Kubernetes",
    skills: "Microservices development, secure authentication, multi-tenancy, cloud orchestration, zero-trust security",
    image: scalableIAMImg
  },
  {
    title: "Twitter Analysis System",
    introduction: "A real-time sentiment analysis platform built using Java Spring Boot and NLP techniques, integrating with the Twitter API for live data and interactive visualizations.",
    objective: "Perform real-time sentiment analysis on Twitter data and deliver actionable insights via interactive dashboards.",
    technologies: "Java, Spring Boot, Twitter API, Python (TextBlob/VADER), MongoDB, Plotly/Matplotlib, Docker, Kubernetes",
    skills: "Real-time data pipelines, NLP, API integration, secure API development, interactive data visualization, containerization",
    image: twitterAnalysisImg
  },
  {
    title: "Dream House",
    introduction: "A real estate web and mobile application designed to streamline the home-buying process with property search and an EMI calculator.",
    objective: "Create a user-friendly platform that integrates financial planning tools and property customization features.",
    technologies: "Android Studio (Java, XML), HTML, CSS, JavaScript, Firebase, Payment Gateway Integration, Google Maps API",
    skills: "Mobile app development, web design, real-time database management, financial calculator integration, secure transactions",
    image: dreamHouseImg
  }
];

const Projects = () => {
  return (
    <Section id="projects">
      <LiquidBackground />
      <Container>
        {projectsData.map((project, index) => (
          <ProjectSection 
            key={index} 
            project={project} 
            reverse={index % 2 !== 0} // Alternate layout for visual variety
          />
        ))}
      </Container>
      <RightScrollIndicator>
        <DownArrow />
      </RightScrollIndicator>
    </Section>
  );
};

export default Projects;
