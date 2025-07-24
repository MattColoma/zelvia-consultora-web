// src/components/Contacto.js

import React from 'react';
import '../styles/Contacto.css'; // Asegúrate de que esta ruta sea correcta para tu CSS

const Contacto = () => {
  return (
    <section id="contacto" className="contact-page-section">
      {/* Título principal de la sección */}
      <h2 className="section-title">Contactanos</h2>

      {/* Contenedor principal de las dos columnas */}
      <div className="contact-main-content-wrapper">

        {/* Columna Izquierda: Información de Contacto */}
        <div className="contact-info-column">
          <h3 className="info-column-title">Información de Contacto</h3>
          <p className="info-column-description">
            Estamos listos para escucharte y resolver tus dudas. Ponte en contacto con nosotros a través de los siguientes medios:
          </p>

          {/* Bloque de Email */}
          <div className="contact-info-block">
            <div className="info-icon-circle">
              <img src="/images/icon-email.svg" alt="Email Icon" />
            </div>
            <div className="info-text-content">
              <h4>Correo Electrónico</h4>
              <p>contacto@zelvia.com</p>
            </div>
          </div>

          {/* Bloque de Teléfono */}
          <div className="contact-info-block">
            <div className="info-icon-circle">
              <img src="/images/icon-phone.svg" alt="Phone Icon" />
            </div>
            <div className="info-text-content">
              <h4>Teléfono</h4>
              <p>+56 9 1234 5678</p> {/* Ejemplo de número chileno, ajusta si es necesario */}
            </div>
          </div>

          {/* Bloque de Ubicación */}
          <div className="contact-info-block">
            <div className="info-icon-circle">
              <img src="/images/icon-location.svg" alt="Location Icon" />
            </div>
            <div className="info-text-content">
              <h4>Ubicación</h4>
              <p>Av. Ficticia 123, Santiago, Chile</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario de Contacto */}
        <div className="contact-form-column">
          <h3 className="form-column-title">Envíanos un Mensaje</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Tu nombre</label>
              <input type="text" id="name" name="name" placeholder="Escribe tu nombre completo" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Tu email</label>
              <input type="email" id="email" name="email" placeholder="Escribe tu correo electrónico" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input type="text" id="subject" name="subject" placeholder="¿Sobre qué es tu consulta?" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Tu mensaje</label>
              <textarea id="message" name="message" rows="6" placeholder="Escribe aquí tu mensaje..." required></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensaje</button>
          </form>
        </div>

      </div> {/* Fin de contact-main-content-wrapper */}

      {/* Sección Inferior de Redes Sociales */}
      <div className="social-media-bottom-bar">
        <a href="https://linkedin.com/company/tuempresa" target="_blank" rel="noopener noreferrer">
          <img src="/images/icon-linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <img src="/images/icon-github.svg" alt="GitHub" />
        </a>
        <a href="mailto:contacto@zelvia.com">
          <img src="/images/icon-mail.svg" alt="Email" />
        </a>
      </div>

    </section>
  );
};

export default Contacto;