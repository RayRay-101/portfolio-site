import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/About.css"
import austin from "../assets/austin.jpeg"
import Contact from './Contact'


const About = () => {
  return (
    <div className='aboutpage'>
      <div className='aboutupper'>
        <h1>I am a web developer who turns complex code into <br />clean, user-friendly websites that actually work.</h1>
        <div className='myself'>

        <span className='line'>
          <hr />
        </span>
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
          <h1>What I use</h1>
        </div>
      </div>
    </div>
    
  )
}

export default About