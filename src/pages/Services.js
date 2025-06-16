import React from 'react';
import './Home.css';

function Services() {
  return (
    <div className="page services">
      <section className="section">
        <h1 className="animate__animated animate__fadeInLeft">Nuestros Servicios</h1>
        <div className="services">
          <div className="service-card animate__animated animate__zoomIn">
            <h3>Instalación de piedra</h3>
            <p>Muros, fachadas, pisos y detalles arquitectónicos en piedra natural.</p>
          </div>
          <div className="service-card animate__animated animate__zoomIn animate__delay-1s">
            <h3>Diseño personalizado</h3>
            <p>Asesoría y diseño a la medida para proyectos residenciales y comerciales.</p>
          </div>
          <div className="service-card animate__animated animate__zoomIn animate__delay-2s">
            <h3>Restauración</h3>
            <p>Reparación y mantenimiento de estructuras de piedra existentes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
