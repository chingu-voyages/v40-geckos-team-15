import React from 'react';
import '../css/Browsecourse.css';
import CourseCard from './CourseCard';
import CourseCardData from './CourseCardData';


function CreateCard (course) {

  return  <CourseCard 
        key = {course.id}
        lessonP = {course.lessonP}
        img = {course.img}
        descript={course.descript}
  />
}

function Browsecourse() {
  return (
    <div className='course-section'>
       <p className='Top-text'>Top Courses</p>
       <h5 className='h5-text'>Browse our Top Courses</h5>
       <div  className='wrapper-grid'>
       {CourseCardData.map(CreateCard)}
       </div>
       
       
       
        
    </div>
  )
}

export default Browsecourse
