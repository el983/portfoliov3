import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import './Home.css';
import h1 from '../assets/h1.jpg';
import jc4 from '../assets/jc4.png'
const Home = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageRef.current.classList.add('animate');
        } else {
          imageRef.current.classList.remove('animate');
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className='home'>
      <div className="write">
        <h3>just in time</h3>
      </div>
      <div className="h-image" ref={imageRef}>
        <img src={jc4} alt="" />
      </div>
    </div>
  );
};

export default Home;