// // import NavBar from "../Navbar"
// // import SubNavbar from "../SubNavbar";
// // import React, { useState } from "react";

// // const Cpp=()=>{
// //     const questions = [
// //          {
// //             "question": "Which of the following is a correct identifier in C++?",
// //             "options": ["1variable", "_variable", "variable#", "var@iable"],
// //             "answer": "_variable"
// //           },
// //           {
// //             "question": "What is the default access specifier for members of a class in C++?",
// //             "options": ["public", "private", "protected", "None"],
// //             "answer": "private"
// //           },
// //           {
// //             "question": "Which of the following is not a C++ keyword?",
// //             "options": ["virtual", "explicit", "interface", "volatile"],
// //             "answer": "interface"
// //           },
// //           {
// //             "question": "What is the output of 'cout << 10 / 4;'?",
// //             "options": ["2.5", "2", "4", "Error"],
// //             "answer": "2"
// //           },
// //           {
// //             "question": "Which of the following correctly declares an array in C++?",
// //             "options": ["int arr(10);", "int arr[] = {1, 2, 3};", "arr{10};", "array int arr;"],
// //             "answer": "int arr[] = {1, 2, 3};"
// //           },
// //           {
// //             "question": "What is polymorphism in C++?",
// //             "options": [
// //               "Ability to process objects differently based on their data type",
// //               "A single class having multiple methods",
// //               "The process of defining multiple classes",
// //               "Inheritance from multiple classes"
// //             ],
// //             "answer": "Ability to process objects differently based on their data type"
// //           },
// //           {
// //             "question": "What does the keyword 'this' represent in C++?",
// //             "options": [
// //               "The current object of the class",
// //               "The next object of the class",
// //               "The previous object of the class",
// //               "None of the above"
// //             ],
// //             "answer": "The current object of the class"
// //           },
// //           {
// //             "question": "Which of the following concepts means wrapping data and functions together?",
// //             "options": ["Abstraction", "Encapsulation", "Polymorphism", "Inheritance"],
// //             "answer": "Encapsulation"
// //           },
// //           {
// //             "question": "Which operator is used to access a member of a structure through a pointer?",
// //             "options": [".", "->", "&", "*"],
// //             "answer": "->"
// //           },
// //           {
// //             "question": "Which of the following is a correct way to allocate memory dynamically in C++?",
// //             "options": ["int* p = malloc(10);", "int* p = new int[10];", "int p = new int;", "int* p = calloc(10);"],
// //             "answer": "int* p = new int[10];"
// //           },
// //           {
// //             "question": "What is the size of a pointer in a 64-bit system?",
// //             "options": ["4 bytes", "8 bytes", "16 bytes", "Depends on the compiler"],
// //             "answer": "8 bytes"
// //           },
// //           {
// //             "question": "What does STL stand for in C++?",
// //             "options": [
// //               "Standard Template Library",
// //               "Simple Template Library",
// //               "Structured Template Library",
// //               "Standard Type Library"
// //             ],
// //             "correctAnswer": "Standard Template Library"
// //           },
// //           {
// //             "question": "Which of the following is used to define a template in C++?",
// //             "options": ["template<>", "template<type>", "template<class T>", "template::class"],
// //             "correctAnswer": "template<class T>"
// //           },
// //           {
// //             "question": "Which of the following is not a feature of object-oriented programming?",
// //             "options": ["Encapsulation", "Polymorphism", "Pointers", "Inheritance"],
// //             "correctAnswer": "Pointers"
// //           },
// //           {
// //             "question": "Which of the following data types can store a wide character in C++?",
// //             "options": ["char", "wchar_t", "string", "wchar"],
// //             "correctAnswer": "wchar_t"
// //           },
// //           {
// //             "question": "What is the purpose of a virtual function in C++?",
// //             "options": [
// //               "To allow overriding by derived classes",
// //               "To define static methods",
// //               "To create abstract classes",
// //               "To define inline methods"
// //             ],
// //             "correctAnswer": "To allow overriding by derived classes"
// //           },
// //           {
// //             "question": "Which of the following is a destructor in C++?",
// //             "options": ["~ClassName()", "ClassName()", "void Destructor()", "delete()"],
// //             "correctAnswer": "~ClassName()"
// //           },
// //           {
// //             "question": "Which of the following is not a valid scope resolution in C++?",
// //             "options": ["::", ".", "->", "None of the above"],
// //             "correctAnswer": "."
// //           },
// //           {
// //             "question": "Which keyword is used to prevent a member function from modifying the object in C++?",
// //             "options": ["static", "constant", "const", "final"],
// //             "correctAnswer": "const"
// //           },
// //           {
// //             "question": "What is the output of the following code? int x = 5; cout << ++x << x++;",
// //             "options": ["65", "56", "66", "Error"],
// //             "correctAnswer": "66"
// //           }
       
      
// //       ];
    
// //       const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //       const [selectedOption, setSelectedOption] = useState(null);
// //       const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    
// //       const currentQuestion = questions[currentQuestionIndex];
    
// //       const handleOptionSelect = (option) => {
// //         setSelectedOption(option);
// //         setShowCorrectAnswer(false);
// //       };
    
// //       const handleNext = () => {
// //         if (currentQuestionIndex < questions.length - 1) {
// //           setCurrentQuestionIndex(currentQuestionIndex + 1);
// //           setSelectedOption(null);
// //           setShowCorrectAnswer(false);
// //         }
// //       };
    
// //       const handlePrevious = () => {
// //         if (currentQuestionIndex > 0) {
// //           setCurrentQuestionIndex(currentQuestionIndex - 1);
// //           setSelectedOption(null);
// //           setShowCorrectAnswer(false);
// //         }
// //       };
    
// //       const progressPercentage =
// //         ((currentQuestionIndex + 1) / questions.length) * 100;
    
// // return(
// //     <>
   
// //     <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4">
// //     <SubNavbar/>
// //  <div className="w-[50dvw] h-[60dvh] mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
// //   {/* <h2>Questions C++</h2> */}
// //       {/* Progress Bar */}
// //       <div className="relative w-full bg-gray-200 rounded-full h-4 mb-6">
// //         <div
// //           className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full"
// //           style={{ width: `${progressPercentage}%` }}
// //         ></div>
// //       </div>
// //       {/* Question */}
// //       <h2 className="text-lg font-semibold text-gray-800 mb-4">
// //         Question {currentQuestionIndex + 1}: {currentQuestion.question}
// //       </h2>
// //       {/* Options */}
// //       <div className="space-y-4">
// //         {currentQuestion.options.map((option, index) => (
// //           <button
// //             key={index}
// //             onClick={() => handleOptionSelect(option)}
// //             className={`w-full px-4 py-2 text-left border rounded-lg hover:bg-gray-100 transition-colors ${
// //               selectedOption === option
// //                 ? selectedOption === currentQuestion.correctAnswer
// //                   ? "border-green-500 bg-green-50"
// //                   : "border-red-500 bg-red-50"
// //                 : ""
// //             }`}
// //           >
// //             {option}
// //           </button>
// //         ))}
// //       </div>
// //       {/* Correct Answer */}
// //       {showCorrectAnswer && (
// //         <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-700">
// //           <p>
// //             Correct Answer:{" "}
// //             <span className="font-bold">{currentQuestion.correctAnswer}</span>
// //           </p>

// //         </div>
// //       )}
// //       {/* Navigation Buttons */}
// //       <div className="flex justify-between items-center mt-6">
// //         <button
// //           onClick={handlePrevious}
// //           disabled={currentQuestionIndex === 0}
// //           className={`px-4 py-2 rounded-lg ${
// //             currentQuestionIndex === 0
// //               ? "bg-gray-300 text-gray-600"
// //               : "bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
// //           }`}
// //         >
// //           Previous
// //         </button>
// //         <button
// //           onClick={() => setShowCorrectAnswer(true)}
// //           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
// //         >
// //           View Correct Answer
// //         </button>
// //         <button
// //           onClick={handleNext}
// //           disabled={currentQuestionIndex === questions.length - 1}
// //           className={`px-4 py-2 rounded-lg ${
// //             currentQuestionIndex === questions.length - 1
// //               ? "bg-gray-300 text-gray-600"
// //               : "bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
// //           }`}
// //         >
// //           Next
// //         </button>
// //       </div>
// //     </div>
// //     </div>    
// //     </>
// // )}
// //   export default  Cpp;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import SubNavbar from "../SubNavbar";
// import Confetti from "react-confetti";
// import { motion } from "framer-motion";
// import { Howl } from "howler";

// const Cpp= () => {
//   const questions = [
//              {
//                 "question": "Which of the following is a correct identifier in C++?",
//                 "options": ["1variable", "_variable", "variable#", "var@iable"],
//                 "correctAnswer": "_variable"
//               },
//               {
//                 "question": "What is the default access specifier for members of a class in C++?",
//                 "options": ["public", "private", "protected", "None"],
//                 "correctAnswer": "private"
//               },
//               {
//                 "question": "Which of the following is not a C++ keyword?",
//                 "options": ["virtual", "explicit", "interface", "volatile"],
//                 "correctAnswer": "interface"
//               },
//               {
//                 "question": "What is the output of 'cout << 10 / 4;'?",
//                 "options": ["2.5", "2", "4", "Error"],
//                 "correctAnswer": "2"
//               },
//               {
//                 "question": "Which of the following correctly declares an array in C++?",
//                 "options": ["int arr(10);", "int arr[] = {1, 2, 3};", "arr{10};", "array int arr;"],
//                 "correctAnswer": "int arr[] = {1, 2, 3};"
//               },
//               {
//                 "question": "What is polymorphism in C++?",
//                 "options": [
//                   "Ability to process objects differently based on their data type",
//                   "A single class having multiple methods",
//                   "The process of defining multiple classes",
//                   "Inheritance from multiple classes"
//                 ],
//                 "correctAnswer": "Ability to process objects differently based on their data type"
//               },
//               {
//                 "question": "What does the keyword 'this' represent in C++?",
//                 "options": [
//                   "The current object of the class",
//                   "The next object of the class",
//                   "The previous object of the class",
//                   "None of the above"
//                 ],
//                 "correctAnswer": "The current object of the class"
//               },
//               {
//                 "question": "Which of the following concepts means wrapping data and functions together?",
//                 "options": ["Abstraction", "Encapsulation", "Polymorphism", "Inheritance"],
//                 "correctAnswer": "Encapsulation"
//               },
//               {
//                 "question": "Which operator is used to access a member of a structure through a pointer?",
//                 "options": [".", "->", "&", "*"],
//                 "correctAnswer": "->"
//               },
//               {
//                 "question": "Which of the following is a correct way to allocate memory dynamically in C++?",
//                 "options": ["int* p = malloc(10);", "int* p = new int[10];", "int p = new int;", "int* p = calloc(10);"],
//                 "correctAnswer": "int* p = new int[10];"
//               },
//               {
//                 "question": "What is the size of a pointer in a 64-bit system?",
//                 "options": ["4 bytes", "8 bytes", "16 bytes", "Depends on the compiler"],
//                 "correctAnswer": "8 bytes"
//               },
//               {
//                 "question": "What does STL stand for in C++?",
//                 "options": [
//                   "Standard Template Library",
//                   "Simple Template Library",
//                   "Structured Template Library",
//                   "Standard Type Library"
//                 ],
//                 "correctAnswer": "Standard Template Library"
//               },
//               {
//                 "question": "Which of the following is used to define a template in C++?",
//                 "options": ["template<>", "template<type>", "template<class T>", "template::class"],
//                 "correctAnswer": "template<class T>"
//               },
//               {
//                 "question": "Which of the following is not a feature of object-oriented programming?",
//                 "options": ["Encapsulation", "Polymorphism", "Pointers", "Inheritance"],
//                 "correctAnswer": "Pointers"
//               },
//               {
//                 "question": "Which of the following data types can store a wide character in C++?",
//                 "options": ["char", "wchar_t", "string", "wchar"],
//                 "correctAnswer": "wchar_t"
//               },
//               {
//                 "question": "What is the purpose of a virtual function in C++?",
//                 "options": [
//                   "To allow overriding by derived classes",
//                   "To define static methods",
//                   "To create abstract classes",
//                   "To define inline methods"
//                 ],
//                 "correctAnswer": "To allow overriding by derived classes"
//               },
//               {
//                 "question": "Which of the following is a destructor in C++?",
//                 "options": ["~ClassName()", "ClassName()", "void Destructor()", "delete()"],
//                 "correctAnswer": "~ClassName()"
//               },
//               {
//                 "question": "Which of the following is not a valid scope resolution in C++?",
//                 "options": ["::", ".", "->", "None of the above"],
//                 "correctAnswer": "."
//               },
//               {
//                 "question": "Which keyword is used to prevent a member function from modifying the object in C++?",
//                 "options": ["static", "constant", "const", "final"],
//                 "correctAnswer": "const"
//               },
//               {
//                 "question": "What is the output of the following code? int x = 5; cout << ++x << x++;",
//                 "options": ["65", "56", "66", "Error"],
//                 "correctAnswer": "66"
//               }
           
          
//           ];
        



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
//         <div className="w-full h-4 bg-gray-200 relative mt-2">
//           <div
//             className="absolute top-0 left-0 h-full bg-blue-500"
//             style={{
//               width: `${(correctAnswersCount / questions.length) * 100}%`,
//             }}
//           ></div>
//         </div>

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

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Howl } from "howler";

const Cpp = () => {
  const navigate = useNavigate();
  const questions = [
    {
      question: "Which of the following is used to define a class in C++?",
      options: ["struct", "class", "define", "object"],
      correctAnswer: "class"
    },
    {
      question: "Which concept allows the same function name with different parameters?",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Function Overloading"],
      correctAnswer: "Function Overloading"
    },
    {
      question: "Which of these is a correct C++ comment?",
      options: ["// comment", "# comment", "-- comment", "/* comment"],
      correctAnswer: "// comment"
    },
    {
      question: "What is the scope resolution operator in C++?",
      options: [".", "::", ":", "->"],
      correctAnswer: "::"
    },
    {
      question: "Which of the following is not a C++ keyword?",
      options: ["new", "delete", "include", "this"],
      correctAnswer: "include"
    },
    {
      question: "Which feature in C++ allows defining multiple functions with the same name?",
      options: ["Overloading", "Inheritance", "Encapsulation", "Abstraction"],
      correctAnswer: "Overloading"
    },
    {
      question: "What does STL stand for in C++?",
      options: [
        "Standard Type Library",
        "System Template Library",
        "Standard Template Library",
        "Static Template Library"
      ],
      correctAnswer: "Standard Template Library"
    },
    {
      question: "Which container stores elements in key-value pairs?",
      options: ["vector", "set", "map", "list"],
      correctAnswer: "map"
    },
    {
      question: "What is a virtual function?",
      options: [
        "A function defined outside class",
        "A function without definition",
        "A function with return value",
        "A function that can be overridden in derived class"
      ],
      correctAnswer: "A function that can be overridden in derived class"
    },
    {
      question: "Which operator is overloaded for object destruction?",
      options: ["~", "()", "delete", "None"],
      correctAnswer: "None"
    },
    {
      question: "Which of these is used for dynamic memory allocation?",
      options: ["malloc", "calloc", "new", "alloc"],
      correctAnswer: "new"
    },
    {
      question: "What is the default access specifier for class members?",
      options: ["private", "public", "protected", "global"],
      correctAnswer: "private"
    },
    {
      question: "Which loop guarantees at least one execution?",
      options: ["for", "while", "do-while", "None"],
      correctAnswer: "do-while"
    },
    {
      question: "Which of these types does `cin` accept by default?",
      options: ["int", "string", "char", "Depends on input"],
      correctAnswer: "Depends on input"
    },
    {
      question: "How are templates useful?",
      options: [
        "For runtime polymorphism",
        "For generic programming",
        "To allocate memory",
        "For class inheritance"
      ],
      correctAnswer: "For generic programming"
    },
    {
      question: "Which keyword is used to create an object?",
      options: ["class", "object", "new", "None of these"],
      correctAnswer: "None of these"
    },
    {
      question: "Which function is called automatically when an object is created?",
      options: ["Destructor", "Constructor", "Virtual Function", "Operator Overload"],
      correctAnswer: "Constructor"
    },
    {
      question: "Which of the following is used to release memory?",
      options: ["delete", "remove", "free", "dealloc"],
      correctAnswer: "delete"
    },
    {
      question: "Which header is required for using vectors?",
      options: ["<list>", "<vector>", "<queue>", "<map>"],
      correctAnswer: "<vector>"
    },
    {
      question: "Which principle binds data and functions together?",
      options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
      correctAnswer: "Encapsulation"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [timer, setTimer] = useState(20);
  const [score, setScore] = useState(localStorage.getItem("bestScoreCpp") || 0);

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
    localStorage.setItem("scoreCpp", correctAnswersCount);
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

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
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
            style={{ width: `${(correctAnswersCount / questions.length) * 100}%` }}
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
                  <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
                    Keep Practicing!
                  </h2>
                  <p className="text-lg text-gray-700 mb-2">
                    You've completed the quiz.
                  </p>
                  <p className="text-blue-500 font-medium mb-2">Try Again!</p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                    🎉 Congratulations! 🎉
                  </h2>
                  <p className="text-lg text-gray-700 mb-2">
                    You've completed the quiz.
                  </p>
                  <p className="text-blue-500 font-medium mb-2">Great job!</p>
                </>
              )}
              <p className="text-xl font-semibold">
                Your Score: {correctAnswersCount}/{questions.length} ({scorePercentage.toFixed(2)}%)
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
                  Correct Answer: <span className="font-semibold">{currentQuestion.correctAnswer}</span>
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

export default Cpp;
