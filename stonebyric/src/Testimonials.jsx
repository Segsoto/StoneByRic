import React from 'react';
import { motion } from 'framer-motion';
import VariableProximity from './VariableProximity';

export default function Testimonials() {
  return (
    <>
      <section
        className="hero hero-testimonials"
        style={{
          width: '100vw',
          minHeight: '320px',
          background: `url('/fondo5.jpg') center/cover no-repeat`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: 48,
        }}
      >
        <VariableProximity
          label={'Testimonios'}
          className={'variable-proximity-demo'}
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={null}
          radius={100}
          falloff='linear'
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: '#fff',
            textShadow: '0 4px 32px #000',
            letterSpacing: 2,
            zIndex: 2,
            display: 'inline-block',
            background: 'none',
            borderRadius: 0,
            padding: 0,
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.45)',
          zIndex: 1,
          borderRadius: 0,
        }} />
      </section>
      <div className="section testimonials-page">
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
      </div>
    </>
  );
}
