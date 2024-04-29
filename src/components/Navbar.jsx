import React, { useRef } from "react";

import { Hamburger } from "./Hamburger";
export const NavBar = () => {
    const ref = useRef();
    const toggleTags = () => {
        ref.current.classList.toggle("hide-nav-tabs");
    }
    return (
        <div className="navbar">
        <Hamburger onClick={toggleTags}/>
        <div className="tabs" ref={ref}>
            <div className="tab-item"><a href="#home">HOME</a></div>
            <div className="tab-item"><a href="#experience">WORK</a></div>
            <div className="tab-item"><a href="#projects">PROJECTS</a></div>
            <div className="tab-item"><a href="#contact">CONTACT</a></div>
            <div className="tab-item"><a href="#social-links">SOCIAL LINKS</a></div>
        </div>
    </div>
    );
}