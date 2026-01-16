"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  size: number;
  duration: number;
  delay: number;
}

export default function AmbientBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on the client to avoid hydration mismatch
    const particleCount = 50; // Increased count
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2, // Larger: 2px to 6px
        duration: Math.random() * 20 + 10, // Faster: 10s to 30s
        // Negative delay ensures particles are already mid-cycle (visible) when the component mounts
        delay: -Math.random() * 20,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent" // Removed /20 opacity
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            boxShadow: "0 0 6px rgba(166, 226, 46, 0.5)", // Stronger glow
          }}
          animate={{
            y: [0, -120, 0], // Move further
            x: [0, Math.random() * 30 - 15, 0], // More drift
            opacity: [0, 0.8, 0], // Higher opacity
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
