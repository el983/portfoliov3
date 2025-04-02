import React from 'react'
import './Newd1.css'
import client21 from '../assets/cilent21.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
const Newd1 = () => {
    return (
        <div className="newd1">
            <ul id="nps">
                <li className='np' id='np1'>

                    <div className="np-body">

                        <h1>Educationist, A Strategic Leader</h1>
                        <img src={client21} alt="bkhd" />


                    </div>
                </li>
                <li className='np' id='np2'>
                    <div className="np-body">
                        <h1>Learning & Development Leader, Motivational Speaker</h1>
                        <img src={client3} alt="ijsdm" />
                    </div>
                </li>
                <li className='np' id='np3'>
                    <div className="np-body">
                        <h2>Featured as “Top Icon of India” by Business Talkz Magazine.</h2>
                        <img src={client4} alt="" />
                    </div>
                </li>
                {/* <li className='np' id='np4'>
                <div className="np-body">
                    <h2>cards</h2>
                </div>
            </li> */}
            </ul>
        </div>
    )
}

export default Newd1