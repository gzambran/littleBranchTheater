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
    ? 'bg-gray-950/50 p-8 rounded-lg shadow-elevated'
    : 'bg-black-deep/50 p-6 md:p-8 backdrop-blur-sm rounded-lg border-l-2 border-accent/40 shadow-elevated'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
    >
      <h2 className="heading-3 mb-6">{title}</h2>
      <div className={containerClass}>
        {children}
      </div>
    </motion.div>
  )
}
