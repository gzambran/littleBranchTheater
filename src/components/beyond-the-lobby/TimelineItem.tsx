"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

export interface TimelineItemData {
  id: string
  year: string
  title: string
  content: string
  iconColor?: string
}

interface TimelineItemProps {
  item: TimelineItemData
  index: number
  onInfoClick?: (id: string) => void
}

export default function TimelineItem({ item, index, onInfoClick }: TimelineItemProps) {
  // Animation variants for the timeline item
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1 // Staggered animation
      }
    }
  }

  return (
    <div className="flex mb-12 relative">
      {/* Year badge - on the timeline - LARGER SIZE */}
      <div 
        className="absolute left-4 sm:left-6 -translate-x-1/2 flex items-center justify-center z-20 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shadow-md timeline-dot"
        style={{ 
          backgroundColor: item.iconColor || '#D4A017' 
        }}
      >
        <div className="text-white font-bold text-sm sm:text-base timeline-date">
          {item.year.includes("Pre") ? (
            <>
              <div className="text-xs sm:text-sm">Pre</div>
              <div>1992</div>
            </>
          ) : (
            item.year
          )}
        </div>
      </div>
      
      {/* Content - right side only - ADJUSTED MARGIN TO ACCOMMODATE LARGER BADGE */}
      <motion.div
        className="ml-16 sm:ml-20 flex-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
      >
        <div className="bg-[#FEF9E7] p-4 sm:p-6 rounded-lg shadow-md border border-[#D4A017]/20 timeline-content timeline-item">
          <h3 className="font-display text-lg sm:text-xl text-[#8B4513] mb-2 timeline-title">{item.title}</h3>
          <p className="text-[#333333] text-sm sm:text-base">{item.content}</p>
          
          {/* Info Icon */}
          {onInfoClick && (
            <button 
              onClick={() => onInfoClick(item.id)}
              className="mt-3 text-[#D4A017] hover:text-[#8B4513] transition-colors flex items-center text-sm"
              aria-label={`More information about ${item.title}`}
            >
              <InformationCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
              <span>More info</span>
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}