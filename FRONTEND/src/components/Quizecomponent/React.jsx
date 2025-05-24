import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const Reactjs=() => {
  const navigate = useNavigate();
  const allLevels = {
    beginner: [
      {
        question: "What is React?",
        options: [
          "A backend framework",
          "A JavaScript library for building user interfaces",
          "A database",
          "A CSS framework"
        ],
        correctAnswer: "A JavaScript library for building user interfaces",
      },
      {
        question: "What does JSX stand for?",
        options: [
          "JavaScript XML",
          "Java Syntax eXtension",
          "JavaScript eXecutable",
          "JavaScript eXtended"
        ],
        correctAnswer: "JavaScript XML",
      },
      {
        question: "Which method in a React class component is used to render UI?",
        options: ["render()", "show()", "display()", "output()"],
        correctAnswer: "render()",
      },
      {
        question: "How do you create a React component?",
        options: [
          "Using a JavaScript function or class",
          "Using HTML",
          "Using CSS",
          "Using SQL"
        ],
        correctAnswer: "Using a JavaScript function or class",
      },
      {
        question: "What is a prop in React?",
        options: [
          "A way to pass data from parent to child component",
          "A function to update state",
          "An HTML attribute",
          "A CSS property"
        ],
        correctAnswer: "A way to pass data from parent to child component",
      },
      {
        question: "Which hook is used to add state to a functional component?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correctAnswer: "useState",
      },
      {
        question: "What is the purpose of 'key' prop in lists?",
        options: [
          "To uniquely identify elements",
          "To style list items",
          "To add event handlers",
          "To pass data"
        ],
        correctAnswer: "To uniquely identify elements",
      },
      {
        question: "How do you handle events in React?",
        options: [
          "Using camelCase syntax and passing a function",
          "Using lowercase syntax",
          "Using HTML event attributes",
          "React does not support events"
        ],
        correctAnswer: "Using camelCase syntax and passing a function",
      },
      {
        question: "Which statement is true about React components?",
        options: [
          "They can be functional or class based",
          "They must be class based",
          "They are only functions",
          "They cannot have state"
        ],
        correctAnswer: "They can be functional or class based",
      },
      {
        question: "How do you import React in a file?",
        options: [
          "import React from 'react';",
          "include React;",
          "require('react');",
          "import { React } from 'react';"
        ],
        correctAnswer: "import React from 'react';",
      },
    ],
    intermediate: [
      {
        question: "What hook would you use to perform side effects in a functional component?",
        options: ["useState", "useEffect", "useContext", "useCallback"],
        correctAnswer: "useEffect",
      },
      {
        question: "How can you pass data deeply through many components without passing props manually at every level?",
        options: ["Redux", "Context API", "useState", "useReducer"],
        correctAnswer: "Context API",
      },
      {
        question: "What does 'lifting state up' mean in React?",
        options: [
          "Moving state to a common ancestor to share between components",
          "Deleting state from a component",
          "Passing props down to child components",
          "Using hooks to manage state"
        ],
        correctAnswer: "Moving state to a common ancestor to share between components",
      },
      {
        question: "What is the purpose of useCallback hook?",
        options: [
          "To memoize functions to prevent unnecessary re-renders",
          "To handle side effects",
          "To update the state",
          "To create refs"
        ],
        correctAnswer: "To memoize functions to prevent unnecessary re-renders",
      },
      {
        question: "What does the React.memo function do?",
        options: [
          "Prevents re-render of functional components when props have not changed",
          "Creates a new React component",
          "Updates the state",
          "Memoizes hooks"
        ],
        correctAnswer: "Prevents re-render of functional components when props have not changed",
      },
      {
        question: "What is a controlled component?",
        options: [
          "An input form element whose value is controlled by React state",
          "An input element with no value",
          "An element that manages its own state",
          "A component with lifecycle methods"
        ],
        correctAnswer: "An input form element whose value is controlled by React state",
      },
      {
        question: "How do you optimize performance for large lists in React?",
        options: [
          "Using windowing libraries like react-window or react-virtualized",
          "Rendering all items at once",
          "Using class components",
          "Using inline styles"
        ],
        correctAnswer: "Using windowing libraries like react-window or react-virtualized",
      },
      {
        question: "What is JSX transpiled into?",
        options: [
          "React.createElement calls",
          "HTML code",
          "CSS styles",
          "Browser-specific code"
        ],
        correctAnswer: "React.createElement calls",
      },
      {
        question: "How do you prevent a component from re-rendering unnecessarily?",
        options: [
          "Using React.memo, PureComponent, or shouldComponentUpdate",
          "Using inline functions in render",
          "By updating state often",
          "Using anonymous functions"
        ],
        correctAnswer: "Using React.memo, PureComponent, or shouldComponentUpdate",
      },
      {
        question: "What is the difference between useEffect and useLayoutEffect?",
        options: [
          "useLayoutEffect fires synchronously after DOM mutations, useEffect fires after painting",
          "useEffect fires synchronously, useLayoutEffect after painting",
          "They are the same",
          "useLayoutEffect runs only once"
        ],
        correctAnswer: "useLayoutEffect fires synchronously after DOM mutations, useEffect fires after painting",
      },
    ],
    advanced: [
      {
        question: "What is the purpose of React's useReducer hook?",
        options: [
          "To manage complex state logic in functional components",
          "To fetch data",
          "To create refs",
          "To style components"
        ],
        correctAnswer: "To manage complex state logic in functional components",
      },
      {
        question: "What does 'reconciliation' mean in React?",
        options: [
          "The process React uses to update the DOM efficiently",
          "The process of creating components",
          "Memory cleanup",
          "Handling events"
        ],
        correctAnswer: "The process React uses to update the DOM efficiently",
      },
      {
        question: "What are hooks rules in React?",
        options: [
          "Call hooks only at the top level and only in React functions/components",
          "Call hooks anywhere in the code",
          "Hooks can be called conditionally",
          "Hooks are only for class components"
        ],
        correctAnswer: "Call hooks only at the top level and only in React functions/components",
      },
      {
        question: "What is a higher-order component (HOC) in React?",
        options: [
          "A function that takes a component and returns a new component",
          "A class component",
          "A hook",
          "A type of prop"
        ],
        correctAnswer: "A function that takes a component and returns a new component",
      },
      {
        question: "Which hook would you use to share logic between components without changing the component hierarchy?",
        options: ["useContext", "Custom hooks", "useEffect", "useMemo"],
        correctAnswer: "Custom hooks",
      },
      {
        question: "How does React Fiber improve React performance?",
        options: [
          "By breaking rendering work into units and prioritizing updates",
          "By compiling JSX faster",
          "By reducing bundle size",
          "By using WebAssembly"
        ],
        correctAnswer: "By breaking rendering work into units and prioritizing updates",
      },
      {
        question: "What is the difference between controlled and uncontrolled components in React?",
        options: [
          "Controlled components have their value controlled by React state, uncontrolled components use the DOM",
          "They are the same",
          "Uncontrolled components do not accept input",
          "Controlled components use refs only"
        ],
        correctAnswer: "Controlled components have their value controlled by React state, uncontrolled components use the DOM",
      },
      {
        question: "What is the purpose of useRef hook?",
        options: [
          "To persist values across renders without causing re-render",
          "To create state",
          "To handle side effects",
          "To manage context"
        ],
        correctAnswer: "To persist values across renders without causing re-render",
      },
      {
        question: "How can you memoize expensive computations in React functional components?",
        options: [
          "Using useMemo hook",
          "Using useEffect hook",
          "Using React.memo",
          "Using setState"
        ],
        correctAnswer: "Using useMemo hook",
      },
      {
        question: "What is Concurrent Mode in React?",
        options: [
          "A mode that allows React to interrupt rendering to keep app responsive",
          "A mode for server-side rendering",
          "A deprecated feature",
          "A new hook"
        ],
        correctAnswer: "A mode that allows React to interrupt rendering to keep app responsive",
      },
    ],
  };
    const levels = Object.keys(allLevels);
    const scoreBeginner = parseInt(sessionStorage.getItem("score_beginner"), 10) || 0;
    const scoreIntermediate = parseInt(sessionStorage.getItem("score_intermediate"), 10) || 0;
    const scoreAdvanced = parseInt(sessionStorage.getItem("score_advanced"), 10) || 0;
    const totalScore = scoreBeginner + scoreIntermediate + scoreAdvanced;
    const totalPercentage = ((totalScore / 30) * 100).toFixed(2);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [questions, setQuestions] = useState(allLevels[levels[0]]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [timer, setTimer] = useState(20);
  const [levelCompleted, setLevelCompleted] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];
  const scorePercentage = (correctAnswersCount / questions.length) * 100;
  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    const beginnerScore = parseInt(localStorage.getItem("score_beginner")) || 0;
  
    if (token) {
      setAccessGranted(true);
  
      // If beginner is completed, start from the next level
      if (beginnerScore >= 3) {
        const nextLevelIndex = 1; // Assuming 'intermediate' is at index 1
        setCurrentLevelIndex(nextLevelIndex);
        setQuestions(allLevels[levels[nextLevelIndex]]);
      } else {
        setCurrentLevelIndex(0);
        setQuestions(allLevels["beginner"]);
      }
  
    } else {
      setAccessGranted(false);
      setCurrentLevelIndex(0);
      setQuestions(allLevels["beginner"]);
    }
  }, []);
  
  // Load level data from localStorage on level change
  useEffect(() => {
    const levelKey = `score_${levels[currentLevelIndex]}`;
    const savedScore = parseInt(sessionStorage.getItem(levelKey)) || 0;
  
    if (savedScore >= 3) {
      setCorrectAnswersCount(savedScore);
      setShowCelebration(true);
      setLevelCompleted(true);
      setTimer(0); // stop timer
    } else {
      setCorrectAnswersCount(0);
      setShowCelebration(false);
      setLevelCompleted(false);
      setTimer(20);
    }
  
    setQuestions(allLevels[levels[currentLevelIndex]]);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowCorrectAnswer(false);
  }, [currentLevelIndex]);
  
  //  Save score and totalScore on update
  useEffect(() => {
    const levelKey = `score_${levels[currentLevelIndex]}`;
    sessionStorage.setItem(levelKey, correctAnswersCount);
  
    const total = levels.reduce((acc, level) => {
      const val = parseInt(sessionStorage.getItem(`score_${level}`)) || 0;
      return acc + val;
    }, 0);
  
    sessionStorage.setItem("totalScore", total);
  }, [correctAnswersCount, currentLevelIndex]);
  
  // Timer countdown unless level is completed
  useEffect(() => {
    if (showCelebration) return;
  
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      } else {
        handleOptionSelect(null);
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [timer, showCelebration]);
  
  //  Select answer
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.correctAnswer) {
      setCorrectAnswersCount((prev) => prev + 1);
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
        setLevelCompleted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 1000);
  };
  
  const handleNextLevel = () => {
    const nextLevel = currentLevelIndex + 1;
    if (nextLevel < levels.length) {
      setCurrentLevelIndex(nextLevel);
      setQuestions(allLevels[levels[nextLevel]]);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setCorrectAnswersCount(0);
      setShowCorrectAnswer(false);
      setShowCelebration(false);
      setLevelCompleted(false);
      setTimer(20);
    } else {
      // Instead of alert, show popup card
      setShowCompletionPopup(true);
    }
  };
  
  //  Restart current level
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setCorrectAnswersCount(0);
    setShowCelebration(false);
    setLevelCompleted(false);
    setTimer(20);
  };
  
  //  Navigate to next/previous question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowCorrectAnswer(false);
      setTimer(20);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedOption(null);
      setShowCorrectAnswer(false);
      setTimer(20);
    }
  };
  
  return (
    <>

    <div className="h-[100dvh]  bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4 relative overflow-hidden">
    <SubNavbar/>
      <div className="flex justify-center mt-32 gap-4">
  {levels.map((level, index) => {
    const levelScore = parseInt(sessionStorage.getItem(`score_${level}`)) || 0;
    const isBeginnerCompleted = parseInt(sessionStorage.getItem("score_beginner")) >= 3;

    return (
      <button
        key={level}
        className={`px-4 py-2 rounded  ${
          currentLevelIndex === index
            ? "bg-blue-600 text-white"
            : levelScore >= 3
            ? "bg-green-500 text-white"
            : "bg-gray-300 text-black"
        }`}
        onClick={() => {
          if (index === 0) {
            // Beginner level - always accessible
            setCurrentLevelIndex(index);
          } else if (index === 1 && isBeginnerCompleted) {
            // Intermediate level - only if beginner completed
            setCurrentLevelIndex(index);
          } else if (index === 2 && isBeginnerCompleted && levelScore >= 3) {
            // Advanced level - only if intermediate is completed
            const intermediateScore = parseInt(sessionStorage.getItem("score_intermediate")) || 0;
            if (intermediateScore >= 3) {
              setCurrentLevelIndex(index);
            } else {
              alert("Please complete Intermediate level first!");
            }
          } else {
            alert("Please complete the Beginner level first!");
          }
        }}
      >
        {level.charAt(0).toUpperCase() + level.slice(1)}
        {levelScore >= 3 && " ✅"}
      </button>
    );
  })}
</div>

      {showCelebration && scorePercentage >= 30 && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <div className="w-[90vw] md:w-[50vw] h-[65vh] mt-10 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col justify-between overflow-hidden relative z-10">
        <div className="flex flex-col h-full p-6">
          {showCelebration ? (
        <div className="flex flex-col h-full p-6">
        {showCelebration && (
          <motion.div
            className="flex flex-col items-center justify-center h-full text-center p-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2 animate-bounce">
              🎉 Congratulations! 🎉
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              {scorePercentage >= 30
                ? "Well done on completing this level."
                : "Try again to improve your score."}
            </p>
            <p className="text-blue-500 font-medium mb-4">
              Current Level Score: {correctAnswersCount}/{questions.length} ({scorePercentage.toFixed(2)}%)
            </p>
  
            {/* Scores Summary */}
            <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-md text-left mb-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Scores Summary</h3>
              <ul className="space-y-1">
                <li className="flex justify-between">
                  <span>Beginner Level</span>
                  <span>{scoreBeginner} / 10</span>
                </li>
                <li className="flex justify-between">
                  <span>Intermediate Level</span>
                  <span>{scoreIntermediate} / 10</span>
                </li>
                <li className="flex justify-between">
                  <span>Advanced Level</span>
                  <span>{scoreAdvanced} / 10</span>
                </li>
                <li className="flex justify-between font-bold text-green-700 pt-2 border-t border-gray-300">
                  <span>Total Score</span>
                  <span>{totalScore} / 30</span>
                </li>
                <li className="flex justify-between font-semibold text-purple-700">
                  <span>Total Percentage</span>
                  <span>{totalPercentage}%</span>
                </li>
              </ul>
            </div>
  
            {/* Buttons */}
            <div className="mt-4 space-x-4">
              <button
                onClick={handleRestartQuiz}
                className="px-4 py-2 mb-2 bg-blue-500 text-white rounded-lg"
              >
                Restart Level
              </button>
  
              {accessGranted ? (
                scorePercentage >= 30 ? (
                  <button
                    onClick={handleNextLevel}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg"
                  >
                    Next Level
                  </button>
                ) : null
              ) : (
                <div className="flex flex-col items-center space-y-2">
                  <button
                    onClick={() => navigate("/loginform")}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg"
                  >
                    Login to Unlock More Levels
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
  

          ) : (
            <>
              <div className="mb-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white p-4 rounded-md shadow">
                <h2 className="text-lg font-semibold">Level: {levels[currentLevelIndex].toUpperCase()}</h2>
                <h3 className="text-sm">Question {currentQuestionIndex + 1}: {currentQuestion.question}</h3>
                <p className="text-sm">Time left: {timer}s</p>
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
                <div className="p-3 bg-green-100 border-l-4 border-green-600 text-green-800 rounded">
                  Correct Answer: <span className="font-semibold">{currentQuestion.correctAnswer}</span>
                </div>
              )}
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePreviousQuestion}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
                  disabled={currentQuestionIndex === questions.length - 1}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    
      {/* Popup card for completion */}
      {showCompletionPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm text-center mx-4">
            <div className="text-5xl mb-4 animate-bounce">🎉</div>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">
              You've completed all levels!
            </h2>
            <p className="mb-6 text-gray-700">
              Congratulations on finishing the quiz! 🎊
            </p>
            <button
              onClick={() => {
                setShowCompletionPopup(false);
                navigate("/");
              }}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Reactjs;
