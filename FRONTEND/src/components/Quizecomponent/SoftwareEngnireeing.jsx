import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const Se=() => {
  const navigate = useNavigate();
  const allLevels = {
    beginner: [
      {
        question: "What is Software Engineering?",
        options: [
          "The process of designing hardware",
          "The application of engineering to software development",
          "Writing code only",
          "Testing software only"
        ],
        correctAnswer: "The application of engineering to software development",
      },
      {
        question: "Which model follows a linear sequential flow?",
        options: ["Agile Model", "Waterfall Model", "Spiral Model", "Iterative Model"],
        correctAnswer: "Waterfall Model",
      },
      {
        question: "What is a software requirement specification (SRS)?",
        options: [
          "A design document",
          "A document describing software requirements",
          "Code documentation",
          "Test plan"
        ],
        correctAnswer: "A document describing software requirements",
      },
      {
        question: "Which of the following is NOT a phase in the software development life cycle (SDLC)?",
        options: ["Requirement analysis", "Coding", "Marketing", "Testing"],
        correctAnswer: "Marketing",
      },
      {
        question: "What is the main purpose of software testing?",
        options: [
          "To find bugs",
          "To write code",
          "To design user interfaces",
          "To document software"
        ],
        correctAnswer: "To find bugs",
      },
      {
        question: "Which of these is a type of software maintenance?",
        options: ["Corrective", "Constructive", "Destructive", "Selective"],
        correctAnswer: "Corrective",
      },
      {
        question: "What does UML stand for?",
        options: [
          "Unified Modeling Language",
          "Universal Modeling Language",
          "Unified Machine Language",
          "Universal Machine Language"
        ],
        correctAnswer: "Unified Modeling Language",
      },
      {
        question: "What is a use case in software engineering?",
        options: [
          "A programming language",
          "A description of system behavior from user perspective",
          "A database schema",
          "A test case"
        ],
        correctAnswer: "A description of system behavior from user perspective",
      },
      {
        question: "What is the primary goal of requirements engineering?",
        options: [
          "Gather and analyze user needs",
          "Write source code",
          "Design the UI",
          "Test the software"
        ],
        correctAnswer: "Gather and analyze user needs",
      },
      {
        question: "What does SDLC stand for?",
        options: [
          "Software Development Life Cycle",
          "System Development Life Cycle",
          "Software Design Life Cycle",
          "System Design Life Cycle"
        ],
        correctAnswer: "Software Development Life Cycle",
      },
    ],
    intermediate: [
      {
        question: "Which software process model emphasizes iterative development and customer collaboration?",
        options: ["Waterfall", "Agile", "V-Model", "Big Bang"],
        correctAnswer: "Agile",
      },
      {
        question: "What is the main advantage of the Spiral model?",
        options: [
          "Simple to understand",
          "Incorporates risk analysis",
          "Faster development",
          "No documentation needed"
        ],
        correctAnswer: "Incorporates risk analysis",
      },
      {
        question: "Which diagram shows the flow of control in a system?",
        options: ["Use Case Diagram", "Class Diagram", "Activity Diagram", "Deployment Diagram"],
        correctAnswer: "Activity Diagram",
      },
      {
        question: "What is coupling in software design?",
        options: [
          "Degree of interdependence between modules",
          "Size of a module",
          "Number of classes in a package",
          "Amount of data a program processes"
        ],
        correctAnswer: "Degree of interdependence between modules",
      },
      {
        question: "What is cohesion in software modules?",
        options: [
          "Degree to which elements belong together",
          "Degree of dependency on other modules",
          "Number of lines of code",
          "Number of functions in a module"
        ],
        correctAnswer: "Degree to which elements belong together",
      },
      {
        question: "Which testing technique is based on the internal logic of the code?",
        options: ["Black-box testing", "White-box testing", "Acceptance testing", "Regression testing"],
        correctAnswer: "White-box testing",
      },
      {
        question: "What is the purpose of version control systems?",
        options: [
          "Manage changes to source code",
          "Design software architecture",
          "Write test cases",
          "Manage software deployment"
        ],
        correctAnswer: "Manage changes to source code",
      },
      {
        question: "Which of the following is NOT a software quality attribute?",
        options: ["Maintainability", "Reliability", "Cost", "Usability"],
        correctAnswer: "Cost",
      },
      {
        question: "In Agile methodology, what is a 'sprint'?",
        options: [
          "A short, time-boxed period of development",
          "A project kickoff meeting",
          "The final release phase",
          "A bug tracking system"
        ],
        correctAnswer: "A short, time-boxed period of development",
      },
      {
        question: "Which model focuses heavily on verification and validation?",
        options: ["Waterfall", "V-Model", "Spiral", "Agile"],
        correctAnswer: "V-Model",
      },
    ],
    advanced: [
      {
        question: "What is the primary purpose of software configuration management?",
        options: [
          "Track and control changes in software",
          "Develop software faster",
          "Automate testing",
          "Manage hardware configurations"
        ],
        correctAnswer: "Track and control changes in software",
      },
      {
        question: "Which design principle states that a class should have only one reason to change?",
        options: [
          "Open/Closed Principle",
          "Single Responsibility Principle",
          "Liskov Substitution Principle",
          "Dependency Inversion Principle"
        ],
        correctAnswer: "Single Responsibility Principle",
      },
      {
        question: "What is formal verification in software engineering?",
        options: [
          "Manual code review",
          "Using mathematical methods to prove correctness",
          "Dynamic testing",
          "User acceptance testing"
        ],
        correctAnswer: "Using mathematical methods to prove correctness",
      },
      {
        question: "Which metrics are used to measure software complexity?",
        options: [
          "Lines of Code (LOC)",
          "Cyclomatic Complexity",
          "Function Points",
          "All of the above"
        ],
        correctAnswer: "All of the above",
      },
      {
        question: "What is the key difference between functional and non-functional requirements?",
        options: [
          "Functional describes what the system should do; non-functional describes how well it performs",
          "Functional is about design; non-functional is about code",
          "Functional is for developers; non-functional is for testers",
          "There is no difference"
        ],
        correctAnswer: "Functional describes what the system should do; non-functional describes how well it performs",
      },
      {
        question: "Which software development approach integrates testing throughout the development lifecycle?",
        options: ["Waterfall", "Test Driven Development (TDD)", "Big Bang", "Prototyping"],
        correctAnswer: "Test Driven Development (TDD)",
      },
      {
        question: "What is the role of a software architect?",
        options: [
          "Writing code",
          "Designing the overall system structure",
          "Managing test cases",
          "Customer support"
        ],
        correctAnswer: "Designing the overall system structure",
      },
      {
        question: "Which of the following is true about 'Agile Manifesto'?",
        options: [
          "It values processes and tools over individuals",
          "It prioritizes working software over comprehensive documentation",
          "It discourages customer collaboration",
          "It advocates for rigid planning"
        ],
        correctAnswer: "It prioritizes working software over comprehensive documentation",
      },
      {
        question: "What is a design pattern?",
        options: [
          "A reusable solution to a common software problem",
          "A type of programming language",
          "A testing technique",
          "A software development methodology"
        ],
        correctAnswer: "A reusable solution to a common software problem",
      },
      {
        question: "What is the main benefit of using CASE tools?",
        options: [
          "Automate software development tasks",
          "Write faster code",
          "Replace human testers",
          "Reduce hardware costs"
        ],
        correctAnswer: "Automate software development tasks",
      },
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

export default Se;
