// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./tips.css";

// const Tips = () => {
//   const navigate = useNavigate();
//   const tips = [
//     "Use public transport or carpool to reduce emissions.",
//     "Opt for energy-efficient appliances and renewable energy sources.",
//     "Reduce meat consumption and adopt a plant-based diet.",
//     "Recycle and compost waste to minimize landfill impact.",
//     "Shop sustainably and avoid fast fashion.",
//     "Conserve water and electricity in daily routines.",
//   ];

//   return (
//     <div className="tips">
//       <h1>What You Can Do</h1>
//       <ul>
//         {tips.map((tip, index) => (
//           <li key={index}>{tip}</li>
//         ))}
//       </ul>
//       <button onClick={() => navigate("/")}>Start Again</button>
//     </div>
//   );
// }

// export default Tips;


import React from "react";
import "./tips.css";

const Tips = ({ score }) => {
  const getTips = () => {
    if (score < 50) {
      return [
        "Continue using public transport or walking.",
        "Opt for reusable items over single-use products.",
        "Support local and sustainable businesses."
      ];
    } else if (score < 100) {
      return [
        "Consider reducing meat consumption.",
        "Switch to energy-efficient appliances.",
        "Reduce water wastage and reuse wherever possible."
      ];
    } else {
      return [
        "Cut down on air travel as much as possible.",
        "Switch to renewable energy sources at home.",
        "Make conscious shopping choices to reduce waste."
      ];
    }
  };

  return (
    <div className="tips">
      <h1>See What You Can Do</h1>
      <p>Based on your carbon footprint score, here are some tips:</p>
      <ul>
        {getTips().map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
      <button onClick={() => window.location.href = "/"}>Go Back to Home</button>
    </div>
  );
};

export default Tips;
