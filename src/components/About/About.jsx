import aboutImage from "../../assets/images/about-image.png";
import "./About.scss";

function About() {
    return (
        <section className="about">
            <h2 className="about__title">
                About me
            </h2>
            <div className="about__component">
                <div className="about__component-image">
                <img className="about__component-image-item" alt="coder-scientist girl cartoon" src={aboutImage} />
                <div className="about__component-image-border"></div>
                </div>
                <p className="about__component-description  small">
                    I am a Full-Stack Web Developer specializing in JavaScript and React.
                    I always seek opportunities to acquire new knowledge and enhance my skill set.
                    My background in physics enables me to offer a unique perspective on technology development.
                    By combining scientific rigour with a passion for coding, I thrive in environments that value precision, collaboration, and continuous learning.
                    Whether advancing research or developing software, I’m eager to tackle real-world challenges at the intersection of science and technology.
                </p>
            </div>
        </section>
    )
}

export default About