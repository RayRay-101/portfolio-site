import React,{ useRef } from 'react'
import "../styles/Contact.css"
// import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7kiscct', 'template_1zkj2g9', form.current, {
        publicKey: 'x9_AYsuX5zEhNxAfY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='Contact'>
       
        <h1>I'm available for work <span>.</span></h1>
        <p>Do you have a project or job for me ? LMK</p>
        <form ref={form} onSubmit={sendEmail} className='form' required >
        <input type="text" name="user_name" placeholder='Name...' required />
        <input type="email" name="user_email" placeholder='Email...' required  />
        <textarea name="message"  placeholder='Your message here...' required  />
        <button type="submit" value="Send">
          Get In Touch
        </button>
        </form>
      </div>
  )
}

export default Contact