// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MyNavbar from './components/MyNavbar'; // Updated Navbar import
// import HeroSection from './components/HeroSection'; 
// import Quiz from './components/quiz'; // Updated quiz.js import
// import Tips from './components/tips'; // Updated tips.js import
// import Results from './components/results'; // Updated result.js import
// import FootprintOptions from './components/FootprintOptions'; // New page for options
// import './App.css'; // Import your global CSS file

// function App() {
//   return (
//     <Router>
//       <MyNavbar />
//       <Routes>
//         <Route path="/" element={<HeroSection />} />
//         <Route path="/footprint-options" element={<FootprintOptions />} /> {/* New Route for options */}
//         <Route path="/quiz" element={<Quiz />} />
//         <Route path="/tips" element={<Tips />} />
//         <Route path="/results" element={<Results />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import FootprintOptions from './components/FootprintOptions';
// import Quiz from './components/Quiz';
// import Results from './components/Results';
// import MyNavbar from './components/MyNavbar';
// import './App.css'; // Global styling

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
// import FootprintOptions from './components/FootprintOptions';
// import Quiz from './components/Quiz';
// import Results from './components/Results';
// import MyNavbar from './components/MyNavbar';
// import './App.css'; // Global styling

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import FootprintOptions from './components/FootprintOptions';
import Quiz from './components/quiz';
import Results from './components/results';
import MyNavbar from './components/MyNavbar';
import './App.css'; // Global styling
import Tips from './components/tips';
import HeroSection from './components/HeroSection';
import ConsumptionQuiz from './components/consumptionQuiz';
import ProductionQuiz from './components/productionQuiz';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/footprint-options" element={<FootprintOptions />} />
        <Route path="/consumption-quiz" element={<ConsumptionQuiz />} />
        <Route path="/production-quiz" element={<ProductionQuiz />} />
        <Route path="/results" element={<Results />} />
        <Route path='/tips' element={<Tips />}  />
      </Routes>
    </Router>
  );
}

export default App;
