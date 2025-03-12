import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import h1 from '../assets/h1.jpg'
const Home = () => {
  return (
    <div className='home'>
        <div className="write">
            <h3>just in time</h3> 
        </div>
        <div className="h-image">
            <img src={h1} alt="" />
        </div>

    </div>
  )
}

export default Home