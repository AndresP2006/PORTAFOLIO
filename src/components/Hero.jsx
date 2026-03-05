import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";
import "./Hero.scss";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content fade-in-up">
          <p className="hero-greeting">Hola, soy</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-role">{personalInfo.role}</h2>
          <p className="hero-tagline">{personalInfo.tagline}</p>

          <div className="hero-actions">
            <button onClick={scrollToProjects} className="btn btn-primary">
              Ver Proyectos
            </button>
            <a href="#contact" className="btn btn-secondary">
              Contactar
            </a>
          </div>

          <div className="hero-social">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero-scroll">
          <FiArrowDown className="scroll-icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
