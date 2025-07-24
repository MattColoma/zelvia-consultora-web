import React, { useState } from 'react';
import '../styles/Navbar.css'; // Asegúrate de crear este archivo CSS o actualizarlo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mantengo isOpen por si lo quieres usar para un futuro menú móvil.

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo de Zelbia */}
        <div className="nav-logo">
          <a href="#home">
            <img src="/images/1.png" width={100} alt="Zelbia Consultora" /> {/* Asegúrate que '1.png' es tu logo de Zelbia */}
          </a>
        </div>

        {/* Contenedor de enlaces de navegación */}
        <div className="nav-links-wrapper"> {/* Nuevo contenedor para los enlaces */}
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">Sobre Nosotros</a>
          <a href="#servicios" className="nav-item">Servicios</a>
          
        </div>

        {/* Contenedor de botones de acción */}
        <div className="nav-actions">
          {/* Aquí puedes añadir la lógica para "Sign In" si la tienes */}
          <button className="nav-button nav-sign-in">Sign In</button>
          <a href="#contacto" className="nav-button nav-contact-us">Contact Us</a> {/* Botón "Contact Us" */}
        </div>

        {/* Opcional: El botón de hamburguesa se oculta por defecto en escritorio, se puede mostrar en móvil con CSS */}
        {/* Lo mantengo en el código por si lo reutilizas para móvil, pero el CSS lo ocultará en escritorio */}
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className="hamburger"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;