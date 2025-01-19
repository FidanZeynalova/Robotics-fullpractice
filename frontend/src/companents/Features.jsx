import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaRegComment, FaRocket, FaSquarePhoneFlip } from 'react-icons/fa6';
import { GrServices } from "react-icons/gr";
import { GiAmericanFootballHelmet } from "react-icons/gi";

function Features() {
    return (
        <div className='Features'>
         <div className="image">
         <img src="https://preview.colorlib.com/theme/robotics/img/feature-bg.jpg.webp" alt="" />
         </div>
            <div className="container">
                
                <h1>Some Features that Made us Unique</h1>
                <span>Who are in extremely love with eco friendly system.</span>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="head">
                            <p><FaUserAlt /></p>
                            <p>Expert Technicians</p>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="card">
                        <div className="head">
                            <p><GrServices /></p>
                            <p>Expert Technicians</p>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="card">
                        <div className="head">
                            <p><FaSquarePhoneFlip /></p>
                            <p>Expert Technicians</p>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="card">
                        <div className="head">
                            <p><FaRocket /></p>
                            <p>Expert Technicians</p>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="card">
                        <div className="head">
                            <p><GiAmericanFootballHelmet /></p>
                            <p>Expert Technicians</p>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="card">
                        <div className="head">
                            <p><FaRegComment /></p>
                            <p>Expert Technicians</p>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
