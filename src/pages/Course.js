import React from "react";
import { useParams } from "react-router-dom";
import CourseOutline from "../components/CourseOutline";

function Course() {
  let { course } = useParams();
  const lessons = [
    {title: "What is HTML"},
    {title: "HTML Tags Explained"},
    {title: "HTML Tags Explained"},
    {title: "HTML Tags Explained"}
  ];
  const courses = [
    {name: "Javascript", description: "Allow users interact with your website"},
    {name: "CSS", description: "Make your website beautiful with syles"}
  ]
  return(
    <>
      <div style={{display: "flex", padding:"30px 40px"}}>
        <div style={{flexGrow: "10"}}>
          <p>Course name: { course }</p>
          <CourseOutline lessons={lessons} />
        </div>
        <div style={{ padding: "20px"}}>
          {
            courses.map( course => (
              <div className="card" style={{backgroundColor:"#f8f9f8", borderRadius: "10px", padding: "20px", marginBottom: "20px"}}>
                <img src="https://via.placeholder.com/350x200.png" />
                <div style={{padding: "20px 0"}}>
                  <h3 style={{fontSize: "1.7em"}}>{course.name}</h3>
                  <p>{course.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </>
  )
}
export default Course;
