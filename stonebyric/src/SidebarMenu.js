import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './SidebarMenu.css';

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

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="menu-btn menu-btn-right" onClick={() => setOpen(true)} aria-label="Abrir menú">
        <span className="menu-icon">☰</span>
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} className="sidebar-dialog">
        <div className="sidebar-overlay" aria-hidden="true" onClick={() => setOpen(false)} style={{ zIndex: 1001 }} />
        <motion.div 
          className="sidebar-panel sidebar-panel-right"
          initial={{ x: '100%' }}
          animate={{ x: open ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ zIndex: 1002, position: 'fixed' }}
        >
          <button className="close-btn" onClick={() => setOpen(false)} aria-label="Cerrar menú">×</button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '24px 0 16px 0', justifyContent: 'center' }}>
            <img src="/LogoRick.png" alt="Logo Stone By Ric" style={{ height: 44, width: 44, objectFit: 'contain', borderRadius: 8 }} />
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 22 }}>Stone By Ric</span>
          </div>
          <nav className="sidebar-nav">
            {links.map(link => (
              <Link key={link.href} to={link.href} className="sidebar-link" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
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
