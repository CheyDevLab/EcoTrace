import React from "react";
import Quiz from "./quiz";

const productionQuestions = [
    {
        id: 1,
        question: "What industry do you work in?",
        options: [
          { text: "Manufacturing", value: 3000 },
          { text: "Technology", value: 1500 },
          { text: "Agriculture", value: 2000 },
          { text: "Services", value: 800 },
        ],
      },
      {
        id: 2,
        question: "How much paper do you use in your daily work?",
        options: [
          { text: "A lot", value: 1500 },
          { text: "Some", value: 800 },
          { text: "Minimal", value: 400 },
          { text: "None", value: 0 },
        ],
      },
      {
        id: 3,
        question: "How often do you purchase new electronics?",
        options: [
          { text: "Every year", value: 1000 },
          { text: "Every 2-3 years", value: 500 },
          { text: "Rarely", value: 200 },
          { text: "Never", value: 0 },
        ],
      },
      {
        id: 4,
        question: "How much energy does your business use in a typical day?",
        options: [
          { text: "More than 500 kWh", value: 3000 },
          { text: "200-500 kWh", value: 1500 },
          { text: "50-200 kWh", value: 500 },
          { text: "Less than 50 kWh", value: 100 },
        ],
      },
      {
        id: 5,
        question: "How often do you recycle materials at your workplace?",
        options: [
          { text: "Always", value: 0 },
          { text: "Sometimes", value: 200 },
          { text: "Rarely", value: 500 },
          { text: "Never", value: 1000 },
        ],
      },
      {
        id: 6,
        question: "What kind of packaging does your business use?",
        options: [
          { text: "Mostly non-recyclable", value: 1000 },
          { text: "A mix of recyclable and non-recyclable", value: 500 },
          { text: "Mostly recyclable", value: 0 },
        ],
      },
      {
        id: 7,
        question: "How often do you dispose of electronics?",
        options: [
          { text: "Every year", value: 1500 },
          { text: "Every 2-3 years", value: 800 },
          { text: "Rarely", value: 400 },
          { text: "Never", value: 0 },
        ],
      },
      {
        id: 8,
        question: "Does your business engage in sustainable production practices?",
        options: [
          { text: "Yes, always", value: 0 },
          { text: "Sometimes", value: 400 },
          { text: "Rarely", value: 800 },
          { text: "Never", value: 1000 },
        ],
      },
];

const ProductionQuiz = () => {
  return <Quiz questions={productionQuestions} />;
};

export default ProductionQuiz;
