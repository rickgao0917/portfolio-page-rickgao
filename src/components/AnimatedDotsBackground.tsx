
import React, { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

interface AnimatedDotsBackgroundProps {
  dotCount?: number;
  connectionDistance?: number;
  speed?: number;
  maxOpacity?: number;
}

const AnimatedDotsBackground: React.FC<AnimatedDotsBackgroundProps> = ({
  dotCount = 50,
  connectionDistance = 100,
  speed = 0.5,
  maxOpacity = 0.3
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initDots = () => {
      dotsRef.current = Array.from({ length: dotCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        connections: []
      }));
    };

    const updateDots = () => {
      dotsRef.current.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        dot.x = Math.max(0, Math.min(canvas.width, dot.x));
        dot.y = Math.max(0, Math.min(canvas.height, dot.y));
      });
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.strokeStyle = `rgba(156, 163, 175, ${maxOpacity * 0.3})`; // Lighter grey for connections
      ctx.lineWidth = 1;
      
      for (let i = 0; i < dotsRef.current.length; i++) {
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dot1 = dotsRef.current[i];
          const dot2 = dotsRef.current[j];
          const distance = Math.sqrt(
            Math.pow(dot1.x - dot2.x, 2) + Math.pow(dot1.y - dot2.y, 2)
          );

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * maxOpacity * 0.3;
            ctx.strokeStyle = `rgba(156, 163, 175, ${opacity})`; // Lighter grey
            ctx.beginPath();
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      ctx.fillStyle = `rgba(156, 163, 175, ${maxOpacity})`; // Lighter grey for dots
      dotsRef.current.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      updateDots();
      drawDots();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initDots();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initDots();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dotCount, connectionDistance, speed, maxOpacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedDotsBackground;
