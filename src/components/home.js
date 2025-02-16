import React, { useState, useEffect, useRef } from 'react';
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
  HomePageMainContainer,
  RightScrollIndicator,
  DownArrow,
  infiniteScrollStyle,
  headingStyle,
  paragraphStyle,
  subParagraphStyle,
} from './styles';
import { createGlobalStyle } from 'styled-components';
import AnimatedMonitor from './AnimatedMonitor';
import {
  languages,
  ai_ml,
  software,
  cloud_devops,
} from './assets';

// Duplicate skills arrays for infinite scrolling
const infiniteLanguages = [...languages, ...languages, ...languages];
const infiniteAiML = [...ai_ml, ...ai_ml, ...ai_ml];
const infiniteSoftware = [...software, ...software, ...software];
const infiniteCloudDevops = [...cloud_devops, ...cloud_devops, ...cloud_devops];

const GlobalStyle = createGlobalStyle`
  ${infiniteScrollAnimation}
  ${globalSmoothScroll}
  ${slowScrollAnimation}
`;

const scrollToBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 2) {
          setShowScrollIndicator(false);
        } else {
          setShowScrollIndicator(true);
        }
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={containerStyle} ref={containerRef}>
      <GlobalStyle />
      
      <HomePageMainContainer>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AnimatedMonitor />
        </div>
        <div style={textContainerStyle}>
          <h6 style={headingStyle}>
            👋 Hi, I’m Jinay Shah
          </h6>
          <p style={paragraphStyle}>
            A passionate Software Engineer & AI Enthusiast currently pursuing my Master’s in Information Technology at Arizona State University.
            I specialize in AI, full-stack development, and cloud technologies, building scalable and impactful solutions.
          </p>
          <p style={subParagraphStyle}>
            I'm eager to connect and collaborate on innovative projects.  Feel free to reach out!
          </p>
        </div>

        
      </HomePageMainContainer>

      <div style={skillsContainerStyle}>
        <h2 style={skillCategoryStyle}>Languages</h2>
        <div style={skillGridStyle}>
          <div style={infiniteScrollStyle}>
            {infiniteLanguages.map((skill, index) => (
              <div key={index} style={skillItemStyle}>
                <img src={skill.img} alt={skill.name} style={skillImageStyle} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          {/* Add a duplicate for seamless looping */}
          <div style={infiniteScrollStyle}>
            {infiniteLanguages.map((skill, index) => (
              <div key={`dup-${index}`} style={skillItemStyle}>
                <img src={skill.img} alt={skill.name} style={skillImageStyle} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={skillsContainerStyle}>
        <h2 style={skillCategoryStyle}>AI & Machine Learning</h2>
        <div style={skillGridStyle}>
          <div style={infiniteScrollStyle}>
            {infiniteAiML.map((skill, index) => (
              <div key={index} style={skillItemStyle}>
                <img src={skill.img} alt={skill.name} style={skillImageStyle} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          {/* Add a duplicate for seamless looping */}
          <div style={infiniteScrollStyle}>
            {infiniteAiML.map((skill, index) => (
              <div key={`dup-${index}`} style={skillItemStyle}>
                <img src={skill.img} alt={skill.name} style={skillImageStyle} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={skillsContainerStyle}>
        <h2 style={skillCategoryStyle}>Software</h2>
        <div style={skillGridStyle}>
          <div style={infiniteScrollStyle}>
            {infiniteSoftware.map((skill, index) => (
              <div key={index} style={skillItemStyle}>
                <img src={skill.img} alt={skill.name} style={skillImageStyle} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          {/* Add a duplicate for seamless looping */}
          <div style={infiniteScrollStyle}>
            {infiniteSoftware.map((skill, index) => (
              <div key={`dup-${index}`} style={skillItemStyle}>
                <img src={skill.img} alt={skill.name} style={skillImageStyle} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={skillsContainerStyle}>
        <h2 style={skillCategoryStyle}>Cloud & DevOps</h2>
        <div style={skillGridStyle}>
          <div style={infiniteScrollStyle}>
            {infiniteCloudDevops.map((skill, index) => (
              <div key={index} style={skillItemStyle}>
                <img src={skill.img} alt={skill.name} style={skillImageStyle} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          {/* Add a duplicate for seamless looping */}
          <div style={infiniteScrollStyle}>
            {infiniteCloudDevops.map((skill, index) => (
              <div key={`dup-${index}`} style={skillItemStyle}>
                <img src={skill.img} alt={skill.name} style={skillImageStyle} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Contact />
      {showScrollIndicator && (
        <RightScrollIndicator onClick={scrollToBottom} style={{ color: '#fff' }}>
          <DownArrow />
        </RightScrollIndicator>
      )}
    </div>
  );
}

export default Home;