import React from "react";
import { useParams } from "react-router-dom";
import CourseOutline from "../components/CourseOutline";
import CourseCard from "../components/CourseCard";

function Course() {
  let { course } = useParams();
  const lessons = [
    {title: "What is HTML", url: "/html/lesson-1"},
    {title: "HTML Tags Explained", url: "/html/lesson-2"},
    {title: "HTML Tags Explained", url: "/html/lesson-3"},
    {title: "HTML Tags Explained", url: "/html/lesson-4"}
  ];
  const courses = [
    {name: "Javascript", description: "Allow users interact with your website", longdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tempor, egestas malesuada etiam molestie lacus, amet, ac. Commodo ac, aenean vitae volutpat aliquam porttitor euismod. Molestie enim habitant dui integer amet, orci, scelerisque id. Pellentesque diam dolor duis ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {name: "CSS", description: "Make your website beautiful with styles", longdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tempor, egestas malesuada etiam molestie lacus, amet, ac. Commodo ac, aenean vitae volutpat aliquam porttitor euismod. Molestie enim habitant dui integer amet, orci, scelerisque id. Pellentesque diam dolor duis ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {name: "HTML", description: "Learn how websites are structured with HTML elements and structure", longdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tempor, egestas malesuada etiam molestie lacus, amet, ac. Commodo ac, aenean vitae volutpat aliquam porttitor euismod. Molestie enim habitant dui integer amet, orci, scelerisque id. Pellentesque diam dolor duis ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
  ]
  return(
    <>
      <div className="featured" 
        style={{
          background: "url(https://via.placeholder.com/1800x600.png)",
          backgroundRepeat: "no-repeat", height: "300px"
        }}>
        <strong>
          <p className="h1" style={{padding:"150px 0", textAlign: "center"}}>
            { courses[2].name}
          </p>
        </strong>
      </div>
      <div style={{display: "flex", padding:"30px 40px"}}>
        <img src="https://via.placeholder.com/200x200.png"/> 
        <div style={{padding: "5px 20px"}}>
          <h1>
            { courses[2].name}
          </h1>
          <p>
            { courses[2].longdescription}
          </p>
        </div>
      </div>
      <div style={{display: "flex", padding:"30px 40px"}}>
        <div style={{flexGrow: "10"}}>
          <CourseOutline lessons={lessons} course={course} />
        </div>
        <div style={{ padding: "20px"}}>
          {
            courses.map( course => (
              <CourseCard course = {course}/>
            ))
          }
        </div>
      </div>

    </>
  )
}
export default Course;
