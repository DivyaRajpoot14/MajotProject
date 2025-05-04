import NavBar from "../Navbar";
import SubNavbar from "../SubNavbar";
import React, { useState } from "react";

const C = () => {
  const questions = [
    {
      "question": "What is the correct syntax to declare a pointer in C?",
      "options": ["int ptr;", "int *ptr;", "*int ptr;", "int& ptr;"],
      "correctAnswer": "int *ptr;"
    },
    {
      "question": "Which of the following is used to terminate a C statement?",
      "options": [",", ";", ":", "."],
      "correctAnswer": ";"
    },
    {
      "question": "What is the default return type of a C function if no type is specified?",
      "options": ["int", "void", "char", "float"],
      "correctAnswer": "int"
    },
    {
      "question": "Which of the following is not a valid storage class in C?",
      "options": ["auto", "register", "static", "constant"],
      "correctAnswer": "constant"
    },
    {
      "question": "Which keyword is used to define a structure in C?",
      "options": ["class", "struct", "enum", "typedef"],
      "correctAnswer": "struct"
    },
    {
      "question": "Which header file is required for input/output functions in C?",
      "options": ["stdio.h", "conio.h", "stdlib.h", "math.h"],
      "correctAnswer": "stdio.h"
    },
    {
      "question": "What is the purpose of the 'break' statement in C?",
      "options": [
        "To exit from a loop or switch statement",
        "To pause execution temporarily",
        "To skip the current iteration of a loop",
        "To end the program execution"
      ],
      "correctAnswer": "To exit from a loop or switch statement"
    },
    {
      "question": "Which operator is used to get the address of a variable?",
      "options": ["&", "*", "%", "@@"],
      "correctAnswer": "&"
    },
    {
      "question": "What is the size of an integer data type on a typical 32-bit system?",
      "options": ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
      "correctAnswer": "4 bytes"
    },
    {
      "question": "How do you dynamically allocate memory in C?",
      "options": ["malloc()", "alloc()", "calloc()", "Both malloc() and calloc()"],
      "correctAnswer": "Both malloc() and calloc()"
    },
    {
      "question": "Which of the following is not a valid loop in C?",
      "options": ["for", "while", "do-while", "foreach"],
      "correctAnswer": "foreach"
    },
    {
      "question": "What is the function of the 'continue' statement?",
      "options": [
        "To end the loop",
        "To pause execution temporarily",
        "To skip the rest of the current iteration",
        "To return a value from a function"
      ],
      "correctAnswer": "To skip the rest of the current iteration"
    },
    {
      "question": "What is the purpose of the 'sizeof' operator?",
      "options": [
        "To determine the size of a data type or variable",
        "To allocate memory",
        "To initialize an array",
        "To define a structure"
      ],
      "correctAnswer": "To determine the size of a data type or variable"
    },
    {
      "question": "Which of the following functions converts a string to an integer?",
      "options": ["itoa()", "atoi()", "sprintf()", "strcpy()"],
      "correctAnswer": "atoi()"
    },
    {
      "question": "What is the value of an uninitialized local variable in C?",
      "options": ["0", "Garbage value", "Null", "Undefined"],
      "correctAnswer": "Garbage value"
    },
    {
      "question": "Which of the following is not a preprocessor directive?",
      "options": ["#include", "#define", "#pragma", "#execute"],
      "correctAnswer": "#execute"
    },
    {
      "question": "Which data type is used to create a variable that holds a single character?",
      "options": ["int", "char", "string", "float"],
      "correctAnswer": "char"
    },
    {
      "question": "What is the output of the following code: printf(\"%d\", 10 + 20);",
      "options": ["1020", "30", "10+20", "Error"],
      "correctAnswer": "30"
    },
    {
      "question": "Which of the following is used to define a constant in C?",
      "options": ["#define", "const", "static", "Both #define and const"],
      "correctAnswer": "Both #define and const"
    },
    {
      "question": "What is the correct way to start the main function in C?",
      "options": ["void main()", "main()", "int main()", "None of the above"],
      "correctAnswer": "int main()"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.correctAnswer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
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

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  const isQuizCompleted = currentQuestionIndex === questions.length - 1;

  return (
    <>
      <NavBar />
      <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4">
        <SubNavbar />
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
          {/* Result */}
          {isQuizCompleted && (
            <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
              <p>
                Your Score: {correctAnswersCount} out of {questions.length}
              </p>
              <p>
                {correctAnswersCount >= questions.length / 2
                  ? "Good job!"
                  : "Better luck next time!"}
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
  );
};

export default C;
