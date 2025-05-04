import React, { useState } from 'react';
// import Question from './History';
import { NavLink } from "react-router-dom";


function QuizPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const questions = [
      {
        question: 'How Many numbers of the element in the open IOT architecture?',
        options: ['4 Elements', '6 Elements', '5 Elements', '7 Elements'],
        correct: '7 Elements',
      },
      {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },
      {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },  {
        question: 'which of the following is the way in which an Iot device is assosiated with data',
        options: ['Internet', 'Cloud', 'Automata', 'Network'],
        correct: 'Cloud',
      },
    ];
  
    const handleNext = () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
      }
    };
  
    return (
<>

      <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4">
        {/* Header */}
        <header className="w-[100dvw]  bg-white text-blue-700 flex justify-evenly items-center rounded-lg text-center shadow-lg">
          <div className=" md:flex space-x-4 h-16 flex justify-center items-center">
                <NavLink
                  to="/c"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105  px-2 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : " bg-blue-500 & text-white"
                    }`
                  }
                >
          C
                </NavLink>
                <NavLink
                  to="/cpp"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                  
                    }`
                  }
      
                >
                C++
                </NavLink>
                <NavLink
                  to="/java"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
                  JAVA
                </NavLink>
                <NavLink
                  to="/python"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
                  PYTHON
                </NavLink>
                
                <NavLink
                  to="/csharp"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
                  C#
                </NavLink>
                <NavLink
                  to="/dbms"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
                DBMS
                </NavLink>
                
                <NavLink
                  to="/iot"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
                  IOT
                </NavLink>
                <NavLink
                  to="/ds"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
                DATA STRUCTURE 
                </NavLink>
                <NavLink
                  to="/dwh"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
                DATAWAREHOUSE & MINNING
                </NavLink>
                <NavLink
                  to="/html"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
                HTML
                </NavLink>
                <NavLink
                  to="/css"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
              CSS
                </NavLink>
                <NavLink
                  to="/js"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
              JS
                </NavLink>
                <NavLink
                  to="/react"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
            REACT
                </NavLink>
                <NavLink
                  to="/react"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
            OPERATING SYSTEM
                </NavLink> <NavLink
                  to="/react"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
              COMPUTER NETWORK
                </NavLink> 
                {/* <NavLink
                  to="/react"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
              SOFTWARE ENGINEERING
                </NavLink> */}
                 {/* <NavLink
                  to="/react"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
              CLOUD COMPUTING
                </NavLink> <NavLink
                  to="/react"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
              CYBER SECURITY
                </NavLink> <NavLink
                  to="/react"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
              AI
                </NavLink> <NavLink
                  to="/react"
                  className={({ isActive }) =>
                    ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-blue-500 & text-white" : ""
                    }`
                  }
                >
              BIG DATA & ANALYTICS
                </NavLink> */}
              </div> 
        </header>
  
        {/* Quiz Card */}
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-6">
          {/* Question Section */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <p className="text-gray-700 mt-2">{questions[currentQuestion].question}</p>
          </div>
  
          {/* Options Section */}
          <div className="grid gap-4 mt-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="w-full p-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
              >
                {option}
              </button>
            ))}
          </div>
  
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-2 rounded-lg mt-6">
            <div
              className="bg-blue-600 h-2 rounded-lg"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
  
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-4 py-2 rounded-lg ${
                currentQuestion === 0 ? 'bg-gray-300' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
              className={`px-4 py-2 rounded-lg ${
                currentQuestion === questions.length - 1
                  ? 'bg-gray-300'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next
            </button>
          </div>
        </div>
  
     
      </div>
      </>
    );
  }
export default QuizPage;
