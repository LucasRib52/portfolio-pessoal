import React from 'react';
import './home.css';
import profile from '../../assets/profile-img.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import CV from '../../assets/Lucas.pdf';

const Home = () => {

  const scrollToSkills = (e) => {
    e.preventDefault();
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__content">
          <div className="home__text-content">
            <p className="home__subtitle">Olá, meu nome é</p>
            <h1 className="home__title">Lucas Cardoso</h1>
            <p className="home__job">Desenvolvedor Full Stack</p>
            <p className="home__description">
              Sou um desenvolvedor Full Stack do Rio de Janeiro, apaixonado por criar soluções inovadoras e eficientes que aprimoram a performance e a usabilidade de aplicações web e móveis. Tenho experiência em ReactJS, JavaScript, Python e Django, e já participei de diversos projetos que impactaram positivamente a experiência do usuário. Estou constantemente buscando novos desafios e oportunidades para expandir minhas habilidades.
            </p>
            <div className="home__socials">
              <a href="https://www.linkedin.com/in/lucas-cardoso--/" className="home__social-link" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/LucasRib52/LucasRib52/" className="home__social-link" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/lucasdev.py/" className="home__social-link" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
            <div className="home__buttons">
              <a download="" href={CV} className="btn">Download CV</a>
              <a href="#skills" className="btn btn-secondary" onClick={scrollToSkills}>Minhas Skills</a>
            </div>
          </div>
          <div className="home__image-content">
            <img src={profile} alt="Minha imagem de perfil" className="home__profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
