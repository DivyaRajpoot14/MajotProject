
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Howl } from "howler";
const  Ai=()=>{
    const questions = [
        {
          question: "Who is known as the father of Artificial Intelligence?",
          options: ["Alan Turing", "John McCarthy", "Geoffrey Hinton", "Marvin Minsky"],
          correctAnswer: "John McCarthy"
        },
        {
          question: "Which language is commonly used for AI programming?",
          options: ["Python", "HTML", "PHP", "CSS"],
          correctAnswer: "Python"
        },
        {
          question: "What is the goal of Artificial Intelligence?",
          options: ["To create computer programs", "To solve complex problems", "To simulate human intelligence", "To develop websites"],
          correctAnswer: "To simulate human intelligence"
        },
        {
          question: "Which of the following is a type of AI?",
          options: ["Narrow AI", "Broad AI", "Specific AI", "Light AI"],
          correctAnswer: "Narrow AI"
        },
        {
          question: "Which AI technique is inspired by the human brain?",
          options: ["Genetic Algorithms", "Neural Networks", "Fuzzy Logic", "Expert Systems"],
          correctAnswer: "Neural Networks"
        },
        {
          question: "Which of these is an application of AI?",
          options: ["Spam filtering", "Compiler design", "Operating systems", "File management"],
          correctAnswer: "Spam filtering"
        },
        {
          question: "What is the Turing Test used for?",
          options: ["Measuring memory", "Testing web speed", "Evaluating AI intelligence", "Comparing programming languages"],
          correctAnswer: "Evaluating AI intelligence"
        },
        {
          question: "Which AI algorithm is used for pathfinding?",
          options: ["K-Means", "Minimax", "A*", "Naive Bayes"],
          correctAnswer: "A*"
        },
        {
          question: "Which of the following is not a machine learning type?",
          options: ["Supervised", "Unsupervised", "Reinforcement", "Descriptive"],
          correctAnswer: "Descriptive"
        },
        {
          question: "Which AI technique deals with uncertainty?",
          options: ["Neural networks", "Fuzzy logic", "Linear regression", "Decision trees"],
          correctAnswer: "Fuzzy logic"
        },
        {
          question: "Which one is an example of voice-based AI?",
          options: ["Siri", "Google Chrome", "MS Word", "Photoshop"],
          correctAnswer: "Siri"
        },
        {
          question: "What is the primary function of a knowledge base in an expert system?",
          options: ["Data storage", "Programming", "Storing rules and facts", "UI rendering"],
          correctAnswer: "Storing rules and facts"
        },
        {
          question: "What is an agent in AI?",
          options: ["A human interface", "A smart sensor", "An entity that perceives and acts", "A code debugger"],
          correctAnswer: "An entity that perceives and acts"
        },
        {
          question: "Which is NOT a component of AI?",
          options: ["Learning", "Reasoning", "Sensing", "Compiling"],
          correctAnswer: "Compiling"
        },
        {
          question: "What is used to represent knowledge in AI?",
          options: ["Knowledge Graphs", "Syntax Trees", "XML", "Tables"],
          correctAnswer: "Knowledge Graphs"
        },
        {
          question: "Which of the following is used for AI model training?",
          options: ["Labeled data", "JavaScript", "Unindexed files", "JSON"],
          correctAnswer: "Labeled data"
        },
        {
          question: "What is backpropagation used for?",
          options: ["Encrypting data", "Training neural networks", "Sorting arrays", "Compiling programs"],
          correctAnswer: "Training neural networks"
        },
        {
          question: "What is the output of a classification model?",
          options: ["Number", "Category", "Graph", "Image"],
          correctAnswer: "Category"
        },
        {
          question: "What type of learning occurs with rewards and punishments?",
          options: ["Supervised", "Unsupervised", "Reinforcement", "Active"],
          correctAnswer: "Reinforcement"
        },
        {
          question: "Which AI technique is used in recommendation systems?",
          options: ["Rule-based systems", "Clustering", "Collaborative filtering", "Fuzzy logic"],
          correctAnswer: "Collaborative filtering"
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
                        
                        
          
    
  export default Ai;