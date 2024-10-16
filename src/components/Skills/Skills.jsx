import apiIcon from "../../assets/icons/api-icon.svg";
import cssIcon from "../../assets/icons/css3-icon.svg";
import sassIcon from "../../assets/icons/sass-icon.svg";
import expressIcon from "../../assets/icons/express-icon.svg";
import gitIcon from "../../assets/icons/git-icon.svg";
import githubIcon from "../../assets/icons/github.svg";
import htmlIcon from "../../assets/icons/html5-icon.svg";
import javascriptIcon from "../../assets/icons/javascript-icon.svg";
import jiraIcon from "../../assets/icons/jira-icon.svg";
import knexIcon from "../../assets/icons/knex-icon.svg";
import mysqlIcon from "../../assets/icons/mysql-icon.svg";
import nodejsIcon from "../../assets/icons/nodejs-icon.svg";
import pythonIcon from "../../assets/icons/python-icon.svg";
import reactIcon from "../../assets/icons/react-icon.svg";
import postmanIcon from "../../assets/icons/postman-icon.svg";
import { ReactSVG } from "react-svg";
import "./Skills.scss";

function Skills() {
    return (
        <div className="skills">
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={htmlIcon} />
            <p className="skills__item-text">HTML5</p>
            </div>
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={cssIcon} />
            <p className="skills__item-text">CSS</p>
            </div>            
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={sassIcon} />
            <p className="skills__item-text">Sass</p>
            </div>            
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={javascriptIcon} />
            <p className="skills__item-text">JavaScript</p>
            </div>            
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={reactIcon} />
            <p className="skills__item-text">React</p>
            </div>            
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={nodejsIcon} />
            <p className="skills__item-text">Node.js</p>
            </div>            
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={expressIcon} />
            <p className="skills__item-text">Express</p>
            </div>            
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={apiIcon} />
            <p className="skills__item-text">Rest APIs</p>
            </div>
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={postmanIcon} />
            <p className="skills__item-text">API Testing</p>
            </div>            
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={knexIcon } />
            <p className="skills__item-text">Knex.js</p>
            </div>            
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={gitIcon} />
            <p className="skills__item-text">Git</p>
            </div>            
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={githubIcon} />
            <p className="skills__item-text">Github</p>
            </div>            
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={mysqlIcon} />
            <p className="skills__item-text">MySQL</p>
            </div>            
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={pythonIcon} />
            <p className="skills__item-text">Python</p>
            </div>            
            <div className="skills__item">
            <ReactSVG className="skills__item-icon" src={jiraIcon} />
            <p className="skills__item-text">Agile Development</p>
            </div>
        </div>
    )
}

export default Skills