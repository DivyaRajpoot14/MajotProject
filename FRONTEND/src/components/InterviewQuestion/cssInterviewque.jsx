import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const questions= [
  {
    question: "1. What is CSS?",
    answer: "CSS stands for Cascading Style Sheets and is used for styling HTML elements.",
    explanation: "CSS describes how HTML elements should be displayed on screen, paper, or other media.",
    code: `h1 {
  color: blue;
  font-size: 24px;
}`
  },
  {
    question: "2. What are the different types of CSS?",
    answer: "There are three types: Inline, Internal, and External CSS.",
    explanation: "Inline styles are inside elements, internal styles are in <style> tags, and external styles use .css files.",
    code: `<!-- Inline -->
<h1 style="color: red;">Hello</h1>

<!-- Internal -->
<style>
  h1 { color: red; }
</style>

<!-- External -->
<link rel="stylesheet" href="styles.css">`
  },
  {
    question: "3. What is the Box Model in CSS?",
    answer: "It describes the rectangular boxes generated for elements in the document tree.",
    explanation: "It consists of margins, borders, padding, and the actual content area.",
    code: `div {
  width: 100px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}`
  },
  {
    question: "4. What is the difference between 'id' and 'class' in CSS?",
    answer: "An id is unique and applies to one element, while a class can be used for multiple.",
    explanation: "IDs are referenced with `#` and classes with `.` in CSS.",
    code: `#header {
  color: red;
}

.title {
  font-weight: bold;
}`
  },
  {
    question: "5. What are pseudo-classes in CSS?",
    answer: "Pseudo-classes define a special state of an element.",
    explanation: "Used for styling elements like when hovered, focused, etc.",
    code: `a:hover {
  color: green;
}`
  },
  {
    question: "6. What is the difference between 'em' and 'rem' units in CSS?",
    answer: "'em' is relative to the parent, 'rem' is relative to the root (html) element.",
    explanation: "Using 'rem' ensures consistent sizing across nested elements.",
    code: `html { font-size: 16px; }

div {
  font-size: 2em; /* relative to parent */
  padding: 1rem;  /* relative to root */
}`
  },
  {
    question: "7. What is specificity in CSS?",
    answer: "Specificity determines which CSS rule is applied when there are multiple rules for the same element.",
    explanation: "Inline styles > IDs > Classes > Elements.",
    code: `/* Specificity: id > class > tag */
#title {
  color: red;
}

.title {
  color: green;
}

h1 {
  color: blue;
}`
  },
  {
    question: "8. What is the difference between 'visibility: hidden' and 'display: none'?",
    answer: "'visibility: hidden' hides the element but takes up space, 'display: none' removes it from the layout.",
    explanation: "Use 'display: none' when you want the element to disappear completely.",
    code: `.hidden {
  visibility: hidden;
}

.removed {
  display: none;
}`
  },
  {
    question: "9. What are media queries in CSS?",
    answer: "Media queries allow CSS to be applied based on screen size or device type.",
    explanation: "Used for responsive design.",
    code: `@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`
  },
  {
    question: "10. How do you apply styles to multiple classes or elements in CSS?",
    answer: "Use commas to separate selectors.",
    explanation: "Each selector in the group gets the same styles.",
    code: `h1, .title, #main {
  color: navy;
}`
  },
  {
    question: "11. What is the difference between relative and absolute positioning?",
    answer: "Relative is positioned relative to its normal position; absolute is relative to the nearest positioned ancestor.",
    explanation: "Use absolute to place elements freely inside containers.",
    code: `.relative {
  position: relative;
  top: 10px;
}

.absolute {
  position: absolute;
  top: 50px;
  left: 20px;
}`
  },
  {
    question: "12. What does z-index do in CSS?",
    answer: "It controls the vertical stacking order of elements.",
    explanation: "Elements with higher z-index appear on top.",
    code: `.box1 {
  z-index: 2;
  position: absolute;
}

.box2 {
  z-index: 1;
  position: absolute;
}`
  },
  {
    question: "13. What is a CSS grid?",
    answer: "CSS Grid is a two-dimensional layout system.",
    explanation: "It allows for layout designs using rows and columns.",
    code: `.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}`
  },
  {
    question: "14. What is flexbox in CSS?",
    answer: "Flexbox is a one-dimensional layout method for arranging items in rows or columns.",
    explanation: "It simplifies alignment and spacing.",
    code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`
  },
  {
    question: "15. How do you center an element using CSS?",
    answer: "You can use flexbox or margin auto.",
    explanation: "Flexbox provides clean centering both horizontally and vertically.",
    code: `.center {
  display: flex;
  justify-content: center;
  align-items: center;
}`
  },
  {
    question: "16. What is the difference between static, relative, absolute, fixed, and sticky positioning?",
    answer: "These values define how an element is positioned in a document.",
    explanation: "Each has different behavior regarding scroll and parent context.",
    code: `.fixed {
  position: fixed;
  top: 0;
}

.sticky {
  position: sticky;
  top: 10px;
}`
  },
  {
    question: "17. What is the purpose of the 'important!' rule in CSS?",
    answer: "It forces a style to override any other style rule.",
    explanation: "Use it sparingly to avoid specificity issues.",
    code: `p {
  color: red !important;
}`
  },
  {
    question: "18. What is the difference between inline, block, and inline-block?",
    answer: "They determine how elements are rendered in the layout.",
    explanation: "Block takes full width, inline flows within text, inline-block allows dimensions.",
    code: `.inline { display: inline; }
.block { display: block; }
.inline-block { display: inline-block; }`
  },
  {
    question: "19. What are pseudo-elements in CSS?",
    answer: "Pseudo-elements style specific parts of an element.",
    explanation: "::before and ::after are commonly used pseudo-elements.",
    code: `p::before {
  content: "👉 ";
}`
  },
  {
    question: "20. How can you create a hover effect in CSS?",
    answer: "Use the :hover pseudo-class.",
    explanation: "It applies styles when the mouse is over the element.",
    code: `button:hover {
  background-color: orange;
}`
  },
  {
    question: "21. What is the difference between max-width and min-width?",
    answer: "max-width sets the maximum width, min-width sets the minimum width.",
    explanation: "Used in responsive design to control element resizing.",
    code: `div {
  min-width: 300px;
  max-width: 600px;
}`
  },
  {
    question: "22. How do you hide an element in CSS?",
    answer: "You can use display: none or visibility: hidden.",
    explanation: "display: none removes it from the layout, visibility: hidden keeps the space.",
    code: `.hidden {
  display: none;
}`
  },
  {
    question: "23. What is a transition in CSS?",
    answer: "Transitions create smooth animations between CSS property changes.",
    explanation: "Use it to animate changes like color or size.",
    code: `div {
  transition: background-color 0.5s ease;
}

div:hover {
  background-color: lightblue;
}`
  },
  {
    question: "24. What is a keyframe animation?",
    answer: "Keyframes define the intermediate steps in a CSS animation.",
    explanation: "Animations run based on keyframe percentages.",
    code: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

div {
  animation: fadeIn 1s ease-in-out;
}`
  },
  {
    question: "25. What is the difference between relative and absolute URLs in CSS?",
    answer: "Relative URLs are based on the current location, absolute URLs use full path.",
    explanation: "Use relative paths for internal links and absolute for external resources.",
    code: `background-image: url('../images/bg.jpg');`
  },
  {
    question: "26. How do you import a font in CSS?",
    answer: "Use @import or link a font from services like Google Fonts.",
    explanation: "@import should be placed at the top of the CSS file.",
    code: `@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');`
  },
  {
    question: "27. How do you make a website responsive with CSS?",
    answer: "Use media queries, flexible layouts, and percentage-based sizing.",
    explanation: "Responsive design adapts to screen sizes and orientations.",
    code: `@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`
  },
  {
    question: "28. What is the difference between nth-child and nth-of-type?",
    answer: "nth-child matches based on position, nth-of-type matches based on type and position.",
    explanation: "Use nth-of-type to target specific elements of the same type.",
    code: `li:nth-child(2) {
  color: blue;
}

li:nth-of-type(2) {
  color: green;
}`
  },
  {
    question: "29. What is viewport in CSS?",
    answer: "The viewport is the user's visible area of a web page.",
    explanation: "Use units like vw (viewport width) and vh (viewport height) for sizing.",
    code: `div {
  width: 100vw;
  height: 100vh;
}`
  },
  {
    question: "30. What is calc() in CSS?",
    answer: "calc() is a CSS function that performs calculations to determine property values.",
    explanation: "You can mix units like percentages and pixels.",
    code: `div {
  width: calc(100% - 50px);
}`
  }
];



      
  
export default function CssInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
             CSS(Cascading Style Sheets) Interview Questions
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
  