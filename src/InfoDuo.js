import React from "react";
import "./App.css";

export default function InfoDuo({section_title, fetchBlog}){
    return (
        <div className="info_section__pair">
            {/**
             * I show my project previews from here
             */}
            <div className="projects_section">
                <h2>Projects</h2>
            </div>


            {/**
             * This section renders snippets from the blog
             */}
            <div className="blogs_section">
                <h2>{section_title}</h2>
                    {
                        [...fetchBlog].reverse().map(item => 
                            <div
                            key={item.id}
                            className="blog">
                                <a href={item.link}>
                                    <div className="blog_img">
                                        <img src={item.image} alt={item.alt}/>
                                    </div>
                                    <p>{item.title}</p>
                                </a>
                            </div>
                        )
                    }
            </div>
        </div>
    )
}