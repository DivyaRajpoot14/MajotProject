import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const questions = [
  {
    question: "1. What is Software Engineering?",
    answer: "Software Engineering is the application of engineering principles to software development.",
    explanation: "It involves designing, developing, testing, and maintaining software systematically.",
    code: `// Example: Using models and methodologies to build reliable software`
  },
  {
    question: "2. What are the SDLC phases?",
    answer: "Requirement analysis, design, implementation, testing, deployment, maintenance.",
    explanation: "Each phase has specific tasks to ensure software quality.",
    code: `// Example: Waterfall or Agile process steps`
  },
  {
    question: "3. What is the Waterfall model?",
    answer: "A linear sequential SDLC model where each phase must complete before the next begins.",
    explanation: "Best suited for projects with well-defined requirements.",
    code: `// Requirements -> Design -> Implementation -> Testing -> Maintenance`
  },
  {
    question: "4. What is Agile methodology?",
    answer: "An iterative and incremental software development methodology focused on flexibility and customer collaboration.",
    explanation: "Agile emphasizes adaptive planning and quick delivery.",
    code: `// Scrum, Kanban are Agile frameworks`
  },
  {
    question: "5. What are software requirements?",
    answer: "Detailed descriptions of the software functionalities and constraints.",
    explanation: "Requirements guide the design and development process.",
    code: `// Functional and Non-functional requirements`
  },
  {
    question: "6. What is the difference between functional and non-functional requirements?",
    answer: "Functional requirements define what the system should do; non-functional define how the system performs.",
    explanation: "Non-functional include performance, security, usability, etc.",
    code: `// Functional: User login; Non-functional: Response time < 2 seconds`
  },
  {
    question: "7. What is a software design pattern?",
    answer: "Reusable solutions to common design problems in software engineering.",
    explanation: "Patterns provide templates for solving issues like object creation and interaction.",
    code: `// Example: Singleton, Observer, Factory`
  },
  {
    question: "8. What is coupling and cohesion?",
    answer: "Coupling measures interdependence between modules; cohesion measures how closely related functions within a module are.",
    explanation: "Low coupling and high cohesion are desirable.",
    code: `// Low coupling means modules are independent`
  },
  {
    question: "9. What is version control?",
    answer: "A system that manages changes to code and documents over time.",
    explanation: "Allows multiple developers to collaborate efficiently.",
    code: `// Git is a popular version control system`
  },
  {
    question: "10. What is a use case?",
    answer: "A description of interactions between users and the system to achieve a goal.",
    explanation: "Use cases help capture functional requirements.",
    code: `// Actor: User; Use case: Place order`
  },
  {
    question: "11. What is software testing?",
    answer: "The process of executing a program to find defects.",
    explanation: "Testing ensures the software meets requirements and is bug-free.",
    code: `// Unit testing, Integration testing, System testing`
  },
  {
    question: "12. What is the difference between verification and validation?",
    answer: "Verification checks if the software is built correctly; validation checks if the right software is built.",
    explanation: "Verification = 'Are we building the product right?'; Validation = 'Are we building the right product?'",
    code: `// Verification: Reviews; Validation: Testing`
  },
  {
    question: "13. What is a software requirement specification (SRS)?",
    answer: "A document that describes all the software requirements in detail.",
    explanation: "SRS acts as a contract between stakeholders and developers.",
    code: `// Includes functional, non-functional requirements, and constraints`
  },
  {
    question: "14. What is a software prototype?",
    answer: "An early sample or model of a software product used to visualize and test concepts.",
    explanation: "Prototypes help gather feedback and refine requirements.",
    code: `// Throwaway or evolutionary prototypes`
  },
  {
    question: "15. What are the different types of software maintenance?",
    answer: "Corrective, adaptive, perfective, and preventive maintenance.",
    explanation: "Maintenance handles bug fixes, environment changes, improvements, and preventing future issues.",
    code: `// Example: Fixing bugs (corrective), OS upgrade (adaptive)`
  },
  {
    question: "16. What is a software metric?",
    answer: "A measure used to quantify software development and maintenance.",
    explanation: "Metrics help assess quality, productivity, and performance.",
    code: `// Examples: Lines of code, Cyclomatic complexity`
  },
  {
    question: "17. What is configuration management?",
    answer: "A discipline to track and control changes in software artifacts.",
    explanation: "Ensures integrity and traceability throughout development.",
    code: `// Tools: Git, SVN, Jenkins`
  },
  {
    question: "18. What is the difference between white-box and black-box testing?",
    answer: "White-box tests internal structures; black-box tests functionality without knowledge of internals.",
    explanation: "White-box focuses on code paths; black-box on input/output behavior.",
    code: `// White-box: Unit tests; Black-box: System tests`
  },
  {
    question: "19. What is software reusability?",
    answer: "The use of existing software artifacts to build new software.",
    explanation: "Reusability reduces development time and cost.",
    code: `// Reusing libraries, frameworks, components`
  },
  {
    question: "20. What is spiral model?",
    answer: "An SDLC model combining iterative development with risk analysis.",
    explanation: "Allows repeated refinement through multiple cycles.",
    code: `// Phases: Planning, Risk analysis, Engineering, Evaluation`
  },
  {
    question: "21. What is the purpose of requirement elicitation?",
    answer: "To gather requirements from stakeholders to understand system needs.",
    explanation: "Elicitation techniques include interviews, questionnaires, and observation.",
    code: `// Example: Conducting user interviews`
  },
  {
    question: "22. What is software architecture?",
    answer: "The high-level structure of a software system.",
    explanation: "Defines components, their interactions, and design principles.",
    code: `// Examples: Client-server, microservices`
  },
  {
    question: "23. What is risk management in software engineering?",
    answer: "Identifying, analyzing, and mitigating risks in software projects.",
    explanation: "Helps avoid project delays and failures.",
    code: `// Risk matrix and mitigation strategies`
  },
  {
    question: "24. What is object-oriented analysis and design (OOAD)?",
    answer: "A method for analyzing and designing software using objects.",
    explanation: "Focuses on identifying classes and their interactions.",
    code: `// UML diagrams are used in OOAD`
  },
  {
    question: "25. What is the difference between verification and validation in testing?",
    answer: "Verification ensures the product is built right; validation ensures the right product is built.",
    explanation: "Verification involves reviews and inspections; validation involves actual testing.",
    code: `// Verification: Walkthroughs; Validation: System testing`
  },
  {
    question: "26. What is continuous integration?",
    answer: "A practice of merging all developer working copies to a shared mainline several times a day.",
    explanation: "Helps detect integration errors early.",
    code: `// Tools: Jenkins, Travis CI`
  },
  {
    question: "27. What is software quality assurance (SQA)?",
    answer: "A set of activities to ensure software quality meets requirements.",
    explanation: "Includes process monitoring, audits, and testing.",
    code: `// Example: Code reviews, testing standards`
  },
  {
    question: "28. What is a test case?",
    answer: "A set of conditions to test if software behaves as expected.",
    explanation: "Includes inputs, expected results, and execution steps.",
    code: `// Input: Valid username; Expected: Login success`
  },
  {
    question: "29. What is functional testing?",
    answer: "Testing based on software requirements to verify each function works.",
    explanation: "Focuses on user requirements and features.",
    code: `// Testing login, signup, payment modules`
  },
  {
    question: "30. What is the role of a software project manager?",
    answer: "To plan, execute, and oversee software projects ensuring timely delivery.",
    explanation: "Manages resources, risks, communication, and scope.",
    code: `// Using tools like MS Project, Jira`
  }
];



      
  
export default function SeInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
            Software Engineering Interview Questions
            </h1>
  
            {questions.map((q, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-l-4 border-blue-500 hover:shadow-2xl transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-blue-700 mb-3">
                   {q.question}
                </h2>
  
                <p className="text-green-700 font-medium mb-2">
                <span className="font-semibold">Answer:</span> {q.answer}
                </p>
  
                <p className="text-gray-700 mb-3">
                <span className="font-semibold">Explanation:</span> {q.explanation}
                </p>
  
                <div className="bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-4 overflow-auto whitespace-pre-wrap">
                  <pre>
                    <code>{q.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  