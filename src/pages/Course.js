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
  return(
    <>
      <p>Course name: { course }</p>
      <CourseOutline lessons={lessons} />
    </>
  )
}
export default Course;
