"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { urlFor } from '@/lib/sanity/client'
import { motion } from 'framer-motion'

interface GalleryImage {
  _id: string
  title?: string
  description?: string
  image: any
  alt: string
}

interface GalleryLightboxProps {
  images: GalleryImage[]
}

export default function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [open, setOpen] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setImageIndex(index)
    setOpen(true)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {images.map((image, index) => (
          <motion.div
            key={image._id}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer relative group"
            onClick={() => openLightbox(index)}
            variants={item}
          >
            <Image
              src={urlFor(image.image).url()}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {image.title && (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h3 className="text-white font-display text-lg">{image.title}</h3>
                  {image.description && (
                    <p className="text-gray-300 text-sm mt-1">{image.description}</p>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={images.map((image) => ({
          src: urlFor(image.image).width(1200).url(),
          alt: image.alt,
          title: image.title || '',
        }))}
      />
    </>
  )
}