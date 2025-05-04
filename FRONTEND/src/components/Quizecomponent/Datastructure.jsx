import NavBar from "../Navbar"
import SubNavbar from "../SubNavbar";
import React, { useState } from "react";

const Ds=()=>{
    const questions = [
      
          {
            "question": "Which data structure uses LIFO (Last In First Out) principle?",
            "options": ["Queue", "Stack", "Array", "Linked List"],
            "correctAnswer": "Stack"
          },
          {
            "question": "What is the time complexity of accessing an element in an array by its index?",
            "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            "correctAnswer": "O(1)"
          },
          {
            "question": "Which data structure uses FIFO (First In First Out) principle?",
            "options": ["Queue", "Stack", "Tree", "Graph"],
            "correctAnswer": "Queue"
          },
          {
            "question": "What is the worst-case time complexity of searching an element in a binary search tree?",
            "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
            "correctAnswer": "O(n)"
          },
          {
            "question": "Which of the following is not a linear data structure?",
            "options": ["Array", "Queue", "Graph", "Stack"],
            "correctAnswer": "Graph"
          },
          {
            "question": "What is the maximum number of children a node can have in a binary tree?",
            "options": ["1", "2", "3", "Unlimited"],
            "correctAnswer": "2"
          },
          {
            "question": "Which data structure is used to implement recursion?",
            "options": ["Queue", "Stack", "Array", "Heap"],
            "correctAnswer": "Stack"
          },
          {
            "question": "What is the time complexity of inserting an element into a max heap?",
            "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            "correctAnswer": "O(log n)"
          },
          {
            "question": "Which traversal method is used to retrieve data in sorted order from a binary search tree?",
            "options": ["Pre-order", "In-order", "Post-order", "Level-order"],
            "correctAnswer": "In-order"
          },
          {
            "question": "What is the space complexity of a breadth-first search (BFS) in a graph?",
            "options": ["O(1)", "O(V)", "O(E)", "O(V + E)"],
            "correctAnswer": "O(V)"
          },
          {
            "question": "Which data structure is best suited for implementing a priority queue?",
            "options": ["Array", "Stack", "Heap", "Linked List"],
            "correctAnswer": "Heap"
          },
          {
            "question": "What is a circular queue?",
            "options": [
              "A queue that uses pointers",
              "A queue where the last position is connected to the first",
              "A queue with only one element",
              "A queue that uses a stack internally"
            ],
            "correctAnswer": "A queue where the last position is connected to the first"
          },
          {
            "question": "Which operation is not possible in a singly linked list?",
            "options": [
              "Insertion at the head",
              "Deletion from the tail",
              "Traversal in both directions",
              "Search for an element"
            ],
            "correctAnswer": "Traversal in both directions"
          },
          {
            "question": "What is a complete binary tree?",
            "options": [
              "A tree where all levels are completely filled",
              "A tree where all nodes have two children",
              "A tree where all leaves are at the same level",
              "A tree where all nodes have a parent"
            ],
            "correctAnswer": "A tree where all levels are completely filled"
          },
          {
            "question": "What is the worst-case time complexity of merge sort?",
            "options": ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
            "correctAnswer": "O(n log n)"
          },
          {
            "question": "Which of the following data structures is used in depth-first search (DFS)?",
            "options": ["Queue", "Stack", "Heap", "Priority Queue"],
            "correctAnswer": "Stack"
          },
          {
            "question": "What is the main advantage of a doubly linked list over a singly linked list?",
            "options": [
              "Uses less memory",
              "Easier to reverse",
              "Faster traversal",
              "Simpler implementation"
            ],
            "correctAnswer": "Easier to reverse"
          },
          {
            "question": "What is the time complexity of deleting the maximum element from a max heap?",
            "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            "correctAnswer": "O(log n)"
          },
          {
            "question": "Which of the following algorithms is used to find the shortest path in a graph?",
            "options": [
              "Depth-first search",
              "Kruskal’s algorithm",
              "Dijkstra’s algorithm",
              "Prim’s algorithm"
            ],
            "correctAnswer": "Dijkstra’s algorithm"
          },
          {
            "question": "Which data structure is most suitable for evaluating arithmetic expressions?",
            "options": ["Queue", "Stack", "Array", "Linked List"],
            "correctAnswer": "Stack"
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
  export default  Ds;