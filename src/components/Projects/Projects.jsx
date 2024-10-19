import "./Projects.scss";

function Projects() {
    return (
        <div className="projects" id="projects">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__component">
                <div className="projects__component-item">
                    <div className="projects__component-item-title-wrapper">
                        <h3 className="projects__component-item-title bold">JourneyNook</h3>
                    </div>
                    <div className="projects__component-item-presentation">
                        <video className="projects__component-item-presentation-video" controls width="100%">
                            <source src="https://res.cloudinary.com/deuku9jpm/video/upload/v1729249436/journeynook_bjtwjl.mp4" type="video/mp4" />
                        </video>
                        <div className="projects__component-item-presentation-description">
                            <p className="projects__component-item-presentation-description-explanation small">
                                JourneyNook is a Full-stack AI-powered travel planner that creates personalized itineraries based on your preferences, budget, and trip type.
                                It simplifies trip planning by generating detailed schedules and helps you explore cities, discover landmarks, and find must-see attractions.
                            </p>
                            <p className="projects__component-item-presentation-description-tools small">
                                #JavaScript #React #Axios #Node.js #REST APIs #MySQL #Sass #Git #Github
                            </p>
                            <div>
                                <span className="small">Live at:</span>
                                <a
                                    className="projects__component-item-presentation-description-url small"
                                    href="https://journeynook.netlify.app/"
                                >
                                    journeynook.netlify.app/
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__component-item">
                    <div className="projects__component-item-title-wrapper">
                        <h3 className="projects__component-item-title bold">Telus Indusrty Hackathon</h3>
                    </div>
                    <div className="projects__component-item-presentation">
                        <video className="projects__component-item-presentation-video" controls width="100%">
                            <source src="https://res.cloudinary.com/deuku9jpm/video/upload/v1729249436/industry-hackathon_lganw5.mp4" />
                        </video>
                        <div className="projects__component-item-presentation-description">
                            <p className="projects__component-item-presentation-description-explanation small">
                                A 24-hour hackathon sponsored by Telus, was done in a group of 5.
                                focused on addressing the issue of consumers facing option overload,
                                aiming to create a user-friendly, streamlined way for them to access their favorite media.
                            </p>
                            <p className="projects__component-item-presentation-description-tools small">
                                #JavaScript #React #Axios #Node.js #REST APIs #Sass #GitFlow #Git #Github
                            </p>
                        </div>
                    </div>
                </div>

                <div className="projects__component-item">
                    <div className="projects__component-item-title-wrapper">
                        <h3 className="projects__component-item-title bold">Instock</h3>
                    </div>
                    <div className="projects__component-item-presentation">
                        <video className="projects__component-item-presentation-video" controls width="100%">
                            <source src="https://res.cloudinary.com/deuku9jpm/video/upload/v1729249437/instock_p6uock.mp4" type="video/mp4" />
                        </video>
                        <div className="projects__component-item-presentation-description">
                            <p className="projects__component-item-presentation-description-explanation small">
                                InStock is a responsive web application created for a Fortune 500 client to manage warehouse inventory efficiently.
                                Developed in a collaborative, agile environment, the project followed a structured sprint process and focused on integrating both front-end and back-end functionality.
                            </p>
                            <p className="projects__component-item-presentation-description-tools small">
                                #JavaScript #React #Axios #MySQL #Express.js #Knex.js #Node.js #REST APIs #Sass #GitFlow #AgileDevelopment #Git #Github
                            </p>
                        </div>
                    </div>
                </div>

                <div className="projects__component-item">
                    <div className="projects__component-item-title-wrapper">
                        <h3 className="projects__component-item-title bold">BrainFlix</h3>
                    </div>
                    <div className="projects__component-item-presentation">
                        <video className="projects__component-item-presentation-video" controls width="100%">
                            <source src="https://res.cloudinary.com/deuku9jpm/video/upload/v1729248799/brainflix_wbwv5l.mp4" type="video/mp4" />
                        </video>
                        <div className="projects__component-item-presentation-description">
                            <p className="projects__component-item-presentation-description-explanation small">
                                BrainFlix is a responsive video streaming platform where users can view, upload, and manage video content.
                                It features a custom API for handling video data and offers a seamless, YouTube-like experience with a full-stack architecture.
                            </p>
                            <p className="projects__component-item-presentation-description-tools small">
                                #JavaScript #React #Express.js #Node.js #Axios #Sass #Git #Github
                            </p>
                        </div>
                    </div>
                </div>

                <div className="projects__component-item">
                    <div className="projects__component-item-title-wrapper">
                        <h3 className="projects__component-item-title bold">Band Site</h3>
                    </div>
                    <div className="projects__component-item-presentation">
                        <video className="projects__component-item-presentation-video" controls width="100%">
                            <source src="https://res.cloudinary.com/deuku9jpm/video/upload/v1729248803/bandsite_cjnboo.mp4" type="video/mp4" />
                        </video>
                        <div className="projects__component-item-presentation-description">
                            <p className="projects__component-item-presentation-description-explanation small">
                                Band Site is a fully responsive platform for an emerging band, featuring a main page with band info and a gallery, plus a shows page with upcoming events.
                                Users can view and post real-time comments, supported by dynamic API integration for seamless updates.
                            </p>
                            <p className="projects__component-item-presentation-description-tools small">
                                #HTML #Sass #Axios #APIIntegration #Git #Github
                            </p>
                        </div>
                    </div>
                </div>

                <div className="projects__component-item">
                    <div className="projects__component-item-title-wrapper">
                        <h3 className="projects__component-item-title bold">Coffee Shop</h3>
                    </div>
                    <div className="projects__component-item-presentation">
                        <video className="projects__component-item-presentation-video" controls width="100%">
                            <source src="https://res.cloudinary.com/deuku9jpm/video/upload/v1729249440/coffeeshop_z3hiuw.mp4" />
                        </video>
                        <div className="projects__component-item-presentation-description">
                            <p className="projects__component-item-presentation-description-explanation small">
                                The Coffee Shop project is website featuring a landing page and a menu page.
                                It highlights the ability to create structured layouts, reusable components, and a smooth, responsive design for an enhanced user experience.
                            </p>
                            <p className="projects__component-item-presentation-description-tools small">
                                #HTML #Sass #Git #Github
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects