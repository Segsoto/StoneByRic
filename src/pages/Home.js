import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="page home">
      {/* Hero Section */}
      <section className="home-hero animate__animated animate__fadeInDown">
        <h1>Stone By Ric</h1>
        <p className="animate__animated animate__fadeInUp animate__delay-1s">Expertos en piedra natural y diseño de espacios únicos</p>
        <a href="#contacto" className="btn animate__animated animate__fadeInUp animate__delay-2s">Contáctanos</a>
      </section>
      <section className="section" id="servicios">
        <h2 className="animate__animated animate__fadeInLeft">Nuestros Servicios</h2>
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
      <section className="section" id="galeria">
        <h2 className="animate__animated animate__fadeInRight">Galería de Proyectos</h2>
        <div className="gallery">
          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="Proyecto 1" className="animate__animated animate__zoomIn" />
          <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80" alt="Proyecto 2" className="animate__animated animate__zoomIn animate__delay-1s" />
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" alt="Proyecto 3" className="animate__animated animate__zoomIn animate__delay-2s" />
        </div>
      </section>
      <section className="section" id="testimonios">
        <h2 className="animate__animated animate__fadeInLeft">Testimonios</h2>
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
      <section className="section" id="contacto">
        <h2 className="animate__animated animate__fadeInRight">Contáctanos</h2>
        <form className="contact-form animate__animated animate__fadeInUp">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Mensaje" rows="4" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
