import React from "react";

function CourseCard(props){
  return (
    <div className="card" style={{backgroundColor:"#f8f9f8", borderRadius: "10px", padding: "20px", marginBottom: "20px"}}>
      <img src="https://via.placeholder.com/350x200.png" />
      <div style={{padding: "20px 0"}}>
        <h3 style={{fontSize: "1.7em"}}>{props.course.name}</h3>
        <p>{props.course.description}</p>
      </div>
    </div>
  )
}
export default CourseCard;