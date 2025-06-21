import React from 'react';
import { motion } from 'framer-motion';
import VariableProximity from './VariableProximity';
import { useLanguage } from './LanguageContext';
import PortfolioGrid from './PortfolioGrid';

const texts = {
  es: {
    hero: 'Portafolio de Proyectos',
  },
  en: {
    hero: 'Project Portfolio',
  },
};

export default function GalleryPage() {
  const { lang } = useLanguage();
  return (
    <>
      <section
        className="hero hero-gallery"
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
              label={lang === 'es' ? 'Portafolio' : 'Portfolio'}
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
      <div className="section gallery-page">
        <motion.h2 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 12 }}
          style={{
            fontSize: 38,
            fontWeight: 800,
            letterSpacing: 1.5,
            color: '#004AAD',
            textShadow: '0 2px 16px #fff, 0 4px 32px #0002',
            marginBottom: 32,
            textAlign: 'center',
            background: 'linear-gradient(90deg, #004AAD 60%, #2ECC71 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {texts[lang].hero}
        </motion.h2>
        <PortfolioGrid />
      </div>
    </>
  );
}
