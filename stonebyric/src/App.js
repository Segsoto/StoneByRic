import React from 'react';
import { motion } from 'framer-motion';
import SidebarMenu from './SidebarMenu';
import Topbar from './Topbar';
import Gallery from './Gallery';
import './App.css';

function App() {
  return (
    <div className="landing-root">
      <SidebarMenu />
      <Topbar />
      {/* Hero Section (solo móvil) */}
      <section className="hero mobile-only">
        <motion.div className="hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1>Stone By Ric</h1>
          <p>Expertos en piedra natural y diseño de espacios únicos</p>
          <a href="#contact" className="cta-btn">Contáctanos</a>
        </motion.div>
      </section>
      {/* Sobre Nosotros */}
      <section className="section about" id="about">
        <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>Sobre Nosotros</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Somos una empresa dedicada a la transformación de espacios con piedra natural, combinando tradición, innovación y calidad en cada proyecto.
        </motion.p>
      </section>
      {/* Servicios */}
      <section className="section services" id="servicios">
        <motion.h2 initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>Nuestros Servicios</motion.h2>
        <div className="service-list">
          <motion.div className="service-card" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h3>Instalación de piedra</h3>
            <p>Muros, fachadas, pisos y detalles arquitectónicos en piedra natural.</p>
          </motion.div>
          <motion.div className="service-card" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h3>Diseño personalizado</h3>
            <p>Asesoría y diseño a la medida para proyectos residenciales y comerciales.</p>
          </motion.div>
          <motion.div className="service-card" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <h3>Restauración</h3>
            <p>Reparación y mantenimiento de estructuras de piedra existentes.</p>
          </motion.div>
        </div>
      </section>
      {/* Galería */}
      <section className="section gallery" id="galeria">
        <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>Galería de Proyectos</motion.h2>
        <Gallery />
      </section>
      {/* Testimonios */}
      <section className="section testimonials" id="testimonios">
        <motion.h2 initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>Testimonios</motion.h2>
        <div className="testimonial-list">
          <motion.div className="testimonial" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            "El trabajo fue impecable y el resultado superó nuestras expectativas. ¡Recomendados!"
            <br /><strong>- Cliente Satisfecho</strong>
          </motion.div>
          <motion.div className="testimonial" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            "Profesionales, puntuales y con gran atención al detalle."
            <br /><strong>- Arquitecto</strong>
          </motion.div>
        </div>
      </section>
      {/* Contacto */}
      <section className="section contact" id="contact">
        <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>Contáctanos</motion.h2>
        <motion.form className="contact-form" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Mensaje" rows="4" required></textarea>
          <button type="submit">Enviar</button>
        </motion.form>
      </section>
      {/* Footer */}
      <footer className="footer">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          © {new Date().getFullYear()} Stone By Ric. Todos los derechos reservados.
        </motion.p>
      </footer>
    </div>
  );
}

export default App;
