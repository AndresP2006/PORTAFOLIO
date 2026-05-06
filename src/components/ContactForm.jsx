import React, { useState } from "react";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

// Inicializar EmailJS
emailjs.init("hi1_r4E0BvjQN0WZ4");

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.send("service_xktakn6", "template_04bn0jm", {
        to_email: "apereira13@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error enviando email:", error);
      setStatus("error");
      setErrorMessage("Hubo un error al enviar el mensaje. Intenta de nuevo.");

      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Tu nombre"
          disabled={status === "sending"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="tu@email.com"
          disabled={status === "sending"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          placeholder="Cuéntame sobre tu proyecto..."
          disabled={status === "sending"}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary submit-btn"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <span className="spinner"></span>
            Enviando...
          </>
        ) : status === "success" ? (
          <>
            <FiCheck />
            Enviado
          </>
        ) : (
          <>
            <FiSend />
            Enviar Mensaje
          </>
        )}
      </button>

      {status === "success" && (
        <div className="form-message success">
          <FiCheck />
          ¡Mensaje enviado! Te responderé pronto.
        </div>
      )}

      {status === "error" && (
        <div className="form-message error">
          <FiAlertCircle />
          {errorMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
