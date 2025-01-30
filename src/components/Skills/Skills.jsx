import apiIcon from "../../assets/icons/api-icon.svg";
import cssIcon from "../../assets/icons/css3-icon.svg";
import sassIcon from "../../assets/icons/sass-icon.svg";
import expressIcon from "../../assets/icons/express-icon.svg";
import gitIcon from "../../assets/icons/git-icon.svg";
import githubIcon from "../../assets/icons/github-icon.svg";
import htmlIcon from "../../assets/icons/html5-icon.svg";
import javascriptIcon from "../../assets/icons/javascript-icon.svg";
import jiraIcon from "../../assets/icons/jira-icon.svg";
import knexIcon from "../../assets/icons/knex-icon.svg";
import mysqlIcon from "../../assets/icons/mysql-icon.svg";
import nodejsIcon from "../../assets/icons/nodejs-icon.svg";
import reactIcon from "../../assets/icons/react-icon.svg";
import postmanIcon from "../../assets/icons/postman-icon.svg";
import pythonIcon from "../../assets/icons/python-icon.svg";
import nextIcon from "../../assets/icons/nextjs-icon.svg";
import tailwindIcon from "../../assets/icons/tailwind-icon.svg";
import { ReactSVG } from "react-svg";
import "./Skills.scss";

function Skills() {
    return (
        <div className="skills" id="skills">
            <h2 className="skills__title">Skills</h2>
            <div className="skills__component">
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={reactIcon} />
                    <p className="skills__component-item-text  small">React</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={javascriptIcon} />
                    <p className="skills__component-item-text  small">JavaScript</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={nextIcon} />
                    <p className="skills__component-item-text  small">Nextjs</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={pythonIcon} />
                    <p className="skills__component-item-text  small">Python</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={nodejsIcon} />
                    <p className="skills__component-item-text  small">Node.js</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={expressIcon} />
                    <p className="skills__component-item-text  small">Express</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={htmlIcon} />
                    <p className="skills__component-item-text  small">HTML5</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={cssIcon} />
                    <p className="skills__component-item-text  small">CSS</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={sassIcon} />
                    <p className="skills__component-item-text  small">Sass</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={tailwindIcon} />
                    <p className="skills__component-item-text  small">TailwindCss</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={apiIcon} />
                    <p className="skills__component-item-text  small">Rest APIs</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={postmanIcon} />
                    <p className="skills__component-item-text  small">API Testing</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={knexIcon} />
                    <p className="skills__component-item-text  small">Knex.js</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={gitIcon} />
                    <p className="skills__component-item-text  small">Git</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={mysqlIcon} />
                    <p className="skills__component-item-text  small">MySQL</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={githubIcon} />
                    <p className="skills__component-item-text  small">Github</p>
                </div>
                <div className="skills__component-item">
                    <ReactSVG className="skills__component-item-icon" src={jiraIcon} />
                    <p className="skills__component-item-text  small">Agile Development</p>
                </div>
            </div>
            <div className="skills__sentence">
                <p className="skills__sentence-text">and my passion for learning is ongoing!</p> 
            </div>
        </div>
    )
}

export default Skills