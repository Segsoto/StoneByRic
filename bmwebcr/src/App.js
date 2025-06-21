import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
import Topbar from './Topbar';
import Home from './Home';
import Services from './Services';
import GalleryPage from './GalleryPage';
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
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
