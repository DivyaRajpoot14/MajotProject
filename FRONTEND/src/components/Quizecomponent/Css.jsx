import NavBar from "../Navbar"
import SubNavbar from "../SubNavbar";
import React, { useState } from "react";

const Css=()=>{
    const questions = [
      
          {
            "question": "What does CSS stand for?",
            "options": [
              "Computer Style Sheets",
              "Cascading Style Sheets",
              "Creative Style Sheets",
              "Colorful Style Sheets"
            ],
            "correctAnswer": "Cascading Style Sheets"
          },
          {
            "question": "Which HTML tag is used to link a CSS file to an HTML document?",
            "options": [
              "<link>",
              "<style>",
              "<css>",
              "<script>"
            ],
            "correctAnswer": "<link>"
          },
          {
            "question": "Which CSS property is used to change the text color?",
            "options": [
              "font-color",
              "text-color",
              "color",
              "background-color"
            ],
            "correctAnswer": "color"
          },
          {
            "question": "Which property is used to change the background color of an element?",
            "options": [
              "background-color",
              "bgcolor",
              "color",
              "background"
            ],
            "correctAnswer": "background-color"
          },
          {
            "question": "Which of the following CSS selectors selects all <p> elements inside a <div>?",
            "options": [
              "div p",
              "div > p",
              "div + p",
              "p div"
            ],
            "correctAnswer": "div p"
          },
          {
            "question": "What is the default value of the position property in CSS?",
            "options": [
              "relative",
              "absolute",
              "static",
              "fixed"
            ],
            "correctAnswer": "static"
          },
          {
            "question": "Which CSS property is used to control the font size of text?",
            "options": [
              "font-style",
              "font-size",
              "text-style",
              "font-weight"
            ],
            "correctAnswer": "font-size"
          },
          {
            "question": "How can you add a comment in a CSS file?",
            "options": [
              "// This is a comment",
              "/* This is a comment */",
              "<!-- This is a comment -->",
              "# This is a comment"
            ],
            "correctAnswer": "/* This is a comment */"
          },
          {
            "question": "Which of the following CSS properties controls the spacing between lines of text?",
            "options": [
              "line-spacing",
              "line-height",
              "text-spacing",
              "letter-spacing"
            ],
            "correctAnswer": "line-height"
          },
          {
            "question": "Which property is used to set the spacing between characters in CSS?",
            "options": [
              "letter-spacing",
              "word-spacing",
              "text-spacing",
              "line-spacing"
            ],
            "correctAnswer": "letter-spacing"
          },
          {
            "question": "Which property is used to add space around elements in CSS?",
            "options": [
              "padding",
              "margin",
              "spacing",
              "border"
            ],
            "correctAnswer": "margin"
          },
          {
            "question": "Which CSS property is used to change the font family of text?",
            "options": [
              "font-style",
              "font-family",
              "font-type",
              "text-font"
            ],
            "correctAnswer": "font-family"
          },
          {
            "question": "What is the correct CSS syntax to select an element with the class 'example'?",
            "options": [
              ".example {}",
              "#example {}",
              "example {}",
              "class.example {}"
            ],
            "correctAnswer": ".example {}"
          },
          {
            "question": "What does the CSS 'z-index' property do?",
            "options": [
              "Sets the stacking order of elements",
              "Sets the transparency of an element",
              "Sets the color of an element",
              "Sets the font size of an element"
            ],
            "correctAnswer": "Sets the stacking order of elements"
          },
          {
            "question": "Which of the following values can the 'display' property have in CSS?",
            "options": [
              "block",
              "inline",
              "none",
              "All of the above"
            ],
            "correctAnswer": "All of the above"
          },
          {
            "question": "Which CSS property is used to make text bold?",
            "options": [
              "font-weight",
              "font-style",
              "text-weight",
              "font-size"
            ],
            "correctAnswer": "font-weight"
          },
          {
            "question": "What does the 'float' property do in CSS?",
            "options": [
              "Positions an element to the left or right of its container",
              "Makes an element invisible",
              "Sets the opacity of an element",
              "Aligns text in the center"
            ],
            "correctAnswer": "Positions an element to the left or right of its container"
          },
          {
            "question": "How do you make a link open in a new tab using CSS?",
            "options": [
              "Use target='_blank' in the <a> tag",
              "Use target='new' in the <a> tag",
              "Use position: relative;",
              "Use display: block;"
            ],
            "correctAnswer": "Use target='_blank' in the <a> tag"
          },
          {
            "question": "Which property is used to control the visibility of an element?",
            "options": [
              "visibility",
              "display",
              "opacity",
              "none"
            ],
            "correctAnswer": "visibility"
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
  export default  Css;