import React from "react";
import {ProgressBar } from "react-bootstrap";

export const Skills = () => {
    const skills = ["React.js","Vert.x","Spring Boot","Node.js","MongoDB","MySQL","GitHub"]
    const variant = ["success","info","warning","danger"];
    return (
        <section className="section skills" id="skills">
            <h2 className="section-title">SKILLS</h2>
            <div className="skill-container" >
                  {skills.map((skill,index) => <Skill key={index} now={Math.floor(Math.random() * 40) + 60} title={skill} variant={variant[Math.floor(Math.random() * 4)]}/>)}
            </div>
        </section>
    );
}

const Skill = ({ title, now, variant }) => (
    <div>
        <h6>{title}</h6>
        <ProgressBar variant={variant} now={now} label={`${now}%`}/>
    </div>
);