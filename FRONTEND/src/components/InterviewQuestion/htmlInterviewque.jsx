import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const questions= [
  {
    question: "1. What is HTML?",
    answer: "HTML stands for HyperText Markup Language. It is used to structure web pages.",
    explanation: "HTML provides the basic building blocks for creating web content, using tags to define elements.",
    code: `<!DOCTYPE html>
<html>
  <head><title>My Page</title></head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>`
  },
  {
    question: "2. What is the purpose of the <!DOCTYPE> declaration?",
    answer: "It defines the document type and HTML version being used.",
    explanation: "It helps browsers render the content correctly by defining the rules for the document.",
    code: `<!DOCTYPE html>`
  },
  {
    question: "3. What is the difference between <div> and <span>?",
    answer: "<div> is a block-level element, <span> is an inline element.",
    explanation: "Use <div> for layout sections and <span> for small inline content styling.",
    code: `<div>This is a block</div>
<span>This is inline</span>`
  },
  {
    question: "4. What is semantic HTML?",
    answer: "Semantic HTML uses tags that convey the meaning of the content.",
    explanation: "Tags like <article>, <header>, and <footer> improve SEO and accessibility.",
    code: `<article>
  <h2>News Title</h2>
  <p>News content goes here.</p>
</article>`
  },
  {
    question: "5. How do you create a hyperlink in HTML?",
    answer: "Using the <a> tag with the href attribute.",
    explanation: "The href attribute defines the link's destination.",
    code: `<a href="https://example.com">Visit Example</a>`
  },
  {
    question: "6. How do you add an image in HTML?",
    answer: "Using the <img> tag with src and alt attributes.",
    explanation: "The src defines the image path; alt describes the image for accessibility.",
    code: `<img src="image.jpg" alt="A sample image">`
  },
  {
    question: "7. What is the use of the <meta> tag?",
    answer: "It provides metadata like character set, viewport, and page description.",
    explanation: "It helps in SEO and ensures proper rendering on different devices.",
    code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  },
  {
    question: "8. How do you create a list in HTML?",
    answer: "Using <ul> for unordered and <ol> for ordered lists.",
    explanation: "<li> elements are used inside both to define list items.",
    code: `<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>`
  },
  {
    question: "9. What are void elements in HTML?",
    answer: "Elements that do not have closing tags.",
    explanation: "Examples include <br>, <img>, <hr>, and <input>.",
    code: `<br> <hr> <img src="logo.png" alt="Logo">`
  },
  {
    question: "10. How do you create a table in HTML?",
    answer: "Using <table>, <tr>, <td>, and <th> tags.",
    explanation: "<table> defines the structure; <tr> is a row, <td> is a cell, <th> is a header cell.",
    code: `<table>
  <tr><th>Name</th><th>Age</th></tr>
  <tr><td>Alice</td><td>24</td></tr>
</table>`
  },
  {
    question: "11. What is the difference between id and class in HTML?",
    answer: "id is unique for an element; class can be shared by multiple elements.",
    explanation: "Use id for single styling or JavaScript hooks, class for grouping.",
    code: `<div id="header"></div>
<div class="menu"></div>`
  },
  {
    question: "12. How do you add comments in HTML?",
    answer: "By wrapping text in <!-- -->.",
    explanation: "Comments are not rendered by the browser and are useful for notes.",
    code: `<!-- This is a comment -->`
  },
  {
    question: "13. What is the use of the <form> element?",
    answer: "To collect user input.",
    explanation: "It wraps input elements like text boxes, checkboxes, and buttons.",
    code: `<form action="/submit">
  <input type="text" name="name">
  <button type="submit">Send</button>
</form>`
  },
  {
    question: "14. What is the difference between <section> and <div>?",
    answer: "<section> is semantic; <div> is generic.",
    explanation: "<section> implies a thematic grouping; <div> is used for layout without semantic meaning.",
    code: `<section>
  <h2>Blog Posts</h2>
</section>`
  },
  {
    question: "15. What are data attributes in HTML?",
    answer: "They allow you to store extra information on HTML elements.",
    explanation: "Attributes prefixed with 'data-' can be accessed in JavaScript.",
    code: `<div data-user-id="42">User</div>`
  },
  {
    question: "16. How do you embed a video in HTML?",
    answer: "Using the <video> tag with src or <source>.",
    explanation: "You can also provide controls and fallback text.",
    code: `<video src="movie.mp4" controls></video>`
  },
  {
    question: "17. What is the role of the <label> tag?",
    answer: "It defines a label for an input element.",
    explanation: "Clicking the label focuses the input; it improves accessibility.",
    code: `<label for="email">Email:</label>
<input id="email" type="email">`
  },
  {
    question: "18. What is the difference between block and inline elements?",
    answer: "Block elements take full width; inline elements take only as much as needed.",
    explanation: "Examples: <div> is block; <span> is inline.",
    code: `<div>This is block</div>
<span>This is inline</span>`
  },
  {
    question: "19. What is the use of the <input> element?",
    answer: "To get user data in forms.",
    explanation: "It supports many types: text, email, password, checkbox, etc.",
    code: `<input type="text" name="username">`
  },
  {
    question: "20. How do you create radio buttons in HTML?",
    answer: "Use multiple <input type='radio'> with the same name.",
    explanation: "Only one radio in the group can be selected.",
    code: `<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female`
  },
  {
    question: "21. What is the purpose of the <head> tag?",
    answer: "It contains meta information, styles, and links to scripts.",
    explanation: "It does not render visible content.",
    code: `<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>`
  },
  {
    question: "22. What is the use of <iframe> in HTML?",
    answer: "It embeds another HTML page within the current one.",
    explanation: "Used to show maps, videos, or other sites.",
    code: `<iframe src="https://example.com" width="300" height="200"></iframe>`
  },
  {
    question: "23. How do you link an external CSS file in HTML?",
    answer: "Using the <link> tag inside the <head>.",
    explanation: "The rel attribute should be set to stylesheet.",
    code: `<link rel="stylesheet" href="styles.css">`
  },
  {
    question: "24. What is the <canvas> element used for?",
    answer: "To draw graphics using JavaScript.",
    explanation: "Common uses include games and charts.",
    code: `<canvas id="myCanvas" width="200" height="100"></canvas>`
  },
  {
    question: "25. What is ARIA in HTML?",
    answer: "Accessible Rich Internet Applications.",
    explanation: "It improves accessibility for screen readers.",
    code: `<div role="alert">Error occurred!</div>`
  },
  {
    question: "26. What is the difference between innerText and innerHTML?",
    answer: "innerText gets/sets text content; innerHTML includes HTML tags.",
    explanation: "Use innerHTML to include elements dynamically.",
    code: `element.innerHTML = "<strong>Bold</strong>";`
  },
  {
    question: "27. What is the use of the <noscript> tag?",
    answer: "Displays content when JavaScript is disabled.",
    explanation: "It provides fallback content.",
    code: `<noscript>Please enable JavaScript to view this site.</noscript>`
  },
  {
    question: "28. What is the difference between <strong> and <b>?",
    answer: "<strong> has semantic meaning; <b> only styles text as bold.",
    explanation: "<strong> indicates importance, <b> is purely visual.",
    code: `<strong>Important</strong> vs <b>Bold</b>`
  },
  {
    question: "29. What is the use of the <template> tag?",
    answer: "It holds client-side content that is not rendered when the page loads.",
    explanation: "Useful for rendering templates using JavaScript.",
    code: `<template id="card-template">
  <div class="card">...</div>
</template>`
  },
  {
    question: "30. How do you create a dropdown list in HTML?",
    answer: "Using the <select> and <option> tags.",
    explanation: "<select> defines the dropdown, <option> defines choices.",
    code: `<select name="country">
  <option value="in">India</option>
  <option value="us">USA</option>
</select>`
  }
];


      
  
export default function HtmlInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
             HTML(Hyper Text Markup Language) Interview Questions
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
  