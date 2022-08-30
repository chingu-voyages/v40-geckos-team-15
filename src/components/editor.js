// @ts-nocheck
import React, { useEffect } from "react";
import "../css/editor.css";
export default function Editor() {
  useEffect(() => {
    document.querySelector(".editor > div:last-child").innerHTML =
      document.querySelector(".text").textContent;
  }, []);
  const handlechange = () => {
    let div = document.querySelector(".editor > div:last-child");
    div.innerHTML = document.querySelector(".text").textContent;
    div.style.display = "block";
  };
  const handleclick = () => {
    let text = document.querySelector(".text");
    text.setAttribute("contenteditable", true);
    text.focus();
    document.querySelector(".editor > div:last-child").style.display = "block";
  };
  return (
    <>
      <div className="editor">
        <div className="text" onInput={handlechange}></div>
        <button onClick={handleclick}>try it</button>
        <div></div>
      </div>
    </>
  );
}
