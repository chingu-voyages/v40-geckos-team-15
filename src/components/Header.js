import React, {useState} from "react";
import "../css/header.css";

function Header(){
  const [isActive, setIsActive] =useState(false);
  
  return (
    <header className="header">
      <div className="brand">
        <a href="/" className="brand-logo">
          <img src="data:image/png;base64,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" alt="Geckos" width="100px" />
        </a>
        <a href="/" className="brand-logo">
          <span>Geckos</span>
          </a>
        <div className={ isActive ? "nav-burger is-active" : "nav-burger" } id="nav-burger">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAMUlEQVRYw+3UQQ0AMAwDsUYaqhIZfyQbjD5qI4jyuCpgu3T3mxxwktzpF2A3HQB0APjy6AYlijr2mAAAAABJRU5ErkJggg==" 
            alt="Menu" onClick={()=> setIsActive(!isActive)} />
        </div>
        <div className={ !isActive ? "nav-cancel is-active" : "nav-cancel" } id="nav-cancel">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABUElEQVRYw83XMW7DIBTG8e/VV8gOBwFOkEPkEMkp0rVdc4luXS3P2Tob9QrpyMvQJEod2/DAtGW0kP4/JPwsA/9hOedW1trNb/WstRvn3AoAngCAmdchhIMxZls7bozZhhAOzLwGgAYAvPdHpdSJmfdKqZP3vqsVZ+Y9Ee3atn29AS6IriZiEH++Pm/uN9VCTMUfADUQc/FRwJKIWHwSsAQiJT4LKEGkxqOAHIQkngSQIKTxZEAKIicuAswhcuMAQJLNY6cFgNx4NuAeAQC5ceDyNfzLJboDw9MT0Y6I3ksmphgwvHClE1MEmLrtJYhkQOxVy0UkAVLf8xxEFCAdMlLELCB3wkkQk4CS8SpBjAJK4xLEA2CpeCriB2DpeAriBqgVjyEa4PtfjZlfasXHEFrr3nt/bABAa/1JRB/X36Way3vfaa17Inrr+/6rdi+6zhxGJ9k2CrKBAAAAAElFTkSuQmCC" alt="Cancel"  onClick={()=> setIsActive(!isActive)} />
        </div>
      </div>
      <nav className={ !isActive ? "nav is-active" : "nav" } id="nav">
        <div>
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About Us</a>
          <a href="/contact" className="nav-link">Contact Us</a>
        </div>
        <div style={{padding: "20px 5px"}}>
          <button  className={ !isActive ? "nav-button is-active" : "nav-button" }>Sign Up</button>
        </div>
      </nav>

    </header>
  )
}
export default Header;