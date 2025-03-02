import React, { useState, useEffect } from 'react'
import   "../styles/Navbar.css"
import { NavLink } from 'react-router-dom'
import nodp from "../assets/nodp.png"
import "/resume.pdf"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.Navbar');
      const hamburger = document.querySelector('.hamburger');
      
      if (menuOpen && navbar && !navbar.contains(event.target) || 
          hamburger && hamburger.contains(event.target)) {
        return;
      }
      
      if (menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1100);
      if (window.innerWidth >= 1100) {
        setMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);


  return (
    <nav className='Navbar'>
        <div className='Navlogo'>
            <img src={nodp} alt="Logo" />
            <span>|</span>
            <p>Addo Raymond</p>
        </div>

        {isMobile ? (
          <div className="mobile-nav-container">
            <button 
              className={`hamburger ${menuOpen ? 'open' : ''}`} 
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
              <ul>
                <li>
                  <NavLink 
                    to="/home" 
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/projects" 
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
        <div className='Navlinks'>
            <ul>
                <li><NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
                <li> <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
                <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
            </ul>
        </div>
        )}
    </nav>
  )
}

export default Navbar