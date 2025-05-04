import NavBar from "../Navbar"
import SubNavbar from "../SubNavbar";
import React, { useState } from "react";

const Java=()=>{
    const questions = [
     
          {
            "question": "Which of the following is not a Java feature?",
            "options": ["Object-oriented", "Use of pointers", "Platform independent", "Robust"],
            "correctAnswer": "Use of pointers"
          },
          {
            "question": "Which data type is used to store decimal numbers in Java?",
            "options": ["int", "float", "boolean", "char"],
            "correctAnswer": "float"
          },
          {
            "question": "Which of the following is used to define a constant in Java?",
            "options": ["const", "constant", "final", "static"],
            "correctAnswer": "final"
          },
          {
            "question": "Which method is used to start the execution of a Java program?",
            "options": ["main()", "start()", "run()", "execute()"],
            "correctAnswer": "main()"
          },
          {
            "question": "Which keyword is used to inherit a class in Java?",
            "options": ["extends", "implements", "inherits", "super"],
            "correctAnswer": "extends"
          },
          {
            "question": "Which of the following is a superclass of every class in Java?",
            "options": ["Object", "Class", "Main", "Superclass"],
            "correctAnswer": "Object"
          },
          {
            "question": "Which operator is used to compare two values in Java?",
            "options": ["=", "==", "equals", "!="],
            "correctAnswer": "=="
          },
          {
            "question": "What is the size of an int data type in Java?",
            "options": ["8 bytes", "4 bytes", "2 bytes", "Depends on the platform"],
            "correctAnswer": "4 bytes"
          },
          {
            "question": "Which of these is a valid declaration of a package in Java?",
            "options": ["package mypackage;", "Package mypackage;", "package: mypackage;", "pack mypackage;"],
            "correctAnswer": "package mypackage;"
          },
          {
            "question": "What is the default value of a local variable in Java?",
            "options": ["0", "null", "Garbage value", "No default value"],
            "correctAnswer": "No default value"
          },
          {
            "question": "Which of the following is not a Java keyword?",
            "options": ["static", "try", "virtual", "final"],
            "correctAnswer": "virtual"
          },
          {
            "question": "What is the return type of the hashCode() method in Java?",
            "options": ["int", "float", "double", "long"],
            "correctAnswer": "int"
          },
          {
            "question": "Which keyword is used to handle exceptions in Java?",
            "options": ["try", "catch", "throw", "All of the above"],
            "correctAnswer": "All of the above"
          },
          {
            "question": "Which of the following statements is true about constructors in Java?",
            "options": [
              "Constructors must have the same name as the class",
              "Constructors can be called directly like regular methods",
              "Constructors have a return type",
              "Constructors cannot take parameters"
            ],
            "correctAnswer": "Constructors must have the same name as the class"
          },
          {
            "question": "What is the purpose of the 'super' keyword in Java?",
            "options": [
              "To create a superclass",
              "To call a superclass constructor or method",
              "To define a subclass",
              "To end a program"
            ],
            "correctAnswer": "To call a superclass constructor or method"
          },
          {
            "question": "Which of the following can be used to generate an infinite loop in Java?",
            "options": ["for(;;)", "while(true)", "do-while(true)", "All of the above"],
            "correctAnswer": "All of the above"
          },
          {
            "question": "What is the use of the 'this' keyword in Java?",
            "options": [
              "To refer to the current object",
              "To refer to a parent class",
              "To call a static method",
              "To refer to an external file"
            ],
            "correctAnswer": "To refer to the current object"
          },
          {
            "question": "What is the purpose of the 'finalize()' method in Java?",
            "options": [
              "To define a final method",
              "To clean up resources before an object is destroyed",
              "To terminate a program",
              "To initialize an object"
            ],
            "correctAnswer": "To clean up resources before an object is destroyed"
          },
          {
            "question": "Which of the following is not a wrapper class in Java?",
            "options": ["Integer", "Character", "Double", "String"],
            "correctAnswer": "String"
          },
          {
            "question": "Which of these allows the creation of a thread in Java?",
            "options": ["Runnable interface", "Thread class", "Both", "None of the above"],
            "correctAnswer": "Both"
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
  export default  Java;