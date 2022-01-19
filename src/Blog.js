import React from "react";
import "./App.css";

export default function Blog({section_title, fetchBlog}){
    return (
        <section className="blog">
            <h2>{section_title}</h2>
            <div className="blog_posts">
                {
                    fetchBlog.map(item =>
                        <div
                            className="blog_post"
                            style={{ backgroundImage: `url(${item.image})` }}>
                                <a href={item.link}>
                                    <div className="blog_post__overlay">
                                        <p className="blog_title">{item.title}</p>
                                    </div>
                                </a>
                        </div>                
                    )
                }
            </div>
        </section>
    )
}