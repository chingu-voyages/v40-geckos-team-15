import React from "react";
import "../css/footer.css";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className="footercontent">
        <div className="start">
          <NavLink to="/">Gecko</NavLink>
        </div>
        <div className="center">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/support">Support</NavLink>
        </div>
        <div className="end">
          <p>Join our Community</p>
          <div>
            <input type="text" />
            <button>Go</button>
          </div>
        </div>
      </div>
      <div className="after">Gecko 2022 Gecko Learn All Rights Reserved</div>
    </footer>
  );
}
