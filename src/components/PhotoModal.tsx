"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { WarPhoto } from './PhotoCard'

interface PhotoModalProps {
  photo: WarPhoto | null
  onClose: () => void
}

export default function PhotoModal({ photo, onClose }: PhotoModalProps) {
  if (!photo) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 z-10 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>
        
        <div className="relative h-[50vh] md:h-[70vh] w-full">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
        
        <div className="p-6">
          <p className="text-gray-300 mb-4 text-lg">{photo.caption}</p>
          <p className="text-gray-500 italic">{photo.source}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}