import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';

function Layout() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <Outlet /> {/* This will render the routed components */}
      </main>
      {/* <footer>
        <p>© 2025 Quiz App</p>
      </footer> */}
    </div>
  );
}

export default Layout;
