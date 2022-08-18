//@ts-nocheck
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

export default function Main(props) {
  return (
    <>
      <p>gamed</p>
      <ul>
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
        <Route exact path="/" element={ <p>Home</p> } />
        <Route path="/:course" element={ <p>Course</p> } />
      </Routes>
    </>
  );
}
