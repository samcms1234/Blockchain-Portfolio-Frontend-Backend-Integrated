import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import './LandingPage.css';

const LandingPage = ({ children }) => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.50,
      scaleMobile: 1.00,
      color: 0xb38f96,
      backgroundColor: 0x1a1a2e,
      points: 7.00,
      maxDistance: 10.00,
      spacing: 15.00,
      showDots: false,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: '#1a1a2e' }}>
      <div className='vanta-style-config' ref={vantaRef}></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default LandingPage;
