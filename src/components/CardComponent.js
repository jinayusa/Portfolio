import React, { useState } from 'react';
import {
    cardStyle,
    detailsStyle,
  } from './styles'; 

const CardComponent = ({ title, details }) => {
  // State to track whether details are shown or not
  const [showDetails, setShowDetails] = useState(false);

  // Function to toggle details on card click
  const toggleDetails = () => {
    setShowDetails(prevState => !prevState);
  };

  return (
    <div className="card" onClick={toggleDetails} style={cardStyle}>
      <h2>{title}</h2>
      {showDetails && (
        <div className="details" style={detailsStyle}>
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};
export default CardComponent;