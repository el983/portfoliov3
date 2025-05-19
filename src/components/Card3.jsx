import React from "react";
import "./Card3.css"; // Import the CSS file
import resort from '../assets/resort_bg.webp'
import company from '../assets/company_bg.webp'
import brand from '../assets/brand_bg.webp'
const Card3 = () => {
  return (
    <div className="gallery" id='gallery123'>
      
        <div className="imgcard">
        <img src={resort} alt="Image 1" className="image" />
        <div className="onimg-para">Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="imgcard">
        <img src={company} alt="Image 2" className="image" />
        <div className="onimg-para">Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="imgcard">
        <img src={brand} alt="Image 3" className="image" />
        <div className="onimg-para">Lorem ipsum dolor sit amet.</div>
        </div>
      
      
        
      
      
    </div>
  );
};

export default Card3;
