"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export default function AnimatedText({ text, className = '', once = true }: AnimatedTextProps) {
  // Split text into words
  const words = text.split(' ')

  // Animation variants for container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  // Animation variants for each word
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{ 
        overflow: 'visible', 
        display: 'flex', 
        flexWrap: 'wrap',
        lineHeight: 1.2, 
        paddingBottom: '0.5em' 
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mr-1 inline-block"
          style={{ overflow: 'visible' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}