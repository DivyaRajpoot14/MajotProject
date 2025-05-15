import React from 'react';
import { NavLink } from "react-router-dom";

import QuizPage from './QuizePage';

function HomePage() {
  return (
    <>

    <div className="flex flex-row items-start bg-gradient-to-br from-blue-500 to-sky-600 ">
    <div className="min-h-screen w-[100dvw]  text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold mb-4 ">Welcome to Test YourSelf !</h1>
      {/* <p className='text-lg mb-8'>"Welcome to a world of learning and discovery! Explore our exciting quizzes, test your knowledge, and have fun while you grow. Let's get started!"

</p> */}
<p className='text-xl m-3 ml-10 w-[55dvw] flex justify-center items-center'>"Ignite your curiosity! Explore a world of knowledge with our engaging quizzes. Test your limits, learn something new every day, and track your progress as you grow. Ready to challenge yourself? "

</p>
      {/* <p className="text-lg mb-8 ">Test your knowledge and compete with friends!</p> */}

      <div className="space-x-4">
       <NavLink 
       to="/quize">
        <button className="bg-white text-blue-600 border-2 border-blue-400 px-6 py-3 rounded-full shadow-lg hover:text-blue-800 hover:scale-105  font-bold transition duration-300" onClick={QuizPage}>
        Let's get started!
        </button>
        </NavLink> 
        
      </div>
      <div className="absolute bottom-10">
        <p className="text-sm text-white/70">© 2024 Test YourSelf. All rights reserved.</p>
      </div>
    </div>
    <div className='w-[60%] h-[60%] flex justify-center items-center mt-48 mr-5 '><img src="src\assets\homepage.png" alt="" className=" flex justify-center items-center" /></div>
   
    
    </div>
    
    </>
  );
}

export default HomePage;
