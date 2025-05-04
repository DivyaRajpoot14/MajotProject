import NavBar from "../Navbar"
import SubNavbar from "../SubNavbar";
import React, { useState } from "react";

const Iot=()=>{
    const questions = [
      
          {
            "question": "What does IoT stand for?",
            "options": [
              "Internet of Technology",
              "Integration of Things",
              "Internet of Things",
              "Interconnection of Technology"
            ],
            "correctAnswer": "Internet of Things"
          },
          {
            "question": "Which of the following is a key characteristic of IoT?",
            "options": [
              "Automation and Control",
              "Data Collection",
              "Interconnected Devices",
              "All of the above"
            ],
            "correctAnswer": "All of the above"
          },
          {
            "question": "Which protocol is commonly used for IoT devices?",
            "options": ["HTTP", "MQTT", "FTP", "SMTP"],
            "correctAnswer": "MQTT"
          },
          {
            "question": "Which of the following is an example of an IoT device?",
            "options": [
              "Smart thermostat",
              "Laptop",
              "Smartphone",
              "Desktop computer"
            ],
            "correctAnswer": "Smart thermostat"
          },
          {
            "question": "What is the purpose of a sensor in IoT?",
            "options": [
              "To store data",
              "To transmit data",
              "To collect data",
              "To process data"
            ],
            "correctAnswer": "To collect data"
          },
          {
            "question": "Which layer is responsible for data transmission in IoT architecture?",
            "options": [
              "Application layer",
              "Perception layer",
              "Network layer",
              "Data processing layer"
            ],
            "correctAnswer": "Network layer"
          },
          {
            "question": "Which of the following is an IoT communication protocol?",
            "options": ["Bluetooth", "Wi-Fi", "ZigBee", "All of the above"],
            "correctAnswer": "All of the above"
          },
          {
            "question": "What is the role of actuators in IoT?",
            "options": [
              "To collect data",
              "To perform actions",
              "To store data",
              "To analyze data"
            ],
            "correctAnswer": "To perform actions"
          },
          {
            "question": "Which of the following is a challenge in IoT?",
            "options": [
              "Security concerns",
              "Data privacy",
              "Interoperability",
              "All of the above"
            ],
            "correctAnswer": "All of the above"
          },
          {
            "question": "What is the full form of RFID in IoT?",
            "options": [
              "Radio Frequency Identification",
              "Remote Frequency Interaction Device",
              "Radio Frequency Internet Device",
              "Real-time Frequency Identification"
            ],
            "correctAnswer": "Radio Frequency Identification"
          },
          {
            "question": "Which cloud service is widely used for IoT applications?",
            "options": ["AWS IoT", "Azure IoT Hub", "Google Cloud IoT", "All of the above"],
            "correctAnswer": "All of the above"
          },
          {
            "question": "What is the primary use of IoT in healthcare?",
            "options": [
              "Smart homes",
              "Wearable health monitors",
              "Self-driving cars",
              "Online shopping"
            ],
            "correctAnswer": "Wearable health monitors"
          },
          {
            "question": "Which of the following is a common IoT device in agriculture?",
            "options": [
              "Smart irrigation systems",
              "Wearable fitness trackers",
              "Video game consoles",
              "Streaming devices"
            ],
            "correctAnswer": "Smart irrigation systems"
          },
          {
            "question": "Which IoT layer is responsible for interacting with users?",
            "options": [
              "Perception layer",
              "Network layer",
              "Application layer",
              "Transport layer"
            ],
            "correctAnswer": "Application layer"
          },
          {
            "question": "Which of the following is a popular IoT platform?",
            "options": ["Arduino", "Raspberry Pi", "AWS IoT", "All of the above"],
            "correctAnswer": "All of the above"
          },
          {
            "question": "Which programming language is commonly used in IoT development?",
            "options": ["Python", "C", "JavaScript", "All of the above"],
            "correctAnswer": "All of the above"
          },
          {
            "question": "What does M2M stand for in the context of IoT?",
            "options": [
              "Machine to Machine",
              "Mobile to Mobile",
              "Module to Module",
              "Monitor to Monitor"
            ],
            "correctAnswer": "Machine to Machine"
          },
          {
            "question": "What is the primary goal of IoT?",
            "options": [
              "To interconnect devices",
              "To replace the internet",
              "To reduce network usage",
              "To develop gaming applications"
            ],
            "correctAnswer": "To interconnect devices"
          },
          {
            "question": "Which of the following IoT applications is related to smart cities?",
            "options": [
              "Traffic monitoring",
              "Waste management",
              "Smart lighting",
              "All of the above"
            ],
            "correctAnswer": "All of the above"
          },
          {
            "question": "Which of the following best describes edge computing in IoT?",
            "options": [
              "Computing at the cloud server",
              "Processing data at the device or near the data source",
              "Storing data in a central location",
              "Transmitting data to external servers"
            ],
            "correctAnswer": "Processing data at the device or near the data source"
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
  export default  Iot;