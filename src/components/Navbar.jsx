import React from 'react'
import   "../styles/Navbar.css"
import { NavLink } from 'react-router-dom'
import Instagram from "../assets/instagram.png"
import "/resume.pdf"

const Navbar = () => {
  return (
    <nav className='Navbar'>
        <div className='Navlogo'>
            <img src={Instagram} alt="Logo" />
            <span>|</span>
            <p>Addo Raymond</p>
        </div>

        <div className='Navlinks'>
            <ul>
                <li><NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
                <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li> <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Hire Me</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar