
import React, { useEffect, useRef, useState } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  targetOpacity: number;
  fadeSpeed: number;
  size: number;
}

interface AnimatedDotsBackgroundProps {
  dotCount?: number;
  connectionDistance?: number;
  speed?: number;
  dotColor?: string;
  lineColor?: string;
  maxOpacity?: number;
}

const AnimatedDotsBackground: React.FC<AnimatedDotsBackgroundProps> = ({
  dotCount = 80,
  connectionDistance = 120,
  speed = 0.5,
  dotColor = 'rgba(156, 163, 175, 0.6)',
  lineColor = 'rgba(156, 163, 175, 0.3)',
  maxOpacity = 0.8
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize dots with random positions and velocities
  const initializeDots = (width: number, height: number) => {
    dotsRef.current = Array.from({ length: dotCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      opacity: Math.random() * maxOpacity,
      targetOpacity: Math.random() * maxOpacity,
      fadeSpeed: 0.01 + Math.random() * 0.02,
      size: 1 + Math.random() * 2
    }));
  };

  // Update dot positions and handle stochastic movement
  const updateDots = (width: number, height: number) => {
    dotsRef.current.forEach(dot => {
      // Add stochastic noise to movement
      dot.vx += (Math.random() - 0.5) * 0.02;
      dot.vy += (Math.random() - 0.5) * 0.02;
      
      // Limit velocity
      const maxVel = speed * 2;
      dot.vx = Math.max(-maxVel, Math.min(maxVel, dot.vx));
      dot.vy = Math.max(-maxVel, Math.min(maxVel, dot.vy));
      
      // Update position
      dot.x += dot.vx;
      dot.y += dot.vy;
      
      // Bounce off edges
      if (dot.x <= 0 || dot.x >= width) {
        dot.vx *= -0.8;
        dot.x = Math.max(0, Math.min(width, dot.x));
      }
      if (dot.y <= 0 || dot.y >= height) {
        dot.vy *= -0.8;
        dot.y = Math.max(0, Math.min(height, dot.y));
      }
      
      // Stochastic opacity changes
      if (Math.random() < 0.02) {
        dot.targetOpacity = Math.random() * maxOpacity;
      }
      
      // Fade towards target opacity
      const opacityDiff = dot.targetOpacity - dot.opacity;
      dot.opacity += opacityDiff * dot.fadeSpeed;
    });
  };

  // Calculate distance between two points
  const getDistance = (dot1: Dot, dot2: Dot) => {
    const dx = dot1.x - dot2.x;
    const dy = dot1.y - dot2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Draw dots and connections
  const draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
    
    // Draw connections first (behind dots)
    dotsRef.current.forEach((dot, i) => {
      dotsRef.current.slice(i + 1).forEach(otherDot => {
        const distance = getDistance(dot, otherDot);
        if (distance < connectionDistance) {
          const alpha = (1 - distance / connectionDistance) * 0.5;
          ctx.strokeStyle = lineColor.replace('0.3', alpha.toString());
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(otherDot.x, otherDot.y);
          ctx.stroke();
        }
      });
    });
    
    // Draw dots
    dotsRef.current.forEach(dot => {
      if (dot.opacity > 0.01) {
        ctx.fillStyle = dotColor.replace('0.6', dot.opacity.toString());
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    updateDots(dimensions.width, dimensions.height);
    draw(ctx, dimensions.width, dimensions.height);
    
    animationRef.current = requestAnimationFrame(animate);
  };

  // Handle resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    
    setDimensions({ width, height });
    
    if (dotsRef.current.length === 0) {
      initializeDots(width, height);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      animate();
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default AnimatedDotsBackground;
