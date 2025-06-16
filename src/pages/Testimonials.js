import React from 'react';
import './Home.css';

function Testimonials() {
  return (
    <div className="page testimonials">
      <section className="section">
        <h1 className="animate__animated animate__fadeInLeft">Testimonios</h1>
        <div className="testimonials">
          <div className="testimonial animate__animated animate__fadeInUp">
            "El trabajo fue impecable y el resultado superó nuestras expectativas. ¡Recomendados!"<br />
            <strong>- Cliente Satisfecho</strong>
          </div>
          <div className="testimonial animate__animated animate__fadeInUp animate__delay-1s">
            "Profesionales, puntuales y con gran atención al detalle."
            <br /><strong>- Arquitecto</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
