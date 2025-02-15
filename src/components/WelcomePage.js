import React, { useEffect, useState } from "react";
import "./WelcomePage.css";

const WelcomePage = ({ onAnimationEnd }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const messages = ["Hi, I am Jinay!", "Let's get started."];

    if (messageIndex < messages.length) {
      if (charIndex < messages[messageIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + messages[messageIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 60); // Typing speed

        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setDisplayedText(""); // Clear text before next message
          setCharIndex(0);
          setMessageIndex((prev) => prev + 1);
        }, 1000); // Pause before next message
      }
    } else {
      setTimeout(() => setFadeOut(true), 1000); // Start fade-out
      setTimeout(onAnimationEnd, 2000); // Transition to Home after fade-out
    }
  }, [charIndex, messageIndex, onAnimationEnd]);

  return (
    <div className={`welcome-container ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="welcome-text">{displayedText}</h1>
    </div>
  );
};

export default WelcomePage;
