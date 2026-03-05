import React from "react";
import { techStack } from "../data/portfolio";
import "./TechStack.scss";

const TechStack = () => {
  return (
    <section id="tech-stack" className="tech-stack">
      <div className="container">
        <h2 className="section-title">Tecnologías</h2>
        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="tech-name">{tech.name}</div>
              <div className="tech-category">{tech.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
