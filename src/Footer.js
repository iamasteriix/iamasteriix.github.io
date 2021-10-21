import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import "./App.css";

export default function Footer(){
    return (
        <section className="footer">
            <a className="socials" href="https://twitter.com/ceejay_el"><FontAwesomeIcon icon={faTwitter}/></a>
            <a className="socials" href="https://www.linkedin.com/in/chuck-lugai-ab01971a3/"><FontAwesomeIcon icon={faLinkedin}/></a>
        </section>
    )
}