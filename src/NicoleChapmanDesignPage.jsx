import React from 'react';
import { Link } from 'react-router-dom';

const DesignProject = ({ title, description, beforeImage, afterImage }) => (
  <div style={{marginBottom: '48px', backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <h3 style={{fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#2563eb'}}>{title}</h3>
    <p style={{fontSize: '16px', lineHeight: '1.6', color: '#4b5563', marginBottom: '16px'}}>{description}</p>
    <div style={{display: 'flex', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap'}}>
      <div style={{flex: '1 1 300px'}}>
        <img src={beforeImage} alt={`${title} Before`} style={{width: '100%', height: 'auto', borderRadius: '8px'}} />
        <p style={{textAlign: 'center', marginTop: '8px', fontSize: '14px', color: '#6b7280'}}>Before</p>
      </div>
      <div style={{flex: '1 1 300px'}}>
        <img src={afterImage} alt={`${title} After`} style={{width: '100%', height: 'auto', borderRadius: '8px'}} />
        <p style={{textAlign: 'center', marginTop: '8px', fontSize: '14px', color: '#6b7280'}}>After</p>
      </div>
    </div>
  </div>
);

const NicoleChapmanDesignPage = () => (
  <div style={{fontFamily: 'Arial, sans-serif', backgroundColor: '#f3f4f6'}}>
    <main style={{maxWidth: '1200px', margin: '0 auto', padding: '64px 16px'}}>
      <h1 style={{fontFamily: 'Georgia, serif', fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '32px', color: '#2563eb'}}>Nicole Chapman Design</h1>

      <section style={{marginBottom: '64px', backgroundColor: 'white', borderRadius: '8px', padding: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
        <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#2563eb'}}>Transforming Spaces with Vision and Expertise</h2>
        <p style={{fontSize: '18px', lineHeight: '1.6', color: '#4b5563', marginBottom: '24px'}}>
          Welcome to Nicole Chapman Design, where we turn ordinary properties into extraordinary spaces! Nicole's keen eye for design and deep understanding of real estate investing come together to create stunning transformations that not only look amazing but also maximize property value.
        </p>
      </section>

      <section style={{marginBottom: '64px', backgroundColor: 'white', borderRadius: '8px', padding: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
        <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#2563eb'}}>Nicole's Design Philosophy</h2>
        <p style={{fontSize: '18px', lineHeight: '1.6', color: '#4b5563', marginBottom: '24px'}}>
          At Nicole Chapman Design, we believe that great design is about more than just making things pretty (although we do that too!). It's about creating spaces that work hard for you, whether that means maximizing your property's value or crafting a home that perfectly fits your lifestyle.
        </p>
        <p style={{fontSize: '18px', lineHeight: '1.6', color: '#4b5563', marginBottom: '24px'}}>
          Our approach combines timeless elegance with practical functionality, always with an eye on the latest trends that buyers and homeowners love. We're not just designing rooms; we're creating experiences and boosting property values.
        </p>
      </section>

      <section style={{marginBottom: '64px'}}>
        <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#2563eb'}}>Portfolio Highlights</h2>
        <DesignProject 
          title="Modern Farmhouse Kitchen"
          description="We transformed this dated kitchen into a bright, airy space that became the heart of the home. The result? A quick sale over asking price!"
          beforeImage="/farmhouse-kitchen-before.jpg"
          afterImage="/farmhouse-kitchen-after.jpg"
        />
        <DesignProject 
          title="Urban Loft Living Room"
          description="This compact city loft needed to maximize space without sacrificing style. Our design created distinct living areas in an open plan, perfect for both relaxing and entertaining."
          beforeImage="/urban-loft-before.jpg"
          afterImage="/urban-loft-after.jpg"
        />
        <DesignProject 
          title="Suburban Flip Exterior"
          description="A fresh coat of paint, updated landscaping, and a charming front porch transformed this suburban home's curb appeal, making it the star of the neighborhood."
          beforeImage="/suburban-exterior-before.jpg"
          afterImage="/suburban-exterior-after.jpg"
        />
      </section>

      <section style={{marginBottom: '64px', backgroundColor: 'white', borderRadius: '8px', padding: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
        <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#2563eb'}}>Coming Soon</h2>
        <p style={{fontSize: '18px', lineHeight: '1.6', color: '#4b5563', marginBottom: '24px'}}>
          We're excited to announce that personalized design consultations will be available in the near future. Stay tuned for more information on how you can work directly with Nicole to transform your space!
        </p>
      </section>

      <section style={{backgroundColor: '#e0f2fe', padding: '32px', borderRadius: '8px', textAlign: 'center'}}>
        <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#2563eb'}}>Join Our Design Consultation Waitlist</h2>
        <p style={{fontSize: '18px', lineHeight: '1.6', color: '#4b5563', marginBottom: '24px'}}>
          Be the first to know when Nicole Chapman's personalized renovation and design consultations become available. Join our waitlist today!
        </p>
        <Link to="/contact" style={{display: 'inline-block', backgroundColor: '#2563eb', color: 'white', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold'}}>
          Join the Waitlist
        </Link>
      </section>
    </main>
  </div>
);

export default NicoleChapmanDesignPage;