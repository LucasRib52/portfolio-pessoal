import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <p className="footer__copyright text-cs">
                    &copy; 2024 <span>Lucas</span>. Todos os direitos Reservados
                </p>
                
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/in/lucas-cardoso--/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/LucasRib52" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>

                    <a href="https://www.instagram.com/lucasdev.py/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>

                <p className="footer__copyright text-cs">
                    Desenvolvido por <span>Lucas Cardoso</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
