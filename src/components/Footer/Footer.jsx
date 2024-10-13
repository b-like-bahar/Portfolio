import PortfolioLogo from "../../assets/logos/logo.svg";
import emailIcon from "../../assets/icons/email.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import "./Footer.scss";

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer__logo">
                <img className="footer__logo-img" src={PortfolioLogo} />
            </div>
            <div className="footer__social">
                <a className="footer__social-link" href="mailto:blikebahar76@gmail.com" target="_blank">
                    <img className="footer__social-link-img" src={emailIcon} />
                </a>
                <a className="footer__social-link" href="https://github.com/b-like-bahar" target="_blank">
                    <img className="footer__social-link-img" src={githubIcon} />
                </a>
                <a className="footer__social-link" href="http://www.linkedin.com/in/bahareh-hamzeh" target="_blank">
                    <img className="footer__social-link-img" src={linkedinIcon} />
                </a>
            </div>
            <p className="footer__copyRight">
                &copy; {new Date().getFullYear()} Bahareh Hamzeh. All Rights Reserved.
            </p>
        </div>

    )
}