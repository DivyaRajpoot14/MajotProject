import NavBar from "../Navbar"
import SubNavbar from "../SubNavbar";
import React, { useState } from "react";

const Dwh=()=>{
    const questions = [
      
          {
            "question": "What is a Data Warehouse?",
            "options": [
              "A system for storing only current data",
              "A system for storing and analyzing historical data",
              "A database for transactional data",
              "A system for managing small data"
            ],
            "correctAnswer": "A system for storing and analyzing historical data"
          },
          {
            "question": "What does ETL stand for in Data Warehousing?",
            "options": [
              "Extract, Transform, Load",
              "Extract, Test, Load",
              "Enrich, Transform, Load",
              "Execute, Transfer, Load"
            ],
            "correctAnswer": "Extract, Transform, Load"
          },
          {
            "question": "Which of the following is a characteristic of a Data Warehouse?",
            "options": [
              "Supports real-time transactional processing",
              "Stores data for current operations only",
              "Integrates data from multiple sources",
              "Is updated continuously in real-time"
            ],
            "correctAnswer": "Integrates data from multiple sources"
          },
          {
            "question": "Which type of data model is commonly used in Data Warehousing?",
            "options": [
              "Hierarchical model",
              "Relational model",
              "Star schema",
              "Network model"
            ],
            "correctAnswer": "Star schema"
          },
          {
            "question": "In Data Warehousing, which component is responsible for transforming raw data into usable formats?",
            "options": [
              "Data mart",
              "ETL process",
              "OLAP cube",
              "Data lake"
            ],
            "correctAnswer": "ETL process"
          },
          {
            "question": "What is Data Mining?",
            "options": [
              "The process of cleaning and preparing data for analysis",
              "The process of extracting useful patterns from large datasets",
              "The process of storing data in a database",
              "The process of managing data security"
            ],
            "correctAnswer": "The process of extracting useful patterns from large datasets"
          },
          {
            "question": "Which of the following is not a technique used in Data Mining?",
            "options": [
              "Clustering",
              "Regression",
              "Classification",
              "Normalizing"
            ],
            "correctAnswer": "Normalizing"
          },
          {
            "question": "What does OLAP stand for in Data Warehousing?",
            "options": [
              "Operational Logic and Analysis Processing",
              "Online Analytical Processing",
              "Online Algorithmic Processing",
              "Optimal Linear Analysis Processing"
            ],
            "correctAnswer": "Online Analytical Processing"
          },
          {
            "question": "What is a Data Mart?",
            "options": [
              "A smaller, focused version of a Data Warehouse",
              "A large-scale database used for real-time transactions",
              "A database used for storing unstructured data",
              "A type of data mining algorithm"
            ],
            "correctAnswer": "A smaller, focused version of a Data Warehouse"
          },
          {
            "question": "What is the primary purpose of Data Warehousing?",
            "options": [
              "Store data for daily operations",
              "Analyze and report on historical data",
              "Handle real-time transactional data",
              "Create backup copies of data"
            ],
            "correctAnswer": "Analyze and report on historical data"
          },
          {
            "question": "What is Association Rule Mining used for in Data Mining?",
            "options": [
              "Predicting future values",
              "Identifying relationships between variables",
              "Clustering data into groups",
              "Reducing the dimensionality of data"
            ],
            "correctAnswer": "Identifying relationships between variables"
          },
          {
            "question": "Which of the following is a major benefit of using Data Mining techniques?",
            "options": [
              "Storing data efficiently",
              "Reducing data redundancy",
              "Uncovering hidden patterns in large datasets",
              "Enforcing data security"
            ],
            "correctAnswer": "Uncovering hidden patterns in large datasets"
          },
          {
            "question": "Which of the following is a common application of Data Warehousing?",
            "options": [
              "Managing a company's daily transactions",
              "Storing unstructured data",
              "Analyzing historical trends for decision-making",
              "Handling real-time customer service interactions"
            ],
            "correctAnswer": "Analyzing historical trends for decision-making"
          },
          {
            "question": "Which type of Data Mining technique is used to predict numerical values?",
            "options": [
              "Classification",
              "Clustering",
              "Regression",
              "Association Rule Mining"
            ],
            "correctAnswer": "Regression"
          },
          {
            "question": "In the context of Data Warehousing, what does 'dimensional modeling' involve?",
            "options": [
              "Optimizing data for faster retrieval",
              "Designing the structure of data for analytical queries",
              "Encrypting sensitive data",
              "Transforming data into relational form"
            ],
            "correctAnswer": "Designing the structure of data for analytical queries"
          },
          {
            "question": "Which type of Data Mining algorithm is used to group similar data points together?",
            "options": [
              "Classification",
              "Clustering",
              "Regression",
              "Decision Tree"
            ],
            "correctAnswer": "Clustering"
          },
          {
            "question": "What is the 'Data Cleaning' process in Data Warehousing?",
            "options": [
              "Removing redundant data",
              "Extracting useful data",
              "Loading data into the warehouse",
              "Creating backups of the data"
            ],
            "correctAnswer": "Removing redundant data"
          },
          {
            "question": "Which of the following is a feature of Online Analytical Processing (OLAP)?",
            "options": [
              "Supports real-time transaction processing",
              "Provides multidimensional analysis of data",
              "Stores unstructured data",
              "Manages only small datasets"
            ],
            "correctAnswer": "Provides multidimensional analysis of data"
          },
          {
            "question": "Which of the following is a primary goal of Data Warehousing?",
            "options": [
              "To perform real-time transaction processing",
              "To store historical data for analysis and reporting",
              "To handle operational data management",
              "To process only unstructured data"
            ],
            "correctAnswer": "To store historical data for analysis and reporting"
          },
          {
            "question": "In Data Mining, what is a Decision Tree used for?",
            "options": [
              "Predicting categorical outcomes",
              "Identifying outliers",
              "Finding associations between variables",
              "Clustering similar data points"
            ],
            "correctAnswer": "Predicting categorical outcomes"
          }
      ];
    
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [selectedOption, setSelectedOption] = useState(null);
      const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    
      const currentQuestion = questions[currentQuestionIndex];
    
      const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setShowCorrectAnswer(false);
      };
    
      const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedOption(null);
          setShowCorrectAnswer(false);
        }
      };
    
      const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex(currentQuestionIndex - 1);
          setSelectedOption(null);
          setShowCorrectAnswer(false);
        }
      };
    
      const progressPercentage =
        ((currentQuestionIndex + 1) / questions.length) * 100;
    
return(
    <>
    <NavBar/>
    <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4">
    <SubNavbar/>
 <div className="w-[50dvw] h-[60dvh] mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Progress Bar */}
      <div className="relative w-full bg-gray-200 rounded-full h-4 mb-6">
        <div
          className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      {/* Question */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Question {currentQuestionIndex + 1}: {currentQuestion.question}
      </h2>
      {/* Options */}
      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            className={`w-full px-4 py-2 text-left border rounded-lg hover:bg-gray-100 transition-colors ${
              selectedOption === option
                ? selectedOption === currentQuestion.correctAnswer
                  ? "border-green-500 bg-green-50"
                  : "border-red-500 bg-red-50"
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {/* Correct Answer */}
      {showCorrectAnswer && (
        <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-700">
          <p>
            Correct Answer:{" "}
            <span className="font-bold">{currentQuestion.correctAnswer}</span>
          </p>

        </div>
      )}
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`px-4 py-2 rounded-lg ${
            currentQuestionIndex === 0
              ? "bg-gray-300 text-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => setShowCorrectAnswer(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          View Correct Answer
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
          className={`px-4 py-2 rounded-lg ${
            currentQuestionIndex === questions.length - 1
              ? "bg-gray-300 text-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
          }`}
        >
          Next
        </button>
      </div>
    </div>
    </div>    
    </>
)}
  export default  Dwh;