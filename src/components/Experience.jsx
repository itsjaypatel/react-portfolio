import React from "react";
import { Badge } from "react-bootstrap";
import icon1 from "../images/work-experience/global-payex.png"
import icon2 from "../images/work-experience/cognizant.png"

export const Experience = () => {
    const work = [
        {
            "company": "Global Payex",
            "role": "Software Engineer",
            "fromDate": "July 2022",
            "toDate": "Present",
            "location": "Mumbai, India",
            "remote": true,
            "icon": icon1,
            "description": ["Worked on backend modules for a FILE EVENTS DASHBOARD, helps clients to track Ledger/Buyer Files in a more easy manner. Designed NIFI flows for various scenarios to route files to designated paths based on processing outcomes. Integration of AmazonS3 that stores the logs for files", "Built SLA Scheduler that triggers and generates logs in the console when a particular file arrives in a given time slot", "Wrote unit tests cases for different modules that improves the code quality.", "Wrote DB scripts, provides customized feature experience in Buyer App","Implmented an automation to download payment advices from vender portal using UI path Studio reduced manual affort by 80%."],
            "technologies": ["Java", "Vert.x", "Nifi", "API", "Async", "Javascript", "MongoDB","Unit Testing","UI Path Studio Automation"]
        },
        {
            "company": "Cognizant",
            "role": "Programming Analyst Intern",
            "fromDate": "Jan 2022",
            "toDate": "May 2022",
            "location": "Bengluru, India",
            "remote": true,
            "icon": icon2,
            "description": ["Implemented application automating Rainfall Reports, offering features such as calculating annual average rainfall for cities, filtering records by city, and sorting cities based on it.","Created user-friendly web pages for a restaurant website catering to both customers and restaurant owners."],
            "technologies": ["Java", "MySQL", "JDBC", "Spring","HTML","CSS", "Javascript"]
        }
    ];

    return (
        <section className="section experience" id="experience">
            <h2 className="section-title"> WORK</h2>
            <div className="experience-container">
                {
                    work && work.map(w => <ExperienceCard work={w} />)
                }
            </div>
        </section>
    )
}

const ExperienceCard = ({ work }) => {
    return (
        <div className="experience-card m-4">
            <div className="card-child-1 m-2">
                <img src={work.icon} alt="Logo"></img>
                <div style={{ borderLeft: "0.5px solid gray", height: "100%", margin: "5px" }}></div>
            </div>
            <div className="card-child-2 m-2" style={{ height: "100%", width: "100%" }}>
                <div className="m-2" style={{}}>
                    <h5 >{work.role} - {work.company}</h5>
                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                        <span >{work.remote ?  `Remote - ${work.location}` : work.location}</span>
                        <span >{work.fromDate} - {work.toDate}</span>
                    </div>
                </div>
                <hr className="my-2" style={{ width: "100%", borderColor: "gray" }} />
                <div className="role-description m-2 p-2" style={{ textAlign: "justify" }}>
                    {
                        work.description && work.description.map(text => <li>{text}</li>)
                    }
                </div>
                <div>
                    {
                        work.technologies && work.technologies.map(t => <Badge className="m-2" bg="primary">{t}</Badge>)
                    }
                </div>
            </div>
        </div>
    );
}