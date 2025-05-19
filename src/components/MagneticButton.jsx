
import React, { useRef } from 'react';
import './MagneticButton.css';

const MagneticButton = () => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05) rotateX(${y * 0.05}deg) rotateY(${x * 0.05}deg)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    btn.style.transform = 'translate(0, 0) scale(1) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <button
      ref={btnRef}
      className="magnetic-btn"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      type="submit"
    >
      Send it!
    </button>
  );
};

export default MagneticButton;
