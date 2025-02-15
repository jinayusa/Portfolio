import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import {
  headerStyle,
  navStyle,
  navListStyle,
  navItemStyle,
  navLinkStyle,
} from './styles';

function Header() {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link to="/" style={navLinkStyle}> {/* Use Link for navigation */}
              Home
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/about" style={navLinkStyle}>
              About
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/projects" style={navLinkStyle}>
              Projects
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/contact" style={navLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;