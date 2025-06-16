import React from 'react';
import './Home.css';

function About() {
  return (
    <div className="page about">
      <section className="section">
        <h1 className="animate__animated animate__fadeInLeft">Sobre Nosotros</h1>
        <p className="animate__animated animate__fadeInUp animate__delay-1s">
          Somos especialistas en piedra natural, con años de experiencia creando espacios únicos y elegantes para hogares y empresas. Nuestro equipo combina tradición y modernidad para ofrecer resultados excepcionales.
        </p>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Equipo Stone By Ric" style={{width:'100%',maxWidth:'500px',borderRadius:'10px',marginTop:'2rem'}} className="animate__animated animate__zoomIn animate__delay-2s" />
      </section>
    </div>
  );
}

export default About;
