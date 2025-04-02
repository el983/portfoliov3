import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="box1">
            <div className="box-h">
                <h1>All the best</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae porro explicabo sequi fuga voluptas possimus iste alias accusamus nulla! Minus placeat non architecto minima fugit officiis deserunt quaerat nesciunt aliquam!</p>
            </div>
           
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum laborum sit voluptate aliquid eum doloremque distinctio, culpa doloribus soluta.</p> */}
        </div>
        <div className="box2">
            <div className="boro">
                <div className="boro1">
                    <h1>Carrier</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nulla!</p>
                </div>
                <div className="boro1">
                    <h1>Partnership</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nulla!</p>
                </div>
                <div className="boro1">
                    <h1>Contact</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nulla!</p>
                </div>
            </div>
            <div className="choto">
                <div className="list">
                    <ul>
                        <li>Home</li>
                        <li>Journal</li>
                        <li>Company</li>
                        <li>Team</li>
                        <li>Brand</li>
                        <li>Resort</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer