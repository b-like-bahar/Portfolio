import { Typewriter } from '../Typewriter/Typewriter.jsx';
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import './Home.scss';

function Home() {
    return (
        <section className="home">
            <p className="home__start">Hi, I'm</p>
            <h1 className="home__name">
                Bahareh Hamzeh
            </h1>
            <h2 className="home__job">Innovative Full-Stack Developer</h2>
            <h1>
                <div className="home__typing">
                    <Typewriter
                        toRotate={[
                            "I am a passionate Developer",
                            "I love Math & Physics",
                            "I am good at problem solving",
                            "I like listening to podcasts",
                            "I am a fan of sitcoms"
                        ]}
                        period={1000}
                    />
                </div>
            </h1>
            <div className="home__social">
                <a className="home__social-link" href="https://github.com/b-like-bahar" target="_blank">
                    <img className="home__social-link-img" src={githubIcon} />
                </a>
                <a className="home__social-link" href="http://www.linkedin.com/in/bahareh-hamzeh" target="_blank">
                    <img className="home__social-link-img" src={linkedinIcon} />
                </a>
            </div>
        </section>
    )
}

export default Home;
