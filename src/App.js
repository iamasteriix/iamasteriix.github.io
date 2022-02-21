import React from "react";
import "./App.css";
import Showcase from "./Showcase";
import Info from "./Info";
import Footer from "./Footer.js"

function App(){
  return (
    <div className="App">
      <Showcase/>
      <Info/>
      <Footer/>
    </div>
  )
}

export default App;
