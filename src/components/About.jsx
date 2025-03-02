import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/About.css"
import austin from "../assets/austin.jpeg"


const About = () => {
  return (
    <div className='aboutpage'>
      <div className='aboutupper'>
        <h1>I am a web developer who turns complex code into <br />clean, user-friendly websites that actually work
        <span className="dot"></span></h1>
          <div className='myself'>

            {/* <span className='line'>
              <hr />
            </span> */}
            <h1>TLDR</h1>
            <p>I love building cool projects, web development is my primary specialty. All I need is a strong internet connectivity and your work is done. I have acquired a wholesome knowledge in the
            tech field for a very long time and it has made my life and others very easy. I am trustworthy, creative, quick and also an effective communicator. I fondly anticipate to work in a
            challenging and rewarding organisation to achieve personal growth and development.</p>
            <Link to="/Contact">
              <button>Contact Me</button>
            </Link>
          </div>
      </div>


      <div className='aboutlower'>
        <img src={austin} alt="mypic" />

        <div className='skills'>
          <h1>What I use <span className="dot"></span><span className="dot"></span><span className="dot"></span></h1>
          <div className='skills-container'>
            <div className='frontend'>
            <p>Frontend</p>
            <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            </ul>
            <p>Libraries</p>
            <ul>
            <li>ReactJS</li>
            <li>ExpressJS</li>
            <li>Redux</li>
            <li>Tailwind CSS</li>
            </ul>
            </div>
            <div className='backend'>
            <p>Backend</p>
            <ul>
            <li>TypeScript</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
            </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  )
}

export default About