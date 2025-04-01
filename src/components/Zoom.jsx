import React, { useEffect } from "react";
import "./Zoom.css";
import client21 from "../assets/cilent21.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card3 from "./Card3";

gsap.registerPlugin(ScrollTrigger);

const Zoom = () => {
  useEffect(() => {
    const totalSlides = 3;

    const sectionHeight = (document.body.scrollHeight - window.innerHeight) / totalSlides;
    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide, index) => {
      gsap.to(slide, {
        zIndex: (progress) => (progress < 0.5 ? 10 -index:1),
        scrollTrigger: {
          start: sectionHeight * index + " top",
          end: sectionHeight * (index + 1) + " top",
          scrub: 1,
        },
      });

      gsap.fromTo(
        slide,
        { scale: index === 0 ? 1 : 0 },
        {
          scale: 1,
          scrollTrigger: {
            start: sectionHeight * index + " top",
            end: sectionHeight * (index + 1) + " top",
            scrub: 1,
          },
        }
      );

      if (index !== 0) {
        gsap.fromTo(
          slide.querySelector(".slide-image"),
          { scale: 2 },
          {
            scale: 1,
            scrollTrigger: {
              start: sectionHeight * index + " top",
              end: sectionHeight * (index + 1) + " top",
              scrub: 1,
            },
          }
        );
      }
    });
  }, []);

  return (
  
    <div className="slider">
        <div className="slide" id="slide-1">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <img src={client21} className="slide-image" alt="client1" />
        </div>
        <div className="slide" id="slide-2">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <img src={client3} className="slide-image" alt="client2" />
        </div>
        <div className="slide" id="slide-3">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <img src={client4} className="slide-image" alt="client3" />
        </div>
      </div>
      
  
      // <div className="zoom">
      
      
    // </div>
    
    
    
  );
};

export default Zoom;
