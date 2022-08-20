import React from "react";
import { useParams } from "react-router-dom";

function Lesson() {
  let { course } = useParams();
  let { lesson } = useParams();
  return(
    <>
      <p>{ course } : { lesson }</p>
    </>
  )
}
export default Lesson;
