import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="section contact-page">
      <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>Contáctanos</motion.h2>
      <motion.form className="contact-form" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Mensaje" rows="4" required></textarea>
        <button type="submit">Enviar</button>
      </motion.form>
    </div>
  );
}
