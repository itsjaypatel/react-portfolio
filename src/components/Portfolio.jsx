import React from "react";
import { NavBar } from "./Navbar";
import { Home } from "./Home";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { About } from "./About";
import { GoToTop } from "./GoToTop";

export const Portfolio = () => {
    
    return (
        <div className="portfolio-container">
            <NavBar />
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <GoToTop/>
        </div>
    )
}