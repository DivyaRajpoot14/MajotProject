import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const questions= [
  {
    question: "1. What is JavaScript?",
    answer: "JavaScript is a high-level, interpreted programming language used to make web pages interactive.",
    explanation: "It allows dynamic behavior, control of multimedia, and real-time updates without reloading the page.",
    code: `console.log("Hello, JavaScript!");`
  },
  {
    question: "2. What are variables in JavaScript?",
    answer: "Variables are containers for storing data values.",
    explanation: "They can be declared using var, let, or const.",
    code: `let name = "Alice";
const age = 25;`
  },
  {
    question: "3. What is the difference between var, let, and const?",
    answer: "`var` has function scope, while `let` and `const` have block scope. `const` can't be reassigned.",
    explanation: "Use `let` for values that change and `const` for fixed values.",
    code: `var x = 10;
let y = 20;
const z = 30;`
  },
  {
    question: "4. What are data types in JavaScript?",
    answer: "There are primitive (string, number, boolean, null, undefined, symbol) and non-primitive (objects).",
    explanation: "Data types define the type of value a variable holds.",
    code: `let str = "hello"; // string
let num = 123; // number
let flag = true; // boolean`
  },
  {
    question: "5. What is hoisting in JavaScript?",
    answer: "Hoisting is JavaScript's behavior of moving declarations to the top of the current scope.",
    explanation: "Only declarations are hoisted, not initializations.",
    code: `console.log(a); // undefined
var a = 5;`
  },
  {
    question: "6. What is the difference between == and ===?",
    answer: "`==` compares values after type coercion, `===` compares both value and type.",
    explanation: "Always use `===` to avoid unexpected results.",
    code: `5 == "5"  // true
5 === "5" // false`
  },
  {
    question: "7. What is a function in JavaScript?",
    answer: "A function is a block of code designed to perform a task.",
    explanation: "Functions improve code reusability.",
    code: `function greet(name) {
  return "Hello " + name;
}`
  },
  {
    question: "8. What is a callback function?",
    answer: "A callback is a function passed into another function as an argument.",
    explanation: "Used for asynchronous operations or custom logic.",
    code: `function greet(callback) {
  console.log("Hi");
  callback();
}

greet(() => console.log("How are you?"));`
  },
  {
    question: "9. What are arrow functions?",
    answer: "Arrow functions are a shorthand for writing functions using `=>`.",
    explanation: "They don't have their own `this` context.",
    code: `const add = (a, b) => a + b;`
  },
  {
    question: "10. What is the difference between null and undefined?",
    answer: "`null` is an assigned value indicating no value, `undefined` means a variable was declared but not assigned.",
    explanation: "`typeof null` is 'object', while `typeof undefined` is 'undefined'.",
    code: `let a;
let b = null;

console.log(a); // undefined
console.log(b); // null`
  },
  {
    question: "11. What are objects in JavaScript?",
    answer: "Objects are collections of key-value pairs.",
    explanation: "They are used to store structured data.",
    code: `const person = {
  name: "Alice",
  age: 25
};`
  },
  {
    question: "12. What is an array in JavaScript?",
    answer: "Arrays are used to store multiple values in a single variable.",
    explanation: "They are indexed from 0.",
    code: `let fruits = ["apple", "banana", "cherry"];`
  },
  {
    question: "13. What are template literals?",
    answer: "Template literals use backticks and allow embedded expressions.",
    explanation: "They enable multiline strings and interpolation.",
    code: `let name = "Alice";
let greeting = \`Hello, \${name}!\`;`
  },
  {
    question: "14. What is destructuring in JavaScript?",
    answer: "Destructuring allows extracting values from arrays or objects into variables.",
    explanation: "It simplifies code and improves readability.",
    code: `const [a, b] = [1, 2];
const {name, age} = {name: "Alice", age: 25};`
  },
  {
    question: "15. What is the spread operator?",
    answer: "It allows expanding iterable elements like arrays or objects.",
    explanation: "Useful for copying and combining.",
    code: `let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];`
  },
  {
    question: "16. What is event bubbling in JavaScript?",
    answer: "Event bubbling is when an event propagates from child to parent.",
    explanation: "Use `event.stopPropagation()` to stop it.",
    code: `element.addEventListener('click', function(e) {
  e.stopPropagation();
});`
  },
  {
    question: "17. What is the DOM?",
    answer: "DOM (Document Object Model) represents the HTML structure as an object tree.",
    explanation: "It allows JavaScript to interact with the webpage.",
    code: `document.getElementById("myId").innerText = "Hello";`
  },
  {
    question: "18. What is async/await?",
    answer: "Async/await simplifies working with promises in asynchronous code.",
    explanation: "`await` pauses the function until the promise resolves.",
    code: `async function fetchData() {
  let res = await fetch("api/data");
  let data = await res.json();
}`
  },
  {
    question: "19. What is a promise in JavaScript?",
    answer: "A promise represents the eventual completion of an asynchronous operation.",
    explanation: "It can be in one of three states: pending, fulfilled, or rejected.",
    code: `let promise = new Promise((resolve, reject) => {
  resolve("Done");
});`
  },
  {
    question: "20. What is closure in JavaScript?",
    answer: "A closure is a function that retains access to its lexical scope.",
    explanation: "It allows a function to access outer function variables.",
    code: `function outer() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  }
}`
  },
  {
    question: "21. What is the difference between synchronous and asynchronous code?",
    answer: "Synchronous code runs line by line, asynchronous code can run in the background.",
    explanation: "Async code prevents blocking and improves performance.",
    code: `console.log("Start");
setTimeout(() => console.log("Delayed"), 1000);
console.log("End");`
  },
  {
    question: "22. What is NaN in JavaScript?",
    answer: "NaN stands for Not a Number.",
    explanation: "It indicates an invalid or undefined number operation.",
    code: `let a = 0 / 0;
console.log(isNaN(a)); // true`
  },
  {
    question: "23. What are JavaScript data structures?",
    answer: "Common ones are arrays, objects, sets, and maps.",
    explanation: "They help in organizing and storing data efficiently.",
    code: `let set = new Set([1, 2, 2, 3]); // Set: {1, 2, 3}
let map = new Map([["key1", "value1"]]);`
  },
  {
    question: "24. What is typeof operator?",
    answer: "It returns the type of a variable.",
    explanation: "Useful for checking variable types dynamically.",
    code: `console.log(typeof 42); // number`
  },
  {
    question: "25. What is event delegation?",
    answer: "It is a technique to handle events at a parent level.",
    explanation: "Useful for dynamically added elements.",
    code: `document.body.addEventListener("click", function(e) {
  if (e.target.matches(".btn")) {
    console.log("Button clicked!");
  }
});`
  },
  {
    question: "26. How can you prevent default behavior in an event?",
    answer: "Use `event.preventDefault()` method.",
    explanation: "Common in form submission and anchor links.",
    code: `form.addEventListener("submit", function(e) {
  e.preventDefault();
});`
  },
  {
    question: "27. What is JSON?",
    answer: "JSON (JavaScript Object Notation) is a data format for storing and exchanging data.",
    explanation: "It is easy to read and parse.",
    code: `let obj = { name: "Alice" };
let str = JSON.stringify(obj);
let parsed = JSON.parse(str);`
  },
  {
    question: "28. What is the difference between forEach and map?",
    answer: "`forEach` performs an action, `map` returns a new array.",
    explanation: "`map` is used when transformation is needed.",
    code: `let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);`
  },
  {
    question: "29. How can you check if an object is an array?",
    answer: "Use `Array.isArray()` method.",
    explanation: "This method returns true if the object is an array.",
    code: `let arr = [1, 2, 3];
console.log(Array.isArray(arr)); // true`
  },
  {
    question: "30. What is the difference between undefined and not defined?",
    answer: "`undefined` means a declared variable without value, `not defined` means the variable doesn't exist.",
    explanation: "Accessing a not defined variable throws an error.",
    code: `let x;
console.log(x); // undefined
console.log(y); // ReferenceError: y is not defined`
  }
];



      
  
export default function JsInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
             JavaScript Interview Questions
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
  