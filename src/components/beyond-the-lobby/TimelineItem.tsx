"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { TimelineMedia } from '@/data/beyond-the-lobby/timelineData'

export interface TimelineItemData {
  id: string
  year: string
  title: string
  content: string
  iconColor?: string
  additionalMedia?: TimelineMedia[]
  safe?: string   // Added separate property for 'safe'
  areas?: string  // Added separate property for 'areas'
}

interface TimelineItemProps {
  item: TimelineItemData
  index: number
  onInfoClick?: (id: string, title: string) => void
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
          
          {/* Safe Areas info if available */}
          {(item.safe || item.areas) && (
            <div className="mt-2 text-sm text-[#8B4513]/80 italic">
              {item.safe} {item.areas}
            </div>
          )}
          
          {/* Info Icon */}
          {onInfoClick && item.additionalMedia && item.additionalMedia.length > 0 && (
            <button 
              onClick={() => onInfoClick(item.id, item.title)}
              className="mt-3 text-[#D4A017] hover:text-[#8B4513] transition-colors flex items-center text-sm group"
              aria-label={`Learn Moret ${item.title}`}
            >
              <InformationCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-1 group-hover:animate-pulse" />
              <span>Learn More</span>
              <span className="ml-1 text-xs text-[#8B4513]/70">({item.additionalMedia.length} slides)</span>
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}