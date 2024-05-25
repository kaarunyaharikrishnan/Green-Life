import React from 'react'
import './listing.css'

import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import image from '../../assets/img8.jpeg'
import img9 from '../../assets/img9.jpeg'
import img10 from '../../assets/img10.jpeg'

import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'

const Listing = () => {
  return (
      <div className='listingSection'>
          <div className="heading flex">
              <h1>My Listings</h1>
              <button className='btn flex'>
                  See All <BsArrowRightShort className='icon' />
              </button>
          </div>

          <div className="secContainer flex">

              <div className="singleItem">
                  <AiFillHeart className='icon' />
                  <img src={image} alt="image name" />
                  <h3>Annual Vince</h3>
              </div>

              <div className="singleItem">
                  <AiFillHeart className='icon' />
                  <img src={img9} alt="image name" />
                  <h3>Coffe Plant</h3>
              </div>

              <div className="singleItem">
                  <AiFillHeart className='icon' />
                  <img src={img10} alt="image name" />
                  <h3>Button Fern</h3>
              </div>

             

          </div>

          <div className="sellers flex">
              <div className="topSellers">
                  <div className="heading flex">
                      <h3>Top Sellers</h3>
                      <button className='btn flex'>
                          See All <BsArrowRightShort className='icon' />
                      </button>
                  </div>

                  <div className="card flex">
                      <div className="users">
                          <img src={img6} alt="user image" />
                          <img src={img7} alt="user image" />
                          <img src={img5} alt="user image" />
                          <img src={img7} alt="user image" />
                      </div>
                      <div className="cardText">
                          <span>
                              14.556 Plant sold <br />
                              <small>
                                  21 Sellers <span className="date">7 Days</span>
                              </small>
                          </span>
                      </div>
                  </div>
              </div>

              <div className="featuredSellers">
                  <div className="heading flex">
                      <h3>Featured Sellers</h3>
                      <button className='btn flex'>
                          See All <BsArrowRightShort className='icon' />
                      </button>
                  </div>

                  <div className="card flex">
                      <div className="users">
                          <img src={img6} alt="user image" />
                          <img src={img7} alt="user image" />
                          <img src={img5} alt="user image" />
                          <img src={img4} alt="user image" />
                      </div>
                      <div className="cardText">
                          <span>
                              14.556 Plant sold <br />
                              <small>
                                  21 Sellers <span className="date">7 Days</span>
                              </small>
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Listing