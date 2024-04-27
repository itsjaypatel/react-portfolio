import React from "react";
import {Card } from "react-bootstrap";
import huffmanCoding from '../images/projects/huffman-coding.png'
import portfoilo from '../images/projects/porfolio.png'
import file from "../images/projects/file.png"
import ticTacToe from "../images/projects/tic-tac-toe.png"
import memeGenerator from "../images/projects/meme-generator.png"

export const Projects = () => {
    const projects = [
        { title: "Huffman Coding", description: "Web App to encode and decode text using huffman data compresstion technique" , src: huffmanCoding},  
        { title: "Portfolio Website", description: "My Portfolio built with react.js" ,src: portfoilo},
        { title: "File Organizer", description: "Console App to organize files using commands", src: file },
        { title: "Tic Tac Toe", description: "A fun game built with react.js", src: ticTacToe },
        { title: "Meme Generator", description: "A web app to create,edit and save cool memes built with react.js", src: memeGenerator }]
    return (
        <section className="section projects" id="projects">
            <h2 className="section-title">PROJECTS</h2>
            <div className="project-container">
                {projects.map(((p,index) => <Project title={p.title} description={p.description} key={index} src={p.src}/>))}
            </div>
        </section>
    );
}

const Project = ({ title, description, src={portfoilo} }) =>
(
    <Card className="project-card" >
        <Card.Img variant="bottom" src={src} style={{ height: '250px', width: "100%", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }} />
        <Card.Body style={{}}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
        </Card.Body>
    </Card>
);