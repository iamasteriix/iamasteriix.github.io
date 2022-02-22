import React from "react";
import InfoDuo from "./InfoDuo";
import Highlights from "./Highlights";
import requests from "./requests";

export default function Info(){
    return (
        <div className="info_section">
            <Highlights/>
            <InfoDuo section_title="Blogs" fetchBlog={requests.blogs}/>
        </div>
    );
}