import React from 'react';

const FloatingUICard = ({ children, className = '', animationDelay = '0s' }) => (
  <div 
    className={`absolute bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-4 border border-white ${className}`}
    style={{ animation: `float 6s ease-in-out infinite ${animationDelay}` }}
  >
    {children}
  </div>
);

export default FloatingUICard;