// styles.js
import backgroundImage from '../assets/images/background1.JPG';
import styled,{ keyframes } from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const cardStyle = styled.div`  // Define cardStyle as a styled component
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  cursor: pointer; // Make it look clickable
  border-radius: 8px; /* Rounded corners */
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* Smooth transitions */

  &:hover {
    transform: translateY(-5px); /* Move up slightly on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a more prominent shadow */
  }

  h2 {
    margin-bottom: 10px;
    color: #333;
  }
`;

export const detailsStyle = styled.div` // Define detailsStyle as a styled component
  margin-top: 10px;
  color: #666;
  overflow: hidden; /* Hide overflowing content */
  transition: max-height 0.3s ease; /* Smooth transition for height */

  p {
    margin: 0; /* Remove default paragraph margins */
  }
`;
export const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  backgroundColor: '#22223b',
  position: 'relative',
};

export const fadeBackgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: '0.3',
  filter: 'brightness(1.1) contrast(1.2)',
  zIndex: '-1',
};

export const textContainerStyle = {
  maxWidth: '50%',
  color: '#f2e9e4',
  textAlign: 'left',
  padding: '50px', // Added padding
};

export const headerStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: 'rgba(34, 34, 59, 0.85)',
  padding: '15px 20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
};

export const navStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '30px',
};

export const navListStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  gap: '20px',
};

export const navItemStyle = {
  position: 'relative',
};

export const navLinkStyle = {
  color: '#f2e9e4',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  padding: '10px 15px',
  borderRadius: '8px',
  transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  display: 'block',
};

export const navLinkHoverStyle = {
  backgroundColor: '#c9ada7',
  color: '#22223b',
};

export const skillsContainerStyle = {
  marginLeft: '20px',
  marginTop: '40px',
  padding: '20px',
  backgroundColor: 'rgba(74, 78, 105, 0.3)',
  borderRadius: '10px',
  width: '97%',
  color: '#f2e9e4',
  overflow: 'hidden',
  marginBottom: '10px',
};

export const skillCategoryStyle = {
  fontSize: '2rem',
  color: '#f2e9e4',
  marginBottom: '10px',
};

export const skillGridStyle = {
  display: 'flex',
  gap: '20px',
  paddingTop: '10px',
  whiteSpace: 'nowrap',
  animation: 'scroll 10s linear infinite',
};

export const infiniteScrollAnimation = `
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
`;

export const skillItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  padding: '10px',
  minWidth: '120px',
  transition: 'transform 0.3s ease-in-out',
};

export const skillImageStyle = {
  width: '60px',
  height: '60px',
  marginBottom: '5px',
};

export const contactContainerStyle = {
  width: '100%',
  backgroundColor: '#4a4e69',
  borderRadius: '10px',
  padding: '30px 20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  color: '#f2e9e4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
};

export const contactHeadingStyle = {
  fontSize: '2rem',
  marginBottom: '15px',
  textAlign: 'center',
};

export const contactTextStyle = {
  fontSize: '1.4rem',
  marginBottom: '5px',
  textAlign: 'center',
};

export const messageFormStyle = {
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const inputFieldStyle = {
  backgroundColor: '#9a8c98',
  color: '#22223b',
  border: 'none',
  padding: '10px',
  borderRadius: '5px',
  fontSize: '1rem',
  width: '100%',
  marginBottom: '10px',
};

export const messageInputStyle = {
  ...inputFieldStyle,
  resize: 'none',
};

export const sendButtonStyle = {
  backgroundColor: '#c9ada7',
  color: '#22223b',
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  marginBottom: '15px',
  width: '100%',
};

export const socialLinksContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '10px',
};

export const socialLinkStyle = {
  color: '#f2e9e4',
  fontSize: '1.5rem',
  textDecoration: 'none',
};

export const globalSmoothScroll = `
html {
  scroll-behavior: smooth;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #c9ada7 #4a4e69;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #4a4e69;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #c9ada7;
  border-radius: 10px;
  transition: background 0.3s ease-in-out;
}
::-webkit-scrollbar-thumb:hover {
  background: #9a8c98;
}
`;

export const slowScrollAnimation = `
@keyframes scrollSlow {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
`;

export const homePageMainContainer = {
  display: 'flex',
  alignItems: 'center', // Center vertically
  justifyContent: 'center', // Center horizontally
  padding: '50px', // Add padding
  marginTop: '100px' // Add top margin
};
// Animated Monitor Styles
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const colors = {
  darkest: '#22223b',
  dark: '#4a4e69',
  medium: '#9a8c98',
  light: '#c9ada7',
  lightest: '#f2e9e4',
};

export const MonitorContainer = styled.div`
  width: 350px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: 1px solid black;
`;


export const Screen = styled.div`
  width: 90%;
  height: auto;
  background-color: ${colors.darkest};
  color: ${colors.lightest};
  font-family: monospace;
  padding: 15px;
  overflow-y: auto;
  animation: ${fadeIn} 1s ease-in-out;
  border-radius: 5px;
  border-color: black;
  margin-top: 10px;
`;


export const Body = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${colors.medium};
  border-top: 2px solid ${colors.dark};
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Stand = styled.div`
  width: 100px;
  height: 40px;
  background-color: ${colors.medium};
  border-radius: 10px 10px 0 0;
  margin-top: -15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 125px;
`;

export const StandBase = styled.div`
  width: 60%;
  height: 15px;
  background-color: ${colors.light};
  border-radius: 5px;
  justify-content: center;
  
  align-items: center;
`;

export const Glow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  animation: glowAnimation 2s ease-in-out infinite alternate;
  pointer-events: none;
`;

export const glowAnimation = keyframes`
  from {
    opacity: 0.5;
    transform: scale(0.98);
  }
  to {
    opacity: 0.8;
    transform: scale(1.0);
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 15px;
  background-color: #0f0;
  margin-left: 2px;
  animation: blink 1s infinite step-start;
`;

export const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

export const CodeLine = styled.p`
  margin: 0;
  white-space: pre-wrap;
  position: relative;
`;



// About Page Styles
export const aboutSectionStyle = styled.section`
  padding: 50px;
  background-color: #f8f8f8;
  font-family: sans-serif;
`;

export const aboutContentStyle = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 8px;
`;

export const aboutHeadingStyle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

export const profileImageStyle = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const profileImageImgStyle = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const aboutH3Style = styled.h3`
  margin-bottom: 15px;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
`;

export const aboutUlStyle = styled.ul`
  list-style-type: disc;
  padding-left: 25px;
  margin-bottom: 25px;
  color: #555;
`;

export const aboutLiStyle = styled.li`
  margin-bottom: 12px;
`;
export const AboutSection = styled.section`
  padding: 50px;
  background-color: #f8f8f8;
  font-family: sans-serif;
`;

export const AboutContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 8px;
`;

export const AboutHeading = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

export const SectionHeading = styled.h3`
  margin-bottom: 15px;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
`;

export const AboutList = styled.ul`
  list-style-type: disc;
  padding-left: 25px;
  margin-bottom: 25px;
  color: #555;
`;

export const ListItem = styled.li`
  margin-bottom: 12px;
`;

export const LiquidBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #0077be, #ff4081, #ffb300);
  background-size: 200% 200%;
  animation: liquidEffect 10s ease infinite;
  @keyframes liquidEffect {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const AnimatedDiv = styled.div`
  opacity: ${props => (props.visible ? 1 : 0)};
  transform: ${props => (props.visible ? 'translateY(0)' : 'translateY(10px)')};
  transition: opacity 1s ease ${props => props.delay}, transform 1s ease ${props => props.delay};
`;

export const Section = styled.section`
  padding: 60px 20px;
  font-family: 'Arial', sans-serif;
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  margin: 35px auto 1px auto;
  max-width: auto;
  text-align: left;
`;

export const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IntroText = styled.div`
  flex: 1;
  padding-right: 20px;
`;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const ContentSection = styled.div`
  margin-bottom: 60px;
  h2 {
    font-size: 3.5rem;
    color: #333;
    margin-bottom: 15px;
  }
  p,
  ul {
    font-size: 2.3rem;
    color: #555;
    line-height: 1.8;
  }
  ul {
    margin-left: 30px;
  }
`;

export const RightScrollIndicator = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateY(-50%);
  animation: fadePulse 2s ease-in-out infinite alternate;
  font-size: 2.3rem;
  color: rgba(34, 34, 59, 0.85);
  cursor: pointer;
  z-index: 1000;
  @keyframes fadePulse {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`;

export const DownArrow = styled(MdKeyboardArrowDown)`
  font-size: 2.5rem;
`;