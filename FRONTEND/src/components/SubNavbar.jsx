import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const SubNavbar=()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
  
    return(
      <header className="w-[100dvw]  bg-white text-blue-700 flex justify-evenly items-center rounded-lg text-center shadow-lg">
      <div className="flex bg-white items-center h-16 ml-2 p-0 w-[100dvw]">
        <div className=" md:flex space-x-4">
          <NavLink
            to="/c"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105  px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : " bg-blue-500 & text-white"
              }`
            }
          >
    C
          </NavLink>
          <NavLink
            to="/cpp"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
            
              }`
            }

          >
          C++
          </NavLink>
          <NavLink
            to="/java"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
            JAVA
          </NavLink>
          <NavLink
            to="/python"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
            PYTHON
          </NavLink>
          
          <NavLink
            to="/csharp"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
            C#
          </NavLink>
          <NavLink
            to="/dbms"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
          DBMS
          </NavLink>
          
          <NavLink
            to="/iot"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
            IOT
          </NavLink>
          <NavLink
            to="/ds"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
          DATA STRUCTURE 
          </NavLink>
          <NavLink
            to="/dwh"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
          DATAWAREHOUSE & MINNING
          </NavLink>
          <NavLink
            to="/html"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
          HTML
          </NavLink>
          <NavLink
            to="/css"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
        CSS
          </NavLink>
          <NavLink
            to="/js"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
        JS
          </NavLink>
          <NavLink
            to="/react"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
      REACT
          </NavLink>
          <NavLink
            to="/react"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
      OPERATING SYSTEM
          </NavLink> <NavLink
            to="/react"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
        COMPUTER NETWORK
          </NavLink> 
          {/* <NavLink
            to="/react"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
        SOFTWARE ENGINEERING
          </NavLink> */}
           {/* <NavLink
            to="/react"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
        CLOUD COMPUTING
          </NavLink> <NavLink
            to="/react"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
        CYBER SECURITY
          </NavLink> <NavLink
            to="/react"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
        AI
          </NavLink> <NavLink
            to="/react"
            className={({ isActive }) =>
              ` text-blue-800 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-500 & text-white" : ""
              }`
            }
          >
        BIG DATA & ANALYTICS
          </NavLink> */}
        </div> 
      </div>
      </header>

        
    )
}
export default SubNavbar;
