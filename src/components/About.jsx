import React, { useState } from "react";
import profileImage from "../images/home/profile-picture.png"
import expandMore from "../images/about/expand-more.svg";
import expandLess from "../images/about/expand-less.svg";
export const About = () => {
    const data = [{
        "q": "Who am I?",
        "a":["I am Jay Patel, a passionate software engineer who loves to code and develop."],
    },{
        "q": "What I do?",
        "a" : ["Currently, Working as software engineer at Global Payex."]
    },
    {
        "q": "What is my educational background?",
        "a" : ["I completed B.E in computer engineering from Gujarat Technological University, Ahemdabad in 2022.","I completed 12th Science from I. C. Gandhi High School, Surat in 2018."]
    }
]
    return (
        <section className="section about" id="about">
            <h2 className="section-title">ABOUT</h2>
            <div className="about-container" style={{}}>
                <div className="profile-image-container">
                    <img src={profileImage} style={{ height: "300px", width: "300px", borderRadius: "100%", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", objectFit: "scale-down" }} alt="Jay Patel"></img>
                </div>
                <div className="faq-container">
                    <FAQ question="Who am I?" answer={<li>I am Jay Patel, a passionate software engineer who loves to code and develop.</li>}/>
                <FAQ question="What I do?" answer={<li>Currently, Working as software engineer at Global Payex.</li>}/>
                <FAQ question="What is my educational background?" answer={<>
                    <li>I completed B.E in computer engineering from Gujarat Technological University, Ahemdabad in 2022.</li>
                    <li>I completed 12th Science from I. C. Gandhi High School, Surat in 2018.</li>
                    </>}/>
                </div>
            </div>
        </section>
    )
}

const FAQ = ({ question, answer }) => {
    const [isVisible, setVisible] = useState(false);
    const colors = ["#EEF5FF", "#86b7f653"]
    return (
        <div style={{}}>
            <p className="my-0 px-0 py-1" style={{ border: "none", display: "flex", justifyContent: "space-between", backgroundColor: isVisible ? colors[1] : colors[0], borderTop: "1px solid black", borderBottom: "1px solid black" }} onClick={(e) => {
                setVisible(!isVisible);
            }}>
                <span className="mx-3" >{question}</span>
                <img src={isVisible ? expandLess : expandMore} alt="" />
            </p>
            {isVisible && <p className="my-0 px-2 py-4" style={{ backgroundColor: "#EEF5FF", borderTop: "1px solid black", borderBottom: "1px solid black" }}>{answer}</p>}
        </div>
    )
};