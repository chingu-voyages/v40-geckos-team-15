import React from "react";
import { useParams } from "react-router-dom";
import Editor from "../components/editor";
function Lesson() {
  let { course } = useParams();
  let { lesson } = useParams();


  return(
    <>
      <div style={{ padding: "50px" }}>
        <p>{ course } : { lesson }</p>
      </div>
      <div style={{ position: "relative", marginBottom: "170px" }}>
        <Editor />
      </div>
    </>
  )
}
export default Lesson;
