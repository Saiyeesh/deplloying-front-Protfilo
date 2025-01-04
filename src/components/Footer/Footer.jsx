import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className='footerBack'>
        <h2>Yellarm Saiyeesh</h2>
        <div className='footerNav'>
          <ul className='footerUls'>
            <Link to="/" className='linkLine'><li>About</li></Link>
            <Link to="skills" className='linkLine'><li>Skills</li></Link>
            <Link to="/experience" className='linkLine'><li>Experience</li></Link>
            <Link to="/projects" className='linkLine'><li>Projects</li></Link>
            <Link to="/education" className='linkLine'><li>Education</li></Link>
            <Link to="/contact" className='linkLine'><li>Contact</li></Link>
          </ul>
        </div>
        <div className='footer-logos'>
            <FaFacebook className='logos'/>
            <FaInstagram className='logos'/>
            <a href='https://www.linkedin.com/feed/' target='_blank'><FaLinkedin className='logos'/></a>
            <FaTwitter className='logos'/>
        </div>
        <div className='footerLast'>
          <p>@ 2024 Yellarm Saiyeesh. All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer