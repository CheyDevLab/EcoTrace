import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./quiz.css";

const Quiz = ({ questions }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (value) => {
    setAnswers([...answers, value]);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/results", { state: { answers } });
    }
  };

  return (
    <div className="quiz">
      <header>
        <h1>Track Your Carbon Footprint</h1>
      </header>
      <div className="question-section">
        <p>
          Question {step + 1} of {questions.length}
        </p>
        <progress
          value={step + 1}
          max={questions.length}
          className="progress-bar"
        ></progress>
        <h2>{questions[step].question}</h2>
        <div className="options">
          {questions[step].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="option-button"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
