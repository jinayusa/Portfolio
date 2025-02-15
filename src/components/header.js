import React from 'react';
import { Link } from 'react-router-dom';
import {
  headerStyle,
  navStyle,
  navListStyle,
  navItemStyle,
  navLinkStyle,
  iconStyle,
} from './styles';
import logo from '../assets/images/Logo/icon.PNG'; // adjust the path relative to this file

function Header() {
  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Icon on the left */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={iconStyle}
          />
        </Link>

        {/* Navigation */}
        <nav style={navStyle}>
          <ul style={navListStyle}>
            <li style={navItemStyle}>
              <Link to="/" style={navLinkStyle}>
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
            <li style={navItemStyle}>
              <a
                href={process.env.PUBLIC_URL + '/JResume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                style={navLinkStyle}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
