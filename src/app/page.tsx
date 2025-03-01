"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'

export const revalidate = 3600 // Revalidate this page every hour

export default function Home() {
  // For Docker demo, we'll use placeholder data
  const upcomingShow = {
    title: "Honey Brown Eyes",
    startDate: "2025-05-22T19:00:00Z",
    venue: "Visual Arts Collective",
    description: "Bosnia 1992: In two kitchens, two soldiers recover a little of what they have lost during the war."
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Optional: Add a background image here */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <motion.div 
          className="text-center space-y-8 z-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-white font-display text-3xl md:text-4xl font-bold">
              <span className="text-accent">Little</span> Branch
            </div>
            
            <div className="mt-2 mb-8">
              <AnimatedText
                text="a theater company"
                className="font-display text-2xl md:text-3xl text-gray-300"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="inline-block"
          >
            <Link
              href="/shows/upcoming"
              className="inline-block bg-accent hover:bg-accent/80 
                text-white px-8 py-3 rounded-md transition-all duration-200"
            >
              View Upcoming Show
            </Link>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                scale: { duration: 0.2 }
              }}
            >
              <p className="text-sm text-gray-400 mb-2">Scroll</p>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-accent"
              >
                <path d="M7 13l5 5 5-5"></path>
                <path d="M7 6l5 5 5-5"></path>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Preview */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl mb-8 text-center">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
              Little Branch Theater connects communities through bold storytelling and the celebration of diverse voices. 
              We are dedicated to providing opportunities for local artists, engaging with underrepresented communities, 
              and creating work that inspires meaningful conversation. We aim to build a new audience filled with curiosity 
              and the courage to challenge their perspectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Show Teaser */}
      {upcomingShow && (
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-accent/10 p-8 rounded-lg max-w-3xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl mb-4">Coming Soon</h2>
              <h3 className="font-display text-4xl mb-2">{upcomingShow.title}</h3>
              <p className="text-xl text-gray-300 mb-4">
                {new Date(upcomingShow.startDate).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric'
                })}
                {' • '}
                {upcomingShow.venue}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-4"
              >
                <Link
                  href="/shows/upcoming"
                  className="inline-block bg-accent hover:bg-accent/80 
                    text-white px-6 py-2 rounded-md transition-all duration-200"
                  aria-label="Learn more about our upcoming show"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}