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
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 flex flex-col items-center">
        <div className="container mx-auto px-4">
          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-5xl text-white leading-relaxed">
              Thank you for making our <span className="text-accent">debut</span> production a <span className="text-accent">success</span>.
            </h2>
            <p className="font-display text-2xl md:text-4xl text-white mt-4">
              We&apos;ll be back in Spring 2026.
            </p>
          </motion.div>

          {/* Hero Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-5xl mx-auto"
          >
            <Link href="/shows/honey-brown-eyes" className="group block">
              <div className="rounded-xl overflow-hidden shadow-[0_0_40px_rgba(166,226,46,0.15)] border border-accent/20 transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(166,226,46,0.25)] group-hover:border-accent/30">
                <div className="relative aspect-[16/10]">
                  <Image 
                    src="/images/homepage.webp"
                    alt="Honey Brown Eyes Production"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
                  />
                  
                  {/* Gradient Overlay for Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Production Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                      className="text-center"
                    >
                      <h3 className="font-display text-3xl md:text-4xl text-white mb-2 group-hover:text-accent transition-colors">
                        Honey Brown Eyes
                      </h3>
                      <p className="text-gray-300 text-lg italic">
                        By Stefanie Zadravec
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Review Quote - Centered */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 max-w-3xl mx-auto text-center"
            >
              <p className="text-gray-300 italic text-lg mb-2">"An explosive entrance for Little Branch."</p>
              <p className="text-accent text-sm">— The Spot</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Subtle divider */}
      <div className="w-24 h-px bg-accent/30 mx-auto my-6"></div>

      {/* Mission Section */}
      <section className="py-8 bg-black relative">
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