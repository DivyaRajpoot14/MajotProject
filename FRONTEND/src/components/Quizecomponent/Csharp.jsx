import NavBar from "../Navbar"
import SubNavbar from "../SubNavbar";
import React, { useState } from "react";
const Csharp=()=>{
    
            const questions = [
              
                  {
                    "question": "Which of the following is the correct way to declare a nullable type in C#?",
                    "options": ["int x;", "int? x;", "nullable int x;", "int nullable x;"],
                    "correctAnswer": "int? x;"
                  },
                  {
                    "question": "Which method is the entry point of a C# application?",
                    "options": ["Start()", "Begin()", "Main()", "Run()"],
                    "correctAnswer": "Main()"
                  },
                  {
                    "question": "Which of the following is not a value type in C#?",
                    "options": ["int", "float", "string", "bool"],
                    "correctAnswer": "string"
                  },
                  {
                    "question": "What does the 'using' keyword do in C#?",
                    "options": [
                      "Defines a namespace",
                      "Imports a namespace",
                      "Declares a variable",
                      "Handles exceptions"
                    ],
                    "correctAnswer": "Imports a namespace"
                  },
                  {
                    "question": "Which of the following is used to define a class in C#?",
                    "options": ["class", "Class", "define", "object"],
                    "correctAnswer": "class"
                  },
                  {
                    "question": "Which keyword is used to inherit a class in C#?",
                    "options": ["inherit", "base", "extends", ":"],
                    "correctAnswer": ":"
                  },
                  {
                    "question": "What is the default access modifier for a class in C#?",
                    "options": ["public", "protected", "private", "internal"],
                    "correctAnswer": "internal"
                  },
                  {
                    "question": "Which of the following types does not support multiple inheritance in C#?",
                    "options": ["Classes", "Interfaces", "Structs", "Enums"],
                    "correctAnswer": "Classes"
                  },
                  {
                    "question": "Which of the following statements is used to handle exceptions in C#?",
                    "options": ["catch", "throw", "try", "All of the above"],
                    "correctAnswer": "All of the above"
                  },
                  {
                    "question": "What is the purpose of the 'sealed' keyword in C#?",
                    "options": [
                      "To prevent a method from being overridden",
                      "To make a class non-inheritable",
                      "To define a constant",
                      "To declare an abstract class"
                    ],
                    "correctAnswer": "To make a class non-inheritable"
                  },
                  {
                    "question": "Which of the following is not a valid data type in C#?",
                    "options": ["byte", "double", "float", "real"],
                    "correctAnswer": "real"
                  },
                  {
                    "question": "Which of the following is used to create a read-only property in C#?",
                    "options": [
                      "Use a 'readonly' keyword",
                      "Provide only a get accessor",
                      "Use a const variable",
                      "Provide only a set accessor"
                    ],
                    "correctAnswer": "Provide only a get accessor"
                  },
                  {
                    "question": "Which of the following is the correct way to implement an interface in C#?",
                    "options": [
                      "class MyClass : IMyInterface",
                      "class MyClass implements IMyInterface",
                      "class MyClass inherits IMyInterface",
                      "class MyClass extends IMyInterface"
                    ],
                    "correctAnswer": "class MyClass : IMyInterface"
                  },
                  {
                    "question": "Which method is used to pause the execution of a thread in C#?",
                    "options": ["wait()", "sleep()", "pause()", "stop()"],
                    "correctAnswer": "sleep()"
                  },
                  {
                    "question": "What is the default value of a bool variable in C#?",
                    "options": ["true", "false", "null", "undefined"],
                    "correctAnswer": "false"
                  },
                  {
                    "question": "Which of the following is used to declare a constant in C#?",
                    "options": ["const", "readonly", "static", "immutable"],
                    "correctAnswer": "const"
                  },
                  {
                    "question": "Which collection guarantees unique elements in C#?",
                    "options": ["ArrayList", "Dictionary", "HashSet", "List"],
                    "correctAnswer": "HashSet"
                  },
                  {
                    "question": "What is the purpose of the 'delegate' keyword in C#?",
                    "options": [
                      "To define a reference type for methods",
                      "To handle exceptions",
                      "To declare a constant",
                      "To define a variable"
                    ],
                    "correctAnswer": "To define a reference type for methods"
                  },
                  {
                    "question": "Which of the following operators is used for type casting in C#?",
                    "options": ["as", "is", "cast", "typeof"],
                    "correctAnswer": "as"
                  },
                  {
                    "question": "What does LINQ stand for in C#?",
                    "options": [
                      "Language Integrated Query",
                      "Language Interface Query",
                      "Library Integrated Query",
                      "Local Integrated Query"
                    ],
                    "correctAnswer": "Language Integrated Query"
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
    
    )
    }
    export default  Csharp;