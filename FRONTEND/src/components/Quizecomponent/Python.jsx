import NavBar from "../Navbar"
import SubNavbar from "../SubNavbar";
import React, { useState } from "react";

const Python=()=>{
    const questions = [
          {
            "question": "Which of the following is the correct file extension for Python files?",
            "options": [".py", ".python", ".pt", ".pyt"],
            "correctAnswer": ".py"
          },
          {
            "question": "What is the output of: print(type([]))?",
            "options": ["<class 'list'>", "<class 'dict'>", "<class 'set'>", "<class 'tuple'>"],
            "correctAnswer": "<class 'list'>"
          },
          {
            "question": "Which of the following is used to define a block of code in Python?",
            "options": ["{}", "()", "Indentation", "[]"],
            "correctAnswer": "Indentation"
          },
          {
            "question": "Which keyword is used to define a function in Python?",
            "options": ["function", "def", "func", "define"],
            "correctAnswer": "def"
          },
          {
            "question": "What is the correct way to create a dictionary in Python?",
            "options": [
              "{key1: value1, key2: value2}",
              "[key1: value1, key2: value2]",
              "(key1, value1, key2, value2)",
              "{key1, value1, key2, value2}"
            ],
            "correctAnswer": "{key1: value1, key2: value2}"
          },
          {
            "question": "Which of the following is not a valid Python data type?",
            "options": ["List", "Tuple", "Class", "Queue"],
            "correctAnswer": "Queue"
          },
          {
            "question": "What does the 'len()' function do in Python?",
            "options": [
              "Returns the size of a list",
              "Returns the number of characters in a string",
              "Returns the total elements in an iterable",
              "All of the above"
            ],
            "correctAnswer": "All of the above"
          },
          {
            "question": "Which of the following methods can be used to add an element to a list?",
            "options": ["add()", "append()", "insert()", "All of the above"],
            "correctAnswer": "append()"
          },
          {
            "question": "What is the output of: print(2 ** 3)?",
            "options": ["6", "8", "9", "12"],
            "correctAnswer": "8"
          },
          {
            "question": "Which keyword is used to create a class in Python?",
            "options": ["class", "Class", "def", "struct"],
            "correctAnswer": "class"
          },
          {
            "question": "Which of the following is used to handle exceptions in Python?",
            "options": ["try-except", "if-else", "for-while", "None of the above"],
            "correctAnswer": "try-except"
          },
          {
            "question": "Which module in Python supports regular expressions?",
            "options": ["regex", "re", "regexp", "pyregex"],
            "correctAnswer": "re"
          },
          {
            "question": "What will be the output of: print('hello' * 3)?",
            "options": ["hellohellohello", "hello hello hello", "Error", "None"],
            "correctAnswer": "hellohellohello"
          },
          {
            "question": "Which function is used to take input from the user in Python?",
            "options": ["input()", "get()", "scan()", "read()"],
            "correctAnswer": "input()"
          },
          {
            "question": "What is the difference between a list and a tuple in Python?",
            "options": [
              "Lists are immutable, tuples are mutable",
              "Lists are mutable, tuples are immutable",
              "Both are mutable",
              "Both are immutable"
            ],
            "correctAnswer": "Lists are mutable, tuples are immutable"
          },
          {
            "question": "What is the output of: print(bool(0))?",
            "options": ["True", "False", "Error", "None"],
            "correctAnswer": "False"
          },
          {
            "question": "Which of the following functions can be used to open a file in Python?",
            "options": ["open()", "file()", "read()", "write()"],
            "correctAnswer": "open()"
          },
          {
            "question": "Which of the following is used to create an anonymous function in Python?",
            "options": ["lambda", "def", "func", "None"],
            "correctAnswer": "lambda"
          },
          {
            "question": "What is the output of: print('Python'.lower())?",
            "options": ["PYTHON", "python", "Python", "Error"],
            "correctAnswer": "python"
          },
          {
            "question": "Which of the following statements is true about Python?",
            "options": [
              "Python is interpreted",
              "Python is case-sensitive",
              "Python supports multiple programming paradigms",
              "All of the above"
            ],
            "correctAnswer": "All of the above"
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
  export default  Python;