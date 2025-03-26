import React, { useEffect, useRef } from "react";
import "./Awards.css";
import gsap from "gsap";
import client1 from '../assets/client1.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import jcnije from '../assets/jcnije.jpeg';
import jcnije_nav from '../assets/jcnije_nav.jpeg';

const Awards = () => {
  const containerRef = useRef(null); // Reference to Awards component
  const SVGNS = 'http://www.w3.org/2000/svg';
  const EASE = 0.7;

  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  function updatePointer(event) {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  }

  function createLine(leader) {
    const line = document.createElementNS(SVGNS, 'line');
    const get = gsap.getProperty(line);
    const set = gsap.quickSetter(line, 'attr');

    const genModifier = (prop) => {
      const pos2 = `${prop}2`;

      return () => {
        const linePos = get(prop);
        const leaderPos = leader(prop);
        const linePosNext = linePos + (leaderPos - linePos) * EASE;
        set({ [pos2]: leaderPos - linePosNext });

        return linePosNext;
      };
    };

    gsap.set(line, pointer);

    gsap.to(line, {
      x: '+=1',
      y: '+=1',
      repeat: -1,
      ease: 'linear',
      modifiers: {
        x: genModifier('x'),
        y: genModifier('y')
      }
    });

    return line;
  }

  function createTrail(color, length = 10) {
    const svg = document.createElementNS(SVGNS, 'svg');
    let leader = (prop) => (prop === 'x' ? pointer.x : pointer.y);

    for (let i = 0; i < length; i++) {
      const line = createLine(leader);
      line.style.stroke = color;
      svg.appendChild(line);
      leader = gsap.getProperty(line);
    }

    if (containerRef.current) {
      containerRef.current.appendChild(svg); // Append SVG only inside this component
    }
  }

  useEffect(() => {
    // Run animation only when this component mounts
    window.addEventListener("pointerdown", updatePointer);
    window.addEventListener("pointermove", updatePointer);

    createTrail("cyan", 30);
    createTrail("yellow", 20);
    createTrail("orange", 10);

    return () => {
      // Cleanup: Remove event listeners and SVGs when component unmounts
      window.removeEventListener("pointerdown", updatePointer);
      window.removeEventListener("pointermove", updatePointer);

      if (containerRef.current) {
        containerRef.current.querySelectorAll("svg").forEach(svg => svg.remove());
      }
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <header className="header">
        <div className="logo">AWARDS</div>
      </header>
      <main className="grid-container">
        <div className="grid-item image1" id="one">
          <h2>Featured as “Top Icon of India” by Business Talkz Magazine.</h2>
        </div>
        <div className="grid-item image2" id="two">
          <img src={client1} alt="" />
        </div>
        <div className="grid-item image3" id="three">
          <h2>"Honorary Fellowship (Domain: Management)" by All India Eminent Faculty Council of Engg. Mgmt. & Technology</h2>
        </div>
        <div className="grid-item image4" id="four">
          <img src={client3} alt="" />
        </div>
        <div className="grid-item image5" id="five">
          <img src={client4} alt="" />
        </div>
        <div className="grid-item image6" id="six">
          <h2>"Member of Subject Matter Expert Group (SMEG)" by Nikhil Bharat Shiksha Parishad</h2>
        </div>
        <div className="grid-item image7" id="seven">
          <img src={jcnije} alt="" />
        </div>
        <div className="grid-item image8" id="eight">
          <h2>Awarded as "Most Promising Educator - 2021" by South Asian Chamber of Scientific Research & Development</h2>
        </div>
        <div className="grid-item image9" id="nine">
          <h2>Awarded as "Campus to Corporate - Guru of the year 2022" by Nikhil Bharat Shiksha Parishad</h2>
        </div>
        <div className="grid-item image10" id="ten">
          <img src={jcnije_nav} alt="" />
        </div>
        <div className="grid-item image11" id="eleven">
          <h2>Dec 2020 | Adamas University “The Leadership Award”</h2>
        </div>
        <div className="grid-item image12" id="twelve">
          <img src={client3} alt="" />
        </div>
      </main>
    </div>
  );
};

export default Awards;
