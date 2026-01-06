import React from 'react';

const Logo = ({ className = "h-auto w-full", ...props }) => {
  return (
    <svg 
      viewBox="0 0 400 200" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      role="img"
      aria-labelledby="logoTitle"
      {...props}
    >
      <title id="logoTitle">CLOTHE Logo</title>
      <g 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.0" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* Minimalist Hanger Hook */}
        <path d="M198 50c0-12 18-12 18 0 0 8-10 10-15 18v12" />
        
        {/* Hanger Body - Elegant Geometric Shape */}
        <path d="M90 120c15-8 75-40 108-40s93 32 108 40H90z" />
      </g>
      
      {/* Brand Typography - Playfair Display Style */}
      <text 
        x="50%" 
        y="175" 
        textAnchor="middle" 
        fill="currentColor" 
        style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: '56px', 
          fontWeight: '700', 
          letterSpacing: '0.22em', 
          textTransform: 'uppercase' 
        }}
      >
        CLOTHE
      </text>
    </svg>
  );
};

export default Logo;
