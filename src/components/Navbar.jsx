import React, { useState } from 'react';
import './Navbar.css';
import jcnav from '../assets/jcnije_nav.jpeg'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className="c-name">
        {/* <h3>JOY CHOWDHURY</h3> */}
      </div>
      <div className="ham" onClick={toggleMenu}>
        <h5>Menu</h5>
        <div className="h-icon">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        {/* Close Button */}
        <div className="close-btn" onClick={toggleMenu}>
          <i className="fa-solid fa-times"></i>
        </div>

        <div className="sidebar-content">
          {/* Sidebar Image */}
          <div className="sidebar-image">
            <img src={jcnav} alt="Sidebar" />
          </div>

          {/* Sidebar Menu List */}
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Cards</a></li>
            <li><a href="#contact">Educational Timeline</a></li>
            <li><a href="#about">Blog</a></li>
            <li><a href="#contact">pictures</a></li>
            <li><a href="#footer">Awards</a></li>
            <li><a href="#mentor">Experience</a></li>
            <li><a href="#mentor">Contact Us</a></li>
            <li><a href="#mentor">Footer</a></li>
          </ul>
        </div>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default Navbar;