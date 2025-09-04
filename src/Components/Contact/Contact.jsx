import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-title'>
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new project and job,so feel free to send a message about anything that you want me to work on,You can contact anytime.</p>
          <div className='contact-details'>
            <div className='contact-detail'>
            <img src={mail_icon} alt="" /><p>kunalraj845438@gmail.com</p>
          </div>
          <div className='contact-detail'>
            <img src={call_icon} alt="" /><p>+91 75648-25637</p>
          </div>
          <div className='contact-detail'>
            <img src={location_icon} alt="" /><p>Bihar,India</p>
          </div>
        </div>
      </div>
      <form className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter Your Name' name='name' />
        <label htmlFor="">Your Email</label>
        <input type="text" placeholder='Enter Your Email' name='email' />
        <label htmlFor="">Write Your Meggage Here'</label>
        <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
        <button type='submit' className="contact-submit">Submit Now</button>

      </form>
    </div>
    </div>
  )
}

export default Contact
