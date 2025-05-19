import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className="hero" id="home">
      <nav className="navbar">
        {/* <h1 className="logo">
          <a href="#home"><span className="fas fa-hamburger"></span></a>
        </h1> */}
        <div className='navbar-menu'>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={(e) => handleScroll(e, 'home')}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#timeline123" className="nav-link" onClick={(e) => handleScroll(e, 'timeline123')}>Timeline</a>
            </li>
            <li className="nav-item">
              <a href="#blog-slider123" className="nav-link" onClick={(e) => handleScroll(e, 'blog-slider123')}>Blog</a>
            </li>
            <li className="nav-item">
              <a href="#gallery123" className="nav-link" onClick={(e) => handleScroll(e, 'gallery123')}>Gallery</a>
            </li>
            <li className="nav-item">
              <a href="#awards" className="nav-link" onClick={(e) => handleScroll(e, 'awards')}>Awards</a>
            </li>
            <li className="nav-item">
              <a href="#journal123" className="nav-link" onClick={(e) => handleScroll(e, 'journal123')}>Experience</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
            </li>
            
            
            {/* <li className="nav-item">
              <a href="#footer123" className="nav-link" onClick={(e) => handleScroll(e, 'footer123')}>Footer</a>
            </li> */}
           
            
          </ul>

          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
