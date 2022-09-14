import React from "react";
import { Link } from "react-router-dom";

function CourseCard(props){
  return (
    <div className="card-container" >
      <img src="https://via.placeholder.com/350x200.png" />
      <div className="card-text">
        <h3>{props.course.name}</h3>
        <p>{props.course.description}</p>
        <Link to={`${props.course.url}`}>
          <button className='cta-btn'>
            View HTML Course
          </button>
        </Link>
      </div>
    </div>
  )
}
export default CourseCard;
