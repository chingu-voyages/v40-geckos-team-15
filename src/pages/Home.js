import React from "react";
import HeroHeader from "../components/HeroHeader";
import CourseCard from "../components/CourseCard";
import WhyLearn from "../components/WhyLearn";
import CtaSection from "../components/CtaSection";

function Home() {
  const courses = [
    {
      name: "Javascript",
      description: "Allow users interact with your website",
      img: "https://via.placeholder.com/350x200.png",
      longdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tempor, egestas malesuada etiam molestie lacus, amet, ac. Commodo ac, aenean vitae volutpat aliquam porttitor euismod. Molestie enim habitant dui integer amet, orci, scelerisque id. Pellentesque diam dolor duis ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "CSS",
      description: "Make your website beautiful with styles",
      img: "https://via.placeholder.com/350x200.png",
      longdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tempor, egestas malesuada etiam molestie lacus, amet, ac. Commodo ac, aenean vitae volutpat aliquam porttitor euismod. Molestie enim habitant dui integer amet, orci, scelerisque id. Pellentesque diam dolor duis ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "HTML",
      description: "Learn how websites are structured with HTML elements and structure",
      img: "https://via.placeholder.com/350x200.png",
      longdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tempor, egestas malesuada etiam molestie lacus, amet, ac. Commodo ac, aenean vitae volutpat aliquam porttitor euismod. Molestie enim habitant dui integer amet, orci, scelerisque id. Pellentesque diam dolor duis ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];
  return(
    <>
      <HeroHeader />
      <div style={{ padding:"30px 40px" }}>
        <p>home</p>
        
        <div style={{ display: "flex", padding: "20px" }}>
          {
            courses.map( (course, index) => (
              <CourseCard key={index} course = {course}/>
            ))
          }
        </div>
      </div>
      <WhyLearn />
      <CtaSection />
    </>
  )
}
export default Home;
