import React from "react";
import "./App.css";
import Showcase from "./Showcase.js";
import Blog from "./Blog.js";
import Projects from "./Projects.js";
import Experience from "./Experience.js";
import Footer from "./Footer.js"

function App(){
  return (
    <div className="App">
      <Showcase/>
      <Blog/>
      <Projects/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default App;
