import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './SidebarMenu.css';
import { useLanguage } from './LanguageContext';

const links = [
  { href: '/', label: { es: 'Inicio', en: 'Home' } },
  { href: '/about', label: { es: 'Sobre Nosotros', en: 'About Us' } },
  { href: '/services', label: { es: 'Servicios', en: 'Services' } },
  { href: '/gallery', label: { es: 'Galería', en: 'Gallery' } },
  { href: '/testimonials', label: { es: 'Testimonios', en: 'Testimonials' } },
  { href: '/contact', label: { es: 'Contacto', en: 'Contact' } },
];

const social = [
  { href: 'https://www.facebook.com/stonebyric', icon: <svg width="28" height="28" viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" fill="#1877F3"/><path d="M34.5 25h-6v15h-6V25h-4v-5h4v-3.5C22.5 13.57 24.57 11.5 28.5 11.5h4v5h-4c-.55 0-1 .45-1 1V20h6l-1 5z" fill="#fff"/></svg>, label: 'Facebook' },
  { href: 'https://www.instagram.com/stonebyric/', icon: <svg width="28" height="28" viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" fill="#E4405F"/><g><circle cx="25" cy="25" r="8" fill="#fff"/><circle cx="25" cy="25" r="5.5" fill="#E4405F"/><circle cx="34" cy="16" r="2" fill="#fff"/></g></svg>, label: 'Instagram' },
  { href: 'https://wa.me/50689652370', icon: <svg width="28" height="28" viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" fill="#25D366"/><path d="M36.6 29.7c-.5-.2-2.8-1.4-3.2-1.6-.4-.2-.7-.2-1 .2-.3.4-1.1 1.6-1.4 1.9-.3.3-.5.4-1 .1-2.7-1.3-4.5-2.3-6.3-5.1-.5-.8.5-.7 1.4-2.3.2-.3.1-.6 0-.8-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.8-1-.8-.3 0-.6 0-.9 0-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.7 0 2.1 1.5 4.1 1.7 4.4.2.3 3 4.7 7.2 6.4.9.4 1.6.6 2.1.8.9.3 1.7.3 2.3.2.7-.1 2.5-1 2.8-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.9-.5z" fill="#fff"/></svg>, label: 'WhatsApp' }
];

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  return (
    <>
      {/* Oculta el botón del menú cuando el menú lateral está abierto */}
      {!open && (
        <button className="menu-btn menu-btn-right" onClick={() => setOpen(true)} aria-label="Abrir menú">
          <span className="menu-icon">☰</span>
        </button>
      )}
      <Dialog open={open} onClose={() => setOpen(false)} className="sidebar-dialog">
        <div className="sidebar-overlay" aria-hidden="true" onClick={() => setOpen(false)} style={{ zIndex: 1001 }} />
        <motion.div 
          className="sidebar-panel sidebar-panel-right"
          initial={{ x: '100%' }}
          animate={{ x: open ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ zIndex: 1002, position: 'fixed' }}
        >
          <button className="close-btn" onClick={() => setOpen(false)} aria-label="Cerrar menú">
            ×
          </button>
          <div className="sidebar-logo-container">
            <img src="/LogoRick.png" alt="Logo Stone By Ric" className="sidebar-logo-img" />
            <span className="sidebar-logo-text">Stone By Ric</span>
          </div>
          <nav className="sidebar-nav">
            {links.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="sidebar-link"
                onClick={() => {
                  setOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {link.label[lang]}
              </Link>
            ))}
          </nav>
          <button className="lang-btn" onClick={toggleLang} aria-label="Cambiar idioma" style={{margin: '16px auto 0 auto', display: 'block'}}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <div className="sidebar-social" style={{ marginTop: 32, display: 'flex', justifyContent: 'center', gap: 18 }}>
            {social.map(s => (
              <a key={s.href} href={s.href} className="sidebar-social-link" target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ fontSize: 26 }}>
                <span role="img" aria-label={s.label}>{s.icon}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </Dialog>
    </>
  );
}
