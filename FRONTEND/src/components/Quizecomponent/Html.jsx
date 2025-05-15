import React, { useState, useEffect } from "react";
      import { useNavigate } from "react-router-dom";
      import SubNavbar from "../SubNavbar";
      import Confetti from "react-confetti";
      import { motion } from "framer-motion";
      import { Howl } from "howler";
      

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
        const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
        const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
        const [showCelebration, setShowCelebration] = useState(false);
        const [timer, setTimer] = useState(20);
        const [score] = useState(localStorage.getItem("bestScore") || 0);
      
        const CORRECT_SOUND = new Howl({ src: ["/sounds/correct.mp3"] });
        const WRONG_SOUND = new Howl({ src: ["/sounds/wrong.mp3"] });
      
        const currentQuestion = questions[currentQuestionIndex];
      
        useEffect(() => {
          const interval = setInterval(() => {
            if (timer > 0) setTimer((t) => t - 1);
            else handleOptionSelect(null);
          }, 1000);
          return () => clearInterval(interval);
        }, [timer]);
      
        useEffect(() => {
          localStorage.setItem("score", correctAnswersCount);
        }, [correctAnswersCount]);
      
        const handleOptionSelect = (option) => {
          setSelectedOption(option);
          if (option === currentQuestion.correctAnswer) {
            setCorrectAnswersCount((prev) => prev + 1);
            CORRECT_SOUND.play();
          } else {
            WRONG_SOUND.play();
          }
          setShowCorrectAnswer(true);
          setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
              setCurrentQuestionIndex((prev) => prev + 1);
              setSelectedOption(null);
              setShowCorrectAnswer(false);
              setTimer(20);
            } else {
              setShowCelebration(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }, 1000);
        };
      
        const handlePrevious = () => {
          if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
            setSelectedOption(null);
            setShowCorrectAnswer(false);
            setTimer(20);
          }
        };
      
        const handleNext = () => {
          if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedOption(null);
            setShowCorrectAnswer(false);
            setTimer(20);
          } else {
            setShowCelebration(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        };
      
        const handleRestartQuiz = () => {
          setCurrentQuestionIndex(0);
          setSelectedOption(null);
          setCorrectAnswersCount(0);
          setShowCelebration(false);
          setTimer(20);
        };
      
        const handleExit = () => {
          navigate("/");
        };
      
        const scorePercentage = (correctAnswersCount / questions.length) * 100;
      
        return (
          <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <SubNavbar />
      
            {showCelebration && scorePercentage >= 30 && (
              <Confetti width={window.innerWidth} height={window.innerHeight} />
            )}
      
            <div className="w-[90vw] md:w-[50vw] h-[65vh] mt-20 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col justify-between overflow-hidden relative z-10">
              {/* <div className="w-full h-4 bg-gray-200 relative mt-2">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500"
                  style={{
                    width: `${(correctAnswersCount / questions.length) * 100}%`,
                  }}
                ></div>
              </div> */}
      
              <div className="flex flex-col h-full p-6">
                {showCelebration ? (
                  <motion.div
                    className="flex flex-col items-center justify-center h-full text-center p-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {scorePercentage < 30 ? (
                      <>
                        <h2 className="text-2xl font-bold text-red-600 mb-2">Keep Practicing!</h2>
                        <p className="text-lg text-gray-700 mb-2">You've completed the quiz.</p>
                        <p className="text-blue-500 font-medium mb-2">Try Again!</p>
                      </>
                    ) : (
                      <>
                        <h2 className="text-3xl font-bold text-blue-700 mb-2">🎉 Congratulations! 🎉</h2>
                        <p className="text-lg text-gray-700 mb-2">You've completed the quiz.</p>
                        <p className="text-blue-500 font-medium mb-2">Great job!</p>
                      </>
                    )}
                    <p className="text-xl font-semibold">
                      Your Score: {correctAnswersCount}/{questions.length} ({scorePercentage.toFixed(2)}%)
                    </p>
                    <div className="mt-6 space-x-4">
                      <button onClick={handleRestartQuiz} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Restart Quiz</button>
                      <button onClick={handleExit} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">Exit</button>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white p-4 rounded-md shadow">
                      <h2 className="text-lg font-semibold">
                        Question {currentQuestionIndex + 1}: {currentQuestion.question}
                      </h2>
                      <p className="text-sm text-white">Time left: {timer}s</p>
                    </div>
      
                    <div className="space-y-3 flex-1">
                      {currentQuestion.options.map((option, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleOptionSelect(option)}
                          className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 text-left font-medium ${
                            selectedOption === option
                              ? option === currentQuestion.correctAnswer
                                ? "border-green-600 bg-green-100 text-green-800"
                                : "border-red-600 bg-red-100 text-red-800"
                              : "hover:bg-gray-100"
                          }`}
                          disabled={selectedOption !== null}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>
      
                    {showCorrectAnswer && (
                      <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-600 text-green-800 rounded">
                        Correct Answer:{" "}
                        <span className="font-semibold">{currentQuestion.correctAnswer}</span>
                      </div>
                    )}
      
                    <div className="flex justify-between items-center mt-6">
                      <button
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                          currentQuestionIndex === 0
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                        }`}
                      >
                        Previous
                      </button>
      
                      <button
                        onClick={() => setShowCorrectAnswer(true)}
                        className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition"
                      >
                        View Answer
                      </button>
      
                      <button
                        onClick={handleNext}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                          currentQuestionIndex === questions.length - 1
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                      >
                        {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      };
      
      
  export default  Html;