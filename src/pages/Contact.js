import React from 'react';
import './Home.css';

function Contact() {
  return (
    <div className="page contact">
      <section className="section">
        <h1 className="animate__animated animate__fadeInRight">Contáctanos</h1>
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

export default Contact;
