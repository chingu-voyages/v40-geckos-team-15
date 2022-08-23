import React from 'react'

import CourseCardData from "./CourseCardData.js"
import './CourseCard.css'

function CourseCard(props) {

    
  return (
    <div>
        <div className='card-container'>
            <img className="card-img" src={props.img}/>
            <div className='text-arr'>
            <h3>Learn HTML</h3>
            <p><span><img src='images/vector.png'/></span>&nbsp;{props.lessonP}</p>
            </div>
            <p className='descript-text'>{props.descript}</p>
        </div>
       </div>
  )
}

export default CourseCard