import React from "react";
import Projects from "./Projects";
import Blog from "./Blog";
import Highlights from "./Highlights";
import requests from "./requests";

export default function Info(){
    return (
        <div className="info_section">
            <Projects/>
            <Blog section_title="Perspective" fetchBlog={requests.blogs}/>
            <Highlights/>
        </div>
    );
}