// import NavBar from "../Navbar"
// import SubNavbar from "../SubNavbar";
// import React, { useState } from "react";

// const Java=()=>{
//     const questions = [
     
//           {
//             "question": "Which of the following is not a Java feature?",
//             "options": ["Object-oriented", "Use of pointers", "Platform independent", "Robust"],
//             "correctAnswer": "Use of pointers"
//           },
//           {
//             "question": "Which data type is used to store decimal numbers in Java?",
//             "options": ["int", "float", "boolean", "char"],
//             "correctAnswer": "float"
//           },
//           {
//             "question": "Which of the following is used to define a constant in Java?",
//             "options": ["const", "constant", "final", "static"],
//             "correctAnswer": "final"
//           },
//           {
//             "question": "Which method is used to start the execution of a Java program?",
//             "options": ["main()", "start()", "run()", "execute()"],
//             "correctAnswer": "main()"
//           },
//           {
//             "question": "Which keyword is used to inherit a class in Java?",
//             "options": ["extends", "implements", "inherits", "super"],
//             "correctAnswer": "extends"
//           },
//           {
//             "question": "Which of the following is a superclass of every class in Java?",
//             "options": ["Object", "Class", "Main", "Superclass"],
//             "correctAnswer": "Object"
//           },
//           {
//             "question": "Which operator is used to compare two values in Java?",
//             "options": ["=", "==", "equals", "!="],
//             "correctAnswer": "=="
//           },
//           {
//             "question": "What is the size of an int data type in Java?",
//             "options": ["8 bytes", "4 bytes", "2 bytes", "Depends on the platform"],
//             "correctAnswer": "4 bytes"
//           },
//           {
//             "question": "Which of these is a valid declaration of a package in Java?",
//             "options": ["package mypackage;", "Package mypackage;", "package: mypackage;", "pack mypackage;"],
//             "correctAnswer": "package mypackage;"
//           },
//           {
//             "question": "What is the default value of a local variable in Java?",
//             "options": ["0", "null", "Garbage value", "No default value"],
//             "correctAnswer": "No default value"
//           },
//           {
//             "question": "Which of the following is not a Java keyword?",
//             "options": ["static", "try", "virtual", "final"],
//             "correctAnswer": "virtual"
//           },
//           {
//             "question": "What is the return type of the hashCode() method in Java?",
//             "options": ["int", "float", "double", "long"],
//             "correctAnswer": "int"
//           },
//           {
//             "question": "Which keyword is used to handle exceptions in Java?",
//             "options": ["try", "catch", "throw", "All of the above"],
//             "correctAnswer": "All of the above"
//           },
//           {
//             "question": "Which of the following statements is true about constructors in Java?",
//             "options": [
//               "Constructors must have the same name as the class",
//               "Constructors can be called directly like regular methods",
//               "Constructors have a return type",
//               "Constructors cannot take parameters"
//             ],
//             "correctAnswer": "Constructors must have the same name as the class"
//           },
//           {
//             "question": "What is the purpose of the 'super' keyword in Java?",
//             "options": [
//               "To create a superclass",
//               "To call a superclass constructor or method",
//               "To define a subclass",
//               "To end a program"
//             ],
//             "correctAnswer": "To call a superclass constructor or method"
//           },
//           {
//             "question": "Which of the following can be used to generate an infinite loop in Java?",
//             "options": ["for(;;)", "while(true)", "do-while(true)", "All of the above"],
//             "correctAnswer": "All of the above"
//           },
//           {
//             "question": "What is the use of the 'this' keyword in Java?",
//             "options": [
//               "To refer to the current object",
//               "To refer to a parent class",
//               "To call a static method",
//               "To refer to an external file"
//             ],
//             "correctAnswer": "To refer to the current object"
//           },
//           {
//             "question": "What is the purpose of the 'finalize()' method in Java?",
//             "options": [
//               "To define a final method",
//               "To clean up resources before an object is destroyed",
//               "To terminate a program",
//               "To initialize an object"
//             ],
//             "correctAnswer": "To clean up resources before an object is destroyed"
//           },
//           {
//             "question": "Which of the following is not a wrapper class in Java?",
//             "options": ["Integer", "Character", "Double", "String"],
//             "correctAnswer": "String"
//           },
//           {
//             "question": "Which of these allows the creation of a thread in Java?",
//             "options": ["Runnable interface", "Thread class", "Both", "None of the above"],
//             "correctAnswer": "Both"
//           }
       
      
//       ];
    
//       const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//       const [selectedOption, setSelectedOption] = useState(null);
//       const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    
//       const currentQuestion = questions[currentQuestionIndex];
    
//       const handleOptionSelect = (option) => {
//         setSelectedOption(option);
//         setShowCorrectAnswer(false);
//       };
    
//       const handleNext = () => {
//         if (currentQuestionIndex < questions.length - 1) {
//           setCurrentQuestionIndex(currentQuestionIndex + 1);
//           setSelectedOption(null);
//           setShowCorrectAnswer(false);
//         }
//       };
    
//       const handlePrevious = () => {
//         if (currentQuestionIndex > 0) {
//           setCurrentQuestionIndex(currentQuestionIndex - 1);
//           setSelectedOption(null);
//           setShowCorrectAnswer(false);
//         }
//       };
    
//       const progressPercentage =
//         ((currentQuestionIndex + 1) / questions.length) * 100;
    
// return(
//     <>
   
//     <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4">
//     <SubNavbar/>
//  <div className="w-[50dvw] h-[60dvh] mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
//       {/* Progress Bar */}
//       <div className="relative w-full bg-gray-200 rounded-full h-4 mb-6">
//         <div
//           className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full"
//           style={{ width: `${progressPercentage}%` }}
//         ></div>
//       </div>
//       {/* Question */}
//       <h2 className="text-lg font-semibold text-gray-800 mb-4">
//         Question {currentQuestionIndex + 1}: {currentQuestion.question}
//       </h2>
//       {/* Options */}
//       <div className="space-y-4">
//         {currentQuestion.options.map((option, index) => (
//           <button
//             key={index}
//             onClick={() => handleOptionSelect(option)}
//             className={`w-full px-4 py-2 text-left border rounded-lg hover:bg-gray-100 transition-colors ${
//               selectedOption === option
//                 ? selectedOption === currentQuestion.correctAnswer
//                   ? "border-green-500 bg-green-50"
//                   : "border-red-500 bg-red-50"
//                 : ""
//             }`}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//       {/* Correct Answer */}
//       {showCorrectAnswer && (
//         <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-700">
//           <p>
//             Correct Answer:{" "}
//             <span className="font-bold">{currentQuestion.correctAnswer}</span>
//           </p>

//         </div>
//       )}
//       {/* Navigation Buttons */}
//       <div className="flex justify-between items-center mt-6">
//         <button
//           onClick={handlePrevious}
//           disabled={currentQuestionIndex === 0}
//           className={`px-4 py-2 rounded-lg ${
//             currentQuestionIndex === 0
//               ? "bg-gray-300 text-gray-600"
//               : "bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
//           }`}
//         >
//           Previous
//         </button>
//         <button
//           onClick={() => setShowCorrectAnswer(true)}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//         >
//           View Correct Answer
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentQuestionIndex === questions.length - 1}
//           className={`px-4 py-2 rounded-lg ${
//             currentQuestionIndex === questions.length - 1
//               ? "bg-gray-300 text-gray-600"
//               : "bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
//           }`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//     </div>    
//     </>
// )}
//   export default  Java;
// src/pages/Java.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Howl } from "howler";

const Java = () => {
  const navigate = useNavigate();
  const questions = [
    {
      question: "Which of the following is a valid declaration of a Java variable?",
      options: ["int 1x=10;", "int x=10;", "float x=10.0;", "String x=10;"],
      correctAnswer: "int x=10;"
    },
    {
      question: "Which method is the entry point of a Java program?",
      options: ["start()", "main()", "run()", "init()"],
      correctAnswer: "main()"
    },
    {
      question: "Which keyword is used to inherit a class in Java?",
      options: ["this", "super", "extends", "implements"],
      correctAnswer: "extends"
    },
    {
      question: "Which of the following is not a Java primitive type?",
      options: ["int", "float", "String", "char"],
      correctAnswer: "String"
    },
    {
      question: "Which exception is thrown when dividing by zero in Java?",
      options: ["NullPointerException", "IOException", "ArithmeticException", "NumberFormatException"],
      correctAnswer: "ArithmeticException"
    },
    {
      question: "Which of these is not a Java access modifier?",
      options: ["public", "protected", "internal", "private"],
      correctAnswer: "internal"
    },
    {
      question: "Which keyword is used to create a subclass in Java?",
      options: ["inherits", "extends", "implements", "super"],
      correctAnswer: "extends"
    },
    {
      question: "What is the size of an int in Java?",
      options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the system"],
      correctAnswer: "4 bytes"
    },
    {
      question: "Which keyword is used to prevent inheritance?",
      options: ["final", "static", "private", "const"],
      correctAnswer: "final"
    },
    {
      question: "What is the default value of a boolean variable in Java?",
      options: ["true", "false", "0", "null"],
      correctAnswer: "false"
    },
    {
      question: "Which collection class allows you to grow or shrink its size and provides indexed access to its elements?",
      options: ["HashSet", "ArrayList", "TreeMap", "HashMap"],
      correctAnswer: "ArrayList"
    },
    {
      question: "Which of the following is used to handle exceptions in Java?",
      options: ["try-catch", "if-else", "for-loop", "switch"],
      correctAnswer: "try-catch"
    },
    {
      question: "Which package contains the Scanner class?",
      options: ["java.io", "java.util", "java.net", "java.awt"],
      correctAnswer: "java.util"
    },
    {
      question: "What is the superclass of all classes in Java?",
      options: ["Object", "Class", "Superclass", "Base"],
      correctAnswer: "Object"
    },
    {
      question: "Which keyword is used to define an interface in Java?",
      options: ["interface", "implements", "abstract", "class"],
      correctAnswer: "interface"
    },
    {
      question: "What does JVM stand for?",
      options: ["Java Virtual Machine", "Java Variable Method", "Java Verified Method", "Joint Virtual Memory"],
      correctAnswer: "Java Virtual Machine"
    },
    {
      question: "Which Java keyword is used to refer to the current object?",
      options: ["this", "self", "current", "super"],
      correctAnswer: "this"
    },
    {
      question: "Which of these classes are immutable in Java?",
      options: ["String", "StringBuilder", "StringBuffer", "All of the above"],
      correctAnswer: "String"
    },
    {
      question: "Which operator is used to compare two values in Java?",
      options: ["=", "==", "===", "!="],
      correctAnswer: "=="
    },
    {
      question: "Which loop is guaranteed to execute at least once?",
      options: ["for", "while", "do-while", "None"],
      correctAnswer: "do-while"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [timer, setTimer] = useState(20);
  const [score, setScore] = useState(localStorage.getItem("javaBestScore") || 0);

  const CORRECT_SOUND = new Howl({ src: ["/sounds/correct.mp3"] });
  const WRONG_SOUND = new Howl({ src: ["/sounds/wrong.mp3"] });

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        handleOptionSelect(null);
      }
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [timer]);

  useEffect(() => {
    localStorage.setItem("javaScore", correctAnswersCount);
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

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedOption(null);
      setShowCorrectAnswer(false);
      setTimer(20);
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
                  <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
                    Keep Practicing!
                  </h2>
                  <p className="text-lg text-gray-700 mb-2">You've completed the quiz.</p>
                  <p className="text-blue-500 font-medium mb-2">Try Again!</p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                    🎉 Congratulations! 🎉
                  </h2>
                  <p className="text-lg text-gray-700 mb-2">You've completed the quiz.</p>
                  <p className="text-blue-500 font-medium mb-2">Great job!</p>
                </>
              )}

              <p className="text-xl font-semibold">
                Your Score: {correctAnswersCount}/{questions.length} (
                {scorePercentage.toFixed(2)}%)
              </p>

              <div className="mt-6 space-x-4">
                <button
                  onClick={handleRestartQuiz}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Restart Quiz
                </button>
                <button
                  onClick={handleExit}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  Exit
                </button>
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

export default Java;
