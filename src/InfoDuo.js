import React from "react";
import "./App.css";

export default function InfoDuo({ fetchBlog, fetchProjects }){
    return (
        <div className="info_section__pair">
            {/**
             * I show my project previews from here
             */}
            <div className="projects_section">
                <h2>Projects</h2>
                <div className="project_container">
                    {
                        fetchProjects.map((data, id) => (<Projects data={data} key={id}/>))
                    }
                </div>
            </div>


            {/**
             * This section renders snippets from the blog
             */}
            <div className="blogs_section">
                <h2>Perspective</h2>
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

/**
 * This component manages my project data
 */
function Projects({ data }){
    return (
        <div className="info_project__content">
            {
                data.hasWeb ? <h5><a href={data.link}>{data.title}</a></h5>
                : data.canShowDevelopment && data.isAzure ? <h5><a href={data.azureDevops}>{data.title}</a></h5>
                : data.canShowDevelopment ? <h5><a href={data.github}>{data.title}</a></h5>
                : <h5>{data.title}</h5>
            }
            <p>{data.info}</p>
        </div>
    );
}