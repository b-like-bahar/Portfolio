import { useState } from "react";
import "./Projects.scss";

function Projects() {
    const [showAll, setShowAll] = useState(false);

    const projectItems = [
        {
            title: "JourneyNook",
            videoSrc: "https://res.cloudinary.com/deuku9jpm/video/upload/v1729249436/journeynook_bjtwjl.mp4",
            description: "JourneyNook is a Full-stack AI-powered travel planner that creates personalized itineraries based on your preferences, budget, and trip type. It simplifies trip planning by generating detailed schedules and helps you explore cities, discover landmarks, and find must-see attractions.",
            tools: "#JavaScript #React #Axios #Node.js #REST APIs #MySQL #Sass #Git #Github",
            liveLink: "https://journeynook.netlify.app/",
        },
        {
            title: "Telus Industry Hackathon",
            videoSrc: "https://res.cloudinary.com/deuku9jpm/video/upload/v1729249436/industry-hackathon_lganw5.mp4",
            description: "A 24-hour hackathon sponsored by Telus, was done in a group of 5. focused on addressing the issue of consumers facing option overload, aiming to create a user-friendly, streamlined way for them to access their favorite media.",
            tools: "#JavaScript #React #Axios #Node.js #REST APIs #Sass #GitFlow #Git #Github",
        },
        {
            title: "Instock",
            videoSrc: "https://res.cloudinary.com/deuku9jpm/video/upload/v1729249437/instock_p6uock.mp4",
            description: " InStock is a responsive web application created for a Fortune 500 client to manage warehouse inventory efficiently. Developed in a collaborative, agile environment, the project followed a structured sprint process and focused on integrating both front-end and back-end functionality.",
            tools: "#JavaScript #React #Axios #MySQL #Express.js #Knex.js #Node.js #REST APIs #Sass #GitFlow #AgileDevelopment #Git #Github",
            liveLink: "https://instock-beta.netlify.app/",
        },
        {
            title: "BrainFlix",
            videoSrc: "https://res.cloudinary.com/deuku9jpm/video/upload/v1729248799/brainflix_wbwv5l.mp4",
            description: "BrainFlix is a responsive video streaming platform where users can view, upload, and manage video content. It features a custom API for handling video data and offers a seamless, YouTube-like experience with a full-stack architecture.",
            tools: "#JavaScript #React #Express.js #Node.js #Axios #Sass #Git #Github",
        },
        {
            title: "Band Site",
            videoSrc: "https://res.cloudinary.com/deuku9jpm/video/upload/v1729248803/bandsite_cjnboo.mp4",
            description: "Band Site is a fully responsive platform for an emerging band, featuring a main page with band info and a gallery, plus a shows page with upcoming events. Users can view and post real-time comments, supported by dynamic API integration for seamless updates.",
            tools: "#HTML #Sass #Axios #APIIntegration #Git #Github",
        },
        {
            title: "Coffee Shop",
            videoSrc: "https://res.cloudinary.com/deuku9jpm/video/upload/v1729249440/coffeeshop_z3hiuw.mp4",
            description: "The Coffee Shop project is website featuring a landing page and a menu page. It highlights the ability to create structured layouts, reusable components, and a smooth, responsive design for an enhanced user experience.",
            tools: "#HTML #Sass #Git #Github",
        },
    ];

    const displayedProjects = showAll ? projectItems : projectItems.slice(0, 3);

    return (
        <div className="projects" id="projects">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__component">
                {displayedProjects.map((project, index) => (
                    <div className="projects__component-item" key={index}>
                        <div className="projects__component-item-title-wrapper">
                            <h3 className="projects__component-item-title bold">{project.title}</h3>
                        </div>
                        <div className="projects__component-item-presentation">
                            <video className="projects__component-item-presentation-video" controls width="100%">
                                <source src={project.videoSrc} type="video/mp4" />
                            </video>
                            <div className="projects__component-item-presentation-description">
                                <p className="projects__component-item-presentation-description-explanation small">
                                    {project.description}
                                </p>
                                <p className="projects__component-item-presentation-description-tools small">
                                    {project.tools}
                                </p>
                                {project.liveLink && (
                                    <div>
                                        <span className="small">Live at:</span>
                                        <a
                                            className="projects__component-item-presentation-description-url small"
                                            href={project.liveLink}
                                        >
                                            {project.liveLink}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="projects__show">
                <button className="projects__show-button" onClick={() => setShowAll(!showAll)}>
                    {showAll ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
}

export default Projects;
