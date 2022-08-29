import React from 'react'
import "./CtaSection.css"

function CtaSection() {
  return (
    <div>
         <div className="Hero-container">
      <div className="Hero-box1">
        <h1 className='Cta-head'>Get Started on your Journey Today with Gecko </h1>
        
        <p className='cta-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et urna libero, amet, faucibus adipiscing in bibendum. </p>
        <button className='cta-btn'>Sign Up</button>
      </div>

      <div className="Hero-box2">
        <img  className="hero-img" src="/images/Cta-image.png" />
      </div>
    </div>

    </div>
  )
}

export default CtaSection