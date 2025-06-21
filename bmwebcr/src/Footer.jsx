import React from 'react';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';
import './Footer.css';

const socialLinks = [
  {
    href: 'https://www.facebook.com/bmwebcr',
    label: 'Facebook',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#18181b"/><path d="M15.5 8.5h-2V7.5c0-.4.2-.5.4-.5h1.6V5h-2c-1.7 0-2.5 1-2.5 2.5V8.5H8.5V11h2v6h2.5v-6h2l.5-2.5z" fill="#fff"/></svg>
    )
  },
  {
    href: 'https://www.instagram.com/bmwebcr',
    label: 'Instagram',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#18181b"/><rect x="7" y="7" width="10" height="10" rx="4" fill="#fff"/><circle cx="12" cy="12" r="3" fill="#18181b"/><circle cx="16" cy="8" r="1" fill="#18181b"/></svg>
    )
  },
  {
    href: 'https://wa.me/50688888888',
    label: 'WhatsApp',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#18181b"/><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/></svg>
    )
  }
];

const links = [
  { to: '/', label: { es: 'Inicio', en: 'Home' } },
  { to: '/about', label: { es: 'Sobre Nosotros', en: 'About Us' } },
  { to: '/services', label: { es: 'Servicios', en: 'Services' } },
  { to: '/gallery', label: { es: 'Galería', en: 'Gallery' } },
  { to: '/testimonials', label: { es: 'Testimonios', en: 'Testimonials' } },
  { to: '/contact', label: { es: 'Contacto', en: 'Contact' } },
];

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="footer-main">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/LOGOPNG.png" alt="Stone By Ric Logo" className="footer-logo" />
          <span className="footer-title">BMWebSolutions Cr</span>
        </div>
        <nav className="footer-nav">
          {links.map(link => (
            <Link key={link.to} to={link.to} className="footer-link">
              {link.label[lang]}
            </Link>
          ))}
        </nav>
        <div className="footer-social">
          {socialLinks.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="footer-social-icon">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Stone By Ric. All rights reserved.</span>
      </div>
    </footer>
  );
}
