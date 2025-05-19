import React from "react";
import "./Footer.css";

const Footer = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="footer-area" id="footer123">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            {/* <img src={logo} alt="" /> */}
            <h2>Joy Chowdhury</h2>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
          <li >
              <a href="#home" className="nav-link" onClick={(e) => handleScroll(e, 'home')}>Home</a>
            </li>
            <li >
              <a href="#timeline123" className="nav-link" onClick={(e) => handleScroll(e, 'timeline123')}>Timeline</a>
            </li>
            <li >
              <a href="#blog-slider123" className="nav-link" onClick={(e) => handleScroll(e, 'blog-slider123')}>Blog</a>
            </li>
            <li >
              <a href="#gallery123" className="nav-link" onClick={(e) => handleScroll(e, 'gallery123')}>Gallery</a>
            </li>
            <li >
              <a href="#awards" className="nav-link" onClick={(e) => handleScroll(e, 'awards')}>Awards</a>
            </li>
            <li >
              <a href="#journal123" className="nav-link" onClick={(e) => handleScroll(e, 'journal123')}>Experience</a>
            </li>
            <li >
              <a href="#contact" className="nav-link" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Phone: +91 8274969037</li>
            <li>Email: demo@demo.com</li>
            <li>Address: Kolkata, India</li>
          </ul>
        </div>

        {/* Keep your other sections same as before */}
      </div>

      <div className="footer-credit">
        <p>
          Designed and Developed by{" "}
          <a href="https://www.siplhub.com/" target="_blank" rel="nofollow">
            @Sikharthy Infotech Private Limited
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
