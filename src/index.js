// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Footer from "./components/footer";
import Editor from "./components/editor";
import { BrowserRouter } from "react-router-dom";
let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
