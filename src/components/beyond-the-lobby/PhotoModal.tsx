"use client"

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { WarPhoto } from './PhotoCard'

interface PhotoModalProps {
  photo: WarPhoto
  onClose: () => void
}

export default function PhotoModal({ photo, onClose }: PhotoModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])
  
  return (
    <motion.div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="relative max-w-4xl overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 z-10 p-2 rounded-full bg-[#D4A017] text-white hover:bg-[#E6B325] transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Image */}
        <div className="relative">
          <img 
            src={photo.src} 
            alt={photo.alt || 'War photograph'} 
            className="w-full max-h-[80vh] object-contain"
          />
        </div>
        
        {/* Caption and details */}
        <div className="bg-[#FEF9E7] p-4 sm:p-6 border-t-4 border-[#D4A017]">          
          {photo.caption && (
            <p className="text-[#333333] mb-3">{photo.caption}</p>
          )}
          
          {photo.source && (
            <p className="text-[#8B4513] text-sm italic">
              Source: {photo.source}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}