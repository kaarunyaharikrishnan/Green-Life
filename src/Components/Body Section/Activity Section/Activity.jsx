import React from 'react'
import './activity.css'
import { BsArrowRightShort } from 'react-icons/bs' 
import img7 from '../../assets/img7.jpg'
import img1 from '../../assets/img1.jpg'
import img5 from '../../assets/img5.jpg'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Resent Acticity</h1>
        <button className="btn flex">
            See All
            <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
            <img src={img7} alt="customer image" />
            <div className="customerDetails">
                <span className="name">Francis Dujardin</span>
                <small>Ordered a new plant</small>
            </div>
            <div className="duration">
                2 min ago
            </div>
        </div>

        <div className="singleCustomer flex">
            <img src={img5} alt="customer image" />
            <div className="customerDetails">
                <span className="name">Eric Picherau</span>
                <small>Ordered a new plant</small>
            </div>
            <div className="duration">
                2 min ago
            </div>
        </div>

        <div className="singleCustomer flex">
            <img src={img1} alt="customer image" />
            <div className="customerDetails">
                <span className="name">Robin Clément</span>
                <small>Ordered a new plant</small>
            </div>
            <div className="duration">
                2 min ago
            </div>
        </div>
   
        <div className="singleCustomer flex">
            <img src={img5} alt="customer image" />
            <div className="customerDetails">
                <span className="name">David Maison</span>
                <small>Ordered a new plant</small>
            </div>
            <div className="duration">
                2 min ago
            </div>
        </div>
    
        <div className="singleCustomer flex">
            <img src={img7} alt="customer image" />
            <div className="customerDetails">
                <span className="name">Sophie Martin</span>
                <small>Ordered a new plant</small>
            </div>
            <div className="duration">
                2 min ago
            </div>
        </div>

      </div>
    
    </div>
  )
}

export default Activity