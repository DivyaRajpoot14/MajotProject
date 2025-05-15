
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Howl } from "howler";

const Dbms = () => {
  const navigate = useNavigate();
    
    const questions = [
      
          {
            "question": "Which of the following is a database management system?",
            "options": ["MySQL", "Google Chrome", "Adobe Photoshop", "Linux"],
            "correctAnswer": "MySQL"
          },
          {
            "question": "What does ACID stand for in the context of a database?",
            "options": [
              "Access, Consistency, Isolation, Durability",
              "Atomicity, Consistency, Isolation, Durability",
              "Atomicity, Concurrency, Integrity, Durability",
              "Access, Control, Integrity, Durability"
            ],
            "correctAnswer": "Atomicity, Consistency, Isolation, Durability"
          },
          {
            "question": "Which of the following is not a type of database model?",
            "options": ["Hierarchical", "Relational", "Network", "Transitional"],
            "correctAnswer": "Transitional"
          },
          {
            "question": "In a relational database, a row is also called a:",
            "options": ["Table", "Field", "Tuple", "Schema"],
            "correctAnswer": "Tuple"
          },
          {
            "question": "What is the purpose of a primary key in a database?",
            "options": [
              "To uniquely identify a record",
              "To establish a connection between tables",
              "To allow duplicate records",
              "To store encrypted data"
            ],
            "correctAnswer": "To uniquely identify a record"
          },
          {
            "question": "Which SQL command is used to retrieve data from a database?",
            "options": ["SELECT", "INSERT", "DELETE", "UPDATE"],
            "correctAnswer": "SELECT"
          },
          {
            "question": "What is a foreign key in a database?",
            "options": [
              "A unique key in a table",
              "A primary key in another table",
              "A key used to delete a table",
              "A key used to encrypt data"
            ],
            "correctAnswer": "A primary key in another table"
          },
          {
            "question": "Which of the following is not a type of SQL join?",
            "options": ["INNER JOIN", "OUTER JOIN", "CROSS JOIN", "UPPER JOIN"],
            "correctAnswer": "UPPER JOIN"
          },
          {
            "question": "What is normalization in DBMS?",
            "options": [
              "The process of organizing data to minimize redundancy",
              "The process of backing up a database",
              "The process of encrypting a database",
              "The process of scaling a database"
            ],
            "correctAnswer": "The process of organizing data to minimize redundancy"
          },
          {
            "question": "Which level of abstraction describes how the data is stored?",
            "options": ["Logical level", "Physical level", "View level", "Data level"],
            "correctAnswer": "Physical level"
          },
          {
            "question": "Which of the following is an example of a NoSQL database?",
            "options": ["Oracle", "MongoDB", "PostgreSQL", "MySQL"],
            "correctAnswer": "MongoDB"
          },
          {
            "question": "What is a trigger in a database?",
            "options": [
              "A stored procedure executed automatically in response to an event",
              "A key used to retrieve data",
              "A backup operation",
              "A type of join operation"
            ],
            "correctAnswer": "A stored procedure executed automatically in response to an event"
          },
          {
            "question": "Which of the following is used to enforce a relationship between tables?",
            "options": ["Foreign key", "Unique key", "Index", "Trigger"],
            "correctAnswer": "Foreign key"
          },
          {
            "question": "What is the full form of DDL in DBMS?",
            "options": [
              "Data Definition Language",
              "Data Description Language",
              "Database Definition Language",
              "Database Description Language"
            ],
            "correctAnswer": "Data Definition Language"
          },
          {
            "question": "Which of the following is not a DML command?",
            "options": ["SELECT", "UPDATE", "DELETE", "CREATE"],
            "correctAnswer": "CREATE"
          },
          {
            "question": "Which database property ensures that changes made by a transaction are saved permanently?",
            "options": ["Atomicity", "Consistency", "Isolation", "Durability"],
            "correctAnswer": "Durability"
          },
          {
            "question": "What is the main purpose of an index in a database?",
            "options": [
              "To speed up query processing",
              "To store relationships between tables",
              "To increase data redundancy",
              "To enforce constraints"
            ],
            "correctAnswer": "To speed up query processing"
          },
          {
            "question": "What is a view in a database?",
            "options": [
              "A virtual table derived from one or more tables",
              "A physical copy of a table",
              "An encrypted table",
              "A backup table"
            ],
            "correctAnswer": "A virtual table derived from one or more tables"
          },
          {
            "question": "What does the term 'tuple' refer to in the context of relational databases?",
            "options": ["A column", "A row", "A table", "A database"],
            "correctAnswer": "A row"
          },
          {
            "question": "Which of the following ensures data integrity in a database?",
            "options": ["Constraints", "Indexes", "Triggers", "Views"],
            "correctAnswer": "Constraints"
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

export default Dbms;
