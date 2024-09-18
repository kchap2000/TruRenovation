import React from 'react';
import { Link } from 'react-router-dom';

const TeamMember = ({ name, role, image, bio }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '48px',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <img src={image} alt={name} style={{width: '200px', height: '200px', borderRadius: '50%', marginBottom: '16px', objectFit: 'cover'}} />
    <h3 style={{fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: '#2563eb'}}>{name}</h3>
    <p style={{fontSize: '18px', color: '#4b5563', marginBottom: '16px'}}>{role}</p>
    <p style={{fontSize: '16px', lineHeight: '1.6', color: '#1f2937', maxWidth: '400px'}}>{bio}</p>
  </div>
);

const AboutPage = () => (
  <div style={{fontFamily: 'Arial, sans-serif', backgroundColor: '#f3f4f6'}}>
    <main style={{maxWidth: '1200px', margin: '0 auto', padding: '64px 16px'}}>
      <h1 style={{fontFamily: 'Georgia, serif', fontSize: '48px', fontWeight: 'bold', marginBottom: '32px', textAlign: 'center', color: '#2563eb'}}>About TRU Renovation & Design</h1>

      <section style={{marginBottom: '64px', backgroundColor: 'white', borderRadius: '8px', padding: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
        <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#2563eb'}}>Our Mission</h2>
        <p style={{fontSize: '18px', lineHeight: '1.6', color: '#4b5563', marginBottom: '24px'}}>
          At TRU Renovation & Design, our mission is to empower real estate investors and home renovators with actionable educational resources and tools. We're committed to helping you transform properties, maximize investment potential, and create beautiful, functional spaces.
        </p>
      </section>

      <section style={{marginBottom: '64px'}}>
        <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '32px', textAlign: 'center', color: '#2563eb'}}>Meet Our Team</h2>
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
          <TeamMember
            name="Nicole Chapman"
            role="Co-Founder & Design Expert"
            image="/nicole-chapman.jpg"
            bio="Nicole's expertise in real estate investing and interior design has transformed countless properties. Her keen eye for design and strategic approach to renovations drives TRU Renovation & Design's success."
          />
          <TeamMember
            name="Khalil Chapman"
            role="Co-Founder & Resource Developer"
            image="/khalil-chapman.jpg"
            bio="Khalil focuses on developing tools and resources that connect our team's expertise to the world. His work ensures that our community has access to cutting-edge online content and tools for successful real estate investing."
          />
          <TeamMember
            name="Taylor Murray-Smith"
            role="Operations Specialist"
            image="/taylor-murray-smith.jpg"
            bio="Taylor keeps TRU Renovation & Design running smoothly. Her expertise in day-to-day operations ensures that all projects and tasks are completed efficiently, allowing our team to focus on providing value to our community."
          />
        </div>
      </section>

      <section style={{backgroundColor: 'white', borderRadius: '8px', padding: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
        <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#2563eb'}}>Our Approach</h2>
        <p style={{fontSize: '18px', lineHeight: '1.6', color: '#4b5563', marginBottom: '24px'}}>
          We believe in a holistic approach to real estate investing and renovation. Our resources cover everything from property selection to renovation techniques and design principles. We emphasize:
        </p>
        <ul style={{fontSize: '18px', lineHeight: '1.6', color: '#4b5563', marginBottom: '24px', paddingLeft: '24px'}}>
          <li>Data-driven decision making</li>
          <li>Sustainable and cost-effective renovation practices</li>
          <li>Balancing aesthetics with functionality</li>
          <li>Ethical investing and community impact</li>
        </ul>
      </section>

      <section style={{marginTop: '64px', textAlign: 'center'}}>
        <h2 style={{fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#2563eb'}}>Ready to Transform Your Real Estate Journey?</h2>
        <p style={{fontSize: '18px', lineHeight: '1.6', color: '#4b5563', marginBottom: '24px'}}>
          Explore our resources and join our community of successful real estate investors and renovators.
        </p>
        <Link to="/resources" style={{display: 'inline-block', backgroundColor: '#2563eb', color: 'white', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold'}}>
          Explore Our Resources
        </Link>
      </section>
    </main>
  </div>
);

export default AboutPage;