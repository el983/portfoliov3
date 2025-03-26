import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import './Home.css';
import h1 from '../assets/h1.jpg';
import jc_t from '../assets/jc_t.png'
import client1 from '../assets/client1.png'
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
      <video src="/videos/video_1.mp4" autoPlay muted loop></video>
      <div className="write">
        <img src={client1} alt="" />
        <h1>Learning & Development leader, motivational speaker, and emotional intelligence coach with over 21 years of experience </h1>
      </div>
      <div className="h-image" ref={imageRef}>
        
        <img src={jc_t} alt="" />
      </div>
    </div>
  );
};

export default Home;