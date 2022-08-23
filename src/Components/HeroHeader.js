import React from 'react'
import './HeroHeader.css'




function HeroHeader() {


  return (
    <div className="Hero-container">
      <div className="Hero-box1">
        <h1 className='hero-h1'><span className='hero-span'>Master</span> the Fundamentals of <span className='hero-span'>Front-End</span> Development</h1>
      </div>

      <div className="Hero-box2">
        <img  className="hero-img" src="/images/hero_image.png" />
      </div>
    </div>
  );
  }


export default HeroHeader;