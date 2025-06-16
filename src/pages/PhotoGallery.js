import React from 'react';
import './Home.css';

function PhotoGallery() {
  return (
    <div className="page gallery">
      <section className="section">
        <h1 className="animate__animated animate__fadeInRight">Galería de Proyectos</h1>
        <div className="gallery">
          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="Proyecto 1" className="animate__animated animate__zoomIn" />
          <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80" alt="Proyecto 2" className="animate__animated animate__zoomIn animate__delay-1s" />
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" alt="Proyecto 3" className="animate__animated animate__zoomIn animate__delay-2s" />
        </div>
      </section>
    </div>
  );
}

export default PhotoGallery;
