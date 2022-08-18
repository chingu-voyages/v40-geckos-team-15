//@ts-nocheck
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home"; 
import Course from "./pages/Course"; 
import Lesson from "./pages/Lesson"; 
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 

export default function Main(props) {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/html">HTML</Link>
          <ul>
          <li>
            <Link to="/html/lesson-1">Lesson 1</Link>
          </li>
        </ul>
        </li>
        <li>
          <Link to="/css">CSS</Link>
          <ul>
            <li>
              <Link to="/css/lesson-1">Lesson 1</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/javascript">Javascript</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/:course" element={ <Course /> } />
        <Route path="/:course/:lesson" element={ <Lesson /> } />
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/contact" element={ <Contact /> } />

      </Routes>
    </>
  );
}
