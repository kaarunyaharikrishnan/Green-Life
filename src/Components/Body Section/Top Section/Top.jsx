import React from 'react'
import './top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotifications } from 'react-icons/md'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import img from '../../assets/img1.jpg'
// import img2 from '../../../assets/img3.jpeg'
import video from '../../assets/video.mp4'

const Top = () => {
    return (
        <div className='topSection'>
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to Green Life.</h1>
                    <p>Hello Kaarunya, Welcome back !</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder='Search Dashboard' />
                    <BiSearchAlt className="icon" />
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className='icon' />
                    <MdOutlineNotifications className='icon' />
                    <div className="adminImage">
                        <img src={img} alt="admin image" />
                    </div>
                </div>

            </div>

            <div className="cardSection flex">

                <div className="rightCard flex">
                    <h1>Create and sell extraordinary products</h1>
                    <p>The world's fast growing industry today are natural made products !</p>

                    <div className="buttons flex">
                        <button className='btn'>Explore More</button>
                        <button className='btn transparent'>Top Sellers</button>
                    </div>

                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">

                        <div className="textDiv">
                            <h1>My Stat</h1>

                            <div className="flex">
                                <span>
                                    Today <br /> <small>4 Orders</small>
                                </span>
                                <span>
                                    This Month <br /> <small>127 Orders</small>
                                </span>
                            </div>

                            <span className="flex link">
                                Go to my orders <BsArrowRightShort className="icon" />
                            </span>

                        </div>

                        <div className="imgDiv">
                           
                        </div>

                          <div className="sideBarCard">
                            <BsQuestionCircle className="icon" />
                            <div className="cardContent">
                                <div className="circle1"></div>
                                <div className="circle2"></div>

                                <h3>Help Center</h3>
                                <p>Having trouble in Planti, please contact us from for more questions.</p>
                                <button className='btn'>Go to help center</button>
                            </div>
                             </div> 

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Top