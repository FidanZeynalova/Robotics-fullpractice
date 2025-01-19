import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { FaBars } from "react-icons/fa";
import { RobotContext } from '../context/FavoritesContext';

function Navbar() {
    let {fav} = useContext(RobotContext)
    return (
        <div className='Navbar'>
            <div className="container">
                <div className="logo">
                    <img src="https://preview.colorlib.com/theme/robotics/img/logo.png" alt="" />   
                </div>
                <div className="list">
                    <ul>
                        <li><NavLink to={"/"} style={{ color: "white" }}>Home</NavLink></li>
                        <li>About us</li>
                        <li>Services</li>
                        <li><NavLink to={"/add"} style={{ color: "white" }}>Add</NavLink></li>
                        <li><NavLink to={"/wishlist"} style={{ color: "white" }}>Wishlist({fav.length})</NavLink></li>
                    </ul>
                    <div className="icon">
                    <FaBars />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
