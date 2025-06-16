import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    alt: 'Proyecto 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
    alt: 'Proyecto 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    alt: 'Proyecto 3',
  },
];

export default function Gallery() {
  return (
    <div className="gallery-list">
      {images.map((img, i) => (
        <motion.img
          key={img.src}
          src={img.src}
          alt={img.alt}
          whileHover={{ scale: 1.08 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 + i * 0.2 }}
        />
      ))}
    </div>
  );
}
