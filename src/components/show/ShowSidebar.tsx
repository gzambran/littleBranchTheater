import React from 'react'
import { motion } from 'framer-motion'

interface ShowSidebarProps {
  title: string
  children: React.ReactNode
}

export default function ShowSidebar({ title, children }: ShowSidebarProps) {
  return (
    <motion.div 
      className="bg-gray-900/50 p-8 rounded-lg sticky top-24 shadow-lg shadow-black/20 backdrop-blur-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h3 className="font-display text-2xl mb-6">{title}</h3>
      {children}
    </motion.div>
  )
}