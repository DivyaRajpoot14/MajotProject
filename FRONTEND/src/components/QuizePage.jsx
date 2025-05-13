// import React, { useState } from 'react';
// import { NavLink } from "react-router-dom";
// import SubNavbar from './SubNavbar';

// function QuizPage() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [isQuizCompleted, setIsQuizCompleted] = useState(false);

//   const questions = [
//     {
//       question: 'How Many numbers of the element in the open IOT architecture?',
//       options: ['4 Elements', '6 Elements', '5 Elements', '7 Elements'],
//       correct: '7 Elements',
//     },
//     {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },
//     {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },  {
//       question: 'which of the following is the way in which an Iot device is assosiated with data',
//       options: ['Internet', 'Cloud', 'Automata', 'Network'],
//       correct: 'Cloud',
//     },
//   ];
//   const handleOptionClick = (option) => {
//     if (option === questions[currentQuestion].correct) {
//       setScore(score + 1);
//     }
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setIsQuizCompleted(true);
//     }
//   };

//   const handleRestart = () => {
//     setCurrentQuestion(0);
//     setScore(0);
//     setIsQuizCompleted(false);
//   };

//   return (
//     <>
//       <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4">
//         <SubNavbar />

//         {!isQuizCompleted ? (
//           <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-6">
//             {/* Question Section */}
//             <div className="mb-4">
//               <h2 className="text-xl font-semibold">
//                 Question {currentQuestion + 1} of {questions.length}
//               </h2>
//               <p className="text-gray-700 mt-2">{questions[currentQuestion].question}</p>
//             </div>

//             {/* Options Section */}
//             <div className="grid gap-4 mt-4">
//               {questions[currentQuestion].options.map((option, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleOptionClick(option)}
//                   className="w-full p-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>

//             {/* Progress Bar */}
//             <div className="w-full bg-gray-200 h-2 rounded-lg mt-6">
//               <div
//                 className="bg-blue-600 h-2 rounded-lg"
//                 style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
//               ></div>
//             </div>
//           </div>
//         ) : (
//           <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-6 text-center">
//             <h2 className="text-2xl font-bold">Quiz Completed!</h2>
//             <p className="text-lg mt-4">Your Score: {score} / {questions.length}</p>
//             <button
//               onClick={handleRestart}
//               className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Restart Quiz
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default QuizPage;

import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import SubNavbar from './SubNavbar';

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const questions = [
    {
      question: 'How Many numbers of the element in the open IOT architecture?',
      options: ['4 Elements', '6 Elements', '5 Elements', '7 Elements'],
      correct: '7 Elements',
    },
    {
      question: 'Which of the following is the way in which an IoT device is associated with data?',
      options: ['Internet', 'Cloud', 'Automata', 'Network'],
      correct: 'Cloud',
    },
    // Add more questions as needed...
  ];

  const handleOptionClick = (option) => {
    const isCorrect = option === questions[currentQuestion].correct;
    if (isCorrect) setScore(score + 1);

    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = {
      selected: option,
      correct: questions[currentQuestion].correct,
    };
    setSelectedAnswers(updatedAnswers);

    // Move to next question after 1 second
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsQuizCompleted(true);
      }
    }, 1000);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizCompleted(false);
    setSelectedAnswers([]);
  };

  const getButtonStyle = (option) => {
    const answer = selectedAnswers[currentQuestion];
    if (!answer) return 'bg-blue-100 text-blue-700 hover:bg-blue-200';

    if (option === answer.selected && option === answer.correct) {
      return 'bg-green-100 text-green-700';
    } else if (option === answer.selected && option !== answer.correct) {
      return 'bg-red-100 text-red-700';
    } else {
      return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <>
      <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4">
        <SubNavbar />

        {!isQuizCompleted ? (
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">
                Question {currentQuestion + 1} of {questions.length}
              </h2>
              <p className="text-gray-700 mt-2">{questions[currentQuestion].question}</p>
            </div>

            <div className="grid gap-4 mt-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  disabled={selectedAnswers[currentQuestion]}
                  className={`w-full p-3 rounded-lg ${getButtonStyle(option)}`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-lg mt-6 flex">
              {questions.map((q, idx) => {
                const answer = selectedAnswers[idx];
                let bgColor = 'bg-gray-300';
                if (answer) {
                  bgColor = answer.selected === answer.correct ? 'bg-green-500' : 'bg-red-500';
                }
                return (
                  <div
                    key={idx}
                    className={`${bgColor} h-2`}
                    style={{ width: `${100 / questions.length}%` }}
                  ></div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-6 text-center">
            <h2 className="text-2xl font-bold">Quiz Completed!</h2>
            <p className="text-lg mt-4">Your Score: {score} / {questions.length}</p>
            <button
              onClick={handleRestart}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default QuizPage;
