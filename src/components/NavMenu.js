// NavMenu.js
import React from 'react';
import { FaHome, FaUser, FaEnvelope, FaBriefcase } from 'react-icons/fa'; // Import icons
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {
  menuStyle,
  menuListStyle,
  menuItemStyle,
  menuLinkStyle,
  menuLinkHoverStyle,
  underlineStyle,
  stickyNavStyle, // Import the sticky style
  resumeButtonStyle,
  resumeButtonHoverStyle
} from './styles'; // Adjust the path based on your file structure

function NavMenu({ handleMenuClick }) {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = menuLinkHoverStyle.backgroundColor;
    e.currentTarget.style.color = menuLinkHoverStyle.color;
    const underline = e.currentTarget.querySelector('.underline');
    if (underline) {
      underline.style.transform = 'scaleX(1)';
    }
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id); // Get the element by ID
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
    }
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = '';
    e.currentTarget.style.color = menuLinkStyle.color;
    const underline = e.currentTarget.querySelector('.underline');
    if (underline) {
      underline.style.transform = 'scaleX(0)';
    }
  };
  const handleResumeClick = () => {
    window.open('../assets/pdf/Resumee.pdf', '_blank'); // Replace with the actual path to your resume
  };
  return (
    <div style={{ ...menuStyle, ...stickyNavStyle }}>
      <button
        style={resumeButtonStyle}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = resumeButtonHoverStyle.backgroundColor}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = resumeButtonStyle.backgroundColor}
        onClick={handleResumeClick}
      >
        Resume
      </button>
    <nav >
      <ul style={menuListStyle}>
        <li style={menuItemStyle}>
          <a 
            href="#home" 
            style={menuLinkStyle} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMenuClick('home')}
          >
            <FaHome style={{ marginRight: '8px' }} /> Home
            <span className="underline" style={underlineStyle}></span>
          </a>
        </li>
        <li style={menuItemStyle}>
          <a
            href="#about"
            style={menuLinkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            <FaUser style={{ marginRight: '8px' }} /> About
            <span className="underline" style={underlineStyle}></span>
          </a>
        </li>
        <li style={menuItemStyle}>
          <a 
            href="#experience" 
            style={menuLinkStyle} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMenuClick('experience')}
          >
            <FaBriefcase style={{ marginRight: '8px' }} /> Experience
            <span className="underline" style={underlineStyle}></span>
          </a>
        </li>
        <li style={menuItemStyle}>
          <a 
            href="#projects" 
            style={menuLinkStyle} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMenuClick('projects')}
          >
            <AiOutlineFundProjectionScreen style={{ marginRight: '8px' }} /> Projects
            <span className="underline" style={underlineStyle}></span>
          </a>
        </li>
        <li style={menuItemStyle}>
          <a 
            href="#contact" 
            style={menuLinkStyle} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMenuClick('contact')}
          >
            <FaEnvelope style={{ marginRight: '8px' }} /> Contact
            <span className="underline" style={underlineStyle}></span>
          </a>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default NavMenu;
