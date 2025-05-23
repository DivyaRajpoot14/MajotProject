import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const questions= [
  {
    question: "1. What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
    explanation: "It allows developers to create reusable UI components and manage application state efficiently.",
    code: `import React from 'react';

function Hello() {
  return <h1>Hello, React!</h1>;
}`
  },
  {
    question: "2. What are components in React?",
    answer: "Components are reusable pieces of UI in a React application.",
    explanation: "They can be functional or class-based and help in structuring the app into independent, reusable parts.",
    code: `function Welcome() {
  return <h1>Welcome!</h1>;
}`
  },
  {
    question: "3. What is JSX?",
    answer: "JSX is a syntax extension for JavaScript used with React.",
    explanation: "It allows you to write HTML-like syntax inside JavaScript.",
    code: `const element = <h1>Hello, world!</h1>;`
  },
  {
    question: "4. What is the virtual DOM?",
    answer: "The virtual DOM is a lightweight JavaScript object representing the real DOM.",
    explanation: "React uses it to improve performance by minimizing direct DOM manipulation.",
    code: `// React compares virtual DOM and updates only changed parts.`
  },
  {
    question: "5. What are props in React?",
    answer: "Props are short for properties and are used to pass data from parent to child components.",
    explanation: "They are read-only and help in dynamic rendering.",
    code: `function Greet(props) {
  return <h1>Hello, {props.name}</h1>;
}`
  },
  {
    question: "6. What is state in React?",
    answer: "State is a built-in object used to contain data or information about the component.",
    explanation: "State is mutable and can be updated using `setState` or `useState`.",
    code: `const [count, setCount] = useState(0);`
  },
  {
    question: "7. What is the difference between state and props?",
    answer: "Props are passed from parent to child, while state is managed within the component.",
    explanation: "Props are read-only; state can be modified using setState or useState.",
    code: `// Props: <Component name="John" />
// State: const [name, setName] = useState("John");`
  },
  {
    question: "8. What are hooks in React?",
    answer: "Hooks are functions that let you use state and other features in functional components.",
    explanation: "Common hooks: useState, useEffect, useContext, etc.",
    code: `import { useState } from 'react';`
  },
  {
    question: "9. What is useState?",
    answer: "useState is a hook that allows you to add state to functional components.",
    explanation: "It returns a stateful value and a function to update it.",
    code: `const [count, setCount] = useState(0);`
  },
  {
    question: "10. What is useEffect?",
    answer: "useEffect is a hook that performs side effects in functional components.",
    explanation: "It replaces lifecycle methods like componentDidMount.",
    code: `useEffect(() => {
  console.log("Component mounted");
}, []);`
  },
  {
    question: "11. What is conditional rendering?",
    answer: "Conditional rendering in React lets you render components based on a condition.",
    explanation: "It uses ternary operators or logical AND for rendering.",
    code: `{isLoggedIn ? <Dashboard /> : <Login />}`
  },
  {
    question: "12. What is lifting state up?",
    answer: "Lifting state up means moving the state to a common ancestor to share data between sibling components.",
    explanation: "It allows better state management across components.",
    code: `// Move state to parent and pass as props to children`
  },
  {
    question: "13. What is controlled vs uncontrolled component?",
    answer: "A controlled component is controlled by React state. Uncontrolled components store state in the DOM.",
    explanation: "Use controlled for better control over form inputs.",
    code: `// Controlled
<input value={name} onChange={e => setName(e.target.value)} />`
  },
  {
    question: "14. What are keys in React?",
    answer: "Keys help React identify which items have changed, are added, or are removed.",
    explanation: "They should be unique and stable.",
    code: `{items.map(item => <li key={item.id}>{item.name}</li>)}`
  },
  {
    question: "15. What is React Router?",
    answer: "React Router is a library for routing in React applications.",
    explanation: "It allows navigation between different components.",
    code: `<Route path="/home" element={<Home />} />`
  },
  {
    question: "16. What is context API?",
    answer: "Context API allows sharing state globally without prop drilling.",
    explanation: "Use `createContext` and `useContext` to manage global state.",
    code: `const MyContext = React.createContext();`
  },
  {
    question: "17. What is useContext?",
    answer: "useContext is a hook that lets you access context data in functional components.",
    explanation: "It simplifies consuming context values.",
    code: `const value = useContext(MyContext);`
  },
  {
    question: "18. What is useRef?",
    answer: "useRef is a hook that returns a mutable ref object.",
    explanation: "It's used to access DOM elements or persist values.",
    code: `const inputRef = useRef(null);`
  },
  {
    question: "19. What is memoization in React?",
    answer: "Memoization optimizes performance by caching component results.",
    explanation: "React.memo and useMemo are used for memoization.",
    code: `const memoizedValue = useMemo(() => computeExpensive(), [input]);`
  },
  {
    question: "20. What is the difference between useEffect and useLayoutEffect?",
    answer: "useEffect runs after render; useLayoutEffect runs synchronously after DOM changes but before paint.",
    explanation: "Use useLayoutEffect when DOM measurement is required.",
    code: `useLayoutEffect(() => {
  // Measure DOM
});`
  },
  {
    question: "21. What is prop drilling?",
    answer: "Prop drilling is passing props through multiple levels of components.",
    explanation: "Avoid it using Context API or state management libraries.",
    code: `// Parent -> Child -> Grandchild (passing props)`
  },
  {
    question: "22. What is the use of React.Fragment?",
    answer: "React.Fragment lets you group elements without adding extra nodes to the DOM.",
    explanation: "It avoids unnecessary divs.",
    code: `<>
  <h1>Hello</h1>
  <p>World</p>
</>`
  },
  {
    question: "23. What is lazy loading in React?",
    answer: "Lazy loading delays the loading of components until they are needed.",
    explanation: "Used for improving performance.",
    code: `const Home = React.lazy(() => import('./Home'));`
  },
  {
    question: "24. What is error boundary?",
    answer: "Error boundaries catch JavaScript errors in child components and show fallback UI.",
    explanation: "Only class components can be error boundaries.",
    code: `componentDidCatch(error, info) {
  this.setState({ hasError: true });
}`
  },
  {
    question: "25. What is reconciliation in React?",
    answer: "Reconciliation is the process of updating the DOM when state or props change.",
    explanation: "React compares the new virtual DOM with the old one and updates only what changed.",
    code: `// React uses diffing algorithm`
  },
  {
    question: "26. What are higher-order components (HOCs)?",
    answer: "HOCs are functions that take a component and return a new component.",
    explanation: "Used for reusing component logic.",
    code: `const EnhancedComponent = withLogger(MyComponent);`
  },
  {
    question: "27. What is Redux?",
    answer: "Redux is a state management library used with React.",
    explanation: "It uses a single source of truth for state.",
    code: `store.dispatch({ type: "INCREMENT" });`
  },
  {
    question: "28. What is the difference between useCallback and useMemo?",
    answer: "useCallback returns a memoized function; useMemo returns a memoized value.",
    explanation: "Use them to avoid unnecessary re-renders.",
    code: `const memoFn = useCallback(() => {}, [deps]);
const memoVal = useMemo(() => compute(), [deps]);`
  },
  {
    question: "29. How do you handle forms in React?",
    answer: "By controlling input values with state and handling onChange.",
    explanation: "Controlled components are preferred.",
    code: `const [email, setEmail] = useState("");
<input value={email} onChange={e => setEmail(e.target.value)} />`
  },
  {
    question: "30. What is StrictMode in React?",
    answer: "StrictMode is a tool for highlighting potential problems in an app.",
    explanation: "It doesn’t render any visible UI but enables extra checks.",
    code: `<React.StrictMode>
  <App />
</React.StrictMode>`
  }
];


      
  
export default function ReactInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
          React Interview Questions
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
  