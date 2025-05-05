"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const revalidate = 3600

export default function Home() {

  return (
    <div className="min-h-screen bg-black">
      <h1 className="sr-only">Little Branch Theater</h1>
      <section className="relative pt-10 flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden shadow-[0_0_35px_rgba(217,119,6,0.25)] relative"
          >
            <Link href="/shows/upcoming" className="block relative group">
              <div className="relative w-full flex justify-center py-8">
                <Image 
                  src="/images/honeybrowneyes.webp"
                  alt="Honey Brown Eyes"
                  width={500}
                  height={750}
                  className="object-contain h-[45vh] md:h-[55vh] w-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1536px"
                />
                <div className="absolute bottom-0 left-0 right-0 pt-16 pb-6 px-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-center"
                  >
                    <p className="text-accent font-medium text-lg md:text-xl">
                      May 22 - June 1, 2025
                    </p>
                    <p className="text-white text-lg md:text-xl">
                      Visual Arts Collective, Garden City
                    </p>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Subtle divider */}
      <div className="w-24 h-px bg-accent/30 mx-auto my-16"></div>

      <section className="py-24 bg-black relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 opacity-3 bg-gradient-to-b from-accent/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="font-display text-4xl mb-8 text-center">Our Mission</h2>
            <div className="bg-black/50 p-8 backdrop-blur-sm rounded-lg max-w-3xl mx-auto shadow-md shadow-black/10 border-l border-r border-accent/30 mb-10">
              <p className="text-xl text-gray-300 text-center">
                Little Branch connects communities through bold storytelling and the celebration of diverse voices. 
                We are dedicated to providing opportunities for local artists, engaging with underrepresented communities, 
                and creating work that inspires meaningful conversation. We aim to build a new audience filled with curiosity 
                and the courage to challenge their perspectives.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/who-we-are"
                className="inline-block bg-accent hover:bg-accent/80 
                  text-white px-8 py-3 rounded-md transition-all duration-200 text-lg font-medium shadow-md shadow-black/20"
              >
                Who We Are
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}