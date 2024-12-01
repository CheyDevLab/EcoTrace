import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./results.css";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || [];
  const totalFootprint = answers.reduce((total, current) => total + current, 0);

  return (
    <div className="results">
      <h1>Your Carbon Footprint</h1>
      <div>
      <p>Your total carbon footprint is <strong>{totalFootprint} kg CO₂</strong>.</p>
      </div>
      <p>
        This contributes to significant environmental challenges, such as
        deforestation and climate change.
      </p>
      <button onClick={() => navigate("/tips")}>See What You Can Do</button>
    </div>
  );
}

export default Results;
