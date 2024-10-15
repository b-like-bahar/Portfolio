import React, { useState, useEffect, useRef } from 'react';
import PortfolioLogo from "../../assets/logos/logo.svg";
import CloseIcon from "../../assets/icons/close-icon.svg";
import { ReactSVG } from "react-svg";
import './Header.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleClickOutside = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-img" src={PortfolioLogo} alt="website logo" />
            </div>
            <div className="header__lines" onClick={toggleMenu}>
                <span className="header__lines-line"></span>
                <span className="header__lines-line"></span>
                <span className="header__lines-line"></span>
            </div>
            <nav ref={navRef} className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
                <div className="header__nav-icon">
                    <ReactSVG className="header__nav-icon-close" src={CloseIcon} onClick={closeMenu} />
                </div>
                <ul>
                    <li><a href="#home" className='bold'>Home</a></li>
                    <li><a href="#about" className='bold'>About</a></li>
                    <li><a href="#projects" className='bold'>Projects</a></li>
                    <li><a href="#skills" className='bold'>Skills</a></li>
                    <li><a href="#contact" className='bold'>Contact</a></li>
                </ul>
                <button className="header__nav-resume">Resume</button>
            </nav>
        </header>
    );
};

export default Header;

