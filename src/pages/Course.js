import React from "react";
import { useParams } from "react-router-dom";
import CourseOutline from "../components/CourseOutline";
import CourseCard from "../components/CourseCard";

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
              <CourseCard course = {course}/>
            ))
          }
        </div>
      </div>

    </>
  )
}
export default Course;
