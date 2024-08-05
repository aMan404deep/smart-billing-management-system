import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section" id='hero-section'>
      <div className="hero-content">
        <h1>Revolutionize <span className='hero-span'>Your</span> Billing</h1>
        <p>Experience the future of Smart Billing : our cutting edge platform streamlines your financial operations , empowering you to focus on What Matters Most.</p>
        <button>Get Started</button>
      </div>
      {/* The right side is intentionally left empty */}
    </div>
  );
};

export default Hero;
