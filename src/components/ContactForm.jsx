import React, { useState } from "react";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simular envío (reemplazar con EmailJS o tu backend)
    setTimeout(() => {
      console.log("Form data:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    }, 2000);

    // Ejemplo con EmailJS (descomentar cuando configures):
    /*
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
    */
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
          Hubo un error. Intenta de nuevo o contáctame directamente.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
