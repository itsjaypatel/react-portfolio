import React, { useEffect, useRef } from "react";
import profileImage from "../images/home/profile-picture.jpeg";
import Typed from "typed.js";
export const Home = () => {

  const summary = ["I am a highly skilled Software Engineer at Global PayEx and former Programming Analyst Intern at Cognizant, with expertise in solving complex coding problems using advanced data structures and algorithms.", "I hold a Bachelor's degree in Computer Engineering from Sarvajanik College of Engineering and Technology(SCET), Surat Gujarat. As a passionate learner and problem-solver, I am constantly seeking new challenges and opportunities to enhance my skills and deliver innovative solutions. Let's connect and explore ways to collaborate on exciting projects and drive meaningful impact!"];
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
    <section className="section home" id="home">
      <div className="home-container">
        <div className="profile-info">
          <h1>I'm <span ref={typingElement}>
          </span>
          </h1>
          {summary.map((s, key) => <p key={key}>{s}</p>)}
        </div>
        <div className="profile-image-container">
          <img src={profileImage} className="profile-image" alt="Jay Patel"></img>
        </div>
      </div>
    </section>
  );
}