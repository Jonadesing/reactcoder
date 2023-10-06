import React, { useEffect, useState } from 'react';
import './Hero.css';
import heroImage from './lifestyle.jpg';

function Hero() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`hero ${scrolling ? 'scroll-animation' : ''}`}>
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-text">
        <h1>Mi Texto</h1>
      </div>
    </div>
  );
}

export default Hero;
