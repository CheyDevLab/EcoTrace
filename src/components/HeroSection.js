import React from 'react';
import { Link } from 'react-router-dom';
import './heroSection.css'; // Import the Hero Section styles

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">What's Carbon Footprint?</h1>
        <p className="hero-text">
          A carbon footprint is the total amount of greenhouse gases emitted into the atmosphere due to human activities, including energy use, transportation, food consumption, and more. Reducing it can help mitigate climate change.
        </p>
        <Link to="/footprint-options">
          <button className="cta-button">Track Your Carbon Footprint</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
