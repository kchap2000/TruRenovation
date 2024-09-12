import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{backgroundColor: '#1f2937', color: 'white', padding: '32px 0'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <h3 style={{fontFamily: 'serif', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px'}}>TRU Renovation & Design</h3>
          <p>Empowering real estate investors and home renovators.</p>
        </div>
        <div>
          <h4 style={{fontFamily: 'serif', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px'}}>Quick Links</h4>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li><Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link></li>
            <li><Link to="/about" style={{color: 'white', textDecoration: 'none'}}>About</Link></li>
            <li><Link to="/resources" style={{color: 'white', textDecoration: 'none'}}>Resources</Link></li>
            <li><Link to="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{fontFamily: 'serif', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px'}}>Connect With Us</h4>
          <div>
            <span style={{marginRight: '12px'}}>Facebook</span>
            <span style={{marginRight: '12px'}}>Instagram</span>
            <span>YouTube</span>
          </div>
        </div>
      </div>
      <div style={{maxWidth: '1200px', margin: '32px auto 0', textAlign: 'center'}}>
        <p>&copy; 2024 TRU Renovation & Design. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
