import React from "react";
import "./App.css";

export default function Blog({section_title, fetchBlog}){
    return (
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
                                <h4>{item.title}</h4>
                            </a>
                        </div>
                    )
                }
        </div>
    )
}