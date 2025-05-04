// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Contact from "./Contact";
// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);
//   const navigate=useNavigate();
//   const Loginform=()=>{
//       navigate('/loginform')
//   }
//   return (
//     <nav className="fixed ">

//         <div className="flex  bg-blue-900 text-black items-center h-20 w-[100dvw]">
//           {/* Logo */}
//           <div className="flex items-center w-[30%] text-white text-2xl font-bold ml-5">
//             <div><img src="src\assets\mytyslogo.jpg" alt="" className="w-20 h-16" /></div>
//             <NavLink to="/" className={'ml-5'}>TEST YOURSELF</NavLink>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-4 w-[60%]">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium ${
//                   isActive ? "bg-blue-600" : ""
//                 }`
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/quize"
//               className={({ isActive }) =>
//                 `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium ${
//                   isActive ? "bg-blue-600" : ""
              
//                 }`
//               }
            
//             >
//               Quiz
//             </NavLink>
           
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium ${
//                   isActive ? "bg-blue-500" : " "
//                 }`
//               }
//               onClick={Contact}
//             >
//               Contact
//             </NavLink>
//             <NavLink
//               to="/profile"
//               className={({ isActive }) =>
//                 `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium ${
//                   isActive ? "bg-blue-500" : ""
//                 }`
//               }
//             >
//               Profile
//             </NavLink>
//             {/* <NavLink
//               to="/history"
//               className={({ isActive }) =>
//                 `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium ${
//                   isActive ? "bg-blue-500" : ""
//                 }`
//               }
//             >
//               History
//             </NavLink> */}
//           </div>
      
//           <div className="h-10 w-12 m-2 flex items-center justify-center rounded-full bg-blue-500 hover:scale-105 hover:bg-blue-600">
//           <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M16.0714 7.71408C16.0714 6.29327 15.507 4.93066 14.5024 3.926C13.4977 2.92135 12.1351 2.35693 10.7143 2.35693C9.2935 2.35693 7.93089 2.92135 6.92623 3.926C5.92157 4.93066 5.35716 6.29327 5.35716 7.71408C5.35716 13.9641 2.67859 15.7498 2.67859 15.7498H18.75C18.75 15.7498 16.0714 13.9641 16.0714 7.71408Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
//           <path d="M12.259 19.3213C12.102 19.5919 11.8767 19.8165 11.6056 19.9727C11.3345 20.1288 11.0272 20.211 10.7143 20.211C10.4015 20.211 10.0941 20.1288 9.82305 19.9727C9.55196 19.8165 9.32665 19.5919 9.16968 19.3213" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
//           </svg>
//           </div>
        
// <div className=" bg-blue-600 rounded-3xl flex w-36   h-10 mr-10 ">

//          <NavLink
//               to="/loginform"
//               className={({ isActive }) =>
//                  ` w-20 h-10 text-white  hover:bg-blue-800  text-center px-3 py-2 rounded-3xl text-base font-medium  ${
//                   isActive ? "bg-blue-600" : "bg-blue-700"
//                 }`
//               }
//             >
//             LogIn
//             </NavLink>
//           <NavLink
//               to="/signup"
//               className={({ isActive }) =>
//                 `text-white  hover:bg-blue-700 h-10 w-20 text-center px-3 py-2 rounded-3xl text-base font-medium  ${
//                   isActive ? "bg-blue-500" : "bg-transparent"
//                 }`
//               } 
//             >
//             Signup
//             </NavLink>
//             </div>
//           {/* Mobile Menu Button */}
//           <div className="flex md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-300 hover:text-white focus:outline-none"
//             >
//               {isOpen ? (
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
    
    
// {/* <div class="darkMode-wrap darkMode-wrap-desktop" data-mode="Switch to Dark Mode"></div> */}
//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium ${
//                 isActive ? "bg-gray-900" : ""
//               }`
//             }
//             onClick={toggleMenu}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               `block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium ${
//                 isActive ? "bg-gray-900" : ""
//               }`
//             }
//             onClick={toggleMenu}
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/services"
//             className={({ isActive }) =>
//               `block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium ${
//                 isActive ? "bg-gray-900" : ""
//               }`
//             }
//             onClick={toggleMenu}
//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               `block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium ${
//                 isActive ? "bg-gray-900" : ""
//               }`
//             }
            
//             onClick={toggleMenu}
//           >
//             Contact
//           </NavLink>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const Loginform = () => {
    navigate("/loginform");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-900 shadow-lg">
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img src="src/assets/mytyslogo.jpg" alt="Logo" className="w-16 h-16" />
          <NavLink
            to="/"
            className="ml-4 text-2xl font-bold text-white whitespace-nowrap"
          >
            TEST YOURSELF
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "bg-blue-600" : ""
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/quize"
            className={({ isActive }) =>
              `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "bg-blue-600" : ""
              }`
            }
          >
            QUIZ
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "bg-blue-500" : ""
              }`
            }
            onClick={Contact}
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `text-white hover:scale-105 px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "bg-blue-500" : ""
              }`
            }
          >
            PROFILE
          </NavLink>
        </div>

        {/* Login/Signup Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex space-x-2">
            <NavLink
              to="/loginform"
              className={({ isActive }) =>
                `text-white hover:bg-blue-800 px-4 py-2 rounded-3xl text-base font-medium ${
                  isActive ? "bg-blue-600" : "bg-blue-700"
                }`
              }
            >
              LOGIN
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `text-white hover:bg-blue-700 px-4 py-2 rounded-3xl text-base font-medium ${
                  isActive ? "bg-blue-500" : "bg-transparent"
                }`
              }
            >
              SINGUP
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-blue-800">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block text-white px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "bg-blue-600" : ""
              }`
            }
            onClick={toggleMenu}
          >
            HOME
          </NavLink>
          <NavLink
            to="/quize"
            className={({ isActive }) =>
              `block text-white px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "bg-blue-600" : ""
              }`
            }
            onClick={toggleMenu}
          >
            QUIZ
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block text-white px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "bg-blue-500" : ""
              }`
            }
            onClick={toggleMenu}
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `block text-white px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "bg-blue-500" : ""
              }`
            }
            onClick={toggleMenu}
          >
            PROFILE
          </NavLink>
          <div className="mt-4 flex space-x-2">
            <NavLink
              to="/loginform"
              className={({ isActive }) =>
                `w-1/2 text-center text-white hover:bg-blue-800 px-3 py-2 rounded-3xl text-base font-medium ${
                  isActive ? "bg-blue-600" : "bg-blue-700"
                }`
              }
              onClick={toggleMenu}
            >
              LOGIN
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `w-1/2 text-center text-white hover:bg-blue-700 px-3 py-2 rounded-3xl text-base font-medium ${
                  isActive ? "bg-blue-500" : "bg-transparent"
                }`
              }
              onClick={toggleMenu}
            >
              SINGUP
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
