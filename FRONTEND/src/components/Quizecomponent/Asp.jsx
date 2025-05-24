import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../SubNavbar";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const Asp=() => {
  const navigate = useNavigate();
  const allLevels = {
    beginner: [
      {
        question: "What does ASP.NET stand for?",
        options: [
          "Active Server Pages .NET",
          "Advanced Server Pages",
          "Application Server Pages",
          "Active Software Pages"
        ],
        correctAnswer: "Active Server Pages .NET",
      },
      {
        question: "Which language is primarily used to write ASP.NET code?",
        options: ["C#", "Java", "PHP", "Python"],
        correctAnswer: "C#",
      },
      {
        question: "Which file extension is used for ASP.NET Web Forms?",
        options: [".aspx", ".asp", ".html", ".cs"],
        correctAnswer: ".aspx",
      },
      {
        question: "What is the default event of a Button control in ASP.NET?",
        options: ["Click", "Load", "Submit", "Change"],
        correctAnswer: "Click",
      },
      {
        question: "Which server control is used to display text in ASP.NET?",
        options: ["TextBox", "Label", "Literal", "Button"],
        correctAnswer: "Label",
      },
      {
        question: "Which directive is used to define the language used in ASP.NET page?",
        options: ["@Page", "@Language", "@Import", "@Code"],
        correctAnswer: "@Page",
      },
      {
        question: "What is ViewState in ASP.NET?",
        options: [
          "A client-side state management technique",
          "A server-side session management technique",
          "A method to maintain page state between postbacks",
          "A database connection technique"
        ],
        correctAnswer: "A method to maintain page state between postbacks",
      },
      {
        question: "Which of the following is NOT a valid ASP.NET server control?",
        options: ["<asp:TextBox>", "<asp:GridView>", "<asp:Button>", "<asp:HtmlForm>"],
        correctAnswer: "<asp:HtmlForm>",
      },
      {
        question: "Which event is raised when an ASP.NET page is loaded?",
        options: ["Page_Load", "Page_Init", "Page_Render", "Page_PreRender"],
        correctAnswer: "Page_Load",
      },
      {
        question: "Which of these is used to handle errors globally in an ASP.NET application?",
        options: ["web.config", "Global.asax", "App_Data folder", "Default.aspx"],
        correctAnswer: "Global.asax",
      },
    ],
    intermediate: [
      {
        question: "Which method is used to bind data to a GridView control?",
        options: ["Bind()", "DataBind()", "BindData()", "SetData()"],
        correctAnswer: "DataBind()",
      },
      {
        question: "Which ASP.NET feature allows caching of pages or parts of pages?",
        options: ["ViewState", "Session State", "Output Caching", "Application State"],
        correctAnswer: "Output Caching",
      },
      {
        question: "What is the purpose of the 'CodeBehind' attribute in an ASP.NET page?",
        options: [
          "Specifies the file containing event-handling code",
          "Defines the CSS file for the page",
          "Links to the database",
          "Indicates the page's master template"
        ],
        correctAnswer: "Specifies the file containing event-handling code",
      },
      {
        question: "Which of the following manages user authentication in ASP.NET?",
        options: ["Forms Authentication", "Windows Authentication", "Passport Authentication", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "Which of the following is used for client-side validation in ASP.NET?",
        options: ["RequiredFieldValidator", "CompareValidator", "CustomValidator", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "Which object stores information about the current HTTP request in ASP.NET?",
        options: ["Request", "Response", "Server", "Session"],
        correctAnswer: "Request",
      },
      {
        question: "How do you retrieve a query string value in ASP.NET?",
        options: [
          "Request.QueryString[\"key\"]",
          "Request.Params[\"key\"]",
          "Request.Form[\"key\"]",
          "Request.Cookies[\"key\"]"
        ],
        correctAnswer: "Request.QueryString[\"key\"]",
      },
      {
        question: "Which state management technique stores data on the server per user session?",
        options: ["ViewState", "Session State", "Application State", "Cache"],
        correctAnswer: "Session State",
      },
      {
        question: "Which ASP.NET control is used for creating dynamic drop-down lists?",
        options: ["DropDownList", "ListBox", "RadioButtonList", "CheckBoxList"],
        correctAnswer: "DropDownList",
      },
      {
        question: "Which file contains ASP.NET application configuration settings?",
        options: ["web.config", "app.config", "machine.config", "global.asax"],
        correctAnswer: "web.config",
      },
    ],
    advanced: [
      {
        question: "What is the purpose of the 'async' and 'await' keywords in ASP.NET?",
        options: [
          "Enable asynchronous programming",
          "Improve UI rendering",
          "Force synchronous operations",
          "Cache server responses"
        ],
        correctAnswer: "Enable asynchronous programming",
      },
      {
        question: "Which ASP.NET component handles application-level events such as Application_Start?",
        options: ["Global.asax", "web.config", "HttpHandler", "HttpModule"],
        correctAnswer: "Global.asax",
      },
      {
        question: "What is the difference between Server.Transfer and Response.Redirect?",
        options: [
          "Server.Transfer transfers execution on the server without a round trip to the client, Response.Redirect sends a response to the client to request a new URL",
          "Response.Redirect transfers execution on the server without a round trip to the client, Server.Transfer sends a response to the client",
          "Both are same",
          "Server.Transfer reloads the same page"
        ],
        correctAnswer:
          "Server.Transfer transfers execution on the server without a round trip to the client, Response.Redirect sends a response to the client to request a new URL",
      },
      {
        question: "What is an HttpHandler in ASP.NET?",
        options: [
          "A class that processes HTTP requests",
          "A type of server control",
          "A client-side scripting feature",
          "A database connector"
        ],
        correctAnswer: "A class that processes HTTP requests",
      },
      {
        question: "What does the 'EnableViewState' property do?",
        options: [
          "Turns on page state management across postbacks",
          "Disables client-side scripts",
          "Improves database connectivity",
          "Manages user sessions"
        ],
        correctAnswer: "Turns on page state management across postbacks",
      },
      {
        question: "Which of the following is NOT true about ASP.NET MVC?",
        options: [
          "MVC stands for Model-View-Controller",
          "It separates concerns for easier maintenance",
          "It is tightly coupled with Web Forms",
          "It supports routing and RESTful URLs"
        ],
        correctAnswer: "It is tightly coupled with Web Forms",
      },
      {
        question: "What is Dependency Injection in ASP.NET Core?",
        options: [
          "A design pattern to reduce class dependencies",
          "A type of database connection",
          "A caching mechanism",
          "A client-side validation feature"
        ],
        correctAnswer: "A design pattern to reduce class dependencies",
      },
      {
        question: "Which middleware component in ASP.NET Core is used for authentication?",
        options: ["UseAuthentication", "UseAuthorization", "UseStaticFiles", "UseRouting"],
        correctAnswer: "UseAuthentication",
      },
      {
        question: "Which method is called to configure the HTTP request pipeline in ASP.NET Core?",
        options: ["ConfigureServices", "Configure", "Main", "Startup"],
        correctAnswer: "Configure",
      },
      {
        question: "How do you register a service for dependency injection in ASP.NET Core?",
        options: [
          "services.AddTransient()",
          "services.AddScoped()",
          "services.AddSingleton()",
          "All of the above"
        ],
        correctAnswer: "All of the above",
      },
    ],
  };
  
  
    const levels = Object.keys(allLevels);
    const scoreBeginner = parseInt(sessionStorage.getItem("score_beginner"), 10) || 0;
    const scoreIntermediate = parseInt(sessionStorage.getItem("score_intermediate"), 10) || 0;
    const scoreAdvanced = parseInt(sessionStorage.getItem("score_advanced"), 10) || 0;
    const totalScore = scoreBeginner + scoreIntermediate + scoreAdvanced;
    const totalPercentage = ((totalScore / 30) * 100).toFixed(2);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [questions, setQuestions] = useState(allLevels[levels[0]]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [timer, setTimer] = useState(20);
  const [levelCompleted, setLevelCompleted] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];
  const scorePercentage = (correctAnswersCount / questions.length) * 100;
  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    const beginnerScore = parseInt(localStorage.getItem("score_beginner")) || 0;
  
    if (token) {
      setAccessGranted(true);
  
      // If beginner is completed, start from the next level
      if (beginnerScore >= 3) {
        const nextLevelIndex = 1; // Assuming 'intermediate' is at index 1
        setCurrentLevelIndex(nextLevelIndex);
        setQuestions(allLevels[levels[nextLevelIndex]]);
      } else {
        setCurrentLevelIndex(0);
        setQuestions(allLevels["beginner"]);
      }
  
    } else {
      setAccessGranted(false);
      setCurrentLevelIndex(0);
      setQuestions(allLevels["beginner"]);
    }
  }, []);
  
  // Load level data from localStorage on level change
  useEffect(() => {
    const levelKey = `score_${levels[currentLevelIndex]}`;
    const savedScore = parseInt(sessionStorage.getItem(levelKey)) || 0;
  
    if (savedScore >= 3) {
      setCorrectAnswersCount(savedScore);
      setShowCelebration(true);
      setLevelCompleted(true);
      setTimer(0); // stop timer
    } else {
      setCorrectAnswersCount(0);
      setShowCelebration(false);
      setLevelCompleted(false);
      setTimer(20);
    }
  
    setQuestions(allLevels[levels[currentLevelIndex]]);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowCorrectAnswer(false);
  }, [currentLevelIndex]);
  
  //  Save score and totalScore on update
  useEffect(() => {
    const levelKey = `score_${levels[currentLevelIndex]}`;
    sessionStorage.setItem(levelKey, correctAnswersCount);
  
    const total = levels.reduce((acc, level) => {
      const val = parseInt(sessionStorage.getItem(`score_${level}`)) || 0;
      return acc + val;
    }, 0);
  
    sessionStorage.setItem("totalScore", total);
  }, [correctAnswersCount, currentLevelIndex]);
  
  // Timer countdown unless level is completed
  useEffect(() => {
    if (showCelebration) return;
  
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      } else {
        handleOptionSelect(null);
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [timer, showCelebration]);
  
  //  Select answer
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.correctAnswer) {
      setCorrectAnswersCount((prev) => prev + 1);
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
        setLevelCompleted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 1000);
  };
  
  const handleNextLevel = () => {
    const nextLevel = currentLevelIndex + 1;
    if (nextLevel < levels.length) {
      setCurrentLevelIndex(nextLevel);
      setQuestions(allLevels[levels[nextLevel]]);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setCorrectAnswersCount(0);
      setShowCorrectAnswer(false);
      setShowCelebration(false);
      setLevelCompleted(false);
      setTimer(20);
    } else {
      // Instead of alert, show popup card
      setShowCompletionPopup(true);
    }
  };
  
  //  Restart current level
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setCorrectAnswersCount(0);
    setShowCelebration(false);
    setLevelCompleted(false);
    setTimer(20);
  };
  
  //  Navigate to next/previous question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowCorrectAnswer(false);
      setTimer(20);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedOption(null);
      setShowCorrectAnswer(false);
      setTimer(20);
    }
  };
  
  return (
    <>

    <div className="h-[100dvh]  bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4 relative overflow-hidden">
    <SubNavbar/>
      <div className="flex justify-center mt-32 gap-4">
  {levels.map((level, index) => {
    const levelScore = parseInt(sessionStorage.getItem(`score_${level}`)) || 0;
    const isBeginnerCompleted = parseInt(sessionStorage.getItem("score_beginner")) >= 3;

    return (
      <button
        key={level}
        className={`px-4 py-2 rounded  ${
          currentLevelIndex === index
            ? "bg-blue-600 text-white"
            : levelScore >= 3
            ? "bg-green-500 text-white"
            : "bg-gray-300 text-black"
        }`}
        onClick={() => {
          if (index === 0) {
            // Beginner level - always accessible
            setCurrentLevelIndex(index);
          } else if (index === 1 && isBeginnerCompleted) {
            // Intermediate level - only if beginner completed
            setCurrentLevelIndex(index);
          } else if (index === 2 && isBeginnerCompleted && levelScore >= 3) {
            // Advanced level - only if intermediate is completed
            const intermediateScore = parseInt(sessionStorage.getItem("score_intermediate")) || 0;
            if (intermediateScore >= 3) {
              setCurrentLevelIndex(index);
            } else {
              alert("Please complete Intermediate level first!");
            }
          } else {
            alert("Please complete the Beginner level first!");
          }
        }}
      >
        {level.charAt(0).toUpperCase() + level.slice(1)}
        {levelScore >= 3 && " ✅"}
      </button>
    );
  })}
</div>

      {showCelebration && scorePercentage >= 30 && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <div className="w-[90vw] md:w-[50vw] h-[65vh] mt-10 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col justify-between overflow-hidden relative z-10">
        <div className="flex flex-col h-full p-6">
          {showCelebration ? (
        <div className="flex flex-col h-full p-6">
        {showCelebration && (
          <motion.div
            className="flex flex-col items-center justify-center h-full text-center p-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2 animate-bounce">
              🎉 Congratulations! 🎉
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              {scorePercentage >= 30
                ? "Well done on completing this level."
                : "Try again to improve your score."}
            </p>
            <p className="text-blue-500 font-medium mb-4">
              Current Level Score: {correctAnswersCount}/{questions.length} ({scorePercentage.toFixed(2)}%)
            </p>
  
            {/* Scores Summary */}
            <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-md text-left mb-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Scores Summary</h3>
              <ul className="space-y-1">
                <li className="flex justify-between">
                  <span>Beginner Level</span>
                  <span>{scoreBeginner} / 10</span>
                </li>
                <li className="flex justify-between">
                  <span>Intermediate Level</span>
                  <span>{scoreIntermediate} / 10</span>
                </li>
                <li className="flex justify-between">
                  <span>Advanced Level</span>
                  <span>{scoreAdvanced} / 10</span>
                </li>
                <li className="flex justify-between font-bold text-green-700 pt-2 border-t border-gray-300">
                  <span>Total Score</span>
                  <span>{totalScore} / 30</span>
                </li>
                <li className="flex justify-between font-semibold text-purple-700">
                  <span>Total Percentage</span>
                  <span>{totalPercentage}%</span>
                </li>
              </ul>
            </div>
  
            {/* Buttons */}
            <div className="mt-4 space-x-4">
              <button
                onClick={handleRestartQuiz}
                className="px-4 py-2 mb-2 bg-blue-500 text-white rounded-lg"
              >
                Restart Level
              </button>
  
              {accessGranted ? (
                scorePercentage >= 30 ? (
                  <button
                    onClick={handleNextLevel}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg"
                  >
                    Next Level
                  </button>
                ) : null
              ) : (
                <div className="flex flex-col items-center space-y-2">
                  <button
                    onClick={() => navigate("/loginform")}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg"
                  >
                    Login to Unlock More Levels
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
  

          ) : (
            <>
              <div className="mb-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white p-4 rounded-md shadow">
                <h2 className="text-lg font-semibold">Level: {levels[currentLevelIndex].toUpperCase()}</h2>
                <h3 className="text-sm">Question {currentQuestionIndex + 1}: {currentQuestion.question}</h3>
                <p className="text-sm">Time left: {timer}s</p>
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
                <div className="p-3 bg-green-100 border-l-4 border-green-600 text-green-800 rounded">
                  Correct Answer: <span className="font-semibold">{currentQuestion.correctAnswer}</span>
                </div>
              )}
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePreviousQuestion}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
                  disabled={currentQuestionIndex === questions.length - 1}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    
      {/* Popup card for completion */}
      {showCompletionPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm text-center mx-4">
            <div className="text-5xl mb-4 animate-bounce">🎉</div>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">
              You've completed all levels!
            </h2>
            <p className="mb-6 text-gray-700">
              Congratulations on finishing the quiz! 🎊
            </p>
            <button
              onClick={() => {
                setShowCompletionPopup(false);
                navigate("/");
              }}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Asp;
