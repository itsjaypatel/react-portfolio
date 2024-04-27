import React from "react";
import { NavBar } from "./Navbar";
import { Home } from "./Home";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Social } from "./Social";

export const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <NavBar/>
            <Home/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Social/> 
        </div>
    )
}