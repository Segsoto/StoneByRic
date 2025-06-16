import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import './SidebarMenu.css';

const links = [
  { href: '#about', label: 'Sobre Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contact', label: 'Contacto' },
];

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Abrir menú">
        <span className="menu-icon">☰</span>
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} className="sidebar-dialog">
        <Dialog.Overlay className="sidebar-overlay" />
        <motion.div 
          className="sidebar-panel"
          initial={{ x: '-100%' }}
          animate={{ x: open ? 0 : '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <button className="close-btn" onClick={() => setOpen(false)} aria-label="Cerrar menú">×</button>
          <nav className="sidebar-nav">
            {links.map(link => (
              <a key={link.href} href={link.href} className="sidebar-link" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      </Dialog>
    </>
  );
}
