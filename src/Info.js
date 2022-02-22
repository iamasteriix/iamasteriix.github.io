import React from "react";
import InfoDuo from "./InfoDuo";
import Highlights from "./Highlights";
import requests from "./requests";

export default function Info(){
    return (
        <div className="info_section">
            <Highlights/>
            <InfoDuo section_title="Perspective" fetchBlog={requests.blogs}/>
        </div>
    );
}