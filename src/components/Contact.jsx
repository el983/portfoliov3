import React from "react";
import "./Contact.css";
import p1 from "../assets/client1.png";
import MagneticButton from "./MagneticButton";
import { p } from "framer-motion/m";

const ProjectForm = () => {
  return (
    <div className="project-form-container">
      <div className="form-left">
        <h1>
          Let's start a<br />
          project together
        </h1>

        <div className="form-group">
          <label>
            01
            <br />
            <span>What's your name?</span>
          </label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>
            02
            <br />
            <span>What's your email?</span>
          </label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>
            03
            <br />
            <span>What's your phone number?</span>
          </label>
          <input type="text" placeholder="+000000000" />
        </div>

        <div className="form-group">
          <label>
            04
            <br />
            <span>What services are you looking for?</span>
          </label>
          <select>
            <option value="advisory">Advisory Services</option>
            <option value="training">Training Programs</option>
            <option value="collaborations">Global Collaborations</option>
            <option value="custom">Custom Solutions</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            05
            <br />
            <span>Your message</span>
          </label>
          <textarea placeholder="Hello Joy, can you help me with ... *" />
        </div>

        <div className="send-button-container">
          <MagneticButton />
        </div>
      </div>

      <div className="form-right">
        <img src={p1} alt="profile" className="profile-img" />
        <div className="arrow">↘</div>

        <div className="workik-contact-bigbox">
                <div className="workik-contact-box">
                  <div className="phone textc-box">
                    <img 
                      className="contact-svg" 
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg" 
                      alt="phone icon" 
                    />
                    <p className="contact-textc">
                      +91 8274969037
                    </p>
                  </div>
                  <div className="address textc-box">
                    <img 
                      className="contact-svg" 
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg" 
                      alt="email icon" 
                    />
                    <p className="contact-textc">
                    demo@demo.com
                    </p>
                  </div>
                  <div className="mail textc-box">
                    <img 
                      className="contact-svg" 
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg" 
                      alt="location icon" 
                    />
                    <p className="contact-textc">
                      Kolkata, India
                    </p>
                  </div>
                </div>
                <div className="social-media-links">
                  <a href="">
                    <img className="social-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" alt="mail" />
                  </a>
                  <a href="">
                    <img className="social-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" alt="twitter" />
                  </a>
                  <a href="">
                    <img className="social-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" alt="instagram" />
                  </a>
                  <a href="">
                    <img className="social-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" alt="facebook" />
                  </a>
                </div>
              </div>
      </div>
    </div>
  );
};

export default ProjectForm;
