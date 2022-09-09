import React from 'react'
// import Browsecourse from './Components/Browsecourse'
// import HeroHeader from './Components/HeroHeader'
// import WhyLearn from './Components/WhyLearn'
// import CtaSection from './Components/CtaSection'
import { Routes, Route, Link } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home"; 
import Course from "./pages/Course"; 
import Lesson from "./pages/Lesson"; 
import About from "./pages/About"; 
import Contact from "./pages/Contact";
import "./css/main.css";

export default function Main(props) {
  return (
    <>
      <div className="main">
        <Header />
        {/*
        <HeroHeader/>
         <Browsecourse/>
         <WhyLearn/>
         <CtaSection/>
       */}
        <ul>
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
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:course" element={<Course />} />
          <Route path="/:course/:lesson" element={<Lesson />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );

}

