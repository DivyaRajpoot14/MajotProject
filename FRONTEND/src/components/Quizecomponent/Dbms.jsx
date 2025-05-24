import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const Dbms = () => {
  const navigate = useNavigate();
  const allLevels = {
    beginner: [
      {
        question: "What does DBMS stand for?",
        options: ["DataBase Management System", "DataBase Manipulation Software", "Digital Base Management System", "Data Bank Management System"],
        correctAnswer: "DataBase Management System",
      },
      {
        question: "Which of the following is an example of a DBMS?",
        options: ["MySQL", "HTML", "Windows", "Oracle VM"],
        correctAnswer: "MySQL",
      },
      {
        question: "What is the full form of SQL?",
        options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Structured Question Language"],
        correctAnswer: "Structured Query Language",
      },
      {
        question: "Which command is used to retrieve data from a database?",
        options: ["SELECT", "RETRIEVE", "GET", "FETCH"],
        correctAnswer: "SELECT",
      },
      {
        question: "Which key uniquely identifies a record in a table?",
        options: ["Primary Key", "Foreign Key", "Unique Key", "Candidate Key"],
        correctAnswer: "Primary Key",
      },
      {
        question: "Which data type is used to store text in SQL?",
        options: ["INT", "VARCHAR", "FLOAT", "BOOLEAN"],
        correctAnswer: "VARCHAR",
      },
      {
        question: "Which of the following is NOT a DBMS?",
        options: ["Oracle", "MongoDB", "MySQL", "Python"],
        correctAnswer: "Python",
      },
      {
        question: "What does 'NULL' mean in a database?",
        options: ["Zero", "Empty string", "Unknown/No value", "False"],
        correctAnswer: "Unknown/No value",
      },
      {
        question: "Which SQL clause is used to filter records?",
        options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"],
        correctAnswer: "WHERE",
      },
      {
        question: "What is the default port number for MySQL?",
        options: ["3306", "1433", "1521", "8080"],
        correctAnswer: "3306",
      }
    ],
    intermediate: [
      {
        question: "Which normal form removes partial dependency?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correctAnswer: "2NF",
      },
      {
        question: "Which command is used to remove a table from the database?",
        options: ["DROP", "DELETE", "REMOVE", "ERASE"],
        correctAnswer: "DROP",
      },
      {
        question: "Which clause is used with aggregate functions in SQL?",
        options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
        correctAnswer: "GROUP BY",
      },
      {
        question: "What does DML stand for?",
        options: ["Data Manipulation Language", "Data Management Logic", "Database Mapping Language", "Data Multi Language"],
        correctAnswer: "Data Manipulation Language",
      },
      {
        question: "Which of the following is a DDL command?",
        options: ["CREATE", "SELECT", "UPDATE", "INSERT"],
        correctAnswer: "CREATE",
      },
      {
        question: "Which type of join returns rows that have matching values in both tables?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
        correctAnswer: "INNER JOIN",
      },
      {
        question: "Which of the following is not a valid SQL constraint?",
        options: ["PRIMARY KEY", "FOREIGN KEY", "OUTER KEY", "UNIQUE"],
        correctAnswer: "OUTER KEY",
      },
      {
        question: "What is a view in SQL?",
        options: ["A physical table", "A virtual table", "An index", "A trigger"],
        correctAnswer: "A virtual table",
      },
      {
        question: "Which key is used to refer to the primary key in another table?",
        options: ["Foreign Key", "Composite Key", "Candidate Key", "Alternate Key"],
        correctAnswer: "Foreign Key",
      },
      {
        question: "Which language is used to define the structure of a database?",
        options: ["DDL", "DML", "DCL", "TCL"],
        correctAnswer: "DDL",
      }
    ],
    advanced: [
      {
        question: "What does ACID stand for in database systems?",
        options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integrity, Durability", "Access, Consistency, Integrity, Dependability", "Atomicity, Concurrency, Isolation, Data"],
        correctAnswer: "Atomicity, Consistency, Isolation, Durability",
      },
      {
        question: "Which isolation level allows dirty reads?",
        options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
        correctAnswer: "Read Uncommitted",
      },
      {
        question: "Which of the following is used to improve database performance?",
        options: ["Index", "Trigger", "View", "Cursor"],
        correctAnswer: "Index",
      },
      {
        question: "What is the purpose of a trigger in SQL?",
        options: ["Automatically perform actions on data changes", "Create indexes", "Backup data", "Manage users"],
        correctAnswer: "Automatically perform actions on data changes",
      },
      {
        question: "Which of the following is a non-relational database?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
        correctAnswer: "MongoDB",
      },
      {
        question: "What is the purpose of normalization?",
        options: ["Remove redundancy", "Improve query speed", "Add columns", "Increase data size"],
        correctAnswer: "Remove redundancy",
      },
      {
        question: "What is a composite key?",
        options: ["A key with two or more columns", "A key that is foreign", "A key that is unique", "A key used to encrypt data"],
        correctAnswer: "A key with two or more columns",
      },
      {
        question: "Which SQL keyword is used to update existing data?",
        options: ["UPDATE", "MODIFY", "CHANGE", "SET"],
        correctAnswer: "UPDATE",
      },
      {
        question: "Which transaction property ensures that the database remains in a consistent state?",
        options: ["Consistency", "Atomicity", "Isolation", "Durability"],
        correctAnswer: "Consistency",
      },
      {
        question: "What is a deadlock in DBMS?",
        options: ["Infinite loop", "A state where two transactions wait for each other", "A lock on entire database", "Corrupted index"],
        correctAnswer: "A state where two transactions wait for each other",
      }
    ]
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

export default Dbms;
