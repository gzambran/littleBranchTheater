"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'

export const revalidate = 3600

export default function Home() {

  return (
    <div className="min-h-screen">
      <section className="relative pt-10 flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(217,119,6,0.2)] relative"
          >
            <Link href="/shows/upcoming" className="block relative group">
              <div className="relative w-full flex justify-center bg-black/30 py-8">
                <Image 
                  src="/images/honeybrowneyes.png"
                  alt="Honey Brown Eyes"
                  width={500}
                  height={750}
                  className="object-contain h-[45vh] md:h-[55vh] w-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1536px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent pt-16 pb-6 px-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center"
                  >
                    <p className="text-white text-lg md:text-xl">
                      <span className="text-accent font-medium">May 22 - June 1, 2025</span> • Visual Arts Collective, Garden City
                    </p>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="font-display text-4xl mb-8 text-center">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-10">
              Little Branch Theater connects communities through bold storytelling and the celebration of diverse voices. 
              We are dedicated to providing opportunities for local artists, engaging with underrepresented communities, 
              and creating work that inspires meaningful conversation. We aim to build a new audience filled with curiosity 
              and the courage to challenge their perspectives.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/vision"
                className="inline-block bg-accent hover:bg-accent/80 
                  text-white px-8 py-3 rounded-md transition-all duration-200 text-lg font-medium"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}