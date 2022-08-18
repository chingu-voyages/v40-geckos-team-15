//@ts-nocheck
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home"; 
import Course from "./pages/Course"; 

export default function Main(props) {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/html">HTML</Link>
        </li>
        <li>
          <Link to="/css">CSS</Link>
        </li>
        <li>
          <Link to="/javascript">Javascript</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/:course" element={ <Course /> } />
      </Routes>
    </>
  );
}
