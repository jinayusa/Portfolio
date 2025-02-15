import React, { useState, useEffect } from 'react';
import Header from './header'; // Import Header
import Contact from './contact';
import {
  containerStyle,
  textContainerStyle,
  skillsContainerStyle,
  skillCategoryStyle,
  skillGridStyle,
  skillItemStyle,
  skillImageStyle,
  infiniteScrollAnimation,
  globalSmoothScroll,
  slowScrollAnimation,
  homePageMainContainer,
  RightScrollIndicator,
  DownArrow,

} from './styles'; // Import styles

import { createGlobalStyle } from 'styled-components';
// Inject infinite scroll animation globally
import AnimatedMonitor from './AnimatedMonitor'; // Import the component

// Import Skill Icons
import pythonLogo from '../assets/images/Logo/languages/Python.jpg';

import javascriptLogo from '../assets/images/Logo/languages/JavaScript.png';
import javaLogo from '../assets/images/Logo/languages/Java.jpg';
import cLogo from '../assets/images/Logo/languages/C.png';
import cppLogo from '../assets/images/Logo/languages/ISO.jpg';
import sqlLogo from '../assets/images/Logo/languages/MySQL.jpg';
import rustLogo from '../assets/images/Logo/languages/Rust.jpg';
import goLogo from '../assets/images/Logo/languages/Go.jpg';
import csharpLogo from '../assets/images/Logo/languages/Csharp.jpg';
import typescriptLogo from '../assets/images/Logo/languages/Typescript.jpg';

// AI & ML Icons
import tensorflowLogo from '../assets/images/Logo/ai_ml/Tensorflow.jpg';
import pytorchLogo from '../assets/images/Logo/ai_ml/PyTorch.jpg';
import kerasLogo from '../assets/images/Logo/ai_ml/Keras.jpg';
// import huggingfaceLogo from '../assets/images/Logo/ai_ml/HuggingFace.jpg';
import opencvLogo from '../assets/images/Logo/ai_ml/OpenCV.jpg';
import sklearnLogo from '../assets/images/Logo/ai_ml/Scikitjpg.jpg';
// import nltkLogo from '../assets/images/Logo/ai_ml/NLTK.jpg';
import Pandas from '../assets/images/Logo/ai_ml/Pandas.jpg';
import Matplotlib from '../assets/images/Logo/ai_ml/Matplotlib.jpg';
import NumPy from '../assets/images/Logo/ai_ml/NumPy.jpg';
import spacyLogo from '../assets/images/Logo/ai_ml/SCIPY.jpg';

// Software
import Leaflet from '../assets/images/Logo/software/Leaflet.png';
import Django from '../assets/images/Logo/software/Django.jpg';
import Flask from '../assets/images/Logo/software/Flask.jpg';
import highcharts from '../assets/images/Logo/software/highcharts.jpg';
import ReactLeaflet from '../assets/images/Logo/software/ReactLeaflet.png';
import Nodejs from '../assets/images/Logo/software/Node.jpg';
import SpringFramework from '../assets/images/Logo/software/SpringFramework.jpg';
import Reactt from '../assets/images/Logo/software/React.jpg';

// Cloud & DevOps
import AmazonLambda from '../assets/images/Logo/Cloud_DevOps/AmazonLambda.png';
import AmazonS3 from '../assets/images/Logo/Cloud_DevOps/AmazonS3.png';
import awsec2 from '../assets/images/Logo/Cloud_DevOps/awsec2.png';
import DockerLogo from '../assets/images/Logo/Cloud_DevOps/DockerLogo.png';
import googlecloudGCP from '../assets/images/Logo/Cloud_DevOps/googlecloudGCP.png';
import Actions from '../assets/images/Logo/Cloud_DevOps/Actions.png';
import Jenkins from '../assets/images/Logo/Cloud_DevOps/Jenkins.png';
import Kubernetes from '../assets/images/Logo/Cloud_DevOps/Kubernetes.png';
import PineconeSystems from '../assets/images/Logo/Cloud_DevOps/PineconeSystems.jpg';
import travisci from '../assets/images/Logo/Cloud_DevOps/travisci.png';
import AmazonWebServices from '../assets/images/Logo/Cloud_DevOps/AmazonWebServices.jpg';


const GlobalStyle = createGlobalStyle`${infiniteScrollAnimation}  ${globalSmoothScroll} ${slowScrollAnimation}`;
const scrollToBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};
// Skill Data with Images
const languages = [
  { name: "Python", img: pythonLogo },
  { name: "JavaScript", img: javascriptLogo },
  { name: "Java", img: javaLogo },
  { name: "C", img: cLogo },
  { name: "C++", img: cppLogo },
  { name: "SQL", img: sqlLogo },
  { name: "Rust", img: rustLogo },
  { name: "Go", img: goLogo },
  { name: "C#", img: csharpLogo },
  { name: "TypeScript", img: typescriptLogo },
];

const ai_ml = [
  { name: "TensorFlow", img: tensorflowLogo },
  { name: "PyTorch", img: pytorchLogo },
  { name: "Keras", img: kerasLogo },
  { name: "OpenCV", img: opencvLogo },
  { name: "Scikit-learn", img: sklearnLogo },
  { name: "Pandas", img: Pandas },
  { name: "Matplotlib", img: Matplotlib },
  { name: "NumPy", img: NumPy },
  { name: "SpaCy", img: spacyLogo },
];
const software = [
  { name: "Leaflet", img: Leaflet },
  { name: "Django", img: Django },
  { name: "Flask", img: Flask },
  { name: "highcharts", img: highcharts },
  { name: "ReactLeaflet", img: ReactLeaflet },
  { name: "Node", img: Nodejs },
  { name: "SpringFramework", img: SpringFramework },
  { name: "React", img: Reactt },
];
const cloud_devops = [
  { name: "Amazon Lambda", img: AmazonLambda },
  { name: "Amazon S3", img: AmazonS3 },
  { name: "AWS EC2", img: awsec2 },
  { name: "Docker", img: DockerLogo },
  { name: "Google Cloud (GCP)", img: googlecloudGCP },
  { name: "Actions", img: Actions },
  { name: "Jenkins", img: Jenkins },
  { name: "Kubernetes", img: Kubernetes },
  { name: "Pinecone Systems", img: PineconeSystems },
  { name: "TravisCI", img: travisci },
  { name: "Amazon Web Services", img: AmazonWebServices },
];
// Duplicate skills list to create infinite scrolling effect
const infiniteLanguages = [...languages, ...languages, ...languages];
const infiniteAiML = [...ai_ml, ...ai_ml, ...ai_ml];
const infiniteSoftware = [...software, ...software, ...software];
const infiniteCloudDevops = [...cloud_devops, ...cloud_devops, ...cloud_devops];

function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
useEffect(() => {
  const handleScroll = () => {
    // Check if we are at (or very close to) the bottom of the page
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2) {
      setShowScrollIndicator(false);
    } else {
      setShowScrollIndicator(true);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  // Run once on mount in case the page is already scrolled down
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
    <div style={containerStyle}>
      <GlobalStyle />
      <Header />
      
      <div style={homePageMainContainer}>
        <div style={textContainerStyle}>
          <h6 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#f2e9e4',
            textShadow: '4px 4px 12px rgba(0, 0, 0, 0.9)',
          }}>
            👋 Hi, I’m Jinay Shah
          </h6>
          <p style={{ fontSize: '2rem', lineHeight: '1.5', color: '#f2e9e4', marginBottom: '20px' }}>
            A passionate <b>Software Engineer & AI Enthusiast</b> currently pursuing my <b>Master’s in Information Technology</b> at <b>Arizona State University</b>.
            I specialize in <b>AI, full-stack development, and cloud technologies</b>, building <b>scalable and impactful solutions</b>.
          </p>
          <p style={{ fontSize: '1.6rem', lineHeight: '1.5', color: '#f2e9e4' }}>
            I'm eager to connect and collaborate on innovative projects.  Feel free to reach out!
          </p>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
        <AnimatedMonitor />
        </div>
      </div>

      <div style={skillsContainerStyle}>
        <h2 style={skillCategoryStyle}>Languages</h2>
        <div style={skillGridStyle}>
          {infiniteLanguages.map((skill, index) => (
            <div key={index} style={skillItemStyle}>
              <img src={skill.img} alt={skill.name} style={skillImageStyle} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={skillsContainerStyle}>
        <h2 style={skillCategoryStyle}>AI & Machine Learning</h2>
        <div style={skillGridStyle}>
          {infiniteAiML.map((skill, index) => (
            <div key={index} style={skillItemStyle}>
              <img src={skill.img} alt={skill.name} style={skillImageStyle} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={skillsContainerStyle}>
        <h2 style={skillCategoryStyle}>Software</h2>
        <div style={skillGridStyle}>
          {infiniteSoftware.map((skill, index) => (
            <div key={index} style={skillItemStyle}>
              <img src={skill.img} alt={skill.name} style={skillImageStyle} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={skillsContainerStyle}>
        <h2 style={skillCategoryStyle}>Cloud & DevOps</h2>
        <div style={skillGridStyle}>
          {infiniteCloudDevops.map((skill, index) => (
            <div key={index} style={skillItemStyle}>
              <img src={skill.img} alt={skill.name} style={skillImageStyle} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Contact />
     {/* Scroll Indicator */}
     {showScrollIndicator && (
        <RightScrollIndicator onClick={scrollToBottom} style={{ color: '#fff' }}>
          <DownArrow />
        </RightScrollIndicator>
      )}
    </div>
  );
}

export default Home;
