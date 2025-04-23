// /src/components/beyond-the-lobby/TimelineMediaModal.tsx

"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { TimelineMedia } from '@/data/beyond-the-lobby/timelineData'

interface TimelineMediaModalProps {
  media: TimelineMedia[]
  onClose: () => void
  title: string
}

export default function TimelineMediaModal({ media, onClose, title }: TimelineMediaModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isSwiping, setIsSwiping] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  
  // Minimum swipe distance (in px)
  const minSwipeDistance = 50
  
  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])
  
  // Handle navigation
  const handleNext = () => {
    if (currentIndex < media.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }
  
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }
  
  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsSwiping(true)
  }
  
  const onTouchMove = (e: React.TouchEvent) => {
    if (isSwiping) {
      setTouchEnd(e.targetTouches[0].clientX)
    }
  }
  
  const onTouchEnd = () => {
    setIsSwiping(false)
    
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrev()
    }
  }
  
  const currentMedia = media[currentIndex]

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        ref={modalRef}
        className="relative w-full max-w-[90%] md:max-w-3xl overflow-hidden rounded-lg"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 z-20 p-2 rounded-full bg-[#D4A017] text-white hover:bg-[#E6B325] transition-colors shadow-md"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        
        {/* Pagination indicator */}
        <div className="absolute top-2 left-2 z-20 bg-[#D4A017] text-white text-sm font-medium py-1 px-3 rounded-full shadow-md">
          {currentIndex + 1} / {media.length}
        </div>
        
        {/* Navigation arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-20 p-1.5 rounded-full ${
                currentIndex === 0 ? 'bg-[#D4A017]/40 text-white/50 cursor-not-allowed' : 'bg-[#D4A017] text-white hover:bg-[#E6B325]'
              } transition-colors shadow-md`}
              disabled={currentIndex === 0}
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-20 p-1.5 rounded-full ${
                currentIndex === media.length - 1 ? 'bg-[#D4A017]/40 text-white/50 cursor-not-allowed' : 'bg-[#D4A017] text-white hover:bg-[#E6B325]'
              } transition-colors shadow-md`}
              disabled={currentIndex === media.length - 1}
              aria-label="Next image"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </>
        )}
        
        {/* Media container */}
        <div className="relative">
          <div className="bg-[#1a1a1a] flex items-center justify-center" style={{ minHeight: '60vh' }}>
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentIndex}
                src={currentMedia.src} 
                alt={currentMedia.alt || title}
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
          </div>
        </div>
        
        {/* Caption and details */}
        <div className="bg-[#FEF9E7] p-4 border-t-4 border-[#D4A017]">
          <h3 className="font-display text-lg sm:text-xl text-[#8B4513] mb-2">
            {title}
          </h3>
          
          {currentMedia.caption && (
            <p className="text-[#333333] text-sm sm:text-base mb-3">{currentMedia.caption}</p>
          )}
          
          {currentMedia.source && (
            <p className="text-[#8B4513] text-xs sm:text-sm italic">
              Source: {currentMedia.source}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}