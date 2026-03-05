import React from "react";
import { about } from "../data/portfolio";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{about.description}</p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">2+</span>
                <span className="highlight-label">Años de Experiencia</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">10+</span>
                <span className="highlight-label">Proyectos Completados</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">12+</span>
                <span className="highlight-label">Tecnologías</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <img src={about.image} alt="Andres Pereira" />
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
