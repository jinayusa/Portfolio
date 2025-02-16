// styles.js
import backgroundImage from '../assets/images/background1.JPG';
import styled, { keyframes } from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { createGlobalStyle } from 'styled-components'; // Added import for createGlobalStyle

// Colors for reuse
export const colors = {
  darkest: '#2d3142',
  dark: '#4f5d75',
  medium: '#bfc0c0',
  light: '#ffffff', // Or an off-white: #f8f9fa
  lightest: '#ef8354',
};
// Global Styles Example
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.lightest};
    color: ${colors.darkest};
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${colors.dark};
    transition: color 0.3s ease;
    &:hover {
      color: ${colors.medium};
    }
  }
`;

// Main Container Style
export const HomePageMainContainer = styled.div`
  height: 930px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-image: linear-gradient(to right, ${colors.dark} 30%, ${colors.lighter || '#f0f0f0'} 30%); // Changed to to right
  color: ${colors.lightest};

  @media (max-width: 700px) {
    display: block;
    padding: 30px;
  }
`;

// Button Styling Example
export const StyledButton = styled.button`
  background-color: ${colors.medium};
  color: ${colors.darkest};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${colors.light};
  }
`;

export const iconStyle = {
  width: '60px',
  height: '60px',
  marginRight: '15px',
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
    transform: translateX(-50%);
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
  border: `1px solid ${colors.light}`, // Use colors here
  borderRadius: '8px',
  overflow: 'hidden', // Ensure image stays within card bounds
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 1)', // Subtle shadow
  backgroundColor: colors.lightest,

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
  backgroundColor: `rgba(${parseInt(colors.darkest.slice(1, 3), 16)}, ${parseInt(colors.darkest.slice(3, 5), 16)}, ${parseInt(colors.darkest.slice(5, 7), 16)}, 0.5)`, // Use colors here
  color: colors.lightest,
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
    fontSize: '1.0rem',
  },
  p:{
    margin: 0,
    fontSize: '0.5rem'
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
  backgroundColor: colors.dark,
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
  color: colors.dark,
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
  backgroundColor: `rgba(${parseInt(colors.darkest.slice(1, 3), 16)}, ${parseInt(colors.darkest.slice(3, 5), 16)}, ${parseInt(colors.darkest.slice(5, 7), 16)}, 0.85)`, // Use colors here
  padding: '15px 20px',
  boxShadow: `0 4px 6px rgba(${parseInt(colors.darkest.slice(1, 3), 16)}, ${parseInt(colors.darkest.slice(3, 5), 16)}, ${parseInt(colors.darkest.slice(5, 7), 16)}, 0.2)`, // Shadow with color from palette
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
  fontSize: '1.5rem',
  color: colors.lightest,
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
  fontSize: '1.5rem',
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
  color: colors.lightest,
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


// Animated Monitor Styles
export const MonitorContainer = styled.div`
  width: 350px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.darkest};
  border: 1.5px solid black;
  border-bottom: none;
  border-radius: 5.5px 5.5px 0px 0px;
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
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 1.5px solid black;
  border-top: 0.8px solid black;
  border-radius: 0px 0px 5.5px 5.5px;
`;

export const Stand = styled.div`
  width: 60px;
  height: 40px;
  background-color: ${colors.medium}; /* Keep your color variable */
  opacity: 0.7; /* Adjust opacity for lighter appearance */
  clip-path: polygon(10% 0, 90% 0, 100% 100%, 0% 100%);
  margin-top: -10px;
  margin-left: 140px;
  /* Add margin or padding to prevent overlap */
  margin-right: 20px; /* Example: Add right margin */
  /* OR */
  padding-right: 20px; /* Example: Add right padding */

  @media (max-width: 768px) {
    margin-left: 100px;
  }
`;
export const StandBase = styled.div`
  width: 150px; /* Adjust length */
  height: 5px; /* Adjust thickness */
  background-color: ${colors.medium}; /* Or remove for transparent line */
  margin-top: 0px;
  margin-left: 96px;
 border: 1.5px solid black;
  border-top: 0.8px solid black;
  border-radius: 0px 0px 5.5px 5.5px;
  @media (max-width: 768px) {
    margin-left: 100px;
  }
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
  background-color: ${colors.lightest}; // Example
  font-family: sans-serif;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

export const aboutContentStyle = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  boxShadow: 0 0 10px rgba(${parseInt(colors.darkest.slice(1, 3), 16)}, ${parseInt(colors.darkest.slice(3, 5), 16)}, ${parseInt(colors.darkest.slice(5, 7), 16)}, 0.1);
  background-color: ${colors.lightest}; // Example
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
  background: linear-gradient(135deg, ${colors.dark}, ${colors.medium}, ${colors.light}); // Example
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
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 15px;
    @media (max-width: 768px) {
      font-size: 0.5rem;
    }
  }
  p,
  ul {
    font-size: 1.5rem;
    color: #555;
    line-height: 1.8;
    @media (max-width: 768px) {
      font-size: 1.5rem;
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
  font-size: 1.3rem;
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
    font-size: 1rem;
  }
`;

export const DownArrow = styled(MdKeyboardArrowDown)`
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
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
  font-size: 1rem;
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
  background-color: ${colors.light};
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

export const infiniteScrollStyle = {
  display: 'flex',
  animation: 'scroll 20s linear infinite', // Adjust the duration as needed
};

export const headingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: colors.darkest,
  fontFamily: 'Modernica', // Corrected property name
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', 
};

export const paragraphStyle = {
  fontSize: '2rem',
  lineHeight: '1.5',
  color: colors.darkest,
  marginBottom: '20px',
  fontFamily: 'Heartwell', // Applied Modernica font
  letterSpacing: '1px', 
};

export const subParagraphStyle = {
  fontSize: '1.5rem',
  lineHeight: '1.5',
  color: colors.darkest,
  fontFamily: 'Heartwell', // Applied Modernica font
  fontStyle: 'italic', 
};


export const spotlightStyle = {
  position: 'absolute',
  top: 0,
  left: '50%',
  width: '400px',
  height: '100%',
  background: 'radial-gradient(circle, rgba(150, 120, 220, 0.8) 0%, rgba(0, 0, 0, 0) 80%)',
  transform: 'translateX(-50%)',
  pointerEvents: 'none',
  zIndex: 1,
  opacity: 0.7,
  filter: 'blur(30px)',
  animation: 'fadeGlow 2s ease-in-out infinite alternate',
};

// Add keyframes for soft pulsing effect
export const fadeGlow = `
@keyframes fadeGlow {
  0% { opacity: 0.5; }
  100% { opacity: 0.8; }
}
`;
export const hangingLightStyle = {
  position: 'absolute',
  top: '-150px',
  left: '50%',
  width: '300px',
  height: '500px',
  background: 'radial-gradient(circle, rgba(200,170,255,0.6) 0%, rgba(0,0,0,0) 80%)',
  transform: 'translateX(-50%)',
  pointerEvents: 'none',
  zIndex: 2,
  opacity: 0.7,
  filter: 'blur(30px)',
};


// Lamp and Light Styles
export const lampContainerStyle = {
  position: 'absolute',
  top: '-320px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 3,
};

export const lampStyle = {
  position: 'relative', // Needed for absolute positioning of the bulb
  width: '80px',
  height: '110px',
  backgroundColor: '#D4AF37',
  background: 'linear-gradient(145deg, #D4AF37, #B8860B)', // Gradient for metallic effect
  borderRadius: '50% 50% 0 0',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)', // Deeper shadow for depth
  border: '2px solid #B8860B', // Add a border for more definition
};

export const lampWireStyle = {
  width: '2px',
  height: '220px',
  backgroundColor: '#A0522D',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', // Shadow for the wire
  marginTop: '-70px',
};

export const lightBeamStyle = {
  position: 'absolute',
  top: '150px',
  width: '0',
  height: '0',
  borderLeft: '150px solid transparent',
  borderRight: '150px solid transparent',
  borderBottom: '400px solid rgba(255, 255, 180, 0.6)',
  filter: 'blur(25px)',
  opacity: 0.2,
  pointerEvents: 'none',
  zIndex: 2,
  transition: 'opacity 0.5s ease-in-out',
  animation: 'flicker 2s infinite', // Add a flicker animation
};

// Bulb Style
export const bulbStyle = {
  position: 'absolute',
  top: '250px', // Adjust vertical position within the lamp
  left: '50%',
  transform: 'translateX(-50%)',
  width: '20px',  // Adjust size as needed
  height: '20px', // Adjust size as needed
  borderRadius: '50%',
  backgroundColor: 'white', // Or a slightly warm white: #f8f0e3
  background: 'radial-gradient(circle, #ffffff, #f8f0e3)', // Radial gradient for bulb glow
  boxShadow: '0 0 15px 10px rgba(255, 255, 224, 0.8)', // Stronger glow
  animation: 'glow 1.5s infinite alternate', // Add a glow animation
};

// Keyframes for animations
export const globalStyles = `
  @keyframes flicker {
    0%, 100% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.3;
    }
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 10px 5px rgba(255, 255, 224, 0.8);
    }
    100% {
      box-shadow: 0 0 20px 15px rgba(255, 255, 224, 0.9);
    }
  }
`;