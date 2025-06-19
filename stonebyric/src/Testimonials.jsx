import React from 'react';
import { motion } from 'framer-motion';
import VariableProximity from './VariableProximity';
import { useLanguage } from './LanguageContext';

const texts = {
  es: {
    hero: 'Testimonios',
    testimonials: [
      'El trabajo fue impecable y el resultado superó nuestras expectativas. ¡Recomendados!|Cliente Satisfecho',
      'Profesionales, puntuales y con gran atención al detalle.|Arquitecto',
      'Contraté a Ric para reparar mis gradas delanteras, que se estaban desmoronando. Su equipo hizo un trabajo fantástico. No solo terminaron a tiempo, sino que también costó menos de lo presupuestado. Recomiendo Stone By Ric a cualquiera que necesite reparar trabajos en piedra.|JAMES T. - YELP',
      'Necesitaba reforzar una terraza para un jacuzzi. Stone By Ric vino muy recomendado y tenían razón. Ric y su equipo fueron profesionales, rápidos y superaron mis expectativas. ¡Los contrataría de nuevo! 5 estrellas.|DERRY B. - FACEBOOK',
      'Ric y su equipo hicieron un gran trabajo con nuestra nueva entrada y aceras. Los trabajadores fueron amables y profesionales. Ric supervisó todo y siempre estuvo disponible. El resultado fue mejor de lo que imaginamos. No podemos decir suficientes cosas buenas de RIC.|DAVE O. - GOOGLE',
      'Ric revistió toda la base de concreto de nuestra casa con piedra delgada, construyó escalones y drenaje. ¡El resultado fue fantástico! Parece una base de la era colonial, justo lo que queríamos. El precio fue razonable y la calidad, profesionalismo y habilidad de Ric y su equipo fue excelente.|GUY G. - GOOGLE'
    ]
  },
  en: {
    hero: 'Testimonials',
    testimonials: [
      'The work was impeccable and the result exceeded our expectations. Highly recommended!|Satisfied Client',
      'Professional, punctual, and with great attention to detail.|Architect',
      'I hired Ric to repair my front steps, which where falling apart. His team did a fantastic job. Not only did they finish the work on time, they also came in well under the price quoted. I would highly recommend Stone By Ric to anyone that’s looking to have existing stone work repaired.|JAMES T. - YELP',
      'Needed to have a deck reinforced for a hot tub. Stone By Ric came highly recommended and they were correct. Ric and his crew were professional, fast, and went above and beyond for the quality of work I was expecting. I would absolutely hire them again. 5 Stars!|DERRY B. - FACEBOOK',
      'Ric and his guys did a great job with our new driveway and walks. The workers were polite and professional. Ric oversaw all aspects of the project and was always available. The job came out better than we ever imagined. We can not say enough good things about RIC.|DAVE O. - GOOGLE',
      'We had Ric wrap the entire concrete foundation of our house with thin-stone, build some back steps, and install some foundation drainage. The final result was fantastic! It looks exactly like the colonial era stone foundation we were hoping for. Ric and his team did spectacular work, with final details around the windows and doors that really showed their craftsmanship. pricing was reasonable and I can’t say enough about the skill, professionalism, and quality of Ric and his team.|GUY G. - GOOGLE'
    ]
  }
};

export default function Testimonials() {
  const { lang } = useLanguage();
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
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
          }}
        >
          <div style={{
            transform: 'translateX(-18px)',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <VariableProximity
              label={texts[lang].hero}
              className={'variable-proximity variable-proximity-demo'}
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
                textAlign: 'center',
                width: '100%',
                maxWidth: 400,
              }}
            />
          </div>
        </div>
      </section>
      <div className="section testimonials-page">
        <motion.h2 initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>{texts[lang].hero}</motion.h2>
        <div className="testimonial-list">
          {texts[lang].testimonials.map((t, i) => {
            const [text, author] = t.split('|');
            return (
              <motion.div className="testimonial" key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 + i * 0.2 }}>
                {`“${text}”`}
                <br /><strong>— {author}</strong>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
