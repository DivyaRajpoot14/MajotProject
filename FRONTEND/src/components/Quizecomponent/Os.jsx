import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Howl } from "howler";
const  Os=()=>{
    const questions = [
 
            {
              question: "Which of the following is not a function of the operating system?",
              options: ["Memory Management", "Virus Scanning", "File Management", "Process Management"],
              correctAnswer: "Virus Scanning"
            },
            {
              question: "Which of these is a type of real-time operating system?",
              options: ["Windows 10", "Linux", "VxWorks", "macOS"],
              correctAnswer: "VxWorks"
            },
            {
              question: "The kernel is:",
              options: ["The part of OS that interfaces with the user", "A programming language", "The core part of the OS", "The shell of the OS"],
              correctAnswer: "The core part of the OS"
            },
            {
              question: "Which scheduling algorithm gives the minimum average waiting time?",
              options: ["FCFS", "SJF", "Round Robin", "Priority Scheduling"],
              correctAnswer: "SJF"
            },
            {
              question: "Which of the following is a non-preemptive scheduling algorithm?",
              options: ["Round Robin", "SJF (Shortest Job First)", "Priority Scheduling", "Multilevel Queue"],
              correctAnswer: "SJF (Shortest Job First)"
            },
            {
              question: "Which of the following is not a type of OS?",
              options: ["Batch", "Time-sharing", "Multiprocessing", "C++"],
              correctAnswer: "C++"
            },
            {
              question: "A process is:",
              options: ["A program in execution", "A part of the compiler", "A system call", "A hardware component"],
              correctAnswer: "A program in execution"
            },
            {
              question: "Thrashing is:",
              options: ["A high CPU usage", "A condition where the system spends most of its time swapping", "A high memory usage", "A process waiting for I/O"],
              correctAnswer: "A condition where the system spends most of its time swapping"
            },
            {
              question: "Which system call is used to create a new process in UNIX?",
              options: ["create()", "fork()", "exec()", "init()"],
              correctAnswer: "fork()"
            },
            {
              question: "Which of these is not a page replacement algorithm?",
              options: ["LRU", "FIFO", "Optimal", "DFS"],
              correctAnswer: "DFS"
            },
            {
              question: "Which memory management technique suffers from external fragmentation?",
              options: ["Paging", "Segmentation", "Demand Paging", "None of the above"],
              correctAnswer: "Segmentation"
            },
            {
              question: "What is the use of a semaphore?",
              options: ["To execute I/O operations", "To manage file systems", "To handle deadlocks", "For process synchronization"],
              correctAnswer: "For process synchronization"
            },
            {
              question: "Deadlock occurs when:",
              options: ["Processes run without waiting", "Each process is waiting for a resource held by another", "CPU is underutilized", "All processes are in ready state"],
              correctAnswer: "Each process is waiting for a resource held by another"
            },
            {
              question: "Which of the following is a condition for deadlock?",
              options: ["Preemption", "Mutual Exclusion", "Spooling", "Demand Paging"],
              correctAnswer: "Mutual Exclusion"
            },
            {
              question: "Which of the following is responsible for loading the OS into memory?",
              options: ["Compiler", "Loader", "Linker", "Bootloader"],
              correctAnswer: "Bootloader"
            },
            {
              question: "Virtual memory is:",
              options: ["Memory on the processor", "Part of the hard disk used as RAM", "Only present in real-time systems", "Unused RAM"],
              correctAnswer: "Part of the hard disk used as RAM"
            },
            {
              question: "Which of the following is a disk scheduling algorithm?",
              options: ["FCFS", "SSTF", "Round Robin", "SJF"],
              correctAnswer: "SSTF"
            },
            {
              question: "What is a system call?",
              options: ["Call to the OS kernel by a user program", "Call to the BIOS", "A hardware interrupt", "A call from OS to user program"],
              correctAnswer: "Call to the OS kernel by a user program"
            },
            {
              question: "Which scheduling algorithm is used in time-sharing systems?",
              options: ["FCFS", "Round Robin", "SJF", "Priority Scheduling"],
              correctAnswer: "Round Robin"
            },
            {
              question: "Which OS runs on smartphones?",
              options: ["Android", "DOS", "Windows XP", "Ubuntu Server"],
              correctAnswer: "Android"
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
                        
                        
          
    
  export default Os;