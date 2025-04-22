import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import './Home.css';
import h1 from '../assets/h1.jpg';
import jc_t from '../assets/jc_t.png'
import dadu from '../assets/dadu.png'
import client1 from '../assets/client1.png'
import JC from '../assets/JC.png'
import ProfileCard from './ProfileCard';
import JC_res from '../assets/JC_res.png';
import jc_res from '../assets/jc-res-p.png';
// import jc_bg from '../assets/jc_bg.mp4'
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
    <>
      <div className='home' id='home123'>
        <video src="/videos/jc_bg_sun_3.mp4" autoPlay muted loop></video>
        <div className="write">
          <ProfileCard />

          {/* <img src={client1} alt="" />
        <h1>Learning & Development leader, motivational speaker, and emotional intelligence coach with over 21 years of experience </h1> */}
        </div>
        <div className="h-image" ref={imageRef}>

          <img src={JC} alt="" />
        </div>
      </div>
      <div className="home-res">
        <div className="top-res">
          <video src="/videos/sunrise_2.mp4" autoPlay muted loop></video>
          <img src={jc_res} alt="" />
        </div>
        <div className="bottom-res">
          <ProfileCard />
        </div>
      </div>
    </>

  );
};

export default Home;
