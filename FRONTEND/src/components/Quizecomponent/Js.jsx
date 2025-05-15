import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Howl } from "howler";


const Js=()=>{
    const questions = [
      
    
              {
                "question": "What is the correct syntax to print a message in the console in JavaScript?",
                "options": [
                  "console.print('Hello, World!');",
                  "console.log('Hello, World!');",
                  "log.console('Hello, World!');",
                  "print.console('Hello, World!');"
                ],
                "correctAnswer": "console.log('Hello, World!');"
              },
              {
                "question": "Which of the following is not a valid JavaScript data type?",
                "options": [
                  "String",
                  "Boolean",
                  "Float",
                  "Number"
                ],
                "correctAnswer": "Float"
              },
              {
                "question": "What does the '==' operator do in JavaScript?",
                "options": [
                  "Compares two values for equality without type conversion",
                  "Compares two values for equality with type conversion",
                  "Assigns a value to a variable",
                  "Checks if a value is greater than another"
                ],
                "correctAnswer": "Compares two values for equality with type conversion"
              },
              {
                "question": "Which method is used to remove the last element from an array in JavaScript?",
                "options": [
                  "pop()",
                  "remove()",
                  "shift()",
                  "delete()"
                ],
                "correctAnswer": "pop()"
              },
              {
                "question": "What is the output of 'typeof null' in JavaScript?",
                "options": [
                  "object",
                  "null",
                  "undefined",
                  "boolean"
                ],
                "correctAnswer": "object"
              },
              {
                "question": "How do you declare a variable in JavaScript?",
                "options": [
                  "var",
                  "let",
                  "const",
                  "All of the above"
                ],
                "correctAnswer": "All of the above"
              },
              {
                "question": "Which of the following is used to define a function in JavaScript?",
                "options": [
                  "function myFunction()",
                  "def myFunction()",
                  "create function myFunction()",
                  "func myFunction()"
                ],
                "correctAnswer": "function myFunction()"
              },
              {
                "question": "What is the default value of an uninitialized variable in JavaScript?",
                "options": [
                  "undefined",
                  "null",
                  "NaN",
                  "false"
                ],
                "correctAnswer": "undefined"
              },
              {
                "question": "Which event is triggered when a user clicks on an element in JavaScript?",
                "options": [
                  "onmouseover",
                  "onclick",
                  "onkeydown",
                  "onload"
                ],
                "correctAnswer": "onclick"
              },
              {
                "question": "What is the result of the following expression: '5' + 5 in JavaScript?",
                "options": [
                  "55",
                  "10",
                  "undefined",
                  "Error"
                ],
                "correctAnswer": "55"
              },
              {
                "question": "How do you create an object in JavaScript?",
                "options": [
                  "var obj = []",
                  "var obj = {}",
                  "var obj = ()",
                  "var obj = <>"
                ],
                "correctAnswer": "var obj = {}"
              },
              {
                "question": "Which method is used to add an element to the end of an array in JavaScript?",
                "options": [
                  "push()",
                  "pop()",
                  "shift()",
                  "unshift()"
                ],
                "correctAnswer": "push()"
              },
              {
                "question": "Which of the following is a loop structure in JavaScript?",
                "options": [
                  "for",
                  "while",
                  "do...while",
                  "All of the above"
                ],
                "correctAnswer": "All of the above"
              },
              {
                "question": "What does the 'this' keyword refer to in JavaScript?",
                "options": [
                  "The global object",
                  "The function in which it is used",
                  "The object calling the function",
                  "The document object"
                ],
                "correctAnswer": "The object calling the function"
              },
              {
                "question": "What is the purpose of the 'return' statement in JavaScript?",
                "options": [
                  "Exit the function and return a value",
                  "Create a new function",
                  "Define a variable inside a function",
                  "Exit the loop"
                ],
                "correctAnswer": "Exit the function and return a value"
              },
              {
                "question": "What is the result of 'false + 1' in JavaScript?",
                "options": [
                  "NaN",
                  "false",
                  "1",
                  "0"
                ],
                "correctAnswer": "1"
              },
              {
                "question": "How can you add a comment in JavaScript?",
                "options": [
                  "// This is a comment",
                  "/* This is a comment */",
                  "/* This is a comment",
                  "Both // and /* are valid"
                ],
                "correctAnswer": "Both // and /* are valid"
              },
              {
                "question": "Which operator is used to assign a value to a variable in JavaScript?",
                "options": [
                  "=",
                  ":",
                  "==",
                  "=>"
                ],
                "correctAnswer": "="
              },
              {
                "question": "Which method is used to find the length of a string in JavaScript?",
                "options": [
                  "length()",
                  "size()",
                  "str.length",
                  "getLength()"
                ],
                "correctAnswer": "str.length"
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
      
      
  export default  Js;