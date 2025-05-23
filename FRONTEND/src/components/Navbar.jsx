
// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import Contact from "./Contact";
// import { FiLogOut } from "react-icons/fi";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token") || sessionStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     sessionStorage.removeItem("token");
//     setIsLoggedIn(false);
//     navigate("/loginform");
//   };

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-blue-900 shadow-lg">
//       <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-10">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src="src/assets/mytyslogo.jpg" alt="Logo" className="w-16 h-14" />
//           <NavLink
//             to="/"
//             className="ml-4 text-2xl font-bold text-white whitespace-nowrap"
//           >
//             TEST YOURSELF
//           </NavLink>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <NavLink to="/" className={({ isActive }) =>
//             `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-blue-600" : ""}`}>HOME</NavLink>
//           <NavLink to="/quize" className={({ isActive }) =>
//             `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-blue-600" : ""}`}>QUIZ</NavLink>
//           <NavLink to="/score" className={({ isActive }) =>
//             `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-blue-600" : ""}`}>SCORE</NavLink>
//           <NavLink to="/contact" className={({ isActive }) =>
//             `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-blue-500" : ""}`} onClick={Contact}>CONTACT</NavLink>
//           <NavLink to="/profile" className={({ isActive }) =>
//             `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-blue-500" : ""}`}>PROFILE</NavLink>
//         </div>

//         {/* Login/Logout Buttons - Desktop */}
//         <div className="hidden md:flex items-center space-x-4">
//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition duration-200"
//             >
//               <FiLogOut className="text-xl" />
//               <span className="font-medium">Logout</span>
//             </button>
//           ) : (
//             <>
// <div className="flex w-fit bg-blue-100 rounded-full overflow-hidden">
//   <NavLink
//     to="/signup"
//     className={({ isActive }) =>
//       `px-6 py-3 text-sm font-medium uppercase transition ${
//         isActive
//           ? "bg-blue-600 text-white rounded-full"
//           : "text-black"
//       }`
//     }
//   >
//     SIGN UP
//   </NavLink>

//   <NavLink
//     to="/loginform"
//     className={({ isActive }) =>
//       `px-6 py-3 text-sm font-medium uppercase transition  ${
//         isActive
//           ? "bg-blue-600 text-white rounded-full"
//           : "text-black"
//       }`
//     }
//   >
//     LOG IN
//   </NavLink>
// </div>


//             </>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-start">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             {isOpen ? (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-4 pt-2 pb-4 bg-blue-800">
//           <NavLink to="/" className={({ isActive }) =>
//             `block text-white px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-blue-600" : ""}`} onClick={toggleMenu}>HOME</NavLink>
//           <NavLink to="/quize" className={({ isActive }) =>
//             `block text-white px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-blue-600" : ""}`} onClick={toggleMenu}>QUIZ</NavLink>
//           <NavLink to="/score" className={({ isActive }) =>
//             `block text-white px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-blue-600" : ""}`} onClick={toggleMenu}>SCORE</NavLink>
//           <NavLink to="/contact" className={({ isActive }) =>
//             `block text-white px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-blue-500" : ""}`} onClick={toggleMenu}>CONTACT</NavLink>
//           <NavLink to="/profile" className={({ isActive }) =>
//             `block text-white px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-blue-500" : ""}`} onClick={toggleMenu}>PROFILE</NavLink>

//           <div className="mt-4 flex flex-col items-start space-y-2">
//             {isLoggedIn ? (
//               <button
//                 onClick={() => {
//                   handleLogout();
//                   toggleMenu();
//                 }}
//                 className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition duration-200 text-base"
//               >
//                 <FiLogOut className="text-xl" />
//                 <span className="font-medium">Logout</span>
//               </button>
//             ) : (
//               <div className="flex w-full space-x-2">
//                 <NavLink to="/loginform" className={({ isActive }) =>
//                   `w-1/2 text-center text-white hover:bg-blue-800 px-3 py-2 rounded-3xl text-base font-medium ${isActive ? "bg-blue-600" : "bg-blue-700"}`} onClick={toggleMenu}>LOGIN</NavLink>
//                 <NavLink to="/signup" className={({ isActive }) =>
//                   `w-1/2 text-center text-white hover:bg-blue-700 px-3 py-2 rounded-3xl text-base font-medium ${isActive ? "bg-blue-500" : "bg-transparent"}`} onClick={toggleMenu}>SIGNUP</NavLink>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Contact from "./Contact";
import { FiLogOut } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5"; // Bell icon
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    // Check token presence in localStorage OR sessionStorage
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists, else false
  }, []);
  
  const handleLogout = () => {
    toast.success("Logged out successfully!", {
   
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    
    });
    // Remove token from both storages on logout
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    
    navigate("/loginform"); // redirect to login page
  };
  
  
  const toggleMenu = () => setIsOpen(!isOpen);

  

  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      pauseOnHover
      draggable
      // theme="colored"
    />
    <nav className="fixed top-0 w-full z-50 bg-blue-900 shadow-lg">
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img src="src/assets/mytyslogo.jpg" alt="Logo" className="w-16 h-14" />
          <NavLink to="/" className="ml-4 text-2xl font-bold text-white whitespace-nowrap">
            TEST YOURSELF
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/" className={({ isActive }) =>
            `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium uppercase ${isActive ? "bg-blue-600" : ""}`}>HOME</NavLink>
          <NavLink to="/quize" className={({ isActive }) =>
            `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium uppercase ${isActive ? "bg-blue-600" : ""}`}>QUIZ</NavLink>
          <NavLink to="/ciq" className={({ isActive }) =>
            `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium uppercase ${isActive ? "bg-blue-600" : ""}`}>Interview Questions</NavLink>
            <NavLink to="/about" className={({ isActive }) =>
            `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium uppercase ${isActive ? "bg-blue-500" : ""}`}>ABOUT</NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
            `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium uppercase ${isActive ? "bg-blue-500" : ""}`} onClick={Contact}>CONTACT</NavLink>
        </div>

       {/* Right Side - Notification + Auth Buttons (Desktop Only) */}
<div className="hidden md:flex items-center space-x-4">
  <IoNotificationsOutline className="text-white text-[35px] cursor-pointer border-2 hover:rotate-12 border-white rounded-full p-1" />

  {isLoggedIn ? (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition duration-200"
    >
      <FiLogOut className="text-xl" />
      <span className="font-medium uppercase">Logout</span>
    </button>
  ) : (
    <>
      <div className="flex w-fit bg-blue-100 hover:bg-blue-500 hover:text-white rounded-full overflow-hidden">
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `px-6 py-3 text-sm font-medium uppercase transition ${
              isActive
                ? "bg-blue-700 text-white rounded-full"
                : "bg-blue-500 text-white rounded-full"
            }`
          }
        >
          SIGN UP
        </NavLink>

        <NavLink
          to="/loginform"
          className={({ isActive }) =>
            `px-6 py-3 text-sm font-medium uppercase transition ${
              isActive
                ? "bg-blue-700 text-white rounded-full"
                : "text-black bg-transparent rounded-full hover:text-white"
            }`
          }
        >
          LOG IN
        </NavLink>
      </div>
    </>
  )}
</div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-start">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-blue-800">
          <NavLink to="/" className={({ isActive }) =>
            `block text-white px-3 py-2 rounded-md text-base font-medium uppercase ${isActive ? "bg-blue-600" : ""}`} onClick={toggleMenu}>HOME</NavLink>
          <NavLink to="/quize" className={({ isActive }) =>
            `block text-white px-3 py-2 rounded-md text-base font-medium uppercase ${isActive ? "bg-blue-600" : ""}`} onClick={toggleMenu}>QUIZ</NavLink>
          <NavLink to="/ciq" className={({ isActive }) =>
            `block text-white px-3 py-2 rounded-md text-base font-medium uppercase ${isActive ? "bg-blue-600" : ""}`} onClick={toggleMenu}>Interview Questions</NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            `block text-white px-3 py-2 rounded-md text-base font-medium uppercase ${isActive ? "bg-blue-500" : ""}`} onClick={toggleMenu}> ABOUT</NavLink>
   <NavLink to="/contact" className={({ isActive }) =>
            `block text-white px-3 py-2 rounded-md text-base font-medium uppercase ${isActive ? "bg-blue-500" : ""}`} onClick={toggleMenu}>CONTACT</NavLink>
          <div className="mt-4 flex flex-col items-start space-y-2">
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition duration-200 text-base"
              >
                <FiLogOut className="text-xl" />
                <span className="font-medium uppercase">Logout</span>
              </button>
            ) : (
              <div className="flex flex-row justify-between w-full gap-2">
                <NavLink
                  to="/loginform"
                  className={({ isActive }) =>
                    `flex-1 text-center text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full text-base font-medium uppercase transition ${
                      isActive ? "bg-blue-600" : ""
                    }`
                  }
                  onClick={toggleMenu}
                >
                  LOGIN
                </NavLink>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `flex-1 text-center text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full text-base font-medium uppercase transition ${
                      isActive ? "bg-blue-500" : ""
                    }`
                  }
                  onClick={toggleMenu}
                >
                  SIGNUP
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default NavBar;
