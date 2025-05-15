import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Howl } from "howler";

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
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [timer, setTimer] = useState(20);
  const [score] = useState(localStorage.getItem("bestScore") || 0);

  const CORRECT_SOUND = new Howl({ src: ["/sounds/correct.mp3"] });
  const WRONG_SOUND = new Howl({ src: ["/sounds/wrong.mp3"] });

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) setTimer((t) => t - 1);
      else handleOptionSelect(null);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    localStorage.setItem("score", correctAnswersCount);
  }, [correctAnswersCount]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.correctAnswer) {
      setCorrectAnswersCount((prev) => prev + 1);
      CORRECT_SOUND.play();
    } else {
      WRONG_SOUND.play();
    }
    setShowCorrectAnswer(true);
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedOption(null);
        setShowCorrectAnswer(false);
        setTimer(20);
      } else {
        setShowCelebration(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 1000);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedOption(null);
      setShowCorrectAnswer(false);
      setTimer(20);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowCorrectAnswer(false);
      setTimer(20);
    } else {
      setShowCelebration(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setCorrectAnswersCount(0);
    setShowCelebration(false);
    setTimer(20);
  };

  const handleExit = () => {
    navigate("/");
  };

  const scorePercentage = (correctAnswersCount / questions.length) * 100;

  return (
    <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <SubNavbar />

      {showCelebration && scorePercentage >= 30 && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <div className="w-[90vw] md:w-[50vw] h-[65vh] mt-20 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col justify-between overflow-hidden relative z-10">
        {/* <div className="w-full h-4 bg-gray-200 relative mt-2">
          <div
            className="absolute top-0 left-0 h-full bg-blue-500"
            style={{
              width: `${(correctAnswersCount / questions.length) * 100}%`,
            }}
          ></div>
        </div> */}

        <div className="flex flex-col h-full p-6">
          {showCelebration ? (
            <motion.div
              className="flex flex-col items-center justify-center h-full text-center p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {scorePercentage < 30 ? (
                <>
                  <h2 className="text-2xl font-bold text-red-600 mb-2">Keep Practicing!</h2>
                  <p className="text-lg text-gray-700 mb-2">You've completed the quiz.</p>
                  <p className="text-blue-500 font-medium mb-2">Try Again!</p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-blue-700 mb-2">🎉 Congratulations! 🎉</h2>
                  <p className="text-lg text-gray-700 mb-2">You've completed the quiz.</p>
                  <p className="text-blue-500 font-medium mb-2">Great job!</p>
                </>
              )}
              <p className="text-xl font-semibold">
                Your Score: {correctAnswersCount}/{questions.length} ({scorePercentage.toFixed(2)}%)
              </p>
              <div className="mt-6 space-x-4">
                <button onClick={handleRestartQuiz} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Restart Quiz</button>
                <button onClick={handleExit} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">Exit</button>
              </div>
            </motion.div>
          ) : (
            <>
              <div className="mb-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white p-4 rounded-md shadow">
                <h2 className="text-lg font-semibold">
                  Question {currentQuestionIndex + 1}: {currentQuestion.question}
                </h2>
                <p className="text-sm text-white">Time left: {timer}s</p>
              </div>

              <div className="space-y-3 flex-1">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 text-left font-medium ${
                      selectedOption === option
                        ? option === currentQuestion.correctAnswer
                          ? "border-green-600 bg-green-100 text-green-800"
                          : "border-red-600 bg-red-100 text-red-800"
                        : "hover:bg-gray-100"
                    }`}
                    disabled={selectedOption !== null}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              {showCorrectAnswer && (
                <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-600 text-green-800 rounded">
                  Correct Answer:{" "}
                  <span className="font-semibold">{currentQuestion.correctAnswer}</span>
                </div>
              )}

              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                    currentQuestionIndex === 0
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  Previous
                </button>

                <button
                  onClick={() => setShowCorrectAnswer(true)}
                  className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition"
                >
                  View Answer
                </button>

                <button
                  onClick={handleNext}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                    currentQuestionIndex === questions.length - 1
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dwh;
