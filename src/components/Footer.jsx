import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
  return (
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
  )
}

export default Footer