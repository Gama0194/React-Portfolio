// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar.css';
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Your Logo</h1>
      </div>
      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className={`bar1 ${isMobileMenuOpen ? 'change' : ''}`}></div>
        <div className={`bar2 ${isMobileMenuOpen ? 'change' : ''}`}></div>
        <div className={`bar3 ${isMobileMenuOpen ? 'change' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
