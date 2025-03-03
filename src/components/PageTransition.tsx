"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Add listener to update if preference changes
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Define appropriate variants based on motion preference
  const variants = prefersReducedMotion 
    ? {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1,
          transition: { duration: 0.3 } 
        },
        exit: { 
          opacity: 0,
          transition: { duration: 0.2 } 
        }
      }
    : {
        initial: { opacity: 0, scale: 0.95, y: 10 },
        animate: { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" } 
        },
        exit: { 
          opacity: 0, 
          scale: 0.95, 
          y: 10,
          transition: { duration: 0.6, ease: "easeIn" } 
        }
      };
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={variants.initial}
        animate={variants.animate}
        exit={variants.exit}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}