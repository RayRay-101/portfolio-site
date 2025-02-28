import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/Footer.css"
import LinkedIn from "../assets/linkedicon.png"
import  Git from "../assets/giticon.png"
import  upscroll from "../assets/upscroll.png"


const Footer = () => {
  return (
    <div className='Footer'>
        <div className='top'>

          <div className='left'>
            <p>SCROLL TO TOP</p>
            <img src={upscroll} alt="up-scroll" />
          </div>

          <div className='middle'>
          <span>PERSONAL</span>
          <ul>
                <li><NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
                <li> <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
            </ul>
          </div>

          <div className='right'>
            <p>SOCIALS :</p>
            <a href="http://linkedin.com/in/raymond-addo-4b7346207" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="linkedin" /></a>
            <a href="https://github.com/RayRay-101" target="_blank" rel="noopener noreferrer"><img src={Git} alt="github" /></a>
          </div>

        </div>

        <div className='bottom'>
          <p>&copy; 2024 All Rights Reserved</p>
          <p>Built in 🤍 with React.</p>
          <p>Designed by Moi</p>
        </div>
      </div>
  )
}

export default Footer