"use client";

import React, { useState, useEffect, useMemo } from 'react';

const PARTICLE_COUNT = 150;
const SPREAD = 180;
const GRAVITY = 0.5;

const Celebration = () => {
  const [particles, setParticles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  const particleArray = useMemo(() => Array.from({ length: PARTICLE_COUNT }), []);


  useEffect(() => {
    const newParticles = particleArray.map((_, i) => {
      const angle = (Math.random() - 0.5) * SPREAD;
      const velocity = Math.random() * 30 + 20;
      const initialX = Math.cos(angle * (Math.PI / 180)) * velocity;
      const initialY = Math.sin(angle * (Math.PI / 180)) * velocity;
      
      const duration = Math.random() * 1000 + 800;
      const delay = Math.random() * 200;

      const colors = ['hsl(var(--primary))', 'hsl(var(--accent))', '#ffffff', '#fde047' /* yellow-300 */];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 10 + 5;

      return {
        id: i,
        style: {
          '--initial-x': `${initialX}vw`,
          '--initial-y': `${-initialY}vh`,
          '--duration': `${duration}ms`,
          '--color': color,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${delay}ms`,
          animationDuration: `var(--duration)`,
        } as React.CSSProperties,
      };
    });
    setParticles(newParticles);
  }, [particleArray]);

  return (
    <>
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(var(--initial-x), calc(100vh - var(--initial-y))) rotate(720deg);
            opacity: 0;
          }
        }
        .particle {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          background-color: var(--color);
          animation: fall cubic-bezier(0.25, 0.5, 0.5, 1) forwards;
          pointer-events: none;
        }
      `}</style>
      <div className="absolute inset-0 z-50 overflow-hidden">
        {particles.map(p => (
          <div key={p.id} className="particle" style={p.style} />
        ))}
      </div>
    </>
  );
};

export default Celebration;
