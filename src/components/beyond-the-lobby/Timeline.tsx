"use client"

import React from 'react'
import { motion } from 'framer-motion'
import TimelineItem, { TimelineItemData } from './TimelineItem'

interface TimelineProps {
  items: TimelineItemData[]
  title?: string
  description?: string
  onInfoClick?: (id: string, title: string) => void
}

export default function Timeline({ items, title, description, onInfoClick }: TimelineProps) {
  return (
    <div className="relative py-12">
      {/* Title Section */}
      {(title || description) && (
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title && (
            <h2 className="font-display text-3xl text-[#D4A017] mb-4">{title}</h2>
          )}
          {description && (
            <p className="text-[#333333] max-w-2xl mx-auto">{description}</p>
          )}
        </motion.div>
      )}

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Items */}
        <div className="relative">
          {/* Vertical Line - left aligned */}
          <div 
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-[#D4A017] timeline-line" 
            aria-hidden="true" 
          />
          
          {/* Timeline Items */}
          <div className="relative z-10">
            {items.map((item, index) => (
              <TimelineItem 
                key={item.id}
                item={item}
                index={index}
                onInfoClick={onInfoClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}