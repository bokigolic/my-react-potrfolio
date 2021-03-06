import React, { useState } from 'react'
import "./contact.scss"

export default function Contact() {
  const [message, setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
    
  }
  return (
  
    <div className="contact" id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt='shake-hands' />
      </div>
      <div className='right'>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Sent</button>
          {message && <span>Thanks, I will replay ASAP</span>}
        </form>
      </div>
    </div>
  )
}
