import React from "react";
import { experience } from "../data/portfolio";
import "./Experience.scss";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experiencia</h2>
        <div className="experience-timeline">
          {experience.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-dot"></div>
              <div className="experience-content">
                <div className="experience-period">{exp.period}</div>
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
