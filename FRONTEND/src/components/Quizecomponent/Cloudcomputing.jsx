import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const Cloud=() => {
  const navigate = useNavigate();
  const allLevels = {
    beginner: [
      {
        question: "What is cloud computing?",
        options: [
          "Storing data on your computer",
          "Providing computing services over the internet",
          "Using USB drives to transfer data",
          "Building physical servers"
        ],
        correctAnswer: "Providing computing services over the internet",
      },
      {
        question: "Which of the following is NOT a service model in cloud computing?",
        options: ["IaaS", "PaaS", "SaaS", "DaaS"],
        correctAnswer: "DaaS",
      },
      {
        question: "Which cloud deployment model is accessible only within an organization?",
        options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
        correctAnswer: "Private Cloud",
      },
      {
        question: "Which company provides the AWS cloud platform?",
        options: ["Google", "Microsoft", "Amazon", "IBM"],
        correctAnswer: "Amazon",
      },
      {
        question: "What does 'SaaS' stand for?",
        options: ["Software as a Service", "System as a Solution", "Storage as a Service", "Security as a Service"],
        correctAnswer: "Software as a Service",
      },
      {
        question: "Which of the following is an example of SaaS?",
        options: ["Google Docs", "Amazon EC2", "Microsoft Azure VM", "Docker"],
        correctAnswer: "Google Docs",
      },
      {
        question: "What does 'scalability' in cloud computing mean?",
        options: [
          "Increasing or decreasing resources based on demand",
          "Fixing bugs in software",
          "Installing software on a server",
          "Backing up data"
        ],
        correctAnswer: "Increasing or decreasing resources based on demand",
      },
      {
        question: "Which cloud model combines public and private clouds?",
        options: ["Community Cloud", "Hybrid Cloud", "Public Cloud", "Private Cloud"],
        correctAnswer: "Hybrid Cloud",
      },
      {
        question: "What is the main advantage of cloud computing?",
        options: [
          "High upfront cost",
          "Limited accessibility",
          "On-demand resource availability",
          "Need for physical hardware"
        ],
        correctAnswer: "On-demand resource availability",
      },
      {
        question: "Which protocol is commonly used to access cloud services over the web?",
        options: ["HTTP", "FTP", "SMTP", "SSH"],
        correctAnswer: "HTTP",
      },
    ],
    intermediate: [
      {
        question: "What is IaaS in cloud computing?",
        options: [
          "Infrastructure as a Service",
          "Internet as a Service",
          "Integration as a Service",
          "Information as a Service"
        ],
        correctAnswer: "Infrastructure as a Service",
      },
      {
        question: "Which of these is NOT a benefit of cloud computing?",
        options: [
          "Cost Efficiency",
          "Scalability",
          "Unlimited Storage",
          "Reduced Latency"
        ],
        correctAnswer: "Reduced Latency",
      },
      {
        question: "Which tool is used for managing containers in cloud environments?",
        options: ["Kubernetes", "Git", "Jenkins", "Docker Compose"],
        correctAnswer: "Kubernetes",
      },
      {
        question: "What does elasticity mean in cloud computing?",
        options: [
          "Ability to handle increasing or decreasing workload",
          "Permanent allocation of resources",
          "Offline resource management",
          "Manual scaling of resources"
        ],
        correctAnswer: "Ability to handle increasing or decreasing workload",
      },
      {
        question: "What is a Virtual Machine (VM)?",
        options: [
          "Physical hardware",
          "Software emulation of a computer system",
          "A type of cloud service",
          "An internet protocol"
        ],
        correctAnswer: "Software emulation of a computer system",
      },
      {
        question: "Which AWS service is used for object storage?",
        options: ["EC2", "S3", "RDS", "Lambda"],
        correctAnswer: "S3",
      },
      {
        question: "What is the main purpose of load balancing?",
        options: [
          "To store data",
          "To distribute network or application traffic across servers",
          "To increase database size",
          "To secure the network"
        ],
        correctAnswer: "To distribute network or application traffic across servers",
      },
      {
        question: "Which cloud platform is developed by Microsoft?",
        options: ["Google Cloud Platform", "IBM Cloud", "Microsoft Azure", "Oracle Cloud"],
        correctAnswer: "Microsoft Azure",
      },
      {
        question: "What is multi-tenancy in cloud computing?",
        options: [
          "Multiple users share the same physical resources securely",
          "Multiple cloud providers working together",
          "Single user per server",
          "Backup of data to multiple servers"
        ],
        correctAnswer: "Multiple users share the same physical resources securely",
      },
      {
        question: "Which of these is a Platform as a Service (PaaS)?",
        options: ["Google App Engine", "Amazon EC2", "Dropbox", "GitHub"],
        correctAnswer: "Google App Engine",
      },
    ],
    advanced: [
      {
        question: "What is the CAP theorem in cloud computing?",
        options: [
          "Consistency, Availability, Partition tolerance",
          "Capacity, Access, Performance",
          "Control, Availability, Protection",
          "Compute, Access, Protocol"
        ],
        correctAnswer: "Consistency, Availability, Partition tolerance",
      },
      {
        question: "Which cloud service model allows users to deploy applications without managing the underlying infrastructure?",
        options: ["IaaS", "PaaS", "SaaS", "DaaS"],
        correctAnswer: "PaaS",
      },
      {
        question: "What is serverless computing?",
        options: [
          "Computing without servers",
          "Cloud computing model where the cloud provider manages server management",
          "Using virtual servers instead of physical ones",
          "Distributing server loads"
        ],
        correctAnswer: "Cloud computing model where the cloud provider manages server management",
      },
      {
        question: "Which protocol is often used for secure communication with cloud services?",
        options: ["HTTP", "HTTPS", "FTP", "SMTP"],
        correctAnswer: "HTTPS",
      },
      {
        question: "What does SLA stand for in cloud computing?",
        options: [
          "Service Level Agreement",
          "Server Load Average",
          "Security Log Analysis",
          "Service Location Address"
        ],
        correctAnswer: "Service Level Agreement",
      },
      {
        question: "Which AWS service is used for serverless compute?",
        options: ["Lambda", "EC2", "S3", "Elastic Beanstalk"],
        correctAnswer: "Lambda",
      },
      {
        question: "What is a container in cloud computing?",
        options: [
          "A lightweight, stand-alone executable package of software",
          "A physical server rack",
          "A cloud storage bucket",
          "A type of virtual machine"
        ],
        correctAnswer: "A lightweight, stand-alone executable package of software",
      },
      {
        question: "Which concept allows cloud providers to isolate customer data on the same physical hardware?",
        options: ["Virtualization", "Clustering", "Load Balancing", "Replication"],
        correctAnswer: "Virtualization",
      },
      {
        question: "Which type of cloud attack exploits shared resources to gain unauthorized access?",
        options: [
          "Phishing",
          "Side-channel attack",
          "Denial of Service",
          "Man-in-the-middle"
        ],
        correctAnswer: "Side-channel attack",
      },
      {
        question: "What is the main purpose of Identity and Access Management (IAM) in cloud computing?",
        options: [
          "Managing user permissions and access",
          "Storing data securely",
          "Monitoring network traffic",
          "Scaling resources"
        ],
        correctAnswer: "Managing user permissions and access",
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

export default Cloud;
