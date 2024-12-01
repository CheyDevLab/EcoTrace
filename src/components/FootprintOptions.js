import React from "react";
import { Link } from "react-router-dom";
import "./footprintOptions.css"; // Custom styles for options page
import consumptionImage from "./consumption.jpg"; // Image for consumption
import productionImage from "./production.jpg"; // Image for production

const FootprintOptions = () => {
  return (
    <div className="footprint-options">
      <h1 className="options-title">Choose Your Carbon Footprint Type</h1>
      <div className="options-container">
        <div className="option-card">
          <img src={consumptionImage} alt="Consumption" className="option-image" />
          <div className="option-content">
            <h2 className="option-title">Consumption Footprint</h2>
            <p className="option-description">
              This focuses on the environmental impact of your consumption habits, such as food, energy, and transportation.
            </p>
            <Link to="/consumption-quiz">
              <button className="option-button">Start Consumption Quiz</button>
            </Link>
          </div>
        </div>
        <div className="option-card">
          <img src={productionImage} alt="Production" className="option-image" />
          <div className="option-content">
            <h2 className="option-title">Production Footprint</h2>
            <p className="option-description">
              This measures the environmental impact of the goods and services you produce or support, such as manufacturing and waste.
            </p>
            <Link to="/production-quiz">
              <button className="option-button">Start Production Quiz</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootprintOptions;
