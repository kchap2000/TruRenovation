import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{fontFamily: 'Arial, sans-serif'}}>
      <main>
        <section style={{
          backgroundImage: 'url("/hero-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 0'
        }}>
          <div style={{maxWidth: '1200px', margin: '0 auto', backgroundColor: 'rgba(0,0,0,0.5)', padding: '48px', borderRadius: '8px'}}>
            <h1 style={{fontFamily: 'Georgia, serif', fontSize: '48px', fontWeight: 'bold', marginBottom: '24px'}}>Empowering Real Estate Investors and Home Renovators</h1>
            <p style={{fontSize: '20px', marginBottom: '32px'}}>Comprehensive resources, expert insights, and practical tools to transform properties and create beautiful, functional spaces.</p>
            <div>
              <Link to="/resources" style={{backgroundColor: '#10b981', color: 'white', padding: '12px 24px', borderRadius: '4px', border: 'none', marginRight: '16px', textDecoration: 'none'}}>Explore Resources</Link>
              <Link to="/nicole-chapman-design" style={{backgroundColor: 'white', color: '#2563eb', padding: '12px 24px', borderRadius: '4px', border: 'none', textDecoration: 'none'}}>Nicole Chapman Design</Link>
            </div>
          </div>
        </section>

        <section style={{padding: '64px 0', backgroundColor: '#f3f4f6'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '32px', textAlign: 'center', color: '#1f2937'}}>Featured Resources</h2>
            <div style={{display: 'flex', justifyContent: 'space-between', gap: '24px'}}>
              {[
                {
                  title: 'Educational Guides',
                  description: 'Step-by-step tutorials on real estate investing and home flipping.',
                  icon: '📚',
                  link: '/resources'
                },
                {
                  title: 'Nicole Chapman Design',
                  description: 'Exclusive design tips and inspiration from Nicole Chapman.',
                  icon: '🎨',
                  link: '/nicole-chapman-design'
                },
                {
                  title: 'Profit Evaluator',
                  description: 'Use our tool to evaluate potential property investments.',
                  icon: '💰',
                  link: '/resources#profit-evaluator'
                }
              ].map((resource) => (
                <div key={resource.title} style={{
                  flex: 1,
                  backgroundColor: 'white',
                  padding: '24px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <div style={{fontSize: '48px', marginBottom: '16px'}}>{resource.icon}</div>
                  <h3 style={{fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#2563eb'}}>{resource.title}</h3>
                  <p style={{marginBottom: '16px', color: '#4b5563'}}>{resource.description}</p>
                  <Link to={resource.link} style={{color: '#2563eb', textDecoration: 'none', fontWeight: 'bold'}}>Learn More →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{padding: '64px 0', backgroundColor: 'white'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
            <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#1f2937'}}>Nicole Chapman Design</h2>
            <p style={{fontSize: '18px', lineHeight: '1.6', color: '#4b5563', marginBottom: '24px'}}>
              Transform your property with expert design guidance from Nicole Chapman. Join our waitlist for personalized consultations and elevate your real estate investments.
            </p>
            <Link to="/nicole-chapman-design" style={{display: 'inline-block', backgroundColor: '#2563eb', color: 'white', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold'}}>
              Learn More About Nicole Chapman Design
            </Link>
          </div>
        </section>

        <section style={{backgroundColor: '#e0f2fe', padding: '64px 0', textAlign: 'center'}}>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '24px'}}>Join Our Community</h2>
            <p style={{fontSize: '20px', marginBottom: '32px'}}>Stay updated with the latest resources, design tips, and market insights.</p>
            <form style={{display: 'flex', justifyContent: 'center'}}>
              <input type="email" placeholder="Enter your email" style={{padding: '12px', width: '300px', marginRight: '16px', borderRadius: '4px', border: 'none'}} />
              <button type="submit" style={{backgroundColor: '#10b981', color: 'white', padding: '12px 24px', borderRadius: '4px', border: 'none', cursor: 'pointer'}}>Subscribe</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;