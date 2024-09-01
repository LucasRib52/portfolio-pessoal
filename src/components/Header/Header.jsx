import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <header className="header">
            <nav className="nav container">
                <Link to="home" smooth={true} duration={500} className="nav__logo" onClick={closeMenu}>
                    <img src={Logo} alt="Logo" className="logo" />
                </Link>
                
                <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
                    <button className="nav__close" onClick={toggleMenu}>
                        <FaTimes />
                    </button>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link 
                                to="home" 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to="services" 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                                onClick={closeMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to="skills" 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                                onClick={closeMenu}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to="portfolio" 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                                onClick={closeMenu}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to="resume" 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                                onClick={closeMenu}
                            >
                                Resume
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to="contact" 
                                smooth={true} 
                                duration={500} 
                                className="nav__link" 
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="header__socials">
                        <a href="https://www.linkedin.com/in/lucas-cardoso--/" className="header__social-link" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/LucasRib52/LucasRib52/" className="header__social-link" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/lucasdev.py/" className="header__social-link" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Botão para abrir o menu */}
                {!showMenu && (
                    <div className="nav__toggle" onClick={toggleMenu}>
                        <FaBars />
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
