import React from 'react'
import './Journal.css'
import sawaka from '../assets/Forbes_Sowaka.jpg'
import kawana from '../assets/resorts_kawana.webp'
import lake from '../assets/resorts_lake.webp'
const Journal = () => {
    return (
        <div className='journal'>
            <div className="page-w">
                <div class="page-width">
                    <h1>Journal</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloribus eaque laborum itaque eveniet ipsum.</p>
                </div>
            </div>
            <div className="main-sidebar-j">
                <div className="j-left">
                    <img src={sawaka} alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="j-right">
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="j-img-group">
                            <img src={kawana} alt="" />
                        </div>
                    </div>
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="j-img-group">
                            <img src={lake} alt="" />
                        </div>
                    </div>
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="j-img-group">
                            <img src={kawana} alt="" />
                        </div>
                    </div>
                    <div className="j-content">
                        <div className='j-para'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="j-img-group">
                            <img src={lake} alt="" />
                        </div>
                    </div>

                </div>









            </div>



        </div>
    )
}

export default Journal