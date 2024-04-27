import React from "react";
import facebook from "../images/social/facebook.svg"
import instagram from "../images/social/instagram.svg"
import linkedin from "../images/social/linkedin.svg"
import github from "../images/social/github.svg"

export const Social = () => {
    return (
        <section className="section social" id="social-links">
            <h2 className="section-title">SOCIAL LINKS</h2>
            <div className="social-link-container">
                <SocialIcon src={facebook}/>
                <SocialIcon url="https://www.instagram.com/itsjaypatel17/" src={instagram}/>
                <SocialIcon url="https://www.linkedin.com/in/itsjaypatel/" src={linkedin}/>
                <SocialIcon url="https://www.github.com/itsjaypatel/" src={github}/>
            </div>
        </section>
    );
}

const SocialIcon = ({src,url="#"}) =>
(
    <a href={url} aria-hidden="true"><img className="social-icon" src={src} width={50} height={50} alt={src}></img></a>
);