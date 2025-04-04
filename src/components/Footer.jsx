import React from "react";
import "./Footer.css"; // Import the CSS file
// import logo from '../assests/logo.png'

const Footer = () => {
  return (
    <footer className="footer-area">
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
            <li><a href="#main-container1">Home</a></li>
            <li><a href="#services">Card</a></li>
            <li><a href="#ourteam">Educational Timeline</a></li>
            <li><a href="#about">Blogs</a></li>
            <li><a href="#blogs">Pictures</a></li>
            <li><a href="#contact">Awards</a></li>
            <li><a href="#contact">Experience</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#contact">Footer</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>Advisory Services</li>
            <li>Training Programs</li>
            <li>Global Collaboration</li>
            <li>Custom Solutions</li>
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
      </div>

      <div className="footer-credit">
        <p>Designed and Developed by <a href="https://www.siplhub.com/" target="_blank" rel="nofollow">@Sikharthy Infotech Private Limited</a></p>
      </div>
    </footer>
  );
};

export default Footer;
