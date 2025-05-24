import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const Ai=() => {
  const navigate = useNavigate();
  const allLevels = {
    beginner: [
      {
        question: "What does AI stand for?",
        options: ["Artificial Intelligence", "Automated Input", "Advanced Interface", "Artificial Internet"],
        correctAnswer: "Artificial Intelligence",
      },
      {
        question: "Which of the following is an example of AI?",
        options: ["Calculator", "Speech recognition system", "Electric fan", "Light bulb"],
        correctAnswer: "Speech recognition system",
      },
      {
        question: "Which type of AI mimics human decision-making?",
        options: ["Narrow AI", "General AI", "Reactive Machines", "Limited Memory AI"],
        correctAnswer: "General AI",
      },
      {
        question: "What is Machine Learning?",
        options: [
          "A branch of AI that enables systems to learn from data",
          "Programming robots manually",
          "A type of hardware",
          "A database system"
        ],
        correctAnswer: "A branch of AI that enables systems to learn from data",
      },
      {
        question: "Which of these is a supervised learning algorithm?",
        options: ["Linear Regression", "K-means clustering", "Principal Component Analysis", "Apriori algorithm"],
        correctAnswer: "Linear Regression",
      },
      {
        question: "What is a dataset in AI?",
        options: [
          "A collection of data used to train AI models",
          "A software library",
          "An AI programming language",
          "A type of neural network"
        ],
        correctAnswer: "A collection of data used to train AI models",
      },
      {
        question: "Which of these is NOT a type of AI?",
        options: ["Reactive Machines", "Limited Memory", "Symbolic AI", "Circular AI"],
        correctAnswer: "Circular AI",
      },
      {
        question: "What is the goal of Natural Language Processing (NLP)?",
        options: [
          "To enable computers to understand human language",
          "To create graphics",
          "To sort numbers",
          "To compress data"
        ],
        correctAnswer: "To enable computers to understand human language",
      },
      {
        question: "Which AI technique is inspired by the human brain?",
        options: ["Decision Trees", "Neural Networks", "Support Vector Machines", "Random Forests"],
        correctAnswer: "Neural Networks",
      },
      {
        question: "What is an example of AI in everyday life?",
        options: ["Smart assistants like Alexa", "Manual calculators", "Electric heaters", "Telephones"],
        correctAnswer: "Smart assistants like Alexa",
      },
    ],
    intermediate: [
      {
        question: "What is overfitting in machine learning?",
        options: [
          "When a model learns noise instead of pattern",
          "When a model perfectly predicts all outcomes",
          "When a model has too few data points",
          "When a model runs too slow"
        ],
        correctAnswer: "When a model learns noise instead of pattern",
      },
      {
        question: "Which of the following is a popular algorithm for classification?",
        options: ["K-Nearest Neighbors", "K-Means", "Apriori", "PageRank"],
        correctAnswer: "K-Nearest Neighbors",
      },
      {
        question: "Which technique is used to reduce the dimensionality of data?",
        options: ["PCA (Principal Component Analysis)", "SVM", "Naive Bayes", "Decision Tree"],
        correctAnswer: "PCA (Principal Component Analysis)",
      },
      {
        question: "What is reinforcement learning?",
        options: [
          "Learning by receiving rewards or punishments",
          "Learning from labeled data",
          "Unsupervised grouping of data",
          "Manual rule-based learning"
        ],
        correctAnswer: "Learning by receiving rewards or punishments",
      },
      {
        question: "Which activation function is commonly used in neural networks?",
        options: ["ReLU", "Sigmoid", "Tanh", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "What does a confusion matrix show in classification?",
        options: [
          "Performance of a model by showing true/false positives/negatives",
          "Neural network structure",
          "Training data distribution",
          "Feature importance"
        ],
        correctAnswer: "Performance of a model by showing true/false positives/negatives",
      },
      {
        question: "What is the difference between AI and Machine Learning?",
        options: [
          "AI is a broader concept; ML is a subset focused on learning from data",
          "AI is hardware; ML is software",
          "AI and ML are the same",
          "ML is broader; AI is a subset"
        ],
        correctAnswer: "AI is a broader concept; ML is a subset focused on learning from data",
      },
      {
        question: "Which of the following is a common loss function in regression tasks?",
        options: ["Mean Squared Error", "Cross-Entropy", "Hinge Loss", "Log Loss"],
        correctAnswer: "Mean Squared Error",
      },
      {
        question: "What is the purpose of dropout in neural networks?",
        options: [
          "To prevent overfitting by randomly ignoring neurons during training",
          "To increase the learning rate",
          "To initialize weights",
          "To normalize data"
        ],
        correctAnswer: "To prevent overfitting by randomly ignoring neurons during training",
      },
      {
        question: "Which model is best suited for sequential data?",
        options: ["CNN", "RNN", "SVM", "KNN"],
        correctAnswer: "RNN",
      },
    ],
    advanced: [
      {
        question: "What is the vanishing gradient problem?",
        options: [
          "Gradients become very small, hindering learning in deep networks",
          "Gradients become too large causing instability",
          "Model converges too quickly",
          "Model never converges"
        ],
        correctAnswer: "Gradients become very small, hindering learning in deep networks",
      },
      {
        question: "Which optimization algorithm uses momentum to accelerate gradient descent?",
        options: ["Adam", "SGD with Momentum", "RMSProp", "AdaGrad"],
        correctAnswer: "SGD with Momentum",
      },
      {
        question: "What is a Generative Adversarial Network (GAN)?",
        options: [
          "A model with two networks competing to generate realistic data",
          "A supervised classification model",
          "A reinforcement learning method",
          "A clustering algorithm"
        ],
        correctAnswer: "A model with two networks competing to generate realistic data",
      },
      {
        question: "What does 'backpropagation' do in neural networks?",
        options: [
          "Calculates gradients to update weights",
          "Initializes weights randomly",
          "Feeds input data forward",
          "Reduces overfitting"
        ],
        correctAnswer: "Calculates gradients to update weights",
      },
      {
        question: "Which technique is used to explain the predictions of complex models?",
        options: ["LIME", "PCA", "Batch Normalization", "Dropout"],
        correctAnswer: "LIME",
      },
      {
        question: "What is the role of the 'softmax' function in classification tasks?",
        options: [
          "Converts raw scores to probabilities",
          "Normalizes input data",
          "Reduces dimensionality",
          "Preprocesses images"
        ],
        correctAnswer: "Converts raw scores to probabilities",
      },
      {
        question: "Which method helps combat class imbalance in datasets?",
        options: ["SMOTE", "PCA", "Cross-Validation", "Bagging"],
        correctAnswer: "SMOTE",
      },
      {
        question: "Which framework is primarily used for deep learning?",
        options: ["TensorFlow", "Scikit-learn", "Pandas", "Matplotlib"],
        correctAnswer: "TensorFlow",
      },
      {
        question: "What is 'transfer learning' in AI?",
        options: [
          "Using a pre-trained model on a new task",
          "Training from scratch every time",
          "Copying data between models",
          "Scaling data before training"
        ],
        correctAnswer: "Using a pre-trained model on a new task",
      },
      {
        question: "Which AI concept involves agents interacting with an environment to maximize rewards?",
        options: [
          "Reinforcement Learning",
          "Supervised Learning",
          "Unsupervised Learning",
          "Deep Learning"
        ],
        correctAnswer: "Reinforcement Learning",
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

export default Ai;
