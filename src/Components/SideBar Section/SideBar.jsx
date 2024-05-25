import React from 'react';
import './sidebar.css';
import { IoMdSpeedometer } from 'react-icons/io';
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsTrophy, BsCreditCard2Front, BsQuestionCircle } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='sideBar grid'>
            <div className="logoDiv flex">

                <h2>Green Life</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    QUICK MENU
                </h3>
                <ul className="menuLists grid">

                    <li className="listItem">
                    <Link to="/plant" className='menuLink flex'>
    
    <span className="smallText">
        Plant
    </span>
</Link>


                    </li>

                    <li className="listItem">
                    <Link to="/seeds" className='menuLink flex'>
   
    <span className="smallText">
       Seeds
    </span>
</Link>
                    </li>

                    <li className="listItem">
                    <Link to="/explore" className='menuLink flex'>
   
    <span className="smallText">
        PlantCare
    </span>
</Link>
                    </li>

                    <li className="listItem">
                    <Link to="/gifting" className='menuLink flex'>
   
    <span className="smallText">
        Gifting
    </span>
</Link>
                    </li>

                </ul>
            </div>

            <div className="settingsDiv">
                <h3 className="divTitle">
                    SETTINGS
                </h3>
                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <AiOutlinePieChart className="icon" />
                            <span className="smallText">
                                Charts
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <BiTrendingUp className="icon" />
                            <span className="smallText">
                                Trends
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <MdOutlinePermContactCalendar className="icon" />
                            <span className="smallText">
                                Contact
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <BsCreditCard2Front className="icon" />
                            <span className="smallText">
                                Billing
                            </span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="sideBarCard">
                <BsQuestionCircle className="icon" />
                <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <h3>Help Center</h3>
                    <p>Having trouble in Planti, please contact us for more questions.</p>
                    <Link to="/helpcenter" className='btn'>Go to help center</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar