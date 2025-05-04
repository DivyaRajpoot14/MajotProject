import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Style.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Set the threshold for background change
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle navigation to Login page
  const handleLoginClick = () => {
    navigate('/login'); // Redirect to Login page
  };

  // Handle navigation to Signup page
  const handleSignupClick = () => {
    navigate('/signup'); // Redirect to Signup page
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">BT Traders</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-end align-items-start w-100 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="courses">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog">Blog</a>
            </li>
          </ul>
          <button className="loginsignupbtn" onClick={handleLoginClick}>Login/Signup</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
