import NavBar from "../Navbar"
import SubNavbar from "../SubNavbar";
import React, { useState } from "react";

const Html=()=>{
    const questions = [
      
          {
            "question": "What does HTML stand for?",
            "options": [
              "Hyper Text Markup Language",
              "Hyperlinks and Text Markup Language",
              "Home Tool Markup Language",
              "Hyper Tool Markup Language"
            ],
            "correctAnswer": "Hyper Text Markup Language"
          },
          {
            "question": "Which tag is used to define a hyperlink in HTML?",
            "options": [
              "<a>",
              "<link>",
              "<href>",
              "<url>"
            ],
            "correctAnswer": "<a>"
          },
          {
            "question": "Which of the following is the correct HTML element to define bold text?",
            "options": [
              "<strong>",
              "<b>",
              "<bold>",
              "<em>"
            ],
            "correctAnswer": "<strong>"
          },
          {
            "question": "What is the correct HTML tag for inserting an image?",
            "options": [
              "<image>",
              "<img>",
              "<src>",
              "<pic>"
            ],
            "correctAnswer": "<img>"
          },
          {
            "question": "Which of the following is the correct HTML element for creating an unordered list?",
            "options": [
              "<ul>",
              "<ol>",
              "<li>",
              "<list>"
            ],
            "correctAnswer": "<ul>"
          },
          {
            "question": "How do you create a comment in HTML?",
            "options": [
              "// This is a comment",
              "<!-- This is a comment -->",
              "<comment>This is a comment</comment>",
              "# This is a comment"
            ],
            "correctAnswer": "<!-- This is a comment -->"
          },
          {
            "question": "What is the correct HTML tag for the largest heading?",
            "options": [
              "<h1>",
              "<h2>",
              "<h3>",
              "<head>"
            ],
            "correctAnswer": "<h1>"
          },
          {
            "question": "Which attribute is used to provide a URL to a link?",
            "options": [
              "src",
              "href",
              "link",
              "url"
            ],
            "correctAnswer": "href"
          },
          {
            "question": "Which tag is used to define a table in HTML?",
            "options": [
              "<table>",
              "<tr>",
              "<td>",
              "<th>"
            ],
            "correctAnswer": "<table>"
          },
          {
            "question": "How do you define a paragraph in HTML?",
            "options": [
              "<p>",
              "<paragraph>",
              "<text>",
              "<para>"
            ],
            "correctAnswer": "<p>"
          },
          {
            "question": "Which tag is used to define an input field in HTML?",
            "options": [
              "<input>",
              "<field>",
              "<text>",
              "<form>"
            ],
            "correctAnswer": "<input>"
          },
          {
            "question": "Which attribute is used to specify the source file for an image?",
            "options": [
              "src",
              "href",
              "alt",
              "file"
            ],
            "correctAnswer": "src"
          },
          {
            "question": "Which of the following tags is used for creating a line break in HTML?",
            "options": [
              "<break>",
              "<hr>",
              "<br>",
              "<line>"
            ],
            "correctAnswer": "<br>"
          },
          {
            "question": "What is the purpose of the <meta> tag in HTML?",
            "options": [
              "Defines the metadata about the HTML document",
              "Defines a header for the document",
              "Defines a footer for the document",
              "Defines the body content of the document"
            ],
            "correctAnswer": "Defines the metadata about the HTML document"
          },
          {
            "question": "What does the <link> tag in HTML do?",
            "options": [
              "Links external CSS to the HTML document",
              "Links external JavaScript to the HTML document",
              "Links an image to a page",
              "Links a page to another webpage"
            ],
            "correctAnswer": "Links external CSS to the HTML document"
          },
          {
            "question": "Which of the following is the correct HTML tag to create a dropdown list?",
            "options": [
              "<dropdown>",
              "<list>",
              "<select>",
              "<option>"
            ],
            "correctAnswer": "<select>"
          },
          {
            "question": "Which tag is used to define a table row in HTML?",
            "options": [
              "<td>",
              "<tr>",
              "<th>",
              "<table>"
            ],
            "correctAnswer": "<tr>"
          },
          {
            "question": "Which of the following HTML tags is used to define a list item?",
            "options": [
              "<li>",
              "<item>",
              "<list>",
              "<ol>"
            ],
            "correctAnswer": "<li>"
          },
          {
            "question": "What is the correct HTML element for embedding a video?",
            "options": [
              "<video>",
              "<media>",
              "<embed>",
              "<movie>"
            ],
            "correctAnswer": "<video>"
          },
          {
            "question": "How can you make a list that is ordered in HTML?",
            "options": [
              "<ol>",
              "<ul>",
              "<li>",
              "<list>"
            ],
            "correctAnswer": "<ol>"
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
  export default  Html;