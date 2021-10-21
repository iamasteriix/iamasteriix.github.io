import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./App.css";

export default function Showcase(){    
    return (
        <section className="showcase">
            <div className="intro">
                <h6> &#65125; &nbsp;
                    <ReactTypingEffect
                        text={[
                            "Hello",
                            "So nice to see you here.",
                            "or, if you're coming back, what's up, how's it going?",
                            "my name is...",
                            "I like to go by iamasteriix",
                            "...",
                            "The Realm.",
                            "Do you know what the Realm is?",
                            " ......",
                            "Someone must.",
                            "...",
                            "A wonderful fact to reflect upon",
                            "every human is constituted to be that profound...",
                            "...",
                            "It is the best of times,",
                            "it is the worst of times.",
                            "It is the epoch of belief, it is the epoch of incredulity",
                            "I have nothing before me",
                            "I have everything before me"
                        ]}
                        cursorRenderer={cursor => <h3>{cursor}</h3>}
                    />              
                </h6>
                <h5>I am totally not a hacker, and I do not fix lightbulbs</h5>
            </div>

            <div className="tech_profiles">
                <table>
                    <tr>
                        <td><h5><a href="http://github.com/ceejay-el"> GitHub </a></h5></td>
                    </tr>
                    <tr>
                        <td><h5><a href="https://dev.azure.com/juniorchuck7"> Azure DevOps </a></h5></td>
                    </tr>
                    <tr>
                        <td><h5><a href="https://www.hackerrank.com/iamasteriix"> HackerRank </a></h5></td>
                    </tr>
                    <tr>
                        <td><h5><a href="https://www.kaggle.com/iamasteriix"> Kaggle </a></h5></td>
                    </tr>
                    <tr>
                        <td><h5><a href="http://immaculatefoundation.org"> the immaculate foundation </a></h5></td>
                    </tr>
                </table>
            </div>
        </section>
    );
}