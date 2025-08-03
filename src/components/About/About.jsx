import aboutImage from "../../assets/images/about-image.png";
import "./About.scss";

function About() {
    return (
        <section className="about" id="about">
            <h2 className="about__title">
                About me
            </h2>
            <div className="about__component">
                <div className="about__component-image">
                    <img className="about__component-image-item" alt="coder-scientist girl cartoon" src={aboutImage} />
                    <div className="about__component-image-border"></div>
                </div>
                <p className="about__component-description  small">
                    I’m a Software Engineer with a background in physics and a passion for building clean, accessible, and performant web applications. Specializing in JavaScript, TypeScript, React, Nextjs, and Supabase. I bring a scientific mindset to software development, combining precision, analytical thinking, and continuous learning.
                    <br />
                    Whether I’m collaborating on product features, contributing to open-source projects, or exploring new tools, I thrive at the intersection of science and technology. My goal is to turn complex problems into intuitive digital experiences that make a real impact.
                </p>
            </div>
        </section>
    )
}

export default About