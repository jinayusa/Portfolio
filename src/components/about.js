// About.js
import React from 'react';
import {
  aboutSectionStyle,
  aboutContentStyle,
  aboutHeadingStyle,
  profileImageStyle,
  profileImageImgStyle,
  aboutH3Style,
  aboutUlStyle,
  aboutLiStyle,
} from './styles'; // Import the styled components

function About() {
  return (
    <section id="about" style={aboutSectionStyle}> {/* Use the styled components */}
      <div className="about-content" style={aboutContentStyle}>
        <h2 style={aboutHeadingStyle}>About Me</h2>

        <div className="profile-image" style={profileImageStyle}>
          <img src="/images/profile.jpg" alt="Your Name" style={profileImageImgStyle} />
        </div>

        <p>
          {/* ... your about me text ... */}
        </p>

        <h3 style={aboutH3Style}>Education</h3>
        <ul style={aboutUlStyle}>
          <li style={aboutLiStyle}>[Your Degree] - [Your University] - [Year]</li>
          {/* ... more education entries ... */}
        </ul>

        <h3 style={aboutH3Style}>Experience</h3>
        <ul style={aboutUlStyle}>
          <li style={aboutLiStyle}>[Your Job Title] - [Your Company] - [Dates]</li>
          {/* ... more experience entries ... */}
        </ul>

        <h3 style={aboutH3Style}>Skills</h3>
        <ul style={aboutUlStyle}>
            <li style={aboutLiStyle}>[Your Skill]</li>
            {/* ... more skills ... */}
        </ul>
      </div>
    </section>
  );
}

export default About;