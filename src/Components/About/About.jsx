import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg' 
import profile_img from '../../assets/profile_img.svg' 

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Passionate Frontend Developer with experience in building responsive and user-friendly web applications.</p>
                <p>Collaborative team player who enjoys turning ideas into interactive, impactful solutions.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML CSS</p><hr style={{width:"50%"}}></hr></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}></hr></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}></hr></div>
                <div className="about-skill"><p>DBMS</p><hr style={{width:"50%"}}></hr></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Secure a Global rank of 1344</h1>
            <p>in Tcs Codevita Season 12</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1> Techathon(SIH) 2nd Round</h1>
            <p>in Chandigarh University</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1> 15+</h1>
            <p>Academic Events Participation</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Won Class Representative Award</h1>
            <p>in My College</p>
        </div>
      </div>
    </div>
  )
}

export default About
