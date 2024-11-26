import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
    <Navbar/>
    <div
      name="About"
      className="max-w-screen-2xl h-auto container mx-auto px-4 md:px-20 my-20 mt-40"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Rayyan, an enthusiastic web developer
           with a strong focus on creating efficient,
            scalable and visually appealing applications.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          D Y PATIL COLLEGE OF ENGINEERING, PUNE, INDIA <br />
          BE(Computer Engineering), 2026.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js) and knowledge of databases like SQL, PostgreSQL and MongoDB, hands-on experience in front-end frameworks like Bootstrap and Tailwind CSS,
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
        To leverage my expertise in web development and design to create innovative,
        user-centric applications that solve real-world problems. 
        I am committed to continuously improving my skills, embracing new technologies
        and contributing to impactful projects that enhance user experiences and drive digital transformation.
        </p>
      </div>
    </div>
    <hr />
    <Footer/>
    </>
  );
}

export default About;
