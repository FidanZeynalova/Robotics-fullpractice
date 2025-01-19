import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className='Footer'>
    <div className="image">
      <img src="https://preview.colorlib.com/theme/robotics/img/footer-bg.jpg.webp" alt="" />
      <div className="content">
        <p>Copyright ©2025 All rights reserved | This template is made with  by <span>Colorlib</span></p>
        <div className="btns">
          <button><FaInstagram /></button>
          <button><FaFacebook /></button>
          <button><FaLinkedin /></button>
          <button><FaTwitter /></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
