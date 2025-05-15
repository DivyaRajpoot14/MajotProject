import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Howl } from "howler";
const  Asp=()=>{
    const questions=[
        {
          question: "ASP.NET is a part of which framework?",
          options: [".NET Framework", "J2EE", "Spring", "Angular"],
          correctAnswer: ".NET Framework"
        },
        {
          question: "Which language can be used to code in ASP.NET?",
          options: ["C#", "VB.NET", "Both C# and VB.NET", "Java"],
          correctAnswer: "Both C# and VB.NET"
        },
        {
          question: "What does ASP stand for?",
          options: ["Advanced Server Pages", "Active Server Pages", "Application Server Pages", "Active Script Pages"],
          correctAnswer: "Active Server Pages"
        },
        {
          question: "Which file extension is used for ASP.NET web forms?",
          options: [".aspx", ".asp", ".html", ".cs"],
          correctAnswer: ".aspx"
        },
        {
          question: "Which server control is used to link to another page?",
          options: ["<asp:Button>", "<asp:LinkButton>", "<asp:HyperLink>", "<asp:Redirect>"],
          correctAnswer: "<asp:HyperLink>"
        },
        {
          question: "Which method is used to send data from one page to another in ASP.NET?",
          options: ["Server.Transfer", "Session.Redirect", "Page.Redirect", "Data.Push"],
          correctAnswer: "Server.Transfer"
        },
        {
          question: "Which object is used to store user-specific information in ASP.NET?",
          options: ["Application", "Session", "Cache", "ViewState"],
          correctAnswer: "Session"
        },
        {
          question: "What is ViewState used for in ASP.NET?",
          options: ["Store server data", "Store session state", "Store page and control values", "Store cookie data"],
          correctAnswer: "Store page and control values"
        },
        {
          question: "Which directive defines page-specific attributes in ASP.NET?",
          options: ["<%@ Page %>", "<%@ Import %>", "<%@ Assembly %>", "<%@ OutputCache %>"],
          correctAnswer: "<%@ Page %>"
        },
        {
          question: "What is the default event for a Button control in ASP.NET?",
          options: ["Click", "Load", "Submit", "Init"],
          correctAnswer: "Click"
        },
        {
          question: "Which control is used to display data in a tabular format?",
          options: ["GridView", "Repeater", "DataList", "ListView"],
          correctAnswer: "GridView"
        },
        {
          question: "What is the use of the Web.config file?",
          options: ["Configure application settings", "Compile the application", "Store HTML code", "Configure IIS"],
          correctAnswer: "Configure application settings"
        },
        {
          question: "Which authentication mode is NOT supported by ASP.NET?",
          options: ["Windows", "Forms", "Passport", "MySQL"],
          correctAnswer: "MySQL"
        },
        {
          question: "What does IIS stand for?",
          options: ["Internet Information Server", "Internal Internet Server", "Information Integration System", "Internet Installation System"],
          correctAnswer: "Internet Information Server"
        },
        {
          question: "What is the main purpose of the Global.asax file?",
          options: ["Define global settings and application events", "Write HTML", "Manage client-side scripts", "Connect to databases"],
          correctAnswer: "Define global settings and application events"
        },
        {
          question: "Which control allows for repeated data-bound content?",
          options: ["Repeater", "GridView", "Label", "Textbox"],
          correctAnswer: "Repeater"
        },
        {
          question: "What is postback in ASP.NET?",
          options: ["Sending data from client to server", "Refreshing the browser", "Navigating to another page", "Reposting a form to the server"],
          correctAnswer: "Reposting a form to the server"
        },
        {
          question: "Which object is used to manage application-level information?",
          options: ["Application", "Session", "ViewState", "Server"],
          correctAnswer: "Application"
        },
        {
          question: "What is the default session timeout in ASP.NET?",
          options: ["10 minutes", "20 minutes", "30 minutes", "60 minutes"],
          correctAnswer: "20 minutes"
        },
        {
          question: "Which component is responsible for compiling ASP.NET pages?",
          options: ["CLR", "JIT", "ASP.NET Engine", "ASP.NET Compiler"],
          correctAnswer: "ASP.NET Compiler"
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
                        
                        
          
    
  export default Asp;