import React from 'react'
import './ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'

const ContactUs = () => {
    return (
        <>
            <div className="contact-page-header">
                <h1>Need Some Text Here!</h1>
            </div>

            <div className="contact-details section-p1">
                <div className="details">
                    <span>Get In Touch</span>
                    <h2>Visit us or Contact us</h2>
                    <h3>Address</h3>
                    <div>
                        <li>
                            <FontAwesomeIcon icon={faMap} className='icon' /><p>Shaitan Gali, Khatra Mahal</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} className='icon' /><p>decompras.co.in@gmail.com</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} className='icon' /><p>+917838178945</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faClock} className='icon' /><p>10 00 - 18 00 IST</p>
                        </li>
                    </div>
                </div>

                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26030.39498985855!2d138.7273634!3d35.360625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019629a42fdc899%3A0xa6a1fcc916f3a4df!2sMount%20Fuji!5e0!3m2!1sen!2sin!4v1700299713574!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div className="form-details">
                <form action="">
                    <span>Leave us a Message</span>
                    <h2>We love to hear from you</h2>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Subject" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message Here"></textarea>
                    <button>Submit</button>
                </form>

                <div className="people">
                    <div>
                        <p><span>Aditya</span>Co-Founder<br />+917838178945<br />aditya.win.official@gmail.com</p>
                    </div>
                    <div>
                        <p><span>Deepanshu</span>Co-Founder<br />+917042815331<br />kumardeepanshu1999@gmail.com</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ContactUs
