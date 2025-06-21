import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const texts = {
  es: {
    title: 'Contáctanos para tu proyecto digital',
    name: 'Nombre',
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    news: 'Recibir noticias y actualizaciones',
    reason: 'Motivo de la consulta',
    stonework: 'Desarrollo Web',
    snow: 'Aplicaciones a Medida',
    debris: 'Consultoría Digital',
    message: 'Mensaje',
    send: 'Enviar',
    required: '(requerido)',
  },
  en: {
    title: 'Contact us for your digital project',
    name: 'Name',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    news: 'Sign up for news and updates',
    reason: 'Reason For Inquiry',
    stonework: 'Web Development',
    snow: 'Custom Applications',
    debris: 'Digital Consulting',
    message: 'Message',
    send: 'Submit',
    required: '(required)',
  }
};

export default function Contact() {
  const { lang } = useLanguage();
  return (
    <>
      <section
        className="hero hero-contact"
        style={{
          width: '100vw',
          minHeight: '240px',
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
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{
                color: '#fff',
                fontSize: 48,
                fontWeight: 900,
                zIndex: 2,
                textShadow: '0 4px 32px #000',
                letterSpacing: 2,
                margin: 0,
              }}
            >
              {texts[lang].title}
            </motion.h2>
          </div>
        </div>
      </section>
      <div className="section contact-page">
        <motion.form 
          className="contact-form" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.7 }}
          action="https://formspree.io/f/mkgbzrqj" 
          method="POST"
        >
          <label style={{fontWeight:'bold'}}>{texts[lang].title}</label>
          <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
            <div style={{flex:1,minWidth:120}}>
              <label>{texts[lang].firstName} <span style={{color:'#b1001a'}}>{texts[lang].required}</span></label>
              <input type="text" name="firstName" placeholder={texts[lang].firstName} required />
            </div>
            <div style={{flex:1,minWidth:120}}>
              <label>{texts[lang].lastName} <span style={{color:'#b1001a'}}>{texts[lang].required}</span></label>
              <input type="text" name="lastName" placeholder={texts[lang].lastName} required />
            </div>
          </div>
          <label>{texts[lang].email} <span style={{color:'#b1001a'}}>{texts[lang].required}</span></label>
          <input type="email" name="email" placeholder={texts[lang].email} required />
          <label>{texts[lang].phone}</label>
          <input type="tel" name="phone" placeholder={texts[lang].phone} />
          <label>
            <input type="checkbox" name="news" style={{marginRight:8}} />
            {texts[lang].news}
          </label>
          <label>{texts[lang].reason}</label>
          <select name="reason">
            <option value="">--</option>
            <option value="stonework">{texts[lang].stonework}</option>
            <option value="snow">{texts[lang].snow}</option>
            <option value="debris">{texts[lang].debris}</option>
          </select>
          <label>{texts[lang].message} <span style={{color:'#b1001a'}}>{texts[lang].required}</span></label>
          <textarea name="message" placeholder={texts[lang].message} rows="4" required></textarea>
          <button type="submit">{texts[lang].send}</button>
        </motion.form>
      </div>
    </>
  );
}
