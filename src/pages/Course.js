import React from "react";
import { useParams } from "react-router-dom";
import CourseOutline from "../components/CourseOutline";

function Course() {
  let { course } = useParams();
  const lessons = [
    { title: "What is HTML", id: 1 },
    { title: "HTML Tags Explained", id: 2 },
    { title: "HTML Tags Explained", id: 3 },
    { title: "HTML Tags Explained", id: 4 },
  ];
  return (
    <>
      <p>Course name: {course}</p>
      <CourseOutline lessons={lessons} />
    </>
  );
}
export default Course;
