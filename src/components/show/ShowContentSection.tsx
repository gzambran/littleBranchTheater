import React from 'react'
import { motion } from 'framer-motion'

interface ShowContentSectionProps {
  title: string
  children: React.ReactNode
  variant?: 'default' | 'gray'
  delay?: number
}

export default function ShowContentSection({ 
  title, 
  children, 
  variant = 'default',
  delay = 0 
}: ShowContentSectionProps) {
  
  const containerClass = variant === 'gray' 
    ? 'bg-gray-900/50 p-8 rounded-lg shadow-md shadow-black/20'
    : 'bg-black/50 p-6 backdrop-blur-sm rounded-lg border-l border-accent/30 shadow-md shadow-black/10'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
    >
      <h2 className="font-display text-3xl mb-6">{title}</h2>
      <div className={containerClass}>
        {children}
      </div>
    </motion.div>
  )
}