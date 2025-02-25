import React from 'react'
import "../styles/Home.css"
import Bryson from "../assets/brysontiller.jpeg"
import Inpic from "../assets/inpic.jpg"
import BubbleAnimation from './BubbleAnimation'

const Home = () => {
  return (
    <div className='Homepage'>
      <BubbleAnimation />

      <div className='Home'>
        <div className='HomeText'>
          <h1>Hi, <br/>
          I'm Raymond <span>.</span></h1>
          <p>I'm a creative web developer <span>.</span></p>
          <br />
          <p className='vertical'>
            <span>&copy; 2024 Addo Raymond.</span>
            <hr />
          </p>                

          <button>
          <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Checkout My CV</a></li>
          </button>
        </div>
        <div className='HomeImage'>
          <img src={Bryson} alt='' />
       
        </div>
      </div>

      <div className='Scroll'>
        <p>SCROLL</p>
        <hr />
        <hr />
      </div>


      <div className='Projects'>
        <h1>Projects I've worked on</h1>
        <p>how to show and animate properly</p>
      </div>

      <div className='Contact'>
        <img src={Inpic} alt="#open to work" />
        <h1>I'm available to Work</h1>
        <p>CONTACT ME</p>
        <input type="text" />
        <button>
          Get In Touch
        </button>
      </div>

      <div className='Footer'>
        <div className='one'>
          <p>&copy; 2024 All Rights Reserved</p>
        </div>

        <div className='two'>
          <p>Built with React.</p>
        </div>

        <div className='three'>
          <a href="">LinkedIn /</a>
          <a href="">Github</a>
        </div>
      </div>

    </div>
  
  )
}

export default Home