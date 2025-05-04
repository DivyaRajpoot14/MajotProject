import NavBar from "../Navbar"
import SubNavbar from "../SubNavbar";
import React, { useState } from "react";

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
      const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    
      const currentQuestion = questions[currentQuestionIndex];
    
      const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setShowCorrectAnswer(false);
      };
    
      const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedOption(null);
          setShowCorrectAnswer(false);
        }
      };
    
      const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex(currentQuestionIndex - 1);
          setSelectedOption(null);
          setShowCorrectAnswer(false);
        }
      };
    
      const progressPercentage =
        ((currentQuestionIndex + 1) / questions.length) * 100;
    
return(
    <>
    <NavBar/>
    <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4">
    <SubNavbar/>
 <div className="w-[50dvw] h-[60dvh] mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Progress Bar */}
      <div className="relative w-full bg-gray-200 rounded-full h-4 mb-6">
        <div
          className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      {/* Question */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Question {currentQuestionIndex + 1}: {currentQuestion.question}
      </h2>
      {/* Options */}
      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            className={`w-full px-4 py-2 text-left border rounded-lg hover:bg-gray-100 transition-colors ${
              selectedOption === option
                ? selectedOption === currentQuestion.correctAnswer
                  ? "border-green-500 bg-green-50"
                  : "border-red-500 bg-red-50"
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {/* Correct Answer */}
      {showCorrectAnswer && (
        <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-700">
          <p>
            Correct Answer:{" "}
            <span className="font-bold">{currentQuestion.correctAnswer}</span>
          </p>

        </div>
      )}
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`px-4 py-2 rounded-lg ${
            currentQuestionIndex === 0
              ? "bg-gray-300 text-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => setShowCorrectAnswer(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          View Correct Answer
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
          className={`px-4 py-2 rounded-lg ${
            currentQuestionIndex === questions.length - 1
              ? "bg-gray-300 text-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
          }`}
        >
          Next
        </button>
      </div>
    </div>
    </div>    
    </>
)}
  export default  Js;