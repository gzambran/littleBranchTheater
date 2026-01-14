"use client"

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type PageHeaderVariant = 'statement' | 'contextual' | 'immersive' | 'narrative'

type PageHeaderProps = {
  children: ReactNode
  variant?: PageHeaderVariant
  className?: string
}

const variantStyles = {
  statement: {
    section: 'py-20 md:py-28',
    container: 'max-w-5xl',
  },
  contextual: {
    section: 'py-12 md:py-16',
    container: 'max-w-3xl',
  },
  immersive: {
    section: 'py-8 md:py-12',
    container: 'max-w-4xl',
  },
  narrative: {
    section: 'py-16 md:py-24',
    container: 'max-w-4xl',
  },
}

/**
 * A consistent page header component with balanced spacing
 * Variants: statement (homepage), contextual (standard), immersive (show pages), narrative (about)
 */
export default function PageHeader({
  children,
  variant = 'contextual',
  className = ''
}: PageHeaderProps) {
  const styles = variantStyles[variant]

  return (
    <motion.section
      className={`relative ${styles.section} bg-black-warm ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 opacity-60 bg-gradient-to-b from-accent/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className={`${styles.container} mx-auto`}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  )
}

type SiteBlurbVariant = 'default' | 'large' | 'editorial' | 'minimal'

type SiteBlurbProps = {
  children: ReactNode
  variant?: SiteBlurbVariant
  className?: string
}

const blurbVariantStyles = {
  default: {
    wrapper: 'bg-black-deep/30 backdrop-blur-sm rounded-lg p-6 shadow-elevated',
    text: 'text-2xl text-white text-center italic font-light tracking-wide leading-relaxed',
  },
  large: {
    wrapper: 'bg-black-deep/40 backdrop-blur-sm rounded-lg p-8 md:p-10 shadow-elevated',
    text: 'text-2xl md:text-3xl lg:text-4xl text-white text-center italic font-light tracking-wide leading-relaxed',
  },
  editorial: {
    wrapper: 'bg-black-deep/30 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-elevated border-l-2 border-accent/30',
    text: 'text-xl md:text-2xl text-white italic font-light tracking-wide leading-relaxed',
  },
  minimal: {
    wrapper: '',
    text: 'text-xl md:text-2xl text-gray-300 text-center font-light tracking-wide leading-relaxed',
  },
}

/**
 * Consistent styling for site introduction blurbs
 */
export function SiteBlurb({
  children,
  variant = 'default',
  className = ''
}: SiteBlurbProps) {
  const styles = blurbVariantStyles[variant]

  return (
    <motion.div
      className={`${styles.wrapper} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <p className={styles.text}>
        {children}
      </p>
    </motion.div>
  )
}
