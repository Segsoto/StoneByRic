import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre Nosotros' },
  { href: '/services', label: 'Servicios' },
  { href: '/gallery', label: 'Galería' },
  { href: '/testimonials', label: 'Testimonios' },
  { href: '/contact', label: 'Contacto' },
];

const social = [
  { href: 'https://www.facebook.com/', icon: '🌐', label: 'Facebook' },
  { href: 'https://www.instagram.com/', icon: '📸', label: 'Instagram' },
  { href: 'https://wa.me/50688888888', icon: '💬', label: 'WhatsApp' },
];

export default function Topbar() {
  return (
    <header className="topbar">
      <Link to="/" className="topbar-logo" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <img src="/LogoRick.png" alt="Logo Stone By Ric" style={{ height: 44, width: 44, objectFit: 'contain', borderRadius: 8 }} />
        <span style={{ color: '#222', fontWeight: 700, fontSize: 22 }}>Stone By Ric</span>
      </Link>
      <nav className="topbar-nav">
        {links.map(link => (
          <Link key={link.href} to={link.href} className="topbar-link">
            {link.label}
          </Link>
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
