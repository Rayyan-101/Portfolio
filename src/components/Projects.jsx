import React from "react";
import chatify from "../photo/chatify.png"
import ss from "../photo/ss.png"
import pp from "../photo/pp.png"
import Navbar from "./Navbar";
import Footer from "./Footer";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: chatify,
      name: "Chatify",
      about: "Developed a real-time chatting app using Node.js, Express.js, and Socket.io. The app allows users to send and receive messages instantly. It features user authentication, message storage, and a responsive user interface. The backend, built with Node.js and Express.js, handles user data and real-time communication through Socket.io, while the front-end ensures an interactive and seamless messaging experience."
    },
    {
      id: 2,
      logo: ss,
      name: "StaySphere",
      about:"Developed a dynamic web application that replicates Airbnb's core functionalities, including user authentication, property listings and booking management. Built using Node.js, Express.js, MongoDB, and EJS, following the MVC architecture to ensure scalability and maintainability."
    },
    {
      id: 3,
      logo: pp,
      name: "PagePalette",
      about:"Developed a full-stack bookstore website using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to browse, filter, and purchase both free and paid books. It features secure user authentication and a dynamic front-end . Utilized MongoDB for data storage and built a responsive UI with React.js to enhance user experience."
    },
  ];
  return (
    <>
    <Navbar/>
    <div
      name="Projects"
      className="max-w-screen-2xl mt-28 container mx-auto px-4 md:px-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-3 my-5 ">
          {cardItem.map(({ id, logo, name, about }) => (
            <div
              className="md:w-[950px] md:h-[280px] border-[2px] rounded-lg mb-4 shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <div className="flex">
              <img
                src={logo}
                className="w-[120px] h-[120px] flex p-1 rounded-full border-[2px] mt-2 ml-2"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2 mt-2">{name}</div>
                <p className="px-2 text-gray-500">
                {about}
                </p>
              </div>
              </div>
              <div className=" px-6 py-4 space-x-3 mt-8 justify-around">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
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

export default Projects;
