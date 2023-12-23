import React from 'react'
import './Hero.css'
import flag from '../Assets/images/india/flag.PNG'
import free_shipping from '../Assets/images/features/free_shipping.png'
import product from '../Assets/images/products/f1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <h4>Go Back to Your Roots</h4>
        <h2>Super Value Deals</h2>
        <h1>On All Products</h1>
        <p>Save More in this Festive Season</p>
        <button>Shop Now</button>
      </div>

      <div className="india">
        <img src={flag} alt="" />
        <h1>Made In India for India</h1>
      </div>

      <div className="feature section-p1">
        <div className="feature-box">
        <img src={free_shipping} alt="" />
            <h3>Free Shipping</h3>
        </div>
        <div className="feature-box">
        <img src={free_shipping} alt="" />
            <h3>Online Order</h3>
        </div>
        <div className="feature-box">
        <img src={free_shipping} alt="" />
            <h3>Discounts</h3>
        </div>
        <div className="feature-box">
        <img src={free_shipping} alt="" />
            <h3>Custom Styling</h3>
        </div>
        <div className="feature-box">
        <img src={free_shipping} alt="" />
            <h3>24 x 7 Support</h3>
        </div>
      </div>

      <div className='product-1 section-p1'>
        <h2>Featured Products</h2>
        <p>New Arrivals for Modern Gen</p>

        <div className="pro-container">
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
        </div>
      </div>

      <div className="banner-dad">
        <div className="container">
            <div className="banner">
                <div className="banner-text">
                    <h2>LIMITED TIME OFFER</h2>
                    <h1>SALE</h1>
                    <button className="btn">Shop Now</button>
                </div>
            </div>
        </div>
      </div>

      <div className='product-1 section-p1'>
        <h2>Trending Themes</h2>
        <p>Be a Trend Setter</p>

        <div className="pro-container">
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
            <div className="pro">
                <img src={product} alt="" />
                <div className="des">
                    <span>de Compras</span>
                    <h5>Cartoon Astronaut Tee</h5>
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                      <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                    <h4>₹ 499</h4>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faBagShopping} className='bag-icon' /></Link>
            </div>
        </div>
      </div>

      <div className="sm-banner section-p1">
        <div className="banner-box banner-1">
            <h4>Create Your Own<br />Design</h4>
            <button>Submit Design</button>
        </div>
        <div className="banner-box banner-2">
            <h4>I Dont Know What to put here</h4>
            <button>Same Here</button>
        </div>
      </div>

      <div className="news-letter section-p1 section-m1">
        <div className="text">
            <h4>Subscribe for Latest Updates</h4>
            <p>Get a mail whenever we have something new for you. <span>You are Special to Us</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your Email Address" />
            <button>Sign Up</button>
        </div>
      </div>


    </>
  )
}

export default Hero
