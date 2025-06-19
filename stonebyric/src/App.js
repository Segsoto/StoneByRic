import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
import Topbar from './Topbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import GalleryPage from './GalleryPage';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="landing-root">
        <SidebarMenu />
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
