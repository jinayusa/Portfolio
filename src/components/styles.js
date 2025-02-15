// styles.js
import backgroundImage from '../assets/images/background1.JPG';
import styled, { keyframes } from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

// Colors for reuse
export const colors = {
  darkest: '#22223b',
  dark: '#4a4e69',
  medium: '#9a8c98',
  light: '#c9ada7',
  lightest: '#f2e9e4',
};

// Animations
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

export const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

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

// Card Component with Mobile Adjustments
export const cardStyle = { // Changed to object
  border: '1px solid #ccc',
  borderRadius: '8px',
  overflow: 'hidden', // Ensure image stays within card bounds
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 1)', // Subtle shadow

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)', // More pronounced shadow on hover
  },
  '@media (max-width: 768px)': {
    // Adjustments for smaller screens
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  },
};

// Details Component with Mobile Adjustments
export const detailsStyle = { // Changed to object
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  color: 'white',
  padding: '10px',
  borderRadius: '0 0 8px 8px', // Round bottom corners
  opacity: 0, // Initially hidden
  transform: 'translateY(100%)', // Initially below the card
  transition: 'opacity 0.3s ease, transform 0.3s ease',

  // Show on card hover
  [`${cardStyle}:hover &`]: {
    opacity: 1,
    transform: 'translateY(0)',
  },

  h3: {
    margin: 0,
    fontSize: '1.2rem',
  },
  p:{
    margin: 0,
    fontSize: '0.9rem'
  },
  '@media (max-width: 768px)': {
    h3: {
      fontSize: '1rem',
    },
    p:{
      fontSize: '0.8rem'
    }
  },
};

// Inline style objects (assumes usage of a library that supports responsive keys)
// If not, consider converting these into styled components.

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
  padding: '50px',
  '@media (max-width: 768px)': {
    maxWidth: '90%',
    padding: '20px',
  },
};

export const headerStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: 'rgba(34, 34, 59, 0.85)',
  padding: '15px 20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
  '@media (max-width: 768px)': {
    padding: '10px 15px',
  },
};

export const navStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '30px',
  '@media (max-width: 768px)': {
    justifyContent: 'center',
    paddingRight: '0',
  },
};

export const navListStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  gap: '20px',
  '@media (max-width: 768px)': {
    gap: '10px',
  },
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
  '@media (max-width: 768px)': {
    marginLeft: '10px',
    padding: '15px',
  },
};

export const skillCategoryStyle = {
  fontSize: '2rem',
  color: '#f2e9e4',
  marginBottom: '10px',
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  },
};

export const skillGridStyle = {
  display: 'flex',
  gap: '20px',
  paddingTop: '10px',
  whiteSpace: 'nowrap',
  animation: 'scroll 10s linear infinite',
};

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
  '@media (max-width: 768px)': {
    minWidth: '100px',
    padding: '8px',
  },
};

export const skillImageStyle = {
  width: '60px',
  height: '60px',
  marginBottom: '5px',
  '@media (max-width: 768px)': {
    width: '50px',
    height: '50px',
  },
};

export const contactContainerStyle = {
  width: '100%',
  height: 'auto',
  backgroundColor: '#4a4e69',
  borderRadius: '10px',
  padding: '30px 20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  color: '#f2e9e4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
  '@media (max-width: 768px)': {
    padding: '20px 15px',
  },
};

export const contactHeadingStyle = {
  fontSize: '2rem',
  height: 'auto',

  textAlign: 'center',
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  },
};

export const contactTextStyle = {
  height: 'auto',

  fontSize: '1.4rem',
  textAlign: 'center',
  '@media (max-width: 768px)': {
    fontSize: '1.2rem',
  },
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
  '@media (max-width: 768px)': {
    padding: '8px',
    fontSize: '0.9rem',
  },
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
  '@media (max-width: 768px)': {
    padding: '8px',
    fontSize: '0.9rem',
  },
};

export const socialLinksContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '10px',
  '@media (max-width: 768px)': {
    gap: '15px',
  },
};

export const socialLinkStyle = {
  color: '#f2e9e4',
  fontSize: '1.5rem',
  textDecoration: 'none',
  '@media (max-width: 768px)': {
    fontSize: '1.3rem',
  },
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

export const homePageMainContainer = {
  display: 'flex',
  alignItems: 'center', /* Center vertically */
  justifyContent: 'center', /* Center horizontally */
  padding: '50px',
  marginTop: '100px',
  '@media (max-width: 768px)': {
    padding: '30px',
    marginTop: '80px',
  },
};

// Animated Monitor Styles
export const MonitorContainer = styled.div`
  width: 350px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: 1px solid black;

  @media (max-width: 768px) {
    width: 300px;
    height: 170px;
  }
`;

export const Screen = styled.div`
  width: 90%;
  background-color: ${colors.darkest};
  color: ${colors.lightest};
  font-family: monospace;
  padding: 15px;
  overflow-y: auto;
  animation: ${fadeIn} 1s ease-in-out;
  border-radius: 5px;
  margin-top: 10px;

  @media (max-width: 768px) {
    padding: 10px;
  }
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

  @media (max-width: 768px) {
    margin-left: 100px;
  }
`;

export const StandBase = styled.div`
  width: 60%;
  height: 15px;
  background-color: ${colors.light};
  border-radius: 5px;
  display: flex;
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
  animation: ${glowAnimation} 2s ease-in-out infinite alternate;
  pointer-events: none;
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 15px;
  background-color: #0f0;
  margin-left: 2px;
  animation: ${blink} 1s infinite step-start;
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

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

export const aboutContentStyle = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 15px;
    margin: 0 10px;
  }
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

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
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
    text-align: center;
  }
`;

export const IntroText = styled.div`
  flex: 1;
  padding-right: 20px;
  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const ContentSection = styled.div`
  margin-bottom: 60px;
  h2 {
    font-size: 3.5rem;
    color: #333;
    margin-bottom: 15px;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  p,
  ul {
    font-size: 2.3rem;
    color: #555;
    line-height: 1.8;
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
  ul {
    margin-left: 30px;
    @media (max-width: 768px) {
      margin-left: 20px;
    }
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const DownArrow = styled(MdKeyboardArrowDown)`
  font-size: 2.5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Contact Page Styles (moved from Contact.js)

export const ContactSection = styled.section`
  width: 100%;
  height: 'auto',
  background-color: ${colors.dark};
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  color: ${colors.lightest};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

export const ContactHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ContactText = styled.p`
  font-size: 1.4rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const MessageForm = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputField = styled.input`
  background-color: ${colors.medium};
  color: ${colors.darkest};
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

export const MessageInput = styled.textarea`
  ${InputField} // Inherit styles from InputField
  resize: none;
`;

export const SendButton = styled.button`
  background-color: ${colors.light};
  color: ${colors.darkest};
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 15px;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.medium};
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const SocialLink = styled.a`
  color: ${colors.lightest};
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.light};
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;