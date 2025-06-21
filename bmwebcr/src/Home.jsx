import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import VariableProximity from './VariableProximity';
import { useLanguage } from './LanguageContext';

const texts = {
  es: {
    hero: 'Bienvenido a BMWebSolutions Cr',
    subtitle: 'Expertos en desarrollo web y soluciones digitales',
    cta: 'Contáctanos',
    section1Title: 'Sobre nuestro trabajo',
    section1Text: 'Expertos en desarrollo web, diseño de aplicaciones y soluciones digitales a medida. Descubre nuestros servicios, proyectos y contáctanos para impulsar tu presencia online.',
    section2Title: '¿Por qué elegirnos?',
    section2Text: 'En BMWebSolutions Cr nos especializamos en crear sitios web modernos, aplicaciones personalizadas y plataformas digitales que ayudan a tu empresa a crecer. Nuestro equipo combina creatividad, tecnología y experiencia para ofrecer resultados de alto impacto.',
    section3Title: 'Proyectos recientes',
    section3Text: 'Conoce algunos de nuestros desarrollos más recientes: desde páginas corporativas hasta sistemas de gestión y tiendas en línea.',
    section4Title: 'Ventajas de trabajar con nosotros',
    section4List: [
      'Calidad garantizada en cada proyecto',
      'Equipo profesional y experimentado en tecnología',
      'Atención personalizada y soporte continuo',
      'Soluciones innovadoras y escalables'
    ],
    section4Text: 'Nuestro compromiso es tu éxito digital. Trabajamos contigo en cada etapa del proyecto para asegurar resultados que superen tus expectativas.',
    section5Title: 'Más información',
    section5Text: '¿Listo para transformar tu negocio? Contáctanos y recibe una asesoría gratuita sobre tu próximo proyecto digital.'
  },
  en: {
    hero: 'Welcome to BMWebSolutions Cr',
    subtitle: 'Experts in web development and digital solutions',
    cta: 'Contact Us',
    section1Title: 'About Our Work',
    section1Text: 'Experts in web development, app design, and custom digital solutions. Discover our services, projects, and contact us to boost your online presence.',
    section2Title: 'Why Choose Us?',
    section2Text: 'At BMWebSolutions Cr we specialize in creating modern websites, custom applications, and digital platforms that help your business grow. Our team combines creativity, technology, and experience to deliver high-impact results.',
    section3Title: 'Recent Projects',
    section3Text: 'Check out some of our latest developments: from corporate websites to management systems and online stores.',
    section4Title: 'Advantages of working with us',
    section4List: [
      'Quality guaranteed in every project',
      'Professional and experienced tech team',
      'Personalized attention and ongoing support',
      'Innovative and scalable solutions'
    ],
    section4Text: 'Our commitment is your digital success. We work with you at every stage to ensure results that exceed your expectations.',
    section5Title: 'More Information',
    section5Text: 'Ready to transform your business? Contact us and get a free consultation for your next digital project.'
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
        className="hero hero-home"
        style={{
          width: '100vw',
          minHeight: '320px',
          background: `url('/FONDOINICIO.jpg') center/cover no-repeat`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: 48,
        }}
        ref={containerRef}
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
              label={lang === 'es' ? 'Inicio' : 'Home'}
              className={'variable-proximity variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={null}
              radius={100}
              falloff='linear'
              style={{
                fontSize: 48,
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
                maxWidth: 320,
              }}
            />
          </div>
        </div>
      </section>
      <div className="section home-page" style={{ maxWidth: 1400, margin: '0 auto', padding: '40px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 56, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          <motion.img
            src="/LOGOPNG.png"
            alt="Logo BMWebSolutions Cr"
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
            <Link to="/contact" style={{ alignSelf: 'center', marginTop: 18, textDecoration: 'none' }}>
              <button
                style={{
                  background: 'linear-gradient(90deg, #004AAD 60%, #2ECC71 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 22,
                  padding: '16px 38px',
                  border: 'none',
                  borderRadius: 12,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                  cursor: 'pointer',
                  transition: 'background 0.2s, transform 0.2s',
                  letterSpacing: 1,
                  outline: 'none',
                  marginTop: 8,
                  textShadow: '0 2px 8px #004AAD',
                  minWidth: 220,
                }}
                onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #2ECC71 60%, #004AAD 100%)'}
                onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #004AAD 60%, #2ECC71 100%)'}
              >
                {texts[lang].cta}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
