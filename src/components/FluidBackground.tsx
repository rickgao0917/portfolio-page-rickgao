
import React from 'react';

const FluidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main fluid shape */}
      <div className="absolute -top-40 -right-40 w-96 h-96 opacity-[0.08]">
        <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-700/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      {/* Secondary shape */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 opacity-[0.06]">
        <div 
          className="w-full h-full bg-gradient-to-tr from-indigo-800/15 to-blue-600/15 rounded-full blur-2xl"
          style={{
            animation: 'float 20s ease-in-out infinite',
          }}
        ></div>
      </div>
      
      {/* Tertiary accent */}
      <div className="absolute bottom-20 right-1/4 w-64 h-64 opacity-[0.05]">
        <div 
          className="w-full h-full bg-gradient-to-bl from-purple-700/10 to-indigo-500/10 rounded-full blur-xl"
          style={{
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        ></div>
      </div>
      
      {/* Additional floating element */}
      <div className="absolute top-1/4 right-1/3 w-48 h-48 opacity-[0.04]">
        <div 
          className="w-full h-full bg-gradient-to-r from-gray-800/10 to-gray-600/10 rounded-full blur-2xl"
          style={{
            animation: 'float 30s ease-in-out infinite'
          }}
        ></div>
      </div>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      ></div>
    </div>
  );
};

export default FluidBackground;
