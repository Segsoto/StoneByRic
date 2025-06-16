import React from 'react';
import './Topbar.css';

const links = [
  { href: '#about', label: 'Sobre Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contact', label: 'Contacto' },
];

const social = [
  { href: 'https://www.facebook.com/', icon: '🌐', label: 'Facebook' },
  { href: 'https://www.instagram.com/', icon: '📸', label: 'Instagram' },
  { href: 'https://wa.me/50688888888', icon: '💬', label: 'WhatsApp' },
];

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-logo">Stone By Ric</div>
      <nav className="topbar-nav">
        {links.map(link => (
          <a key={link.href} href={link.href} className="topbar-link">
            {link.label}
          </a>
        ))}
      </nav>
      <div className="topbar-social">
        {social.map(s => (
          <a key={s.href} href={s.href} className="topbar-social-link" target="_blank" rel="noopener noreferrer" aria-label={s.label}>
            <span role="img" aria-label={s.label}>{s.icon}</span>
          </a>
        ))}
      </div>
    </header>
  );
}
