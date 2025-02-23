import React from 'react'
import "../styles/Home.css"
import Bryson from "../assets/brysontiller.jpeg"

const Home = () => {
  return (
    <div className='Homepage'>
      <div className='Home'>
        <div className='HomeText'>
          <h1>Hi, my <br/>
          name is Raymond <span>.</span></h1>
          <p>I'm a creative web developer from <br/> 
          Kumasi, Ghana <span>.</span></p>
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
      </div>

    </div>
  
  )
}

export default Home