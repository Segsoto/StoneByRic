import React from 'react';
import Stack from './Stack';
import { motion } from 'framer-motion';
import './Gallery.css';

const images = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    alt: 'Proyecto 1',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
    alt: 'Proyecto 2',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    alt: 'Proyecto 3',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format',
    alt: 'Proyecto 4',
  },
];

export default function Gallery() {
  return (
    <div className="gallery-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 32 }}>
      <Stack
        cardsData={images}
        cardDimensions={{ width: 240, height: 240 }}
        randomRotation={true}
        sendToBackOnClick={true}
      />
    </div>
  );
}
