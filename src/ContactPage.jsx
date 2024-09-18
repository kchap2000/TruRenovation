import React, { useState } from 'react';

const ContactPage = () => {
  const [inquiryType, setInquiryType] = useState('general');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just log to the console
    console.log('Form submitted:', inquiryType);
  };

  return (
    <div style={{fontFamily: 'Arial, sans-serif', backgroundColor: '#f3f4f6'}}>
      <main style={{maxWidth: '800px', margin: '0 auto', padding: '64px 16px'}}>
        <h1 style={{fontFamily: 'Georgia, serif', fontSize: '48px', fontWeight: 'bold', marginBottom: '32px', color: '#1f2937', textAlign: 'center'}}>Contact Us</h1>

        <p style={{fontSize: '18px', lineHeight: '1.6', marginBottom: '24px', color: '#4b5563', textAlign: 'center'}}>
          Have questions or want to join our waitlist? We're here to help. Choose your inquiry type below and reach out to us.
        </p>

        <form onSubmit={handleSubmit} style={{backgroundColor: 'white', padding: '32px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
          <div style={{marginBottom: '24px'}}>
            <label htmlFor="inquiryType" style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Inquiry Type:</label>
            <select 
              id="inquiryType" 
              value={inquiryType} 
              onChange={(e) => setInquiryType(e.target.value)}
              style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db'}}
            >
              <option value="general">General Inquiry</option>
              <option value="nicole-chapman-design">Nicole Chapman Design Consultation Waitlist</option>
              <option value="flipping-startup">Flipping Startup Consultation Waitlist</option>
            </select>
          </div>

          <div style={{marginBottom: '16px'}}>
            <label htmlFor="name" style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Name:</label>
            <input type="text" id="name" name="name" required style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db'}} />
          </div>

          <div style={{marginBottom: '16px'}}>
            <label htmlFor="email" style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Email:</label>
            <input type="email" id="email" name="email" required style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db'}} />
          </div>

          {inquiryType === 'general' && (
            <div style={{marginBottom: '16px'}}>
              <label htmlFor="subject" style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Subject:</label>
              <input type="text" id="subject" name="subject" required style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db'}} />
            </div>
          )}

          <div style={{marginBottom: '16px'}}>
            <label htmlFor="message" style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Message:</label>
            <textarea id="message" name="message" rows="4" required style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db'}}></textarea>
          </div>

          <button type="submit" style={{backgroundColor: '#2563eb', color: 'white', padding: '12px 24px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: 'bold', width: '100%'}}>
            {inquiryType === 'general' ? 'Send Message' : 'Join Waitlist'}
          </button>
        </form>

        <div style={{marginTop: '32px', textAlign: 'center', fontSize: '14px', color: '#6b7280'}}>
          <p>By submitting this form, you agree to our <a href="/privacy-policy" style={{color: '#2563eb', textDecoration: 'none'}}>Privacy Policy</a>.</p>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;