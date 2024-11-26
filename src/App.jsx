import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
      {/* <div>
        <Navbar />
        <Home />
        <About />
        <Skills/>
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Toaster /> */}
      <div >
      
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/> } />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    <Toaster/>
    </div>
    </>
  );
}

export default App;
