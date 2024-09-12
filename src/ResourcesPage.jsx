import React from 'react';
import { Link } from 'react-router-dom';

const ResourceCard = ({ title, description, icon, link }) => (
  <div style={{
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease-in-out',
    ':hover': {
      transform: 'translateY(-5px)'
    }
  }}>
    <div style={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
      <div style={{fontSize: '32px', marginRight: '16px'}}>{icon}</div>
      <h3 style={{fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: 'bold', color: '#2563eb'}}>{title}</h3>
    </div>
    <p style={{fontSize: '16px', lineHeight: '1.6', color: '#4b5563', marginBottom: '16px'}}>{description}</p>
    <Link to={link} style={{
      color: '#2563eb',
      textDecoration: 'none',
      fontWeight: 'bold',
      display: 'inline-flex',
      alignItems: 'center'
    }}>
      Access Resource
      <span style={{marginLeft: '8px'}}>→</span>
    </Link>
  </div>
);

const ResourcesPage = () => (
  <div style={{fontFamily: 'Arial, sans-serif', backgroundColor: '#f3f4f6'}}>
    <main style={{maxWidth: '1200px', margin: '0 auto', padding: '64px 16px'}}>
      <h1 style={{fontFamily: 'Georgia, serif', fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '32px', color: '#2563eb'}}>Resources</h1>

      <section style={{marginBottom: '64px'}}>
        <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#2563eb'}}>Your Toolbox for Real Estate Success</h2>
        <p style={{fontSize: '18px', lineHeight: '1.6', color: '#4b5563', marginBottom: '24px'}}>
          Welcome to your comprehensive resource hub for real estate investing and home renovation! We've curated a selection of guides, tools, and expert insights to help you navigate the exciting world of property transformation.
        </p>
      </section>

      <section style={{marginBottom: '64px'}}>
        <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#2563eb'}}>Featured Resources</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px'}}>
          <ResourceCard
            title="Flipping 101: Your Crash Course"
            description="Everything you need to know about house flipping, from finding properties to selling for profit."
            icon="🏠"
            link="/resources/flipping-101"
          />
          <ResourceCard
            title="Renovation Roadmap"
            description="A step-by-step guide to planning your property makeover, including budgeting and contractor selection."
            icon="🔨"
            link="/resources/renovation-roadmap"
          />
          <ResourceCard
            title="Profit Evaluator Tool"
            description="Evaluate potential deals and calculate ROI with our easy-to-use investment analysis tool."
            icon="💰"
            link="/resources/profit-evaluator"
          />
        </div>
      </section>

      <section style={{marginBottom: '64px'}}>
        <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#2563eb'}}>Expert Insights</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px'}}>
          <ResourceCard
            title="Design Trends That Sell"
            description="Discover the latest design trends that catch buyers' eyes and increase property value."
            icon="🎨"
            link="/resources/design-trends"
          />
          <ResourceCard
            title="Financing Strategies"
            description="Explore various financing options for your real estate investments and renovations."
            icon="🏦"
            link="/resources/financing-strategies"
          />
        </div>
      </section>

      <section style={{backgroundColor: '#e0f2fe', padding: '32px', borderRadius: '8px'}}>
        <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#2563eb'}}>Get Personalized Guidance</h2>
        <p style={{fontSize: '18px', lineHeight: '1.6', color: '#4b5563', marginBottom: '24px'}}>
          Ready to take your real estate journey to the next level? Join our waitlist for personalized consulting services with Nicole Chapman!
        </p>
        <Link to="/nicole-chapman-design" style={{display: 'inline-block', backgroundColor: '#2563eb', color: 'white', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold'}}>
          Learn More About Consultations
        </Link>
      </section>
    </main>
  </div>
);

export default ResourcesPage;
