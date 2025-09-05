import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>i'm Kunal Raj,</span>Frontend Developer From India</h1>
        <p> I am a Computer Science & Engineering student at Chandigarh
            University (CGPA 7.04).
          I love crafting scalable interfaces with React, Tailwind, 
          and modern tooling, and
          I enjoy algorithmic problem solving from competitive programming.</p>      
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>

    </div>
  )
}

export default Hero
