import React from 'react'
import './Journal.css'
import sawaka from '../assets/Forbes_Sowaka.jpg'
import oheraldo from '../assets/oheraldo.jpg'
import techno from '../assets/fAWcPHUYZllswOHVOkSkwsDuP1.webp'
import ramoji from '../assets/ramoji.png'
import mslogo from '../assets/MS+logo.png'
import max from '../assets/maxresdefault.jpg'
import amazon from '../assets/amazon.png'
import cv from '../assets/cerner-vector-logo.png'
import atos from '../assets/atos.png'
import jcnije from '../assets/jcnije.jpeg'
import pinnacle from '../assets/pinnacle.jpeg'
import ibm from '../assets/IBM.jpeg'
import infosys from '../assets/Infosys.jpeg'
const Journal = () => {
    return (
        <div className='journal' id='journal123'>
            <div className="page-w">
                <div class="page-width">
                    <h1>Journal</h1>
                    <p>Featured as “Top Icon of India” by Business Talkz Magazine.
                    </p>
                </div>
            </div>
            <div className="main-sidebar-j">
                <div className="j-left">
                    <img src={jcnije} alt="" />
                    <p>Joy has played a pivotal role in shaping the future of learning in various institutions.</p>
                </div>

                <div className="j-right">
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Group Vice-President - New Initiatives </p>
                            <p>HERALD GROUP</p>
                        </div>
                        <div className="j-img-group">
                            <img src={oheraldo} alt="" />
                        </div>
                    </div>
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Director - Training & Extended Learning </p>
                            <p> TECHNO INDIA 
                            GROUP</p>
                        </div>
                        <div className="j-img-group">
                            <img src={techno} alt="" />
                        </div>
                    </div>
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Director - Professional Studies </p><p> ADAMAS UNIVERSITY</p>
                        </div>
                        <div className="j-img-group">
                            <img src={max} alt="" />
                        </div>
                    </div>
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Training Manager </p>
                            <p> AMAZON Global</p>
                        </div>
                        <div className="j-img-group">
                            <img src={amazon} alt="" />
                        </div>
                    </div>
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Associate Professor & HOD </p>
                            <p> RAMOJI KRIAN UNIVERSITY</p>
                        </div>
                        <div className="j-img-group">
                            <img src={ramoji} alt="" />
                        </div>
                    </div>
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Head - Learning & Development </p>
                            <p> THE MINDSHIFT</p>
                        </div>
                        <div className="j-img-group">
                            <img src={mslogo} alt="" />
                        </div>
                    </div>
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Senior Manager- Learning & Development  </p>
                            <p>
                            CERNER</p>
                        </div>
                        <div className="j-img-group">
                            <img src={cv} alt="" />
                        </div>
                    </div>
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Assistant Training Manager 
                             Anthelio Business Technologies</p>
                        </div>
                        <div className="j-img-group">
                            <img src={atos} alt="" />
                        </div>
                    </div>
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Communication Trainer </p>
                            <p> PINNACLE ASSOCIATES</p>
                        </div>
                        <div className="j-img-group">
                            <img src={pinnacle} alt="" />
                        </div>
                    </div>
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Team Leader- Communication Training </p>
                            <p>INFOSYS</p>
                        </div>
                        <div className="j-img-group">
                            <img src={infosys} alt="" />
                        </div>
                    </div>
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Lead Trainer </p>
                            <p> IBM</p>
                        </div>
                        <div className="j-img-group">
                            <img src={ibm} alt="" />
                        </div>
                    </div>
                    
                    


                </div>









            </div>



        </div>
    )
}

export default Journal