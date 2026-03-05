import React from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";
import ContactForm from "./ContactForm";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-content">
          <div className="contact-text">
            <h3>¿Tienes un proyecto en mente?</h3>
            <p>
              Estoy disponible para nuevas oportunidades y colaboraciones.
              Completa el formulario o contáctame directamente.
            </p>
          </div>

          <ContactForm />

          <div className="contact-divider">
            <span>O contáctame por</span>
          </div>

          <div className="contact-methods">
            <a href={`mailto:${personalInfo.email}`} className="contact-card">
              <FiMail className="contact-icon" />
              <div className="contact-info">
                <span className="contact-label">Email</span>
                <span className="contact-value">{personalInfo.email}</span>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <FiGithub className="contact-icon" />
              <div className="contact-info">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">@andrespereira</span>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <FiLinkedin className="contact-icon" />
              <div className="contact-info">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">Andres Pereira</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
