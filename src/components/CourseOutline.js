import React from "react";
function CourseOutline(props) {
  return (
    <>
      <h2>Course Outline</h2>
      <ul
        style={{
          listStyleType: "none",
          backgroundColor: "#f8f3ec",
          padding: "20px 10px",
          borderRadius: "10px",
        }}
      >
        {props.lessons.map((lesson) => (
          <li
            style={{
              margin: "20px",
              color: "#2a8a6d",
              padding: "10px 10px 20px 10px",
              borderBottom: "#d1d1d1 2px solid",
            }}
            key={lesson.id}
          >
            {lesson.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CourseOutline;
