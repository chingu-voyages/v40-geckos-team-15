// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Main from "./main";
import { BrowserRouter } from "react-router-dom";
let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);
