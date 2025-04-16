"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Define war photo data structure
export interface WarPhoto {
  id: string
  src: string
  alt: string
  caption: string
  source: string
}

interface PhotoCardProps {
  photo: WarPhoto
  onClick: (photo: WarPhoto) => void
  index: number
}

export default function PhotoCard({ photo, onClick, index }: PhotoCardProps) {
  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1 // Staggered animation
      }
    }
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
      onClick={() => onClick(photo)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
    >
      <div className="relative h-[480px] w-full md:h-64">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJcAP4i4MHowAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="p-6">
        <p className="text-gray-300 mb-2">{photo.caption}</p>
        <p className="text-sm text-gray-500 italic">{photo.source}</p>
      </div>
    </motion.div>
  )
}