import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { 
  LiquidBackground, 
  AnimatedDiv, 
  Section, 
  Container, 
  IntroWrapper, 
  IntroText, 
  ProfileImage, 
  ContentSection, 
  RightScrollIndicator, 
  DownArrow 
} from './styles';
import profilePic from '../assets/images/abc.JPG';
import knowledge from '../assets/images/Others/knowledge.jpg';
import Experience from '../assets/images/Others/Experience.jpg';
import Leadership from '../assets/images/Others/Leadership.jpg';
import Foundation from '../assets/images/Others/Foundation.jpg';
import Future from '../assets/images/Others/Future.jpg';

const AnimatedText = ({ children, delay = '0s' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const element = ref.current; // copy ref.current to a local variable
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(element);
    
    return () => {
      // Use the copied element in the cleanup function
      observer.unobserve(element);
    };
  }, []);
  
  return (
    <AnimatedDiv ref={ref} visible={visible} delay={delay}>
      {children}
    </AnimatedDiv>
  );
};

const Phase1 = () => (
  <IntroWrapper>
    <IntroText>
      <AnimatedText delay="0.2s">
        <h1 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '20px' }}>
          The Spark – Childhood Curiosity
        </h1>
      </AnimatedText>
      <AnimatedText delay="0.4s">
        <p style={{ fontSize: '1.5rem', color: '#555', lineHeight: '1.8' }}>
          From an early age, my fascination with technology ignited countless questions. Playing soccer video games wasn’t just about fun; I marveled at the digital interactions between players and objects. The moment I wrote my first line of code to display my name on a terminal, I knew this spark would guide my path.
        </p>
      </AnimatedText>
    </IntroText>
    <AnimatedText delay="0.6s">
      <ProfileImage src={profilePic} alt="Jinay Shah" />
    </AnimatedText>
  </IntroWrapper>
);

// Create a new styled wrapper that alternates the layout based on the "reverse" prop
const PhaseSectionWrapper = styled(ContentSection)`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// A reusable component for each phase that includes text and an image
const PhaseSection = ({ title, text, image, reverse = false }) => (
  <PhaseSectionWrapper reverse={reverse}>
    <div style={{ flex: 1, padding: '20px' }}>
      <AnimatedText delay="0.2s">
        <h2>{title}</h2>
      </AnimatedText>
      <AnimatedText delay="0.4s">
        <p>{text}</p>
      </AnimatedText>
    </div>
    <AnimatedText delay="0.6s">
      <img
        src={image}
        alt={title}
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          objectFit: 'cover'
        }}
      />
    </AnimatedText>
  </PhaseSectionWrapper>
);

const Phase2 = () => (
  <PhaseSection
    title="The Exploration – A Quest for Knowledge"
    text="My curiosity grew with every question. Determined to understand how my first website reached users, I reached out to a professor and embarked on a journey through platforms, applications, and algorithms. Each new discovery fueled my hunger for more."
    image={knowledge}
    reverse={true} // Image on left, text on right
  />
);

const Phase3 = () => (
  <PhaseSection
    title="The Experience – Bridging Theory and Practice"
    text="My work spans from developing machine learning-based chatbots to creating interactive data analysis tools—each project a step toward solving real problems with technology."
    image={Experience}
    reverse={false} // Image on right, text on left
  />
);

const Phase4 = () => (
  <PhaseSection
    title="The Leadership – Driving Innovation Today"
    text="As a Software Developer at Decision Theater Network, I now lead projects addressing critical challenges. One standout project is CuRVE, an interactive tool analyzing Colorado River shortages, serving thousands monthly."
    image={Leadership}
    reverse={true} // Image on left, text on right
  />
);

const Phase5 = () => (
  <PhaseSection
    title="The Foundation – Strengthening Skills and Knowledge"
    text="Mastering Python, AI, cloud infrastructure, and scalable system design has equipped me with the tools to solve complex problems. My rigorous studies at Arizona State University, marked by a 4.0 GPA, further solidified my commitment to excellence."
    image={Foundation}
    reverse={false} // Image on right, text on left
  />
);

const Phase6 = () => (
  <PhaseSection
    title="The Future – A Vision for Impact"
    text="With a passion for innovation and a proven track record of transformative projects, I am eager to leverage my expertise in AI, software development, and data science to drive meaningful impact. Thank you for considering my application. Feel free to contact me at (203) 512-6561 or jshah86@asu.edu."
    image={Future}
    reverse={true} // Image on left, text on right
  />
);

const About = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.offsetHeight;
      if (scrollTop + windowHeight >= docHeight - 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <Section>
      <LiquidBackground />
      <Container>
        <Phase1 />
        <Phase2 />
        <Phase3 />
        <Phase4 />
        <Phase5 />
        <Phase6 />
      </Container>
      {showScrollIndicator && (
        <RightScrollIndicator>
          <DownArrow />
        </RightScrollIndicator>
      )}
    </Section>
  );
};

export default About;
