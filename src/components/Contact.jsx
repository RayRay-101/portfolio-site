import React from 'react'
import "../styles/Contact.css"


const Contact = () => {
  return (
    <div className='Contact'>
       
        <h1>I'm available for work <span>.</span></h1>
        <p>Do you have a project or job for me ? LMK</p>
        <form action="" className='form'>
        <input type="text" placeholder='Your name'/>
        <input type="email" placeholder='Email' />
        <textarea name="message" id="1" placeholder='Your message here...'></textarea>
        </form>
        <button>
          Get In Touch
        </button>
      </div>
  )
}

export default Contact