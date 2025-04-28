"use client"

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type PageHeaderProps = {
  children: ReactNode;
  className?: string;
}

/**
 * A consistent page header component with balanced spacing
 * Designed for content-forward approach without explicit titles
 */
export default function PageHeader({ children, className = '' }: PageHeaderProps) {
  return (
    <motion.section 
      className={`relative py-16 md:py-20 bg-black ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 opacity-3 bg-gradient-to-b from-accent/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto"
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  )
}

type SiteBlurbProps = {
  children: ReactNode;
  className?: string;
}

/**
 * Consistent styling for site introduction blurbs
 */
export function SiteBlurb({ children, className = '' }: SiteBlurbProps) {
  return (
    <motion.div
      className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 shadow-md shadow-black/10 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <p className="text-2xl text-white text-center italic font-light tracking-wide leading-relaxed">
        {children}
      </p>
    </motion.div>
  )
}