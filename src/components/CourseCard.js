import React from "react";

function CourseCard(props){
  return (
    <div className="card-container" >
      <img src="https://via.placeholder.com/350x200.png" />
      <div className="card-text">
        <h3>{props.course.name}</h3>
        <p>{props.course.description}</p>
      </div>
    </div>
  )
}
export default CourseCard;