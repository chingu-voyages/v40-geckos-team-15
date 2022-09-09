import React from 'react'
import '../css/CourseCard.css'

function CourseCard(props) {

    
  return (
    <div className="card-container" >
      <img className="card-img" src={props.course.img} />
      <div className="text-arr">
        <h3>{props.course.name}</h3>
        <p className="descript-text">
          <img src="images/vector.png" /> {props.course.description}
        </p>
      </div>
    </div>
  )
}
export default CourseCard;
