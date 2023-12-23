import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareThreads } from '@fortawesome/free-brands-svg-icons'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div>
            <footer>
                <p>
                    Copyright &copy; de Compras. 2023 <FontAwesomeIcon icon={faUserAstronaut} />
                </p>
                <div className="socials">
                    <Link to="https://www.facebook.com/profile.php?id=61554247012116" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareFacebook} className='icons'/></Link>
                    <Link to="https://www.instagram.com/decompras.co.in/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareInstagram} className='icons'/></Link>
                    <Link to="https://www.threads.net/@decompras.co.in" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareThreads} className='icons'/></Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer
