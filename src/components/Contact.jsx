import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact_us_green" id='contact'>
      <div className="responsive-container-block big-container">
        <div className="responsive-container-block containerc">
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b-2">
            <form className="form-box">
              <div className="container-block form-wrapper">
                <div className="head-textc-box">
                  <p className="textc-blk contactus-head">
                    Contact us
                  </p>
                  
                </div>
                <div className="responsive-container-block">
                  <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6">
                    <p className="textc-blk input-title">
                      FIRST NAME
                    </p>
                    <input className="input" name="FirstName" />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="textc-blk input-title">
                      LAST NAME
                    </p>
                    <input className="input" name="LastName" />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="textc-blk input-title">
                      EMAIL
                    </p>
                    <input className="input" name="Email" />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="textc-blk input-title">
                      PHONE NUMBER
                    </p>
                    <input className="input" name="PhoneNumber" />
                  </div>
                  {/* Service Dropdown */}
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="textc-blk input-title">
                      SERVICE
                    </p>
                    <select className="input dropdown" name="Service">
                      <option value="" disabled selected>Select a service</option>
                      <option value="webDevelopment">Advisory Services</option>
                      <option value="appDevelopment">Training Programs</option>
                      <option value="uiUxDesign">Global Collaborations</option>
                      <option value="seoMarketing">Custom Solutions</option>
                    </select>
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
                    <p className="textc-blk input-title">
                      WHAT DO YOU HAVE IN MIND
                    </p>
                    <textarea className="textcinput" placeholder="Please enter query..."></textarea>
                  </div>
                </div>
                <div className="btn-wrapper">
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10" id="ifgi">
            <div className="container-box">
              <div className="textc-content">
                <p className="textc-blk contactus-head">
                  Contact us
                </p>                
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
