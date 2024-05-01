import React from "react";
import { Badge, Card } from "react-bootstrap";
import huffmanCoding from '../images/projects/huffman-coding.png'
import portfoilo from '../images/projects/portfolio.png'
import file from "../images/projects/file.png"
import ticTacToe from "../images/projects/tic-tac-toe.png"
import memeGenerator from "../images/projects/meme-generator.png"
import gitHubIcon from "../images/social/github.svg"

export const Projects = () => {
    const projects = [
        {
           "title":"Huffman Coding",
           "description":"Web App to encode and decode text using huffman data compresstion technique",
           "src":huffmanCoding,
           "technologies":["Java","Spring Boot","API","Huffman Encoding Algo"],
        },
        {
           "title":"Portfolio Website",
           "description":"My Portfolio built with react.js",
           "src":portfoilo,
           "technologies":["React.js","react-bootstap"],
           "repoLink": "https://github.com/itsjaypatel/react-portfolio",
           "liveLink" : "https://itsjaypatel.github.io/react-portfolio"
        },
        {
           "title":"File Organizer",
           "description":"Console App to organize files using commands",
           "src":file,
           "technologies":["Node.js","Console Application"],
           "repoLink":"https://github.com/itsjaypatel/File-Organizer"
        },
        {
           "title":"Tic Tac Toe",
           "description":"A fun game built with react.js",
           "src":ticTacToe,
           "technologies":["React.js"],
           "repoLink": "https://github.com/itsjaypatel/react-tic-tac-toe",
           "liveLink" : "https://itsjaypatel.github.io/react-tic-tac-toe"
        },
        {
           "title":"Meme Generator",
           "description":"A web app to create,edit and save cool memes built with react.js",
           "src":memeGenerator,
           "technologies":["React.js","API","react-draggable"]
        }
     ];
    return (
        <section className="section projects" id="projects">
            <h2 className="section-title">PROJECTS</h2>
            <div className="project-container">
                {projects.map(((p, index) => <Project title={p.title} description={p.description} key={index} src={p.src} technologies={p.technologies} repoLink={p.repoLink} liveLink={p.liveLink} />))}
            </div>
        </section>
    );
}

const Project = ({ title, description, src = { portfoilo }, technologies,repoLink,liveLink }) =>
(
    <div className="project-card">
        <img src={src} height="250px" width="100%" style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
        <div className="m-2">
            <div style={{display:"flex", flexDirection:"row", "justifyContent":"space-between"}}>
            <h5 style={{display:"inline"}}>{title}</h5>
            <div>
                {repoLink &&  <a href={repoLink} target="_blank"><img src={gitHubIcon} height="20px" width="30px"alt="" /></a>}
                {liveLink && <a href={liveLink} target="_blank" style={{textDecoration:"none"}}>
                <strong style={{color:"red"}}>LIVE</strong>
                </a>}
            </div>
            </div>
            <p style={{ display: "block", textOverflow: "ellipsis", wordWrap: "break-word", overflow: "hidden", maxHeight: "3.6em", lineHeight: "1.8em" }}>{description}</p>
            {
                technologies && technologies.map(t => <Badge className="m-2" bg="primary">{t}</Badge>)
            }
        </div>
    </div>
); 