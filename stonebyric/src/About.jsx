import React from 'react';
import { motion } from 'framer-motion';
import VariableProximity from './VariableProximity';
import { useLanguage } from './LanguageContext';

const texts = {
  es: {
    hero: 'Sobre Nosotros',
    experiencia: 'EXPERIENCIA',
    experienciaText1: 'El enfoque de Stone By Ric está orientado hacia la calidad y la responsabilidad. Diseñamos y construimos una variedad de proyectos de mampostería personalizados en todo el condado de Fairfield, Connecticut. Ya sea que desee agregar un patio de piedra bandera, reparar una chimenea/estufa de leña o construir un camino de piedra, podemos crear una estructura hermosa y duradera que satisfaga sus necesidades. También actualizamos y reparamos estructuras existentes, si es factible.',
    experienciaText2: 'Comencé como aprendiz de mi padre y mi tío hace 25 años. Luego pasé a trabajar para empresas de mampostería más grandes en la zona, hasta establecer con éxito Stone By Ric. He estado prestando servicios en el área del condado de Fairfield, Connecticut, durante más de 20 años.',
    lema: '"LA MAMPOSTERÍA CON RESPONSABILIDAD" ES NUESTRO LEMA',
    lemaText: 'Tenemos un gran éxito con nuestra fórmula para crear relaciones positivas y usar la fuerza de nuestra reputación y experiencia para probar nuestro lema. Stone By Ric es diferente porque "Ric" siempre estará presente, desde los planos iniciales hasta el trabajo terminado. Los detalles de seguridad nunca se pasan por alto y seguirán siendo una de nuestras principales prioridades.',
    experiencia40: 'Con una experiencia combinada de 40 años, Stone By Ric y sus masones utilizan experiencia, innovación, habilidades y creatividad para especializarse artísticamente en mampostería. Stone By Ric se enorgullece de abordar un contrato a la vez. Por lo tanto, cada cliente puede estar seguro de que estaremos presentes desde el primer día hasta la finalización del servicio. Esto nos mantiene organizados y ayuda a reducir costos para el propietario de la vivienda. Cada detalle relacionado con el servicio a realizar será comunicado entre Stone By Ric y los propietarios de viviendas antes del inicio de dicho servicio.',
    local: 'Somos una empresa local, con sede en Norwalk y aseguramos a cada cliente que tendrá una línea directa de comunicación con Stone By Ric. Mantenemos un lugar de trabajo limpio para ofrecer a nuestros empleados y clientes un entorno seguro. No se permite fumar ni beber en los lugares de trabajo. Los empleados de Stone By Ric usan uniformes de Stone By Ric en cada lugar de trabajo, todos los días. Nuestros masones han estado trabajando juntos durante varios años y se responsabilizan mutuamente. Nos enorgullecemos de estos puntos clave para destacarnos de otras empresas de mampostería en la zona.'
  },
  en: {
    hero: 'About Us',
    experiencia: 'EXPERIENCE',
    experienciaText1: 'Stone By Ric focuses on quality and responsibility. We design and build a variety of custom masonry projects throughout Fairfield County, Connecticut. Whether you want to add a flagstone patio, repair a chimney/wood stove, or build a stone walkway, we can create a beautiful and durable structure to meet your needs. We also update and repair existing structures, if feasible.',
    experienciaText2: 'I started as an apprentice to my father and uncle 25 years ago. I then worked for larger masonry companies in the area, until I successfully established Stone By Ric. I have been serving the Fairfield County, Connecticut area for over 20 years.',
    lema: '"MASONRY WITH RESPONSIBILITY" IS OUR MOTTO',
    lemaText: 'We have great success with our formula for building positive relationships and using the strength of our reputation and experience to prove our motto. Stone By Ric is different because "Ric" will always be present, from the initial plans to the finished work. Safety details are never overlooked and will remain one of our top priorities.',
    experiencia40: 'With a combined experience of 40 years, Stone By Ric and its masons use expertise, innovation, skills, and creativity to artistically specialize in masonry. Stone By Ric prides itself on taking one contract at a time. Therefore, every client can be sure we will be present from day one until the service is completed. This keeps us organized and helps reduce costs for the homeowner. Every detail related to the service to be performed will be communicated between Stone By Ric and homeowners before the start of such service.',
    local: 'We are a local company, based in Norwalk, and assure every client that they will have a direct line of communication with Stone By Ric. We maintain a clean workplace to offer our employees and clients a safe environment. Smoking and drinking are not allowed at job sites. Stone By Ric employees wear Stone By Ric uniforms at every job site, every day. Our masons have been working together for several years and hold each other accountable. We take pride in these key points to stand out from other masonry companies in the area.'
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function About() {
  const { lang } = useLanguage();
  return (
    <>
      <section
        className="hero hero-about"
        style={{
          width: '100vw',
          minHeight: '320px',
          background: `url('/fondo2.jpeg') center/cover no-repeat`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: 48,
        }}
      >
        <VariableProximity
          label={texts[lang].hero}
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
      <div className="section about-page" style={{ maxWidth: 1400, margin: '0 auto', padding: '40px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 56, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          <motion.img
            src="/FotoRick.jpg"
            alt="Retrato de Ric"
            style={{ width: 400, height: 400, objectFit: 'cover', borderRadius: 32, boxShadow: '0 4px 32px rgba(0,0,0,0.18)' }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <div style={{ flex: 1, minWidth: 320, maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 28 }}>
            <motion.h4 initial="hidden" animate="visible" variants={fadeIn} style={{ color: '#b8860b', fontWeight: 700, letterSpacing: 2, marginBottom: 8, fontSize: 22 }}>
              {texts[lang].experiencia}
            </motion.h4>
            <motion.p initial="hidden" animate="visible" variants={fadeIn} style={{ fontSize: 20, lineHeight: 1.6 }}>
              {texts[lang].experienciaText1}
            </motion.p>
            <motion.p initial="hidden" animate="visible" variants={fadeIn} style={{ fontSize: 20, lineHeight: 1.6 }}>
              {texts[lang].experienciaText2}
            </motion.p>
          </div>
        </div>
        <motion.h3 initial="hidden" animate="visible" variants={fadeIn} style={{ margin: '0 0 32px', color: '#b8860b', fontWeight: 'bold', textAlign: 'center', fontSize: 26, letterSpacing: 1 }}>
          {texts[lang].lema}
        </motion.h3>
        <motion.p initial="hidden" animate="visible" variants={fadeIn} style={{ fontSize: 20, marginBottom: 28, textAlign: 'center', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
          {texts[lang].lemaText}
        </motion.p>
        <motion.p initial="hidden" animate="visible" variants={fadeIn} style={{ fontSize: 20, marginBottom: 28, textAlign: 'center', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
          {texts[lang].experiencia40}
        </motion.p>
        <motion.p initial="hidden" animate="visible" variants={fadeIn} style={{ fontSize: 20, marginBottom: 0, textAlign: 'center', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
          {texts[lang].local}
        </motion.p>
      </div>
    </>
  );
}
