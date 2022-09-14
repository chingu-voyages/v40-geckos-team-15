//@ts-nocheck
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Lesson from "./pages/Lesson";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/footer";


export default function Main(props) {
  return (
    <>
      <div style={{maxWidth: 1020, margin: "0 auto"}}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:course" element={<Course />} />
        <Route path="/:course/:lesson" element={<Lesson />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </div>
    </>
  );

}

