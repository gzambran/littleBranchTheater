"use client"

import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'

export const revalidate = 3600

export default function Gallery() {
  return (
    <div className="min-h-screen">
      {/* Gallery Hero */}
      <motion.section 
        className="relative py-16 bg-black"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center">
            <AnimatedText
              text="Gallery"
              className="font-display text-5xl md:text-7xl mb-6"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Coming Soon Message */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="bg-gray-900 p-8 md:p-12 rounded-lg max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-display mb-6 text-amber-300">Coming Soon</h2>
            <p className="text-lg text-gray-300 mb-4">
              Our first production is just getting started. Check back soon for behind-the-scenes and production photos!
            </p>
            <div className="h-1 w-24 bg-amber-300 mx-auto mt-8 mb-4"></div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}