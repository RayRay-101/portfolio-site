import React from 'react'
import "../styles/Home.css"
import Myself from "../assets/myself.png"
import react from "../assets/React.png"
import tailwind from "../assets/tailwind.png"
import javascript from "../assets/javascript.png"
import typescript from "../assets/typescript.png"
import node from "../assets/node.png"
import mongo from "../assets/mongo.png"
import redux from "../assets/redux.png"
import express from "../assets/express.png"
// import BubbleAnimation from "./components/BubbleAnimation.jsx"

const Home = () => {
  return (
    <div className='Homepage'>
      {/* <BubbleAnimation /> */}

      <div className='Home'>
        <div className='HomeText'>
          <h1>Hi, <br/>
          I'm Raymond <span className="dot"></span></h1>
          <p>I'm a creative web developer <span className="dot"></span></p>
          <br />
          <div className='vertical'>
          <p><span>&copy; 2024 Addo Raymond.</span></p>
            <hr />
          </div>                

          <button>
          <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Checkout My CV</a></li>
          </button>
        </div>
        <div className='HomeImageWrapper'>
  <div className='HomeImage'>
    <img src={Myself} alt='Mypic' />
  </div>

  {/* Orbiting Images */}
  <div className="OrbitContainer">
  <div className="OrbitImages">

    <img src={react} alt="orbit-1" className="OrbitImage orbit-1" />
    <img src={mongo} alt="orbit-2" className="OrbitImage orbit-2" />
    <img src={node} alt="orbit-3" className="OrbitImage orbit-3" />
    <img src={typescript} alt="orbit-4" className="OrbitImage orbit-4" />
    <img src={redux} alt="orbit-5" className="OrbitImage orbit-5" />
    <img src={javascript} alt="orbit-6" className="OrbitImage orbit-6" />
    <img src={tailwind} alt="orbit-7" className="OrbitImage orbit-7" />
    <img src={express} alt="orbit-8" className="OrbitImage orbit-8" />
  </div>
  </div>
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

      

    </div>
  
  )
}

export default Home