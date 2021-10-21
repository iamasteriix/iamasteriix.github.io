import React from "react";
import "./App.css";
import Showcase from "./Showcase.js";
import Blog from "./Blog.js";
import Footer from "./Footer.js"
import requests from "./requests";

function App(){
  return (
    <div className="App">
      <Showcase/>
      <Blog section_title="Blog" fetchBlog={requests.blogs}/>
      <Footer/>
    </div>
  )
}

export default App;
