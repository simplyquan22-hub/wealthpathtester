"use client";

import React, { useState, useEffect } from 'react';

const PARTICLE_COUNT = 50;

const Celebration = () => {
  const [particles, setParticles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
      const angle = Math.random() * 360;
      const distance = Math.random() * 150 + 50;
      const x = Math.cos(angle * (Math.PI / 180)) * distance;
      const y = Math.sin(angle * (Math.PI / 180)) * distance;
      const delay = Math.random() * 200;
      const duration = Math.random() * 800 + 500;
      const color = ['hsl(var(--primary))', 'hsl(var(--accent))', '#ffffff'][Math.floor(Math.random() * 3)];
      const size = Math.random() * 8 + 4;

      return {
        id: i,
        style: {
          '--x': `${x}px`,
          '--y': `${y}px`,
          '--scale': Math.random() * 0.75 + 0.25,
          '--color': color,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${delay}ms`,
          animationDuration: `${duration}ms`,
        } as React.CSSProperties,
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes burst {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(var(--x), var(--y)) scale(var(--scale));
            opacity: 0;
          }
        }
        .particle {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          background-color: var(--color);
          animation: burst ease-out forwards;
          pointer-events: none;
        }
      `}</style>
      <div className="absolute inset-0 z-50">
        {particles.map(p => (
          <div key={p.id} className="particle" style={p.style} />
        ))}
      </div>
    </>
  );
};

export default Celebration;
