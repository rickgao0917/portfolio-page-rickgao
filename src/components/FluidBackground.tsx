
import React from 'react';

const FluidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main fluid shape */}
      <div className="absolute -top-40 -right-40 w-96 h-96 opacity-[0.03]">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-700 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      {/* Secondary shape */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 opacity-[0.02]">
        <div 
          className="w-full h-full bg-gradient-to-tr from-gray-800 to-gray-600 rounded-full blur-2xl"
          style={{
            animation: 'float 20s ease-in-out infinite',
            transform: 'translateY(-50%)'
          }}
        ></div>
      </div>
      
      {/* Tertiary accent */}
      <div className="absolute bottom-20 right-1/4 w-64 h-64 opacity-[0.015]">
        <div 
          className="w-full h-full bg-gradient-to-bl from-gray-700 to-gray-500 rounded-full blur-xl"
          style={{
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        ></div>
      </div>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      ></div>
    </div>
  );
};

export default FluidBackground;
