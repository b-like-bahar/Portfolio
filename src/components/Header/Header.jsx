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
                    <li><a href="#home" className='bold' onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className='bold'  onClick={closeMenu}>About</a></li>
                    <li><a href="#projects" className='bold'  onClick={closeMenu}>Projects</a></li>
                    <li><a href="#skills" className='bold'  onClick={closeMenu}>Skills</a></li>
                    <li><a href="#contact" className='bold' onClick={closeMenu}>Contact</a></li>
                </ul>
                <a className="header__nav-resume" href="https://drive.google.com/file/d/1aGyLGv1CNnSNjbRvyshQjHwGh2437A8x/view?usp=sharing" target="_blank">Resume</a>
            </nav>
        </header>
    );
};

export default Header;

