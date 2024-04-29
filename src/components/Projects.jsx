import React from "react";
import { Badge, Card } from "react-bootstrap";
import huffmanCoding from '../images/projects/huffman-coding.png'
import portfoilo from '../images/projects/porfolio.png'
import file from "../images/projects/file.png"
import ticTacToe from "../images/projects/tic-tac-toe.png"
import memeGenerator from "../images/projects/meme-generator.png"

export const Projects = () => {
    const projects = [
        {
           "title":"Huffman Coding",
           "description":"Web App to encode and decode text using huffman data compresstion technique",
           "src":huffmanCoding,
           "technologies":["Java","Spring Boot","API"]
        },
        {
           "title":"Portfolio Website",
           "description":"My Portfolio built with react.js",
           "src":portfoilo,
           "technologies":["Java","Spring Boot","API"]
        },
        {
           "title":"File Organizer",
           "description":"Console App to organize files using commands",
           "src":file,
           "technologies":["Java","Spring Boot","API"]
        },
        {
           "title":"Tic Tac Toe",
           "description":"A fun game built with react.js",
           "src":ticTacToe,
           "technologies":["Java","Spring Boot","API"]
        },
        {
           "title":"Meme Generator",
           "description":"A web app to create,edit and save cool memes built with react.js Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aperiam explicabo aliquam facilis id, corrupti fugit obcaecati porro pariatur voluptas error voluptatum similique perspiciatis odio culpa? Expedita, atque! Modi, harum.",
           "src":memeGenerator,
           "technologies":["Java","Spring Boot","API"]
        }
     ];
    return (
        <section className="section projects" id="projects">
            <h2 className="section-title">PROJECTS</h2>
            <div className="project-container">
                {projects.map(((p, index) => <Project title={p.title} description={p.description} key={index} src={p.src} technologies={p.technologies} />))}
            </div>
        </section>
    );
}

const Project = ({ title, description, src = { portfoilo }, technologies }) =>
(
    <div className="project-card">
        <img src={src} height="250px" width="100%" style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
        <div className="m-2">
            <h5>{title}</h5>
            <p style={{ display: "block", textOverflow: "ellipsis", wordWrap: "break-word", overflow: "hidden", maxHeight: "3.6em", lineHeight: "1.8em" }}>{description}</p>
            {
                technologies && technologies.map(t => <Badge className="m-2" bg="primary">{t}</Badge>)
            }
        </div>
    </div>
); 