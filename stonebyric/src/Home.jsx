import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import VariableProximity from './VariableProximity';
import { useLanguage } from './LanguageContext';

const texts = {
  es: {
    hero: 'Bienvenido a Stone By Ric',
    subtitle: 'Expertos en piedra, concreto y restauración',
    cta: 'Contáctanos',
    section1Title: 'Sobre nuestro trabajo',
    section1Text: 'Expertos en piedra natural y diseño de espacios únicos. Descubre nuestros servicios, proyectos, testimonios y contáctanos para transformar tu espacio.',
    section2Title: 'Sobre nuestro trabajo',
    section2Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod nunc.',
    section3Title: 'Proyectos recientes',
    section3Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod nunc. Suspendisse potenti. Mauris euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.',
    section4Title: '¿Por qué elegirnos?',
    section4List: [
      'Calidad garantizada en cada proyecto',
      'Equipo profesional y experimentado',
      'Atención personalizada',
      'Materiales de primera'
    ],
    section4Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.',
    section5Title: 'Más información',
    section5Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.'
  },
  en: {
    hero: 'Welcome to Stone By Ric',
    subtitle: 'Experts in stone, concrete and restoration',
    cta: 'Contact Us',
    section1Title: 'About Our Work',
    section1Text: 'Experts in natural stone and unique space design. Discover our services, projects, testimonials, and contact us to transform your space.',
    section2Title: 'About Our Work',
    section2Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod nunc.',
    section3Title: 'Recent Projects',
    section3Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod nunc. Suspendisse potenti. Mauris euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.',
    section4Title: 'Why Choose Us?',
    section4List: [
      'Quality guaranteed in every project',
      'Professional and experienced team',
      'Personalized attention',
      'Top quality materials'
    ],
    section4Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.',
    section5Title: 'More Information',
    section5Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.'
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function Home() {
  const floatRef = useRef(null);
  const animRef = useRef(null);
  const containerRef = useRef(null);
  const { lang } = useLanguage();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0 && floatRef.current && !animRef.current) {
        animRef.current = gsap.to(floatRef.current, {
          y: -30,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          duration: 2,
        });
      } else if (window.scrollY === 0 && animRef.current) {
        animRef.current.kill();
        gsap.set(floatRef.current, { y: 0 });
        animRef.current = null;
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animRef.current) animRef.current.kill();
    };
  }, []);

  return (
    <>
      <section
        className="hero hero-inicio"
        style={{
          width: '100vw',
          minHeight: '320px',
          background: `url('/fondo1.jpg') center/cover no-repeat`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: 48,
        }}
        ref={containerRef}
      >
        <VariableProximity
          label={lang === 'es' ? 'Inicio' : 'Home'}
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
      <div className="section home-page" style={{ maxWidth: 1400, margin: '0 auto', padding: '40px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 56, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          <motion.img
            src="/LogoRick.png"
            alt="Logo Stone By Ric"
            style={{ width: 320, height: 320, objectFit: 'contain', borderRadius: 32, boxShadow: '0 4px 32px rgba(0,0,0,0.18)', background: '#18181b' }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <div style={{ flex: 1, minWidth: 320, maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 28 }}>
            <motion.h2 initial="hidden" animate="visible" variants={fadeIn} style={{ fontSize: 38, fontWeight: 700, marginBottom: 8 }}>
              {texts[lang].hero}
            </motion.h2>
            <motion.p initial="hidden" animate="visible" variants={fadeIn} style={{ fontSize: 20, lineHeight: 1.6 }}>
              {texts[lang].section1Text}
            </motion.p>
          </div>
        </div>
        <motion.section initial="hidden" animate="visible" variants={fadeIn} style={{ fontSize: 20, marginBottom: 28, textAlign: 'center', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
          {texts[lang].section2Text}
        </motion.section>
        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap', marginBottom: 48 }}>
          <motion.div
            style={{ flex: 1, minWidth: 320, maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 28 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
          >
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>{texts[lang].section2Title}</h2>
            <p style={{ fontSize: 20, lineHeight: 1.6 }}>
              {texts[lang].section2Text}
            </p>
          </motion.div>
          <motion.div
            style={{ flex: 1, minWidth: 320, maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 28 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={2}
          >
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>{texts[lang].section3Title}</h2>
            <p style={{ fontSize: 20, lineHeight: 1.6 }}>
              {texts[lang].section3Text}
            </p>
          </motion.div>
        </div>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 56, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{ flex: 1, minWidth: 320, maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 28, justifyContent: 'center' }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>{texts[lang].section4Title}</h2>
            <ul style={{ fontSize: 20, lineHeight: 1.6, marginBottom: 18 }}>
              {texts[lang].section4List.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <p style={{ fontSize: 20, lineHeight: 1.6 }}>
              {texts[lang].section4Text}
            </p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{ flex: 1, minWidth: 320, maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 28, justifyContent: 'center' }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>{texts[lang].section5Title}</h2>
            <p style={{ fontSize: 20, lineHeight: 1.6 }}>
              {texts[lang].section5Text}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
