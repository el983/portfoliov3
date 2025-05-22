import React from 'react'
import demoImage from '../assets/client1.png'
import './Home.css'
const Home = () => {
  return (
    <div className="hero-section">
        <div className='imagejc'>
        <img src={demoImage} alt="Profile" className="profile-pic" />
        </div>
       
        <div className="intro-text">
          {/* <div className="arrow">↘</div> */}
          <h1>JOY CHOWDHURY</h1>
          <p className='ip'>
            Passionate Learning &amp; Development leader, engaging motivational speaker, 
            and skilled emotional intelligence coach with over 21 years of transformative experience.
          </p>
        </div>
        <div className="mov-text-wrapper">
        <div className="mov-text">
          <p>
            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium sit repellat necessitatibus dignissimos, quisquam sapiente! */}
            Featured as “Top Icon of India” by Business Talkz Magazine.
          </p>
          <p aria-hidden="true">
      {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium sit repellat necessitatibus dignissimos, quisquam sapiente! */}
      Featured as “Top Icon of India” by Business Talkz Magazine.
    </p>
        </div>
      </div>
    </div>
  )
}

export default Home