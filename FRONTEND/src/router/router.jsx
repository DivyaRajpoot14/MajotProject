import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from"../components/HomePage";
import QuizPage from '../components/QuizePage';
import Loginform from '../components/Loginform';
import Signup from '../components/Signup';
import Contact from '../components/Contact';
import Profile from '../components/profile/Profile';
import C from'../components/Quizecomponent/C';
import Cpp from '../components/Quizecomponent/C++';
import Csharp from '../components/Quizecomponent/Csharp';
import Java from '../components/Quizecomponent/Java';
import Python from '../components/Quizecomponent/Python';
import Ds from '../components/Quizecomponent/Datastructure';
import Dwh from '../components/Quizecomponent/Dwh';
import Dbms from '../components/Quizecomponent/Dbms';
import Iot from '../components/Quizecomponent/Iot';
import Layout from './layout';
import Html from '../components/Quizecomponent/Html';
import Css from '../components/Quizecomponent/Css';
// import React from '../components/Quizecomponent/React';
import Js from '../components/Quizecomponent/Js';

import Reactjs from '../components/Quizecomponent/React';
import Os from '../components/Quizecomponent/Os';
import Cn from '../components/Quizecomponent/ComputerNetwork';
import Se from '../components/Quizecomponent/SoftwareEngnireeing';
import Asp from '../components/Quizecomponent/Asp';
import Ai from '../components/Quizecomponent/Ai';
import Cloud from '../components/Quizecomponent/Cloudcomputing';
import Android from '../components/Quizecomponent/AndroidDev';
import AboutPage from '../components/Aboutus';
import CInterviewQuestions from '../components/InterviewQuestion/cInterviewque';
import CppInterviewQuestions from '../components/InterviewQuestion/cppInterviewque';
import JavaInterviewQuestions from '../components/InterviewQuestion/javaInterviewque';
import PythonInterviewQuestions from '../components/InterviewQuestion/pythonInterviewque';
import CsharpInterviewQuestions from '../components/InterviewQuestion/CsharpInterviewque';
import DbmsInterviewQuestions from '../components/InterviewQuestion/dbmsInterviewque';
import IotInterviewQuestions from '../components/InterviewQuestion/iotInterviewque';
import DsInterviewQuestions from '../components/InterviewQuestion/DataStructureInterviewque';
import DwhInterviewQuestions from '../components/InterviewQuestion/dwhInterviewque';
import HtmlInterviewQuestions from '../components/InterviewQuestion/htmlInterviewque';
import CssInterviewQuestions from '../components/InterviewQuestion/cssInterviewque';


// Quiz Components

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/quize', element:  <C />  },
      { path: '/loginform', element: <Loginform /> },
     
      { path: '/signup', element: <Signup /> },
      { path: '/contact', element: <Contact /> },
      { path: '/profile', element: <Profile /> },
      { path: '/about', element: <AboutPage/> },
      { path: '/cpp', element: <Cpp /> },
      { path: '/java', element: <Java /> },
      { path: '/python', element: <Python /> },
      { path: '/csharp', element: <Csharp /> },
      { path: '/ds', element: <Ds /> },
      { path: '/dwh', element: <Dwh /> },
      { path: '/iot', element: <Iot /> },
      { path: '/html', element: <Html /> },
      { path: '/css', element: <Css /> },
      { path: '/dbms', element: <Dbms /> },
      { path: '/react', element: <Reactjs /> },
      { path: '/js', element: <Js /> },
      { path: '/os', element: <Os /> },
      { path: '/cn', element: <Cn /> },
      { path: '/se', element: <Se /> },
      { path: '/asp', element: <Asp /> },
      {path:'/ai',element:<Ai/>},
      {path:'/cc',element:<Cloud/>},
      {path:'/ad',element:<Android/>},
      {path:'/ciq',element:<CInterviewQuestions/>},
      {path:'/cppiq',element:<CppInterviewQuestions/>},
      {path:'/javaiq',element:<JavaInterviewQuestions/>},
      {path:'/pythoniq',element:<PythonInterviewQuestions/>},
      {path:'/csharpiq',element:<CsharpInterviewQuestions/>},
      {path:'/dbmsiq',element:<DbmsInterviewQuestions/>},
      {path:'/iotiq',element:<IotInterviewQuestions/>},
      {path:'/dsiq',element:<DsInterviewQuestions/>},
      {path:'/dwhiq',element:<DwhInterviewQuestions/>},
      {path:'/htmliq',element:<HtmlInterviewQuestions/>},
      {path: '/cssiq', element: <CssInterviewQuestions /> },
    ],

  },
]);

export default router;
