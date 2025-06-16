
import React, { useEffect, useRef, useState } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originalX: number;
  originalY: number;
}

const FluidBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Initialize dots
    const numDots = Math.floor((dimensions.width * dimensions.height) / 15000);
    dotsRef.current = [];
    
    for (let i = 0; i < numDots; i++) {
      const x = Math.random() * dimensions.width;
      const y = Math.random() * dimensions.height;
      dotsRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        originalX: x,
        originalY: y,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      const dots = dotsRef.current;
      const mouse = mouseRef.current;
      const repelDistance = 150;
      const repelForce = 0.3;
      const returnForce = 0.02;
      const connectionDistance = 120;

      // Update dot positions
      dots.forEach((dot) => {
        // Calculate distance from mouse
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Repel from mouse
        if (distance < repelDistance && distance > 0) {
          const force = (repelDistance - distance) / repelDistance;
          dot.vx += (dx / distance) * force * repelForce;
          dot.vy += (dy / distance) * force * repelForce;
        }

        // Return to original position
        const returnDx = dot.originalX - dot.x;
        const returnDy = dot.originalY - dot.y;
        dot.vx += returnDx * returnForce;
        dot.vy += returnDy * returnForce;

        // Apply velocity with damping
        dot.vx *= 0.98;
        dot.vy *= 0.98;
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Boundary check
        if (dot.x < 0 || dot.x > dimensions.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > dimensions.height) dot.vy *= -1;
        dot.x = Math.max(0, Math.min(dimensions.width, dot.x));
        dot.y = Math.max(0, Math.min(dimensions.height, dot.y));
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(156, 163, 175, 0.2)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (connectionDistance - distance) / connectionDistance;
            ctx.strokeStyle = `rgba(156, 163, 175, ${opacity * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      ctx.fillStyle = 'rgba(156, 163, 175, 0.6)';
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default FluidBackground;
