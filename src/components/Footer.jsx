import React from "react";
import { FiHeart, FiCode } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            <FiCode style={{ marginRight: "0.5rem" }} />
            Diseñado y desarrollado con
            <FiHeart style={{ margin: "0 0.5rem", color: "#ff0055" }} />
            por {personalInfo.name}
          </p>
          <p className="footer-copyright">
            © {currentYear} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
