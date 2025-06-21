import React from 'react';
import Stack from './Stack';
import { motion } from 'framer-motion';
import './Gallery.css';
import { useLanguage } from './LanguageContext';

const images = [
  {
    id: 1,
    img: '/Carrusel1.jpeg',
    alt: { es: 'Carrusel 1', en: 'Carousel 1' },
  },
  {
    id: 2,
    img: '/Carrusel2.jpg',
    alt: { es: 'Carrusel 2', en: 'Carousel 2' },
  },
  {
    id: 3,
    img: '/Carrusel3.jpg',
    alt: { es: 'Carrusel 3', en: 'Carousel 3' },
  },
  {
    id: 4,
    img: '/Carrusel4.jpeg',
    alt: { es: 'Carrusel 4', en: 'Carousel 4' },
  },
];

export default function Gallery({ lang: propLang }) {
  const { lang: contextLang } = useLanguage();
  const lang = propLang || contextLang;
  return (
    <div className="gallery-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 32 }}>
      <Stack
        cardsData={images.map(img => ({ ...img, alt: img.alt[lang] }))}
        cardDimensions={{ width: 240, height: 240 }}
        randomRotation={true}
        sendToBackOnClick={true}
      />
    </div>
  );
}
