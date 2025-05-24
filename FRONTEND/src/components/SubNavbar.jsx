
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";

// const links = [
//   { to: "/quize", label: "C" },
//   { to: "/cpp", label: "C++" },
//   { to: "/java", label: "JAVA" },
//   { to: "/python", label: "PYTHON" },
//   { to: "/csharp", label: "C#" },
//   { to: "/dbms", label: "DBMS" },
//   { to: "/iot", label: "IOT" },
//   { to: "/ds", label: "DATA STRUCTURE" },
//   { to: "/dwh", label: "DATAWAREHOUSE" },
//   { to: "/html", label: "HTML" },
//   { to: "/css", label: "CSS" },
//   { to: "/js", label: "JS" },
//   { to: "/react", label: "REACT" },
//   { to: "/os", label: "OPERATING SYSTEM" },
//   { to: "/cn", label: "COMPUTER NETWORK" },
//   { to: "/se", label: "SOFTWARE ENGINEERING" },
//   { to: "/asp", label: "ASP.NET" },
//   { to: "/ai", label: "AI" },
//   { to: "/cc", label: "CLOUD COMPUTING" },
//   { to: "/ad", label: "ANDROID DEVEVLOPMENT" },
  
// ];

// const SubNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   const handleNavLinkClick = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     closeMenu(); // Close the mobile menu
//   };

//   // Function to apply the active class for sub-nav links
//   const getActiveClass = ({ isActive }) =>
//     isActive ? "bg-blue-600 text-white" : "text-blue-800";

//   return (
//     <>
//       <style>
//         {`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}
//       </style>

//       <header className="w-full bg-white shadow-md sticky top-20 z-50">
//         {/* Mobile header */}
//         <div className="md:hidden flex justify-between items-center px-4 py-3 border-b border-gray-200">
//           <h2 className="text-blue-800 font-bold text-lg">Topics</h2>
//           <button onClick={toggleMenu} className="text-blue-700 text-2xl">
//             {isOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>

//         {/* Scrollable dropdown for mobile */}
//         <div
//           className={`transition-all duration-300 md:hidden ${
//             isOpen ? "max-h-[300px] py-2 px-4" : "max-h-0"
//           } overflow-hidden`}
//         >
//           <div className="bg-gray-50 rounded-lg shadow-md p-3 space-y-2 max-h-[250px] overflow-y-auto scrollbar-hide">
//             {links.map(({ to, label }) => (
//               <NavLink
//                 key={to}
//                 to={to}
//                 onClick={handleNavLinkClick} // Prevent page refresh here
//                 className={({ isActive }) =>
//                   `block w-full text-sm font-medium px-4 py-2 rounded-md transition ${getActiveClass({ isActive })} hover:bg-blue-100`
//                 }
//               >
//                 {label}
//               </NavLink>
//             ))}
//           </div>
//         </div>

//         {/* Desktop navbar */}
//         <nav className="hidden md:block w-full bg-white">
//           <div className="flex overflow-x-auto w-full scrollbar-hide justify-center items-center px-4 py-3 space-x-3">
//             {links.map(({ to, label }) => (
//               <NavLink
//                 key={to}
//                 to={to}
//                 className={({ isActive }) =>
//                   `whitespace-nowrap text-sm font-medium ml-24 px-5 py-2 rounded-full transition duration-200 ${getActiveClass({ isActive })} hover:bg-blue-100`
//                 }
//               >
//                 {label}
//               </NavLink>
//             ))}
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default SubNavbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";

// const links = [
//   { to: "/quize", label: "C" },
//   { to: "/cpp", label: "C++" },
//   { to: "/java", label: "JAVA" },
//   { to: "/python", label: "PYTHON" },
//   { to: "/csharp", label: "C#" },
//   { to: "/dbms", label: "DBMS" },
//   { to: "/iot", label: "IOT" },
//   { to: "/ds", label: "DATA STRUCTURE" },
//   { to: "/dwh", label: "DATAWAREHOUSE" },
//   { to: "/html", label: "HTML" },
//   { to: "/css", label: "CSS" },
//   { to: "/js", label: "JS" },
//   { to: "/react", label: "REACT" },
//   { to: "/os", label: "OPERATING SYSTEM" },
//   { to: "/cn", label: "COMPUTER NETWORK" },
//   { to: "/se", label: "SOFTWARE ENGINEERING" },
//   { to: "/asp", label: "ASP.NET" },
//   { to: "/ai", label: "AI" },
//   { to: "/cc", label: "CLOUD COMPUTING" },
//   { to: "/ad", label: "ANDROID DEVEVLOPMENT" },
// ];

// const SubNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   const handleNavLinkClick = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     closeMenu(); // Close the mobile menu
//   };

//   // Function to apply the active class for sub-nav links
//   const getActiveClass = ({ isActive }) =>
//     isActive ? "bg-blue-600 text-white" : "text-blue-800";

//   return (
//     <>
//       <style>
//         {`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}
//       </style>

//       <header className="w-full bg-white shadow-md sticky top-24 z-50">
//         {/* Mobile header */}
//         <div className="md:hidden flex justify-between items-center px-4 py-3 border-b border-gray-200">
//           <h2 className="text-blue-800 font-bold text-lg">Topics</h2>
//           <button onClick={toggleMenu} className="text-blue-700 text-2xl">
//             {isOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>

//         {/* Scrollable dropdown for mobile */}
//         <div
//           className={`transition-all duration-300 md:hidden ${
//             isOpen ? "max-h-[300px] py-2 px-4" : "max-h-0"
//           } overflow-hidden`}
//         >
//           <div className="bg-gray-50 rounded-lg shadow-md p-3 space-y-2 max-h-[250px] overflow-y-auto scrollbar-hide">
//             {links.map(({ to, label }) => (
//               <NavLink
//                 key={to}
//                 to={to}
//                 onClick={handleNavLinkClick} // Prevent page refresh here
//                 className={({ isActive }) =>
//                   `block w-full text-sm font-medium px-4 py-2 rounded-md transition ${getActiveClass({ isActive })} hover:bg-blue-100`
//                 }
//               >
//                 {label}
//               </NavLink>
//             ))}
//           </div>
//         </div>

//         {/* Desktop navbar */}
//         <nav className="hidden md:block w-full bg-white">
//           <div className="flex overflow-x-auto w-full scrollbar-hide justify-start items-center px-4 py-3 space-x-6">
            
//             {links.map(({ to, label }) => (
//               <NavLink
//                 key={to}
//                 to={to}
//                 className={({ isActive }) =>
//                   `whitespace-nowrap text-sm font-medium px-5 py-2 rounded-full transition duration-200 ${getActiveClass({ isActive })} hover:bg-blue-100`
//                 }
//               >
//                 {label}
//               </NavLink>
//             ))}
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default SubNavbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { to: "/quize", label: "C" },
  { to: "/cpp", label: "C++" },
  { to: "/java", label: "JAVA" },
  { to: "/python", label: "PYTHON" },
  { to: "/csharp", label: "C#" },
  { to: "/dbms", label: "DBMS" },
  { to: "/iot", label: "IOT" },
  { to: "/ds", label: "DATA STRUCTURE" },
  { to: "/dwh", label: "DATAWAREHOUSE" },
  { to: "/html", label: "HTML" },
  { to: "/css", label: "CSS" },
  { to: "/js", label: "JS" },
  { to: "/react", label: "REACT" },
  { to: "/os", label: "OPERATING SYSTEM" },
  { to: "/cn", label: "COMPUTER NETWORK" },
  { to: "/se", label: "SOFTWARE ENGINEERING" },
  { to: "/asp", label: "ASP.NET" },
  { to: "/ai", label: "AI" },
  { to: "/cc", label: "CLOUD COMPUTING" },
  { to: "/ad", label: "ANDROID DEVEVLOPMENT" },
];
  
const SubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavLinkClick = (e) => {
    e.preventDefault(); // Prevent page refresh
    closeMenu(); // Close the mobile menu
  };

  // Function to apply the active class for sub-nav links
  const getActiveClass = ({ isActive }) =>
    isActive ? "bg-blue-600 text-white" : "text-blue-800";

  return (
    <>
      <style>
        {`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}
      </style>

      <header className="w-full bg-white shadow-md sticky top-24 z-50">
        {/* Mobile header */}
        <div className="md:hidden flex justify-between items-center px-4 py-3 border-b border-gray-200">
          <h2 className="text-blue-800 font-bold text-lg">Topics</h2>
          <button onClick={toggleMenu} className="text-blue-700 text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Scrollable dropdown for mobile */}
        <div
          className={`transition-all duration-300 md:hidden ${
            isOpen ? "max-h-[300px] py-2 px-4" : "max-h-0"
          } overflow-hidden`}
        >
          <div className="bg-gray-50 rounded-lg shadow-md p-3 space-y-2 max-h-[250px] overflow-y-auto scrollbar-hide">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={handleNavLinkClick} // Prevent page refresh here
                className={({ isActive }) =>
                  `block w-full text-sm font-medium px-4 py-2 rounded-md transition ${getActiveClass({ isActive })} hover:bg-blue-100`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Desktop navbar */}
        <nav className="hidden md:block w-full bg-white">
          <div className="flex overflow-x-auto w-full scrollbar-hide justify-start items-center px-4 py-3 space-x-6">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `whitespace-nowrap text-sm font-medium px-5 py-2 rounded-full transition duration-200 ${getActiveClass({ isActive })} hover:bg-blue-100`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default SubNavbar;
