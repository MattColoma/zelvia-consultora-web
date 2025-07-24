// src/components/Servicios.js

import React from 'react';
import '../styles/Servicios.css'; // Asegúrate de crear este archivo CSS para los estilos

const Servicios = () => {
  return (
    <section id="servicios" className="services-page">
      <h1 className="page-title">Nuestros Servicios</h1>

      {/* Sección del Servicio Destacado (el grande de arriba) */}
      <div className="featured-service">
        <div className="featured-image-container">
          <img src="/images/servicio-01.jpg" alt="Servicio Principal Destacado" className="featured-service-image" />
          {/* Opcional: Overlay de color para la imagen, similar a los hero-image */}
          <div className="image-overlay"></div>
        </div>
        <div className="featured-content">
          <span className="featured-tag">SERVICIO DESTACADO</span>
          <h2>Consultoría Estratégica Digital Avanzada</h2>
          <p>Ofrecemos planes de transformación digital personalizados, analizando tu negocio a fondo para identificar oportunidades, optimizar procesos y construir una presencia online robusta. Nuestro enfoque se centra en resultados medibles y en el crecimiento sostenible a largo plazo.</p>
          <a href="/contacto" className="read-more-link">Solicitar Información →</a>
        </div>
      </div>

      {/* Sección de la Cuadrícula de Servicios (los más pequeños de abajo) */}
      <div className="services-grid">
        {/* Tarjeta de Servicio 1 */}
        <div className="service-card">
          <div className="service-icon">
            <img src="/images/icono-analisis.png" alt="Análisis de Datos" />
          </div>
          <h3>Análisis de Datos & Business Intelligence</h3>
          <p>Transformamos tus datos en información valiosa para una toma de decisiones inteligente.</p>
          <a href="/servicios/analisis-datos" className="read-more-link">Ver más →</a>
        </div>

        {/* Tarjeta de Servicio 2 */}
        <div className="service-card">
          <div className="service-icon">
            <img src="/images/icono-seo.png" alt="SEO y SEM" />
          </div>
          <h3>SEO y SEM</h3>
          <p>Mejoramos tu visibilidad en buscadores para atraer más clientes potenciales.</p>
          <a href="/servicios/seo-sem" className="read-more-link">Ver más →</a>
        </div>

        {/* Tarjeta de Servicio 3 */}
        <div className="service-card">
          <div className="service-icon">
            <img src="/images/icono-desarrollo.png" alt="Desarrollo Web" />
          </div>
          <h3>Desarrollo Web y Apps</h3>
          <p>Creamos soluciones web y móviles a medida, intuitivas y de alto rendimiento.</p>
          <a href="/servicios/desarrollo" className="read-more-link">Ver más →</a>
        </div>

        {/* Tarjeta de Servicio 4 */}
        <div className="service-card">
          <div className="service-icon">
            <img src="/images/icono-marketing.png" alt="Marketing de Contenidos" />
          </div>
          <h3>Marketing de Contenidos</h3>
          <p>Desarrollamos estrategias de contenido que conectan con tu audiencia y generan leads.</p>
          <a href="/servicios/marketing-contenido" className="read-more-link">Ver más →</a>
        </div>

        {/* Puedes añadir más service-card aquí */}
      </div>
    </section>
  );
};

export default Servicios;