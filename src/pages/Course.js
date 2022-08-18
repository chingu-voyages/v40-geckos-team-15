import React from "react";
import { useParams } from "react-router-dom";

function Course() {
  let { course } = useParams();
  return(
    <>
      <p>Course name: { course }</p>
    </>
  )
}
export default Course;
