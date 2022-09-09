import React from "react";
import { useParams } from "react-router-dom";
import Editor from "../components/editor";
function Lesson() {
  let { course } = useParams();
  let { lesson } = useParams();


  return(
    <>
      <p>{ course } : { lesson }</p>
      <Editor />
    </>
  )
}
export default Lesson;
