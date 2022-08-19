// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Footer from "./components/footer";
import Editor from "./components/editor";
let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <Editor />
    <Footer />
  </React.StrictMode>
);
