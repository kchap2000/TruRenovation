import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{backgroundColor: '#f3f4f6', padding: '16px 0'}}>
    <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div style={{fontFamily: 'serif', fontSize: '24px', fontWeight: 'bold', color: '#2563eb'}}>TRU Renovation & Design</div>
      <nav>
        <Link to="/" style={{margin: '0 12px', color: '#1f2937', textDecoration: 'none'}}>Home</Link>
        <Link to="/resources" style={{margin: '0 12px', color: '#1f2937', textDecoration: 'none'}}>Resources</Link>
        <Link to="/nicole-chapman-design" style={{margin: '0 12px', color: '#1f2937', textDecoration: 'none'}}>Nicole Chapman Design</Link>
        <Link to="/about" style={{margin: '0 12px', color: '#1f2937', textDecoration: 'none'}}>About</Link>
        <Link to="/contact" style={{margin: '0 12px', color: '#1f2937', textDecoration: 'none'}}>Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;
