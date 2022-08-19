import React from "react";
import { useParams } from "react-router-dom";
import CourseOutline from "../components/CourseOutline";

function Course() {
  let { course } = useParams();
  return(
    <>
      <p>Course name: { course }</p>
      <CourseOutline />
    </>
  )
}
export default Course;
