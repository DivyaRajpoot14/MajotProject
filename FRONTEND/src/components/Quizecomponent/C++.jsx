import NavBar from "../Navbar"
import SubNavbar from "../SubNavbar";
import React, { useState } from "react";

const Cpp=()=>{
    const questions = [
         {
            "question": "Which of the following is a correct identifier in C++?",
            "options": ["1variable", "_variable", "variable#", "var@iable"],
            "answer": "_variable"
          },
          {
            "question": "What is the default access specifier for members of a class in C++?",
            "options": ["public", "private", "protected", "None"],
            "answer": "private"
          },
          {
            "question": "Which of the following is not a C++ keyword?",
            "options": ["virtual", "explicit", "interface", "volatile"],
            "answer": "interface"
          },
          {
            "question": "What is the output of 'cout << 10 / 4;'?",
            "options": ["2.5", "2", "4", "Error"],
            "answer": "2"
          },
          {
            "question": "Which of the following correctly declares an array in C++?",
            "options": ["int arr(10);", "int arr[] = {1, 2, 3};", "arr{10};", "array int arr;"],
            "answer": "int arr[] = {1, 2, 3};"
          },
          {
            "question": "What is polymorphism in C++?",
            "options": [
              "Ability to process objects differently based on their data type",
              "A single class having multiple methods",
              "The process of defining multiple classes",
              "Inheritance from multiple classes"
            ],
            "answer": "Ability to process objects differently based on their data type"
          },
          {
            "question": "What does the keyword 'this' represent in C++?",
            "options": [
              "The current object of the class",
              "The next object of the class",
              "The previous object of the class",
              "None of the above"
            ],
            "answer": "The current object of the class"
          },
          {
            "question": "Which of the following concepts means wrapping data and functions together?",
            "options": ["Abstraction", "Encapsulation", "Polymorphism", "Inheritance"],
            "answer": "Encapsulation"
          },
          {
            "question": "Which operator is used to access a member of a structure through a pointer?",
            "options": [".", "->", "&", "*"],
            "answer": "->"
          },
          {
            "question": "Which of the following is a correct way to allocate memory dynamically in C++?",
            "options": ["int* p = malloc(10);", "int* p = new int[10];", "int p = new int;", "int* p = calloc(10);"],
            "answer": "int* p = new int[10];"
          },
          {
            "question": "What is the size of a pointer in a 64-bit system?",
            "options": ["4 bytes", "8 bytes", "16 bytes", "Depends on the compiler"],
            "answer": "8 bytes"
          },
          {
            "question": "What does STL stand for in C++?",
            "options": [
              "Standard Template Library",
              "Simple Template Library",
              "Structured Template Library",
              "Standard Type Library"
            ],
            "correctAnswer": "Standard Template Library"
          },
          {
            "question": "Which of the following is used to define a template in C++?",
            "options": ["template<>", "template<type>", "template<class T>", "template::class"],
            "correctAnswer": "template<class T>"
          },
          {
            "question": "Which of the following is not a feature of object-oriented programming?",
            "options": ["Encapsulation", "Polymorphism", "Pointers", "Inheritance"],
            "correctAnswer": "Pointers"
          },
          {
            "question": "Which of the following data types can store a wide character in C++?",
            "options": ["char", "wchar_t", "string", "wchar"],
            "correctAnswer": "wchar_t"
          },
          {
            "question": "What is the purpose of a virtual function in C++?",
            "options": [
              "To allow overriding by derived classes",
              "To define static methods",
              "To create abstract classes",
              "To define inline methods"
            ],
            "correctAnswer": "To allow overriding by derived classes"
          },
          {
            "question": "Which of the following is a destructor in C++?",
            "options": ["~ClassName()", "ClassName()", "void Destructor()", "delete()"],
            "correctAnswer": "~ClassName()"
          },
          {
            "question": "Which of the following is not a valid scope resolution in C++?",
            "options": ["::", ".", "->", "None of the above"],
            "correctAnswer": "."
          },
          {
            "question": "Which keyword is used to prevent a member function from modifying the object in C++?",
            "options": ["static", "constant", "const", "final"],
            "correctAnswer": "const"
          },
          {
            "question": "What is the output of the following code? int x = 5; cout << ++x << x++;",
            "options": ["65", "56", "66", "Error"],
            "correctAnswer": "66"
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
  {/* <h2>Questions C++</h2> */}
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
  export default  Cpp;