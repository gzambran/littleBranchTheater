// src/components/PhotoModal.tsx
"use client"

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { WarPhoto } from './PhotoCard'

interface PhotoModalProps {
  photo: WarPhoto
  onClose: () => void
  theme?: 'dark' | 'honey' // Add theme prop
}

export default function PhotoModal({ photo, onClose, theme = 'dark' }: PhotoModalProps) {
  // Theme-based styles
  const styles = {
    dark: {
      overlay: "bg-black/90",
      card: "bg-gray-900",
      title: "text-white",
      caption: "text-gray-300",
      source: "text-gray-400",
      closeButton: "text-white hover:text-gray-300",
    },
    honey: {
      overlay: "bg-black/90", // Keep dark overlay for contrast
      card: "bg-[#FEF9E7] border border-[#D4A017]/20",
      title: "text-[#333333]",
      caption: "text-[#333333]",
      source: "text-[#8B4513]",
      closeButton: "text-white hover:text-[#D4A017]",
    }
  }
  
  const style = styles[theme]
  
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
      className={`fixed inset-0 ${style.overlay} z-50 flex items-center justify-center p-4`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className={`relative max-w-4xl rounded-lg shadow-xl overflow-hidden ${style.card}`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className={`absolute top-2 right-2 z-10 p-2 rounded-full ${style.closeButton} transition-colors`}
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
        <div className="p-4 sm:p-6">
          {/* Removed reference to photo.title */}
          
          {photo.caption && (
            <p className={`mb-3 ${style.caption}`}>{photo.caption}</p>
          )}
          
          {photo.source && (
            <p className={`text-sm ${style.source}`}>
              Source: {photo.source}
              {/* Removed reference to photo.sourceUrl */}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}