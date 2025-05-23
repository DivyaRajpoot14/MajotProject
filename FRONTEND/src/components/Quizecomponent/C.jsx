

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import SubNavbar from "../SubNavbar";
// import Confetti from "react-confetti";
// import { motion } from "framer-motion";
// import { Howl } from "howler";

// const C = () => {
//   const navigate = useNavigate();
//    const questions = [
//     {
//       "question": "What is the correct syntax to declare a pointer in C?",
//       "options": ["int ptr;", "int *ptr;", "*int ptr;", "int& ptr;"],
//       "correctAnswer": "int *ptr;"
//     },
//     {
//       "question": "Which of the following is used to terminate a C statement?",
//       "options": [",", ";", ":", "."],
//       "correctAnswer": ";"
//     },
//     {
//       "question": "What is the default return type of a C function if no type is specified?",
//       "options": ["int", "void", "char", "float"],
//       "correctAnswer": "int"
//     },
//     {
//       "question": "Which of the following is not a valid storage class in C?",
//       "options": ["auto", "register", "static", "constant"],
//       "correctAnswer": "constant"
//     },
//     {
//       "question": "Which keyword is used to define a structure in C?",
//       "options": ["class", "struct", "enum", "typedef"],
//       "correctAnswer": "struct"
//     },
//     {
//       "question": "Which header file is required for input/output functions in C?",
//       "options": ["stdio.h", "conio.h", "stdlib.h", "math.h"],
//       "correctAnswer": "stdio.h"
//     },
//     {
//       "question": "What is the purpose of the 'break' statement in C?",
//       "options": [
//         "To exit from a loop or switch statement",
//         "To pause execution temporarily",
//         "To skip the current iteration of a loop",
//         "To end the program execution"
//       ],
//       "correctAnswer": "To exit from a loop or switch statement"
//     },
//     {
//       "question": "Which operator is used to get the address of a variable?",
//       "options": ["&", "*", "%", "@@"],
//       "correctAnswer": "&"
//     },
//     {
//       "question": "What is the size of an integer data type on a typical 32-bit system?",
//       "options": ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
//       "correctAnswer": "4 bytes"
//     },
//     {
//       "question": "How do you dynamically allocate memory in C?",
//       "options": ["malloc()", "alloc()", "calloc()", "Both malloc() and calloc()"],
//       "correctAnswer": "Both malloc() and calloc()"
//     },
//     {
//       "question": "Which of the following is not a valid loop in C?",
//       "options": ["for", "while", "do-while", "foreach"],
//       "correctAnswer": "foreach"
//     },
//     {
//       "question": "What is the function of the 'continue' statement?",
//       "options": [
//         "To end the loop",
//         "To pause execution temporarily",
//         "To skip the rest of the current iteration",
//         "To return a value from a function"
//       ],
//       "correctAnswer": "To skip the rest of the current iteration"
//     },
//     {
//       "question": "What is the purpose of the 'sizeof' operator?",
//       "options": [
//         "To determine the size of a data type or variable",
//         "To allocate memory",
//         "To initialize an array",
//         "To define a structure"
//       ],
//       "correctAnswer": "To determine the size of a data type or variable"
//     },
//     {
//       "question": "Which of the following functions converts a string to an integer?",
//       "options": ["itoa()", "atoi()", "sprintf()", "strcpy()"],
//       "correctAnswer": "atoi()"
//     },
//     {
//       "question": "What is the value of an uninitialized local variable in C?",
//       "options": ["0", "Garbage value", "Null", "Undefined"],
//       "correctAnswer": "Garbage value"
//     },
//     {
//       "question": "Which of the following is not a preprocessor directive?",
//       "options": ["#include", "#define", "#pragma", "#execute"],
//       "correctAnswer": "#execute"
//     },
//     {
//       "question": "Which data type is used to create a variable that holds a single character?",
//       "options": ["int", "char", "string", "float"],
//       "correctAnswer": "char"
//     },
//     {
//       "question": "What is the output of the following code: printf(\"%d\", 10 + 20);",
//       "options": ["1020", "30", "10+20", "Error"],
//       "correctAnswer": "30"
//     },
//     {
//       "question": "Which of the following is used to define a constant in C?",
//       "options": ["#define", "const", "static", "Both #define and const"],
//       "correctAnswer": "Both #define and const"
//     },
//     {
//       "question": "What is the correct way to start the main function in C?",
//       "options": ["void main()", "main()", "int main()", "None of the above"],
//       "correctAnswer": "int main()"
//     }
//   ];
 

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
//   const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
//   const [showCelebration, setShowCelebration] = useState(false);
//   const [timer, setTimer] = useState(20); // 20 seconds timer
//   const [score, setScore] = useState(localStorage.getItem("bestScore") || 0);

//   const CORRECT_SOUND = new Howl({
//     src: ["/sounds/correct.mp3"],
//   });
//   const WRONG_SOUND = new Howl({
//     src: ["/sounds/wrong.mp3"],
//   });

//   const currentQuestion = questions[currentQuestionIndex];

//   useEffect(() => {
//     const timerInterval = setInterval(() => {
//       if (timer > 0) {
//         setTimer(timer - 1);
//       } else {
//         handleOptionSelect(null); // Auto-submit when time runs out
//       }
//     }, 1000);

//     return () => clearInterval(timerInterval); // Clear timer on cleanup
//   }, [timer]);

//   useEffect(() => {
//     localStorage.setItem("score", correctAnswersCount); // Persist score in localStorage
//   }, [correctAnswersCount]);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);

//     if (option === currentQuestion.correctAnswer) {
//       setCorrectAnswersCount((prev) => prev + 1);
//       CORRECT_SOUND.play();
//     } else {
//       WRONG_SOUND.play();
//     }

//     setShowCorrectAnswer(true); // Show correct answer after selection

//     setTimeout(() => {
//       if (currentQuestionIndex < questions.length - 1) {
//         setCurrentQuestionIndex((prev) => prev + 1);
//         setSelectedOption(null);
//         setShowCorrectAnswer(false);
//         setTimer(20); // Reset timer
//       } else {
//         setShowCelebration(true);
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }
//     }, 1000);
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//       setSelectedOption(null);
//       setShowCorrectAnswer(false);
//       setTimer(20);
//     } else {
//       setShowCelebration(true);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex((prev) => prev - 1);
//       setSelectedOption(null);
//       setShowCorrectAnswer(false);
//       setTimer(20);
//     }
//   };

//   const handleRestartQuiz = () => {
//     setCurrentQuestionIndex(0);
//     setSelectedOption(null);
//     setCorrectAnswersCount(0);
//     setShowCelebration(false);
//     setTimer(20);
//   };

//   const handleExit = () => {
//     navigate("/");
//   };

//   const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
//   const scorePercentage = (correctAnswersCount / questions.length) * 100;

//   return (
//     <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4 relative overflow-hidden">
//       <SubNavbar />

//       {showCelebration && scorePercentage >= 30 && (
//         <Confetti width={window.innerWidth} height={window.innerHeight} />
//       )}

//       <div className="w-[90vw] md:w-[50vw] h-[65vh] mt-20 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col justify-between overflow-hidden relative z-10">
//         {/* <div className="w-full h-4 bg-gray-200 relative mt-2">
//           <div
//             className="absolute top-0 left-0 h-full bg-blue-500"
//             style={{
//               width: `${(correctAnswersCount / questions.length) * 100}%`,
//             }}
//           ></div>
//         </div> */}

//         <div className="flex flex-col h-full p-6">
//           {showCelebration ? (
//             <motion.div
//               className="flex flex-col items-center justify-center h-full text-center p-6"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//             {scorePercentage < 30 ? (
//   <>
//     <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
//       Keep Practicing!
//     </h2>
//     <p className="text-lg text-gray-700 mb-2">
//       You've completed the quiz.
//     </p>
//     <p className="text-blue-500 font-medium mb-2">Try Again!</p>
//   </>
// ) : (
//   <>
//     <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
//       🎉 Congratulations! 🎉
//     </h2>
//     <p className="text-lg text-gray-700 mb-2">
//       You've completed the quiz.
//     </p>
//     <p className="text-blue-500 font-medium mb-2">Great job!</p>
//   </>
// )}

             

//               <p className="text-xl font-semibold">
//                 Your Score: {correctAnswersCount}/{questions.length} (
//                 {scorePercentage.toFixed(2)}%)
//               </p>

//               <div className="mt-6 space-x-4">
//                 <button
//                   onClick={handleRestartQuiz}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                 >
//                   Restart Quiz
//                 </button>
//                 <button
//                   onClick={handleExit}
//                   className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
//                 >
//                   Exit
//                 </button>
//               </div>
//             </motion.div>
//           ) : (
//             <>
//               <div className="mb-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white p-4 rounded-md shadow">
//                 <h2 className="text-lg font-semibold">
//                   Question {currentQuestionIndex + 1}: {currentQuestion.question}
//                 </h2>
//                 <p className="text-sm text-white">Time left: {timer}s</p>
//               </div>

//               <div className="space-y-3 flex-1">
//                 {currentQuestion.options.map((option, index) => (
//                   <motion.button
//                     key={index}
//                     onClick={() => handleOptionSelect(option)}
//                     className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 text-left font-medium ${
//                       selectedOption === option
//                         ? option === currentQuestion.correctAnswer
//                           ? "border-green-600 bg-green-100 text-green-800"
//                           : "border-red-600 bg-red-100 text-red-800"
//                         : "hover:bg-gray-100"
//                     }`}
//                     disabled={selectedOption !== null}
//                   >
//                     {option}
//                   </motion.button>
//                 ))}
//               </div>

//               {showCorrectAnswer && (
//                 <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-600 text-green-800 rounded">
//                   Correct Answer:{" "}
//                   <span className="font-semibold">{currentQuestion.correctAnswer}</span>
//                 </div>
//               )}

//               <div className="flex justify-between items-center mt-6">
//                 <button
//                   onClick={handlePrevious}
//                   disabled={currentQuestionIndex === 0}
//                   className={`px-4 py-2 rounded-lg text-sm font-semibold ${
//                     currentQuestionIndex === 0
//                       ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                       : "bg-gray-200 hover:bg-gray-300 text-gray-800"
//                   }`}
//                 >
//                   Previous
//                 </button>

//                 <button
//                   onClick={() => setShowCorrectAnswer(true)}
//                   className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition"
//                 >
//                   View Answer
//                 </button>

//                 <button
//                   onClick={handleNext}
//                   className={`px-4 py-2 rounded-lg text-sm font-semibold ${
//                     currentQuestionIndex === questions.length - 1
//                       ? "bg-green-500 text-white hover:bg-green-600"
//                       : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//                   }`}
//                 >
//                   {currentQuestionIndex === questions.length - 1
//                     ? "Finish"
//                     : "Next"}
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default C;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import SubNavbar from "../SubNavbar";
// import Confetti from "react-confetti";
// import { motion } from "framer-motion";
// import { Howl } from "howler";

// const C = () => {
//   const navigate = useNavigate();

//   const allQuestions = [
//         {
//           "question": "What is the correct syntax to declare a pointer in C?",
//           "options": ["int ptr;", "int *ptr;", "*int ptr;", "int& ptr;"],
//           "correctAnswer": "int *ptr;"
//         },
//         {
//           "question": "Which of the following is used to terminate a C statement?",
//           "options": [",", ";", ":", "."],
//           "correctAnswer": ";"
//         },
//         {
//           "question": "What is the default return type of a C function if no type is specified?",
//           "options": ["int", "void", "char", "float"],
//           "correctAnswer": "int"
//         },
//         {
//           "question": "Which of the following is not a valid storage class in C?",
//           "options": ["auto", "register", "static", "constant"],
//           "correctAnswer": "constant"
//         },
//         {
//           "question": "Which keyword is used to define a structure in C?",
//           "options": ["class", "struct", "enum", "typedef"],
//           "correctAnswer": "struct"
//         },
//         {
//           "question": "Which header file is required for input/output functions in C?",
//           "options": ["stdio.h", "conio.h", "stdlib.h", "math.h"],
//           "correctAnswer": "stdio.h"
//         },
//         {
//           "question": "What is the purpose of the 'break' statement in C?",
//           "options": [
//             "To exit from a loop or switch statement",
//             "To pause execution temporarily",
//             "To skip the current iteration of a loop",
//             "To end the program execution"
//           ],
//           "correctAnswer": "To exit from a loop or switch statement"
//         },
//         {
//           "question": "Which operator is used to get the address of a variable?",
//           "options": ["&", "*", "%", "@@"],
//           "correctAnswer": "&"
//         },
//         {
//           "question": "What is the size of an integer data type on a typical 32-bit system?",
//           "options": ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
//           "correctAnswer": "4 bytes"
//         },
//         {
//           "question": "How do you dynamically allocate memory in C?",
//           "options": ["malloc()", "alloc()", "calloc()", "Both malloc() and calloc()"],
//           "correctAnswer": "Both malloc() and calloc()"
//         },
//         {
//           "question": "Which of the following is not a valid loop in C?",
//           "options": ["for", "while", "do-while", "foreach"],
//           "correctAnswer": "foreach"
//         },
//         {
//           "question": "What is the function of the 'continue' statement?",
//           "options": [
//             "To end the loop",
//             "To pause execution temporarily",
//             "To skip the rest of the current iteration",
//             "To return a value from a function"
//           ],
//           "correctAnswer": "To skip the rest of the current iteration"
//         },
//         {
//           "question": "What is the purpose of the 'sizeof' operator?",
//           "options": [
//             "To determine the size of a data type or variable",
//             "To allocate memory",
//             "To initialize an array",
//             "To define a structure"
//           ],
//           "correctAnswer": "To determine the size of a data type or variable"
//         },
//         {
//           "question": "Which of the following functions converts a string to an integer?",
//           "options": ["itoa()", "atoi()", "sprintf()", "strcpy()"],
//           "correctAnswer": "atoi()"
//         },
//         {
//           "question": "What is the value of an uninitialized local variable in C?",
//           "options": ["0", "Garbage value", "Null", "Undefined"],
//           "correctAnswer": "Garbage value"
//         },
//         {
//           "question": "Which of the following is not a preprocessor directive?",
//           "options": ["#include", "#define", "#pragma", "#execute"],
//           "correctAnswer": "#execute"
//         },
//         {
//           "question": "Which data type is used to create a variable that holds a single character?",
//           "options": ["int", "char", "string", "float"],
//           "correctAnswer": "char"
//         },
//         {
//           "question": "What is the output of the following code: printf(\"%d\", 10 + 20);",
//           "options": ["1020", "30", "10+20", "Error"],
//           "correctAnswer": "30"
//         },
//         {
//           "question": "Which of the following is used to define a constant in C?",
//           "options": ["#define", "const", "static", "Both #define and const"],
//           "correctAnswer": "Both #define and const"
//         },
//         {
//           "question": "What is the correct way to start the main function in C?",
//           "options": ["void main()", "main()", "int main()", "None of the above"],
//           "correctAnswer": "int main()"
//         }
//       ];

//   // Check for token in local or session storage
//   const token = localStorage.getItem("token") || sessionStorage.getItem("token");
//   const questions = token ? allQuestions : allQuestions.slice(0, 5);

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
//   const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
//   const [showCelebration, setShowCelebration] = useState(false);
//   const [timer, setTimer] = useState(20);
//   const [score, setScore] = useState(localStorage.getItem("bestScore") || 0);

  

//   const currentQuestion = questions[currentQuestionIndex];
//   const scorePercentage = (correctAnswersCount / questions.length) * 100;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (timer > 0) {
//         setTimer((prev) => prev - 1);
//       } else {
//         handleOptionSelect(null);
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [timer]);

//   useEffect(() => {
//     const token = localStorage.getItem("token") || sessionStorage.getItem("token");
//     if (token) {
//       localStorage.setItem("score", correctAnswersCount);
//     }
//   }, [correctAnswersCount]);
  

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     if (option === currentQuestion.correctAnswer) {
//       setCorrectAnswersCount((prev) => prev + 1);
//       CORRECT_SOUND.play();
//     } else {
//       WRONG_SOUND.play();
//     }

//     setShowCorrectAnswer(true);
//     setTimeout(() => {
//       if (currentQuestionIndex < questions.length - 1) {
//         setCurrentQuestionIndex((prev) => prev + 1);
//         setSelectedOption(null);
//         setShowCorrectAnswer(false);
//         setTimer(20);
//       } else {
//         setShowCelebration(true);
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }
//     }, 1000);
//   };

//   const handleRestartQuiz = () => {
//     setCurrentQuestionIndex(0);
//     setSelectedOption(null);
//     setCorrectAnswersCount(0);
//     setShowCelebration(false);
//     setTimer(20);
//   };

//   const handleExit = () => {
//     navigate("/");
//   };

//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex((prev) => prev - 1);
//       setSelectedOption(null);
//       setShowCorrectAnswer(false);
//       setTimer(20);
//     }
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//       setSelectedOption(null);
//       setShowCorrectAnswer(false);
//       setTimer(20);
//     } else {
//       setShowCelebration(true);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4 relative overflow-hidden">
//       <SubNavbar />

//       {showCelebration && scorePercentage >= 30 && (
//         <Confetti width={window.innerWidth} height={window.innerHeight} />
//       )}

//       <div className="w-[90vw] md:w-[50vw] h-[65vh] mt-20 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col justify-between overflow-hidden relative z-10">
//         <div className="flex flex-col h-full p-6">
//           {showCelebration ? (
//             <motion.div
//               className="flex flex-col items-center justify-center h-full text-center p-6"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               {scorePercentage < 30 ? (
//                 <>
//                   <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
//                     Keep Practicing!
//                   </h2>
//                   <p className="text-lg text-gray-700 mb-2">You've completed the quiz.</p>
//                   <p className="text-blue-500 font-medium mb-2">Try Again!</p>
//                 </>
//               ) : (
//                 <>
//                   <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
//                     🎉 Congratulations! 🎉
//                   </h2>
//                   <p className="text-lg text-gray-700 mb-2">You've completed the quiz.</p>
//                   <p className="text-blue-500 font-medium mb-2">Great job!</p>
//                 </>
//               )}
//               <p className="text-xl font-semibold">
//                 Your Score: {correctAnswersCount}/{questions.length} (
//                 {scorePercentage.toFixed(2)}%)
//               </p>
//               <div className="mt-6 space-x-4">
//                 <button
//                   onClick={handleRestartQuiz}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                 >
//                   Restart Quiz
//                 </button>
//                 <button
//                   onClick={handleExit}
//                   className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
//                 >
//                   Exit
//                 </button>
//               </div>
//             </motion.div>
//           ) : (
//             <>
//               <div className="mb-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white p-4 rounded-md shadow">
//                 <h2 className="text-lg font-semibold">
//                   Question {currentQuestionIndex + 1}: {currentQuestion.question}
//                 </h2>
//                 <p className="text-sm text-white">Time left: {timer}s</p>
//               </div>

//               <div className="space-y-3 flex-1">
//                 {currentQuestion.options.map((option, index) => (
//                   <motion.button
//                     key={index}
//                     onClick={() => handleOptionSelect(option)}
//                     className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 text-left font-medium ${
//                       selectedOption === option
//                         ? option === currentQuestion.correctAnswer
//                           ? "border-green-600 bg-green-100 text-green-800"
//                           : "border-red-600 bg-red-100 text-red-800"
//                         : "hover:bg-gray-100"
//                     }`}
//                     disabled={selectedOption !== null}
//                   >
//                     {option}
//                   </motion.button>
//                 ))}
//               </div>

//               {showCorrectAnswer && (
//                 <div className=" p-3 bg-green-100 border-l-4 border-green-600 text-green-800 rounded">
//                   Correct Answer:{" "}
//                   <span className="font-semibold">{currentQuestion.correctAnswer}</span>
//                 </div>
//               )}

//               <div className="flex justify-between items-center mt-6">
//                 <button
//                   onClick={handlePrevious}
//                   disabled={currentQuestionIndex === 0}
//                   className={`px-4 py-2 rounded-lg text-sm font-semibold ${
//                     currentQuestionIndex === 0
//                       ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                       : "bg-gray-200 hover:bg-gray-300 text-gray-800"
//                   }`}
//                 >
//                   Previous
//                 </button>

//                 <button
//                   onClick={() => setShowCorrectAnswer(true)}
//                   className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition"
//                 >
//                   View Answer
//                 </button>

//                 <button
//                   onClick={handleNext}
//                   className={`px-4 py-2 rounded-lg text-sm font-semibold ${
//                     currentQuestionIndex === questions.length - 1
//                       ? "bg-green-500 text-white hover:bg-green-600"
//                       : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//                   }`}
//                 >
//                   {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default C;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import SubNavbar from "../SubNavbar";
// import Confetti from "react-confetti";
// import { motion } from "framer-motion";
// import { Howl } from "howler";

// const C = () => {
//   const navigate = useNavigate();

//   const allLevels = {
//     beginner: [
//       {
//         question: "What is the value of an uninitialized local variable in C?",
//         options: ["0", "Garbage value", "Null", "Undefined"],
//         correctAnswer: "Garbage value",
//       },
//       {
//         question: "Which of the following is a valid variable name in C?",
//         options: ["int", "_var", "2value", "float"],
//         correctAnswer: "_var",
//       },
//       {
//         question: "Which symbol is used to end a statement in C?",
//         options: [".", ":", ";", "#"],
//         correctAnswer: ";",
//       },
//       {
//         question: "What is the correct syntax to output 'Hello World' in C?",
//         options: ["print('Hello World');", "printf('Hello World');", "echo('Hello World');", "cout << 'Hello World';"],
//         correctAnswer: "printf('Hello World');",
//       },
//       {
//         question: "Which data type is used to store a single character in C?",
//         options: ["char", "int", "string", "float"],
//         correctAnswer: "char",
//       },
//     ],
  
//     intermediate: [
//       {
//         question: "What is the output of printf(\"%d\", sizeof(char));?",
//         options: ["0", "1", "2", "4"],
//         correctAnswer: "1",
//       },
//       {
//         question: "What will be the output of: int x=5; printf(\"%d\", x++);?",
//         options: ["5", "6", "Error", "Undefined"],
//         correctAnswer: "5",
//       },
//       {
//         question: "Which of the following is a loop structure in C?",
//         options: ["if", "switch", "while", "goto"],
//         correctAnswer: "while",
//       },
//       {
//         question: "Which header file is required for the 'printf' function?",
//         options: ["<stdlib.h>", "<stdio.h>", "<conio.h>", "<string.h>"],
//         correctAnswer: "<stdio.h>",
//       },
//       {
//         question: "How do you declare a pointer to an integer in C?",
//         options: ["int ptr;", "int *ptr;", "pointer int ptr;", "int &ptr;"],
//         correctAnswer: "int *ptr;",
//       },
//     ],
  
//     advanced: [
//       {
//         question: "What is the output of: printf(\"%d\", *(&x)); if int x = 10?",
//         options: ["10", "Address of x", "Garbage", "Error"],
//         correctAnswer: "10",
//       },
//       {
//         question: "What is the purpose of the 'volatile' keyword in C?",
//         options: [
//           "Optimize the variable",
//           "Store variable in register",
//           "Prevent compiler optimization",
//           "Allocate extra memory"
//         ],
//         correctAnswer: "Prevent compiler optimization",
//       },
//       {
//         question: "Which of the following can dynamically allocate memory in C?",
//         options: ["malloc()", "sizeof()", "define()", "include()"],
//         correctAnswer: "malloc()",
//       },
//       {
//         question: "What does the function 'strcpy()' do?",
//         options: [
//           "Compares two strings",
//           "Copies one string into another",
//           "Concatenates strings",
//           "Returns string length"
//         ],
//         correctAnswer: "Copies one string into another",
//       },
//       {
//         question: "What is a segmentation fault in C?",
//         options: [
//           "Accessing protected memory",
//           "Syntax error",
//           "Missing semicolon",
//           "Incorrect loop condition"
//         ],
//         correctAnswer: "Accessing protected memory",
//       },
//     ]
//   };
  

//   const levels = Object.keys(allLevels);
//   const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
//   const [questions, setQuestions] = useState(allLevels[levels[0]]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
//   const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
//   const [showCelebration, setShowCelebration] = useState(false);
//   const [timer, setTimer] = useState(20);
//   const [levelCompleted, setLevelCompleted] = useState(false);
//   const [score, setScore] = useState(localStorage.getItem("bestScore") || 0);
//   const [accessGranted, setAccessGranted] = useState(false);

//   const currentQuestion = questions[currentQuestionIndex];
//   const scorePercentage = (correctAnswersCount / questions.length) * 100;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (timer > 0) {
//         setTimer((prev) => prev - 1);
//       } else {
//         handleOptionSelect(null);
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [timer]);

//   useEffect(() => {
//     const token = localStorage.getItem("token") || sessionStorage.getItem("token");
//     if (token) {
//       setAccessGranted(true);
//     } else {
//       // restrict to demo (only beginner level)
//       setAccessGranted(false);
//       setCurrentLevelIndex(0);
//       setQuestions(allLevels["beginner"]);
//     }
//   }, []);

//   // useEffect(() => {
//   //   const token = localStorage.getItem("token") || sessionStorage.getItem("token");
//   //   if (token) {
//   //     localStorage.setItem("score", correctAnswersCount);
//   //   }
//   // }, [correctAnswersCount]);
//   useEffect(() => {
//     const levelKey = `score_${levels[currentLevelIndex]}`;
//     localStorage.setItem(levelKey, correctAnswersCount);
//     const total = levels.reduce((acc, level) => {
//       const val = parseInt(localStorage.getItem(`score_${level}`)) || 0;
//       return acc + val;
//     }, 0);
//     localStorage.setItem("totalScore", total);
//   }, [correctAnswersCount, currentLevelIndex]);
  

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     if (option === currentQuestion.correctAnswer) {
//       setCorrectAnswersCount((prev) => prev + 1);
//     }
//     setShowCorrectAnswer(true);
//     setTimeout(() => {
//       if (currentQuestionIndex < questions.length - 1) {
//         setCurrentQuestionIndex((prev) => prev + 1);
//         setSelectedOption(null);
//         setShowCorrectAnswer(false);
//         setTimer(20);
//       } else {
//         setShowCelebration(true);
//         setLevelCompleted(true);
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }
//     }, 1000);
//   };

//   const handleNextLevel = () => {
//     const nextLevel = currentLevelIndex + 1;
//     if (nextLevel < levels.length) {
//       setCurrentLevelIndex(nextLevel);
//       setQuestions(allLevels[levels[nextLevel]]);
//       setCurrentQuestionIndex(0);
//       setSelectedOption(null);
//       setCorrectAnswersCount(0);
//       setShowCorrectAnswer(false);
//       setShowCelebration(false);
//       setLevelCompleted(false);
//       setTimer(20);
//     } else {
//       alert("🎉 You've completed all levels!");
//       navigate("/");
//     }
//   };

//   const handleRestartQuiz = () => {
//     setCurrentQuestionIndex(0);
//     setSelectedOption(null);
//     setCorrectAnswersCount(0);
//     setShowCelebration(false);
//     setTimer(20);
//   };
//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//       setSelectedOption(null);
//       setShowCorrectAnswer(false);
//       setTimer(20);
//     }
//   };
  
//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex((prev) => prev - 1);
//       setSelectedOption(null);
//       setShowCorrectAnswer(false);
//       setTimer(20);
//     }
//   };
  
//   return (
//     <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4 relative overflow-hidden">
//       <SubNavbar />
//       {showCelebration && scorePercentage >= 30 && (
//         <Confetti width={window.innerWidth} height={window.innerHeight} />
//       )}
//       <div className="w-[90vw] md:w-[50vw] h-[65vh] mt-20 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col justify-between overflow-hidden relative z-10">
//         <div className="flex flex-col h-full p-6">
//           {showCelebration ? (
//             <motion.div className="flex flex-col items-center justify-center h-full text-center p-6">
//               <h2 className="text-2xl font-bold text-blue-700 mb-2">{scorePercentage >= 30 ? "Level Completed!" : "Keep Practicing!"}</h2>
//               <p className="text-lg text-gray-700 mb-2">{scorePercentage >= 30 ? "Well done on completing this level." : "Try again to improve your score."}</p>
//               <p className="text-blue-500 font-medium mb-2">
//                 Score: {correctAnswersCount}/{questions.length} ({scorePercentage.toFixed(2)}%)
//               </p>
//               <div className="mt-4 space-x-4">
//                 <button onClick={handleRestartQuiz} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Restart Level</button>
//                 {scorePercentage >= 30 && accessGranted && (
//                   <button onClick={handleNextLevel} className="px-4 py-2 bg-green-500 text-white rounded-lg">Next Level</button>
//                 )}
//               </div>
//             </motion.div>
//           ) : (
//             <>
//               <div className="mb-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white p-4 rounded-md shadow">
//                 <h2 className="text-lg font-semibold">Level: {levels[currentLevelIndex].toUpperCase()}</h2>
//                 <h3 className="text-sm">Question {currentQuestionIndex + 1}: {currentQuestion.question}</h3>
//                 <p className="text-sm">Time left: {timer}s</p>
//               </div>
//               <div className="space-y-3 flex-1">
//                 {currentQuestion.options.map((option, index) => (
//                   <motion.button
//                     key={index}
//                     onClick={() => handleOptionSelect(option)}
//                     className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 text-left font-medium ${selectedOption === option ? option === currentQuestion.correctAnswer ? "border-green-600 bg-green-100 text-green-800" : "border-red-600 bg-red-100 text-red-800" : "hover:bg-gray-100"}`}
//                     disabled={selectedOption !== null}
//                   >
//                     {option}
//                   </motion.button>
//                 ))}
//               </div>
           

//               {showCorrectAnswer && (
//                 <div className="p-3 bg-green-100 border-l-4 border-green-600 text-green-800 rounded">
//                   Correct Answer: <span className="font-semibold">{currentQuestion.correctAnswer}</span>
//                 </div>
//               )}
//                  <div className="flex justify-between mt-4">
//   <button
//     onClick={handlePreviousQuestion}
//     className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
//     disabled={currentQuestionIndex === 0}
//   >
//     Previous
//   </button>
//   <button
//     onClick={handleNextQuestion}
//     className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
//     disabled={currentQuestionIndex === questions.length - 1}
//   >
//     Next
//   </button>
// </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default C;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const C = () => {
  const navigate = useNavigate();
  const allLevels = {
    beginner: [
      {
        question: "What is the value of an uninitialized local variable in C?",
        options: ["0", "Garbage value", "Null", "Undefined"],
        correctAnswer: "Garbage value",
      },
      {
        question: "Which of the following is a valid variable name in C?",
        options: ["int", "_var", "2value", "float"],
        correctAnswer: "_var",
      },
      {
        question: "Which symbol is used to end a statement in C?",
        options: [".", ":", ";", "#"],
        correctAnswer: ";",
      },
      {
        question: "What is the correct syntax to output 'Hello World' in C?",
        options: ["print('Hello World');", "printf('Hello World');", "echo('Hello World');", "cout << 'Hello World';"],
        correctAnswer: "printf('Hello World');",
      },
      {
        question: "Which data type is used to store a single character in C?",
        options: ["char", "int", "string", "float"],
        correctAnswer: "char",
      },
      {
        question: "Which keyword is used to define a constant in C?",
        options: ["const", "define", "constant", "static"],
        correctAnswer: "const",
      },
      {
        question: "Which function is used to read a character in C?",
        options: ["getchar()", "putchar()", "read()", "scanchar()"],
        correctAnswer: "getchar()",
      },
      {
        question: "Which format specifier is used for integers in printf?",
        options: ["%s", "%f", "%c", "%d"],
        correctAnswer: "%d",
      },
      {
        question: "Which function is used to read formatted input in C?",
        options: ["input()", "scanf()", "gets()", "cin"],
        correctAnswer: "scanf()",
      },
      {
        question: "Which of these is a correct main function syntax in C?",
        options: ["main()", "int main()", "void main()", "function main()"],
        correctAnswer: "int main()",
      },
    ],
    intermediate: [
      {
        question: "What is the output of printf(\"%d\", sizeof(char));?",
        options: ["0", "1", "2", "4"],
        correctAnswer: "1",
      },
      {
        question: "What will be the output of: int x=5; printf(\"%d\", x++);?",
        options: ["5", "6", "Error", "Undefined"],
        correctAnswer: "5",
      },
      {
        question: "Which of the following is a loop structure in C?",
        options: ["if", "switch", "while", "goto"],
        correctAnswer: "while",
      },
      {
        question: "Which header file is required for the 'printf' function?",
        options: ["<stdlib.h>", "<stdio.h>", "<conio.h>", "<string.h>"],
        correctAnswer: "<stdio.h>",
      },
      {
        question: "How do you declare a pointer to an integer in C?",
        options: ["int ptr;", "int *ptr;", "pointer int ptr;", "int &ptr;"],
        correctAnswer: "int *ptr;",
      },
      {
        question: "Which function is used to allocate memory dynamically?",
        options: ["alloc()", "malloc()", "calloc()", "memalloc()"],
        correctAnswer: "malloc()",
      },
      {
        question: "What is the default return type of a function if not specified in C?",
        options: ["void", "int", "float", "char"],
        correctAnswer: "int",
      },
      {
        question: "Which operator is used to access value at address stored in a pointer?",
        options: ["&", "*", "#", "%"],
        correctAnswer: "*",
      },
      {
        question: "What is the output of: printf(\"%d\", 10 > 5);?",
        options: ["true", "false", "1", "0"],
        correctAnswer: "1",
      },
      {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do-while", "none"],
        correctAnswer: "do-while",
      },
    ],
    advanced: [
      {
        question: "What is the output of: printf(\"%d\", *(&x)); if int x = 10?",
        options: ["10", "Address of x", "Garbage", "Error"],
        correctAnswer: "10",
      },
      {
        question: "What is the purpose of the 'volatile' keyword in C?",
        options: [
          "Optimize the variable",
          "Store variable in register",
          "Prevent compiler optimization",
          "Allocate extra memory"
        ],
        correctAnswer: "Prevent compiler optimization",
      },
      {
        question: "Which of the following can dynamically allocate memory in C?",
        options: ["malloc()", "sizeof()", "define()", "include()"],
        correctAnswer: "malloc()",
      },
      {
        question: "What does the function 'strcpy()' do?",
        options: [
          "Compares two strings",
          "Copies one string into another",
          "Concatenates strings",
          "Returns string length"
        ],
        correctAnswer: "Copies one string into another",
      },
      {
        question: "What is a segmentation fault in C?",
        options: [
          "Accessing protected memory",
          "Syntax error",
          "Missing semicolon",
          "Incorrect loop condition"
        ],
        correctAnswer: "Accessing protected memory",
      },
      {
        question: "What is a dangling pointer in C?",
        options: [
          "A pointer not initialized",
          "A pointer that points to freed memory",
          "A pointer to an array",
          "A pointer to a struct"
        ],
        correctAnswer: "A pointer that points to freed memory",
      },
      {
        question: "Which function is used to release dynamically allocated memory?",
        options: ["remove()", "delete()", "free()", "dispose()"],
        correctAnswer: "free()",
      },
      {
        question: "Which keyword is used to define macros in C?",
        options: ["define", "#define", "macro", "#macro"],
        correctAnswer: "#define",
      },
      {
        question: "What is recursion in C?",
        options: [
          "Looping through an array",
          "A function calling itself",
          "Using switch statements",
          "A pointer operation"
        ],
        correctAnswer: "A function calling itself",
      },
      {
        question: "What is the output of sizeof(int) on a 32-bit system?",
        options: ["2", "4", "8", "1"],
        correctAnswer: "4",
      },
    ]
  };
    const levels = Object.keys(allLevels);
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
  
  const currentQuestion = questions[currentQuestionIndex];
  const scorePercentage = (correctAnswersCount / questions.length) * 100;
  
  // // ✅ Access Control
  // useEffect(() => {
  //   const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  //   if (token) {
  //     setAccessGranted(true);
  //   } else {
  //     setAccessGranted(false);
  //     setCurrentLevelIndex(0);
  //     setQuestions(allLevels["beginner"]);
  //   }
  // }, []);
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
  
  // ✅ Load level data from localStorage on level change
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
  
  // ✅ Save score and totalScore on update
  useEffect(() => {
    const levelKey = `score_${levels[currentLevelIndex]}`;
    sessionStorage.setItem(levelKey, correctAnswersCount);
  
    const total = levels.reduce((acc, level) => {
      const val = parseInt(sessionStorage.getItem(`score_${level}`)) || 0;
      return acc + val;
    }, 0);
  
    sessionStorage.setItem("totalScore", total);
  }, [correctAnswersCount, currentLevelIndex]);
  
  // ✅ Timer countdown unless level is completed
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
  
  // ✅ Select answer
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
  
  // ✅ Go to next level
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
      alert("🎉 You've completed all levels!");
      navigate("/");
    }
  };
  
  // ✅ Restart current level
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setCorrectAnswersCount(0);
    setShowCelebration(false);
    setLevelCompleted(false);
    setTimer(20);
  };
  
  // ✅ Navigate to next/previous question
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
<SubNavbar/>
    <div className="h-[100dvh]  bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {showCelebration && scorePercentage >= 30 && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <div className="w-[90vw] md:w-[50vw] h-[65vh] mt-20 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col justify-between overflow-hidden relative z-10">
        <div className="flex flex-col h-full p-6">
          {showCelebration ? (
         
            <div className="flex flex-col h-full p-6">
  {showCelebration ? (
    <motion.div className="flex flex-col items-center justify-center h-full text-center p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2 animate-bounce">
        🎉 Congratulations! 🎉
      </h2>
      <p className="text-lg text-gray-700 mb-2">
        {scorePercentage >= 30 ? "Well done on completing this level." : "Try again to improve your score."}
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
            <span>{sessionStorage.getItem("score_beginner") || 0} / 10</span>
          </li>
          <li className="flex justify-between">
            <span>Intermediate Level</span>
            <span>{sessionStorage.getItem("score_intermediate") || 0} / 10</span>
          </li>
          <li className="flex justify-between">
            <span>Advanced Level</span>
            <span>{sessionStorage.getItem("score_advanced") || 0} / 10</span>
          </li>
          <li className="flex justify-between font-bold text-green-700 pt-2 border-t border-gray-300">
            <span>Total Score</span>
            <span>
              {(parseInt(sessionStorage.getItem("score_beginner")) || 0) +
                (parseInt(sessionStorage.getItem("score_intermediate")) || 0) +
                (parseInt(sessionStorage.getItem("score_advanced")) || 0)}{" "}
              / 30
            </span>
          </li>
          <li className="flex justify-between font-semibold text-purple-700">
            <span>Total Percentage</span>
            <span>
              {(
                (((parseInt(sessionStorage.getItem("score_beginner")) || 0) +
                  (parseInt(localStorage.getItem("score_intermediate")) || 0) +
                  (parseInt(localStorage.getItem("score_advanced")) || 0)) /
                  30) *
                100
              ).toFixed(2)}
              %
            </span>
          </li>
        </ul>
      </div>
{/* Buttons */}
<div className="mt-4 space-x-4">
  {/* Restart Level Button */}
  <button
    onClick={handleRestartQuiz}
    className="px-4 py-2 mb-2 bg-blue-500 text-white rounded-lg"
  >
    Restart Level
  </button>

  {/* Conditional Rendering Based on Access */}
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
  ) : null}
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
    </>
  );
};

export default C;
