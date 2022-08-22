import React from "react";

function Header(){
  return (
    <header className="header">
      <div className="brand">
        <a href="/" className="brand-logo">
          <img src="y-themes-logo-blue.png" alt="Logo" width="100px" />
        </a>
        <div className="nav-burger" id="nav-burger">
          <img src="hamburger-button.png" alt="Menu" />
        </div>
        <div className="nav-cancel is-active" id="nav-cancel">
          <img src="cancel-button.png" alt="Cancel" />
        </div>
      </div>
      <nav className="nav is-active" id="nav">
        <a href="/" className="nav-link">Home</a>
        <a href="#" className="nav-link">About Us</a>
        <a href="#" className="nav-link">Contact Us</a>
      </nav>
      <div>
        <button>Sign Up</button>
      </div>
    </header>
  )
}
export default Header;