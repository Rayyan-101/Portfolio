import React from "react";
import html from "../photo/html.png";
import css from "../photo/css.jpg";
import java from "../photo/java.png";
import javascript from "../photo/javascript.png";
import oracle from "../photo/oracle.png";
import cpp from "../photo/cpp.png";
import python from "../photo/python.png"
import sql from "../photo/sql.png"
import nodejs from "../photo/nodejs.png"
import expressjs from "../photo/expressjs.png"
import reactjs from "../photo/react.png"
import mongodb from "../photo/mongo.png"
import Navbar from "./Navbar";
import Footer from "./Footer";


function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 6,
      logo: python,
      name: "Python",
    },
    {
      id: 7,
      logo: sql,
      name: "SQL",
    },{
      id: 8,
      logo: cpp,
      name: "C++",
    },{
      id: 9,
      logo: nodejs,
      name: "Node.js",
    },{
      id: 10,
      logo: expressjs,
      name: "Express.js",
    },{
      id: 11,
      logo: reactjs,
      name: "React JS",
    },{
      id: 12,
      logo: mongodb,
      name: "mongo",
    },
  ];



  return (
    <>
    <Navbar/>
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-28"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {/* id,logo,name */}
          {cardItem.map(({ id,name,logo }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     <hr />
     <Footer/>
     </>

  );
}

export default Skills;
