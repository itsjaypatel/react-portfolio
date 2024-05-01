import React, { useEffect, useRef } from "react";
import profileImage from "../images/home/profile-picture.jpeg";
import Typed from "typed.js";
import { Social } from "./Social";
export const Home = () => {

  const typingElement = useRef();

  useEffect(() => {
    const typed = new Typed(typingElement.current, {
      strings: ['Jay Patel', 'Developer,', 'Freelancer'],
      typeSpeed: 150,
      loop: true,
      insertCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="profile-info">
          <h1>I'm <span ref={typingElement}></span></h1>
          <p>Let's connect to build something...</p>
        <Social/>
        </div>
      </div>
    </section>
  );
}