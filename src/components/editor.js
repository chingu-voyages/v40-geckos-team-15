// @ts-nocheck
import React, { useEffect } from "react";
import "../css/editor.css";
export default function Editor() {
  useEffect(() => {
    document.querySelector(".text").textContent =
      '<head><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Document</title></head><body></body></html>';
    document.querySelector(".editor > div:last-child").innerHTML =
      document.querySelector(".text").textContent;
  }, []);
  const handlechange = () => {
    let div = document.querySelector(".editor > div:last-child");
    div.innerHTML = document.querySelector(".text").textContent;
    div.style.display = "block";
    /*  div.innerHTML =
      '<html lang="en"><head><meta charset="UTF-8" />   <meta http-equiv="X-UA-Compatible" content="IE=edge" />      <meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Document</title></head><body></body></html>'; */
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
