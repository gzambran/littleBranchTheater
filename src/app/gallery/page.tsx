"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

// Metadata needs to be in a separate file when using client components
// Using static values inline instead

export const revalidate = 3600 // Revalidate this page every hour

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // This will be replaced with CMS content later
  const galleryImages = [
    {
      id: 1,
      src: '/images/placeholder.jpg',
      alt: 'Theater production photo 1',
      width: 1920,
      height: 1080,
      caption: 'Rehearsal for Honey Brown Eyes'
    },
    {
      id: 2,
      src: '/images/placeholder.jpg',
      alt: 'Theater production photo 2',
      width: 1920,
      height: 1080,
      caption: 'Behind the scenes'
    },
    {
      id: 3,
      src: '/images/placeholder.jpg',
      alt: 'Theater production photo 3',
      width: 1920,
      height: 1080,
      caption: 'Set design in progress'
    },
    {
      id: 4,
      src: '/images/placeholder.jpg',
      alt: 'Theater production photo 4',
      width: 1920,
      height: 1080,
      caption: 'Costume design'
    },
    {
      id: 5,
      src: '/images/placeholder.jpg',
      alt: 'Theater production photo 5',
      width: 1920,
      height: 1080,
      caption: 'Tech rehearsal'
    },
    {
      id: 6,
      src: '/images/placeholder.jpg',
      alt: 'Theater production photo 6',
      width: 1920,
      height: 1080,
      caption: 'Opening night'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Gallery Hero */}
      <motion.section 
        className="relative py-32 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center">
            <AnimatedText
              text="Gallery"
              className="font-display text-5xl md:text-7xl mb-6"
            />
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              A visual journey through our productions and behind-the-scenes moments
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <section className="py-16 bg-black">
        <motion.div 
          className="container mx-auto px-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={item}
                className="aspect-video relative rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-lg">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={galleryImages.map(img => ({
          src: img.src,
          alt: img.alt,
          width: img.width,
          height: img.height,
          description: img.caption
        }))}
      />
    </div>
  )
}