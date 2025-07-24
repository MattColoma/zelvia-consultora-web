// src/components/Home.js

import React from 'react';
import '../styles/Home.css'; // Asegúrate de que este archivo CSS esté actualizado con los estilos anteriores

const Home = () => {
  return (
    <section id="home">
      {/* --- Hero Section --- */}
      <div className="hero-section">
        <div className="hero-background-overlay"></div> 
        
        <div className="hero-content">
          <h1>Consultoría Estratégica para el Éxito de Tu Negocio</h1>
          <p>En Zelvia, ofrecemos soluciones especializadas en auditoría, contabilidad y tecnología para optimizar tus operaciones y potenciar tu crecimiento.</p>
          <div className="hero-buttons">
            {/* Botón "Descubre Nuestros Servicios" */}
            <a href="#servicios" className="cta-button primary">
              Descubre Nuestros Servicios
            </a>
            {/* Botón "Agenda una Asesoría" */}
            <a href="#contacto" className="cta-button secondary">
              Agenda una Asesoría
            </a>
          </div>
        </div>
      </div>

      {/* --- Sección de Áreas de Especialización (similar al configurator de la imagen) --- */}
      <div className="configurator-section"> {/* Mantendré la clase 'configurator-section' por los estilos CSS ya aplicados */}
        <h2>Nuestras Áreas Clave de Consultoría</h2>
        <p className="configurator-description">
          Ofrecemos expertise en los pilares fundamentales para la solidez y el avance de tu empresa, con enfoques personalizados y soluciones a medida.
        </p>
        <div className="configurator-cards-grid">
          {/* Card 1: Consultoría en Auditoría */}
          <div className="configurator-card">
            <div className="card-icon">
              {/* Placeholder para ícono o imagen de Auditoría */}
              <img src="/images/icon-auditoria.png" alt="Icono de Auditoría" /> 
            </div>
            <h3>Auditoría Financiera y Operacional</h3>
            <p>Análisis exhaustivo para garantizar la transparencia y eficiencia.</p>
          </div>
          {/* Card 2: Consultoría en Contabilidad (Resaltada) */}
          <div className="configurator-card "> {/* Clase 'active' para resaltar */}
            <div className="card-icon">
              {/* Placeholder para ícono o imagen de Contabilidad */}
              <img src="/images/icon-contabilidad.png" alt="Icono de Contabilidad" />
            </div>
            <h3>Gestión Contable y Tributaria</h3>
            <p>Asesoría experta para el cumplimiento normativo y optimización fiscal.</p>
          </div>
          {/* Card 3: Consultoría en Tecnología */}
          <div className="configurator-card">
            <div className="card-icon">
              {/* Placeholder para ícono o imagen de Tecnología */}
              <img src="/images/icon-tecnologia.png" alt="Icono de Tecnología" />
            </div>
            <h3>Consultoría en Transformación Digital</h3>
            <p>Implementación de soluciones tecnológicas para innovar y crecer.</p>
          </div>
        </div>
      </div>

      {/* Aquí podrías añadir otras secciones relevantes para Home, si las necesitas. */}
    </section>
  );
};

export default Home;