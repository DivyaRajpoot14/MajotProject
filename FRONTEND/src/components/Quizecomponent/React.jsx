import NavBar from "../Navbar"
import SubNavbar from "../SubNavbar";
import React, { useState } from "react";

const  Reactjs=()=>{
    const questions = [
      
              {
                "question": "What is React?",
                "options": [
                  "A JavaScript library for building user interfaces",
                  "A JavaScript framework for building applications",
                  "A CSS framework for building layouts",
                  "A web server technology"
                ],
                "correctAnswer": "A JavaScript library for building user interfaces"
              },
              {
                "question": "Which method is used to render a React element to the DOM?",
                "options": [
                  "ReactDOM.render()",
                  "React.render()",
                  "renderElement()",
                  "DOM.render()"
                ],
                "correctAnswer": "ReactDOM.render()"
              },
              {
                "question": "What is JSX?",
                "options": [
                  "A JavaScript syntax extension that allows writing HTML inside JavaScript",
                  "A JavaScript framework for building components",
                  "A method of styling HTML elements",
                  "A tool for building backend services"
                ],
                "correctAnswer": "A JavaScript syntax extension that allows writing HTML inside JavaScript"
              },
              {
                "question": "What is the purpose of the 'key' prop in React lists?",
                "options": [
                  "To uniquely identify each list item for efficient rendering",
                  "To style the list item",
                  "To link the list item with its state",
                  "To track the order of the list items"
                ],
                "correctAnswer": "To uniquely identify each list item for efficient rendering"
              },
              {
                "question": "What is a React component?",
                "options": [
                  "A reusable UI element that can be rendered and updated",
                  "A function that handles data fetching",
                  "A server-side script",
                  "A CSS class for styling"
                ],
                "correctAnswer": "A reusable UI element that can be rendered and updated"
              },
              {
                "question": "Which of the following is a type of React component?",
                "options": [
                  "Functional Component",
                  "Class Component",
                  "Both Functional and Class Component",
                  "Neither"
                ],
                "correctAnswer": "Both Functional and Class Component"
              },
              {
                "question": "What hook is used to manage state in a functional component?",
                "options": [
                  "useState()",
                  "useEffect()",
                  "useContext()",
                  "useReducer()"
                ],
                "correctAnswer": "useState()"
              },
              {
                "question": "How do you pass data from a parent component to a child component in React?",
                "options": [
                  "Using props",
                  "Using state",
                  "Using context",
                  "Using events"
                ],
                "correctAnswer": "Using props"
              },
              {
                "question": "What is 'useEffect' used for in React?",
                "options": [
                  "To handle side effects such as data fetching and DOM manipulation",
                  "To manage component state",
                  "To define the structure of a component",
                  "To pass props between components"
                ],
                "correctAnswer": "To handle side effects such as data fetching and DOM manipulation"
              },
              {
                "question": "What is the React 'context' used for?",
                "options": [
                  "To provide a way to pass data through the component tree without passing props manually at every level",
                  "To create components",
                  "To manage component lifecycle methods",
                  "To update the component state"
                ],
                "correctAnswer": "To provide a way to pass data through the component tree without passing props manually at every level"
              },
              {
                "question": "Which of the following is the correct way to bind an event handler in React?",
                "options": [
                  "this.handleClick = this.handleClick.bind(this)",
                  "handleClick.bind(this)",
                  "this.handleClick()",
                  "bind(this.handleClick)"
                ],
                "correctAnswer": "this.handleClick = this.handleClick.bind(this)"
              },
              {
                "question": "Which React feature allows you to handle lifecycle events in a functional component?",
                "options": [
                  "useEffect()",
                  "componentDidMount()",
                  "componentWillUnmount()",
                  "componentDidUpdate()"
                ],
                "correctAnswer": "useEffect()"
              },
              {
                "question": "How do you conditionally render a component in React?",
                "options": [
                  "Using if statements or ternary operators",
                  "Using the conditional operator",
                  "Using switch-case",
                  "Using a for loop"
                ],
                "correctAnswer": "Using if statements or ternary operators"
              },
              {
                "question": "What is the 'state' in a React component?",
                "options": [
                  "An object that holds data that influences the rendering of the component",
                  "A method for handling events",
                  "A function used for rendering the component",
                  "A global object available to all components"
                ],
                "correctAnswer": "An object that holds data that influences the rendering of the component"
              },
              {
                "question": "What is the 'render' method used for in React?",
                "options": [
                  "To return JSX and render UI elements",
                  "To handle events",
                  "To manage component state",
                  "To fetch data"
                ],
                "correctAnswer": "To return JSX and render UI elements"
              },
              {
                "question": "How can you update the state in a class component?",
                "options": [
                  "this.setState()",
                  "this.updateState()",
                  "this.changeState()",
                  "this.set()"
                ],
                "correctAnswer": "this.setState()"
              },
              {
                "question": "Which method is used to create a new context in React?",
                "options": [
                  "React.createContext()",
                  "React.createElement()",
                  "React.context()",
                  "createContext()"
                ],
                "correctAnswer": "React.createContext()"
              },
              {
                "question": "What does the 'key' attribute help with in React lists?",
                "options": [
                  "Helping React identify which items have changed, are added, or are removed",
                  "Defining the color of list items",
                  "Assigning a unique style to each list item",
                  "Making the list elements editable"
                ],
                "correctAnswer": "Helping React identify which items have changed, are added, or are removed"
              },
              {
                "question": "Which of the following is the correct way to create a React element?",
                "options": [
                  "React.createElement('div', {}, 'Hello World')",
                  "createElement('div', 'Hello World')",
                  "React('div', 'Hello World')",
                  "createElement('div', 'Hello World')"
                ],
                "correctAnswer": "React.createElement('div', {}, 'Hello World')"
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
  export default  Reactjs;