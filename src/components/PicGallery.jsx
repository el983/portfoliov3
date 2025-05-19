import React, { useState, useRef } from "react";
import "./PicGallery.css";
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.jpeg'
import client6 from '../assets/client6.jpeg'
import client7 from '../assets/client7.jpeg'
import client8 from '../assets/client8.jpeg'
import client9 from '../assets/client9.jpeg'
import jcnije_nav from '../assets/jcnije_nav.jpeg'
const PicGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const panels = [
    client3, client4,client5,client6,client7,client8,client9,jcnije_nav
  ];

  const angle = 180 / (panels.length - 1); // Half-cylinder effect

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % panels.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + panels.length) % panels.length);
  };

  // Swipe support
  const dragStartX = useRef(null);
  const dragging = useRef(false);

  const handleMouseDown = (e) => {
    dragging.current = true;
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    const diff = e.clientX - dragStartX.current;
    if (diff > 50) {
      handlePrev();
      dragging.current = false;
    } else if (diff < -50) {
      handleNext();
      dragging.current = false;
    }
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchEndX.current - touchStartX.current;

    if (diff > 50) {
      handlePrev();
    } else if (diff < -50) {
      handleNext();
    }
  };

  const getTranslateZ = () => {
    if (window.innerWidth <= 600) {
      return "translateZ(90vw)";
    }
    return "translateZ(40vw)";
  };

  return (
    <div
      className="gallery-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <button className="nav-button left" onClick={handlePrev}>&#10094;</button>
      <div className="gallery123">
        {panels.map((src, i) => {
          let offset = (i - currentIndex + panels.length) % panels.length;
          if (offset > panels.length / 2) offset -= panels.length;

          const isFocused = i === currentIndex;

          return (
            <div
              key={i}
              className={`panel ${isFocused ? "focused" : "blurred"}`}
              style={{
                backgroundImage: `url(${src})`,
                transform: `rotateY(${offset * angle}deg) ${getTranslateZ()} ${!isFocused ? "scale(0.8)" : ""}`
              }}
            ></div>
          );
        })}
      </div>
      <button className="nav-button right" onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default PicGallery;
