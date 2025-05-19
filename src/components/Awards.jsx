import React, { useEffect, useRef } from "react";
import "./Awards.css";
import gsap from "gsap";

import jcnije from '../assets/jcnije.jpeg';
import client5 from '../assets/client5.jpeg';
import client6 from '../assets/client6.jpeg';
import client7 from '../assets/client7.jpeg';
import client8 from '../assets/client8.jpeg';
import client9 from '../assets/client9.jpeg';

const Awards = () => {
  const containerRef = useRef(null);
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
      containerRef.current.appendChild(svg);
    }
  }

  useEffect(() => {
    window.addEventListener("pointerdown", updatePointer);
    window.addEventListener("pointermove", updatePointer);

    createTrail("orange", 30);
    createTrail("#fa8128", 20);
    createTrail("#be5504", 10);

    return () => {
      window.removeEventListener("pointerdown", updatePointer);
      window.removeEventListener("pointermove", updatePointer);

      if (containerRef.current) {
        containerRef.current.querySelectorAll("svg").forEach(svg => svg.remove());
      }
    };
  }, []);

  const animateCounter = (element, target) => {
    let current = 20;
    const step = () => {
      if (current > target) {
        current--;
        element.textContent = current;
        // requestAnimationFrame(step);
        setTimeout(step, 80);
      }
    };
    step();
  };

  const handleMouseEnter = (e) => {
    const curtain = e.currentTarget.querySelector(".curtainasol");
    if (curtain) curtain.style.transform = "translateY(-100%)";
  };

  const handleMouseLeave = (e) => {
    const curtain = e.currentTarget.querySelector(".curtainasol");
    const targetNum = parseInt(curtain.dataset.number, 10);
    if (curtain) {
      curtain.style.transform = "translateY(0%)";
      setTimeout(() => animateCounter(curtain, targetNum), 300);
    }
  };

  return (
    <div className="container" ref={containerRef} id='awards'>
      <header className="header">
        <div className="logo">AWARDS</div>
      </header>
      <main className="grid-container">
        <div className="grid-item image1" id="one" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p className="curtainasol" data-number="1">1</p>
          <h2>Featured as “Top Icon of India” by Business Talkz Magazine.</h2>
        </div>
        <div className="grid-item image2" id="two">
          <img src={client5} alt="" />
        </div>
        <div className="grid-item image3" id="three" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p className="curtainasol" data-number="2">2</p>
          <h2>"Honorary Fellowship (Domain: Management)" by All India Eminent Faculty Council of Engg. Mgmt. & Technology</h2>
        </div>
        <div className="grid-item image4" id="four">
          <img src={client6} alt="" />
        </div>
        <div className="grid-item image5" id="five">
          <img src={client7} alt="" />
        </div>
        <div className="grid-item image6" id="six" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p className="curtainasol" data-number="3">3</p>
          <h2>"Member of Subject Matter Expert Group (SMEG)" by Nikhil Bharat Shiksha Parishad</h2>
        </div>
        <div className="grid-item image7" id="seven">
          <img src={jcnije} alt="" />
        </div>
        <div className="grid-item image8" id="eight" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p className="curtainasol" data-number="4">4</p>
          <h2>Awarded as "Most Promising Educator - 2021" by South Asian Chamber of Scientific Research & Development</h2>
        </div>
        <div className="grid-item image9" id="nine" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p className="curtainasol" data-number="5">5</p>
          <h2>Awarded as "Campus to Corporate - Guru of the year 2022" by Nikhil Bharat Shiksha Parishad</h2>
        </div>
        <div className="grid-item image10" id="ten">
          <img src={client8} alt="" />
        </div>
        <div className="grid-item image11" id="eleven" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p className="curtainasol" data-number="6">6</p>
          <h2>Dec 2020 | Adamas University “The Leadership Award”</h2>
        </div>
        <div className="grid-item image12" id="twelve">
          <img src={client9} alt="" />
        </div>
      </main>
    </div>
  );
};

export default Awards;
