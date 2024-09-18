import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ResourcesPage from './ResourcesPage';
import ContactPage from './ContactPage';
import NicoleChapmanDesignPage from './NicoleChapmanDesignPage';

function App() {
  return (
    <Router>
      <div className="App" style={{fontFamily: 'Arial, sans-serif', backgroundColor: '#f3f4f6'}}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/nicole-chapman-design" element={<NicoleChapmanDesignPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;