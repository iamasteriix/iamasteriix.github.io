import React from "react";
import "./App.css";
import requests from "./requests.js";


/**
 * This component maps over my work experience array and creates a
 * ProfessionalTimeline component for each item.
 */
export default function Work(){
    return (
        <div className="experience_section">
            <h2>Professional Experience</h2>
            <div className="experience_container">
                {
                    [...requests.experience].reverse().map((data, id) => (
                        <ProfessionalTimeline data={data} key={id}/>
                    ))
                }
            </div>
        </div>
    );
}


/**
 * The timeline item component. This will use my professional experience data
 */
function ProfessionalTimeline({ data }) {
    return (
        <div className="work_timeline">
            <div className="work_timeline__content">
                <time>
                    {data.start_date} - {data.ended ? data.end_date : null}
                </time>
                <h4>{data.role}</h4>
                <h5>
                    <a href={data.link}>{data.place}</a>
                </h5>
                <p>{data.info}</p>
                <div className="work_timeline__tech-stack">
                    { data.tech_stack.map(item => <code>{item}</code>) }
                </div>
                <div className="work_timeline__topics">
                    { data.topics.map(item => <p>{item}</p>) }
                </div>
            </div>
        </div>
    );
}