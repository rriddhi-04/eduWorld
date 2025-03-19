import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Here we provide world class education </h1>
        <p>
        We offer top-quality education with global standards. Our expert faculty ensures a world-class learning experience. Join us for excellence in education and skill development.
        </p>
        <button className='btn'> Explore now  <img src={dark_arrow} alt=''/> </button>
      </div>
    </div>
  )
}

export default Hero
