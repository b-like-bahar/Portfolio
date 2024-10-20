import "./Contact.scss";
import React from 'react'

function Contact() {
    return (
        <div className="contact" id="contact">
            <h2 className="contact__title">Get In Touch</h2>
            <p className="contact__text small">
                Have a project in mind or curious about my work? Let's connect!
                I'm always excited about exploring new opportunities and collaborations.
            </p>
            <a className="contact__button small" href="mailto:blikebahar76@gmail.com" target="_blank">Start a Conversation</a>
        </div>
    )
}

export default Contact