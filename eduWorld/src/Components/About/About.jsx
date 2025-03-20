import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>NURTURING TOMMOROW'S LEADERS TODAY</h2>
        <p>[University Name] is a hub of excellence, fostering innovation, research, and academic brilliance. 
          With world-class faculty, state-of-the-art infrastructure, and industry collaborations, we empower students with knowledge and practical skills. 
          Our diverse programs cater to emerging fields, ensuring global career opportunities. </p> 
        <p>We focus on holistic development, offering a vibrant campus life with cultural, technical, and sports events. 
          Hands-on learning, internships, and research projects prepare students for real-world challenges. 
          Strong industry partnerships provide exposure to cutting-edge technologies and career guidance.  </p>
        <p>Join [University Name] to shape your future with quality education and limitless opportunities. 
          Experience a transformative journey of learning, leadership, and success. Your path to excellence starts here!</p>

      </div>
    </div>
  )
}

export default About
