import { useState } from "react";
import "./Projects.scss";

function Projects() {
    const [showAll, setShowAll] = useState(false);

    const projectItems = [
        {
            title: "WebIdeasSprout",
            videoSrc: "https://res.cloudinary.com/deuku9jpm/video/upload/v1738268257/webideassprout_awtigx.mp4",
            description: "WebIdeasSprout is a dynamic platform designed to help innovators share and discover web application ideas. It fosters collaboration by allowing users to submit their websites, and explore a diverse collection of other projects. With features like real-time search, authentication, and user profiles, it creates an engaging community for brainstorming and inspiration.",
            tools: "#Next.js #TypeScript #NextAuth #Sanity.io #TailwindCSS #REST APIs #ServerActions #PartialPreRendering #ParallelFetching #Git #GitHub",
            liveLink: "https://webideassprout.vercel.app/",
        },
        {
            title: "JourneyNook",
            videoSrc: "https://res.cloudinary.com/deuku9jpm/video/upload/v1729249436/journeynook_bjtwjl.mp4",
            description: "JourneyNook is a Full-stack AI-powered travel planner that creates personalized itineraries based on your preferences, budget, and trip type. It simplifies trip planning by generating detailed schedules and helps you explore cities, discover landmarks, and find must-see attractions.",
            tools: "#JavaScript #React #Axios #Node.js #REST APIs #MySQL #Sass #Git #Github",
            liveLink: "https://journeynook.netlify.app/",
        },
        {
            title: "Instock",
            videoSrc: "https://res.cloudinary.com/deuku9jpm/video/upload/v1729249437/instock_p6uock.mp4",
            description: " InStock is a responsive web application created for a Fortune 500 client to manage warehouse inventory efficiently. Developed in a collaborative, agile environment, the project followed a structured sprint process and focused on integrating both front-end and back-end functionality.",
            tools: "#JavaScript #React #Axios #MySQL #Express.js #Knex.js #Node.js #REST APIs #Sass #GitFlow #AgileDevelopment #Git #Github",
        },
        {
            title: "BrainFlix",
            videoSrc: "https://res.cloudinary.com/deuku9jpm/video/upload/v1729248799/brainflix_wbwv5l.mp4",
            description: "BrainFlix is a responsive video streaming platform where users can view, upload, and manage video content. It features a custom API for handling video data and offers a seamless, YouTube-like experience with a full-stack architecture.",
            tools: "#JavaScript #React #Express.js #Node.js #Axios #Sass #Git #Github",
        }
    ];

    const displayedProjects = showAll ? projectItems : projectItems.slice(0, 2);

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
