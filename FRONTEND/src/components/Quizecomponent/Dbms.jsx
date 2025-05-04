import NavBar from "../Navbar"
import SubNavbar from "../SubNavbar";
import React, { useState } from "react";

const Dbms=()=>{
    const questions = [
      
          {
            "question": "Which of the following is a database management system?",
            "options": ["MySQL", "Google Chrome", "Adobe Photoshop", "Linux"],
            "correctAnswer": "MySQL"
          },
          {
            "question": "What does ACID stand for in the context of a database?",
            "options": [
              "Access, Consistency, Isolation, Durability",
              "Atomicity, Consistency, Isolation, Durability",
              "Atomicity, Concurrency, Integrity, Durability",
              "Access, Control, Integrity, Durability"
            ],
            "correctAnswer": "Atomicity, Consistency, Isolation, Durability"
          },
          {
            "question": "Which of the following is not a type of database model?",
            "options": ["Hierarchical", "Relational", "Network", "Transitional"],
            "correctAnswer": "Transitional"
          },
          {
            "question": "In a relational database, a row is also called a:",
            "options": ["Table", "Field", "Tuple", "Schema"],
            "correctAnswer": "Tuple"
          },
          {
            "question": "What is the purpose of a primary key in a database?",
            "options": [
              "To uniquely identify a record",
              "To establish a connection between tables",
              "To allow duplicate records",
              "To store encrypted data"
            ],
            "correctAnswer": "To uniquely identify a record"
          },
          {
            "question": "Which SQL command is used to retrieve data from a database?",
            "options": ["SELECT", "INSERT", "DELETE", "UPDATE"],
            "correctAnswer": "SELECT"
          },
          {
            "question": "What is a foreign key in a database?",
            "options": [
              "A unique key in a table",
              "A primary key in another table",
              "A key used to delete a table",
              "A key used to encrypt data"
            ],
            "correctAnswer": "A primary key in another table"
          },
          {
            "question": "Which of the following is not a type of SQL join?",
            "options": ["INNER JOIN", "OUTER JOIN", "CROSS JOIN", "UPPER JOIN"],
            "correctAnswer": "UPPER JOIN"
          },
          {
            "question": "What is normalization in DBMS?",
            "options": [
              "The process of organizing data to minimize redundancy",
              "The process of backing up a database",
              "The process of encrypting a database",
              "The process of scaling a database"
            ],
            "correctAnswer": "The process of organizing data to minimize redundancy"
          },
          {
            "question": "Which level of abstraction describes how the data is stored?",
            "options": ["Logical level", "Physical level", "View level", "Data level"],
            "correctAnswer": "Physical level"
          },
          {
            "question": "Which of the following is an example of a NoSQL database?",
            "options": ["Oracle", "MongoDB", "PostgreSQL", "MySQL"],
            "correctAnswer": "MongoDB"
          },
          {
            "question": "What is a trigger in a database?",
            "options": [
              "A stored procedure executed automatically in response to an event",
              "A key used to retrieve data",
              "A backup operation",
              "A type of join operation"
            ],
            "correctAnswer": "A stored procedure executed automatically in response to an event"
          },
          {
            "question": "Which of the following is used to enforce a relationship between tables?",
            "options": ["Foreign key", "Unique key", "Index", "Trigger"],
            "correctAnswer": "Foreign key"
          },
          {
            "question": "What is the full form of DDL in DBMS?",
            "options": [
              "Data Definition Language",
              "Data Description Language",
              "Database Definition Language",
              "Database Description Language"
            ],
            "correctAnswer": "Data Definition Language"
          },
          {
            "question": "Which of the following is not a DML command?",
            "options": ["SELECT", "UPDATE", "DELETE", "CREATE"],
            "correctAnswer": "CREATE"
          },
          {
            "question": "Which database property ensures that changes made by a transaction are saved permanently?",
            "options": ["Atomicity", "Consistency", "Isolation", "Durability"],
            "correctAnswer": "Durability"
          },
          {
            "question": "What is the main purpose of an index in a database?",
            "options": [
              "To speed up query processing",
              "To store relationships between tables",
              "To increase data redundancy",
              "To enforce constraints"
            ],
            "correctAnswer": "To speed up query processing"
          },
          {
            "question": "What is a view in a database?",
            "options": [
              "A virtual table derived from one or more tables",
              "A physical copy of a table",
              "An encrypted table",
              "A backup table"
            ],
            "correctAnswer": "A virtual table derived from one or more tables"
          },
          {
            "question": "What does the term 'tuple' refer to in the context of relational databases?",
            "options": ["A column", "A row", "A table", "A database"],
            "correctAnswer": "A row"
          },
          {
            "question": "Which of the following ensures data integrity in a database?",
            "options": ["Constraints", "Indexes", "Triggers", "Views"],
            "correctAnswer": "Constraints"
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
  export default  Dbms;