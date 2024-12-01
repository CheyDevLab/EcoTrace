import React from "react";
import Quiz from "./quiz";

const consumptionQuestions = [
    {
        id: 1,
        question: "What is your primary mode of transportation?",
        options: [
          { text: "Car (petrol/diesel)", value: 3000 },
          { text: "Motorbike", value: 1200 },
          { text: "Public Transport (Bus/Train)", value: 800 },
          { text: "Bicycle/Walking", value: 0 },
        ],
      },
      {
        id: 2,
        question: "How often do you consume meat?",
        options: [
          { text: "Daily", value: 1500 },
          { text: "A few times a week", value: 800 },
          { text: "Rarely", value: 400 },
          { text: "Never (Vegetarian/Vegan)", value: 0 },
        ],
      },
      {
        id: 3,
        question: "What type of energy do you use at home?",
        options: [
          { text: "Mostly Fossil Fuels (Gas/Coal)", value: 3000 },
          { text: "A mix of Renewable & Non-renewable", value: 1500 },
          { text: "Mostly Renewable (Solar/Wind)", value: 500 },
        ],
      },
      {
        id: 4,
        question: "How often do you buy new clothing?",
        options: [
          { text: "Every week", value: 2000 },
          { text: "Monthly", value: 1000 },
          { text: "A few times a year", value: 500 },
          { text: "Rarely/Only when needed", value: 100 },
        ],
      },
      {
        id: 5,
        question: "How often do you eat processed foods?",
        options: [
          { text: "Daily", value: 1000 },
          { text: "A few times a week", value: 500 },
          { text: "Rarely", value: 200 },
          { text: "Never", value: 0 },
        ],
      },
      {
        id: 6,
        question: "How often do you use disposable products?",
        options: [
          { text: "Every day", value: 1000 },
          { text: "A few times a week", value: 500 },
          { text: "Rarely", value: 200 },
          { text: "Never", value: 0 },
        ],
      },
      {
        id: 7,
        question: "Do you compost food waste?",
        options: [
          { text: "Yes, regularly", value: 0 },
          { text: "Sometimes", value: 200 },
          { text: "Never", value: 500 },
        ],
      },
      {
        id: 8,
        question: "How much water do you typically use in a day?",
        options: [
          { text: "More than 150 liters", value: 1000 },
          { text: "100-150 liters", value: 500 },
          { text: "50-100 liters", value: 200 },
          { text: "Less than 50 liters", value: 0 },
        ],
      },
 
];

const ConsumptionQuiz = () => {
  return <Quiz questions={consumptionQuestions} />;
};

export default ConsumptionQuiz;
