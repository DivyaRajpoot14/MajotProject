// import React from 'react'; 
// import ReactDOM from 'react-dom/client'; // Use react-dom/client for createRoot
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import QuizPage from './components/QuizePage';
// import Loginform from './components/Loginform';
// import Contact from './components/Contact';
// import Profile from './components/profile/Profile';
// import History from './components/Question';
// import Signup from './components/Signup';
// import C from './components/Quizecomponent/C';
// import Cpp from './components/Quizecomponent/C++';
// import Java from './components/Quizecomponent/Java';
// import Python from './components/Quizecomponent/Python';
// import Csharp from './components/Quizecomponent/Csharp';
// import Ds from './components/Quizecomponent/Datastructure';
// import Dwh from './components/Quizecomponent/Dwh';
// import Iot from './components/Quizecomponent/Iot';
// import Html from './components/Quizecomponent/Html';
// import Css from './components/Quizecomponent/Css';
// import QuizCart from './components/QuizeCart';
// import Dbms from './components/Quizecomponent/Dbms';
// import Reactjs from './components/Quizecomponent/React';
// import Js from './components/Quizecomponent/Js';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/quize",
//     element: <QuizCart/>,
//   },
//   {
//     path: "/loginform",
//     element: <Loginform />,
//   },
//   {
//     path: "/signup",
//     element: <Signup/>,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,

//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//   {
//     path: "/c",
//     element: <C/>,
//   },
//   {
//     path: "/c++",
//     element: <Cpp/>,
//   },
//   {
//     path: "/java",
//     element: <Java />,
//   },
//   {
//     path: "/dbms",
//     element: <Dbms />,
//   },
//   {
//     path: "/python",
//     element: <Python />,
//   },
//   {
//     path: "/csharp",
//     element: <Csharp />,
//   },
//   {
//     path: "/ds",
//     element: <Ds />,
//   },
//   {
//     path: "/dwh",
//     element: <Dwh />,
//   },
//   {
//     path: "/iot",
//     element: <Iot />,
//   },
  
//   {
//     path: "/html",
//     element: <Html/>,
//   } ,
//   {
//     path: "/css",
//     element: <Css/>,
//   } ,
//   {
//     path: "/react",
//     element: <Reactjs/>,
//   } ,
//   {
//     path: "/js",
//     element: <Js/>,
//   }
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// // Use createRoot instead of ReactDOM.render
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// export default App;
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use react-dom/client for createRoot
import { RouterProvider } from 'react-router-dom';
import router from './router/router';


function App() {
  return <RouterProvider router={router} />;
}

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
