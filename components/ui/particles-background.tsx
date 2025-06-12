"use client";

import React, { useRef, useEffect } from "react";
import { useTheme } from "next-themes";

interface ParticlesBackgroundProps {
  className?: string;
  quantity?: number;
  particleColor?: string;
  lineColor?: string;
}

export function ParticlesBackground({
  className = "",
  quantity = 50,
  particleColor,
  lineColor,
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Default colors based on theme
    const defaultParticleColor = theme === "dark" ? "rgba(59, 130, 246, 0.7)" : "rgba(59, 130, 246, 0.5)";
    const defaultLineColor = theme === "dark" ? "rgba(124, 58, 237, 0.15)" : "rgba(124, 58, 237, 0.1)";
    
    const actualParticleColor = particleColor || defaultParticleColor;
    const actualLineColor = lineColor || defaultLineColor;

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = Math.random() * 0.2 - 0.1;
        this.vy = Math.random() * 0.2 - 0.1;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = actualParticleColor;
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < quantity; i++) {
      particles.push(new Particle());
    }

    // Connect particles with lines
    function connectParticles() {
      const maxDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance && ctx) {
            ctx.beginPath();
            ctx.strokeStyle = actualLineColor;
            ctx.lineWidth = 0.5 * (1 - distance / maxDistance);
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, width, height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw(ctx);
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    }

    // Handle resize
    function handleResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [quantity, particleColor, lineColor, theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 -z-10 ${className}`}
    />
  );
}