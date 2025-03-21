"use client"

import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'

export const revalidate = 3600

export default function Research() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative py-16 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <AnimatedText
              text="Beyond the Lobby"
              className="font-display text-5xl md:text-7xl mb-6"
            />
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Explore the history and research that shaped Honey Brown Eyes.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-gray-900 p-8 rounded-lg mb-12">
                <h2 className="font-display text-3xl text-accent mb-6">Welcome, Theater Patron!</h2>
                
                <p className="text-gray-300 mb-6">
                  Thank you for scanning our QR code. This hidden page contains exclusive behind-the-scenes information about our current production, research materials that informed our creative decisions, and deeper context to enhance your viewing experience.
                </p>
                
                <div className="border-l-4 border-accent pl-4 italic text-gray-400 mb-6">
                  "The true magic of theater lies not just in what audiences see on stage, but in the countless hours of research, exploration, and discovery that shape every production." 
                </div>
              </div>
            </motion.div>

            {/* Placeholder for content that will be updated by your brother */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-12"
            >
              <div className="bg-gray-900 p-8 rounded-lg">
                <h2 className="font-display text-2xl mb-4">Historical Context</h2>
                <p className="text-gray-300">
                  [This section will contain historical context about the setting, time period, and social conditions relevant to the play. Your brother will provide the specific content.]
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <h2 className="font-display text-2xl mb-4">Artistic Inspirations</h2>
                <p className="text-gray-300">
                  [This section will explore the visual, literary, and artistic influences that shaped the production design. Your brother will provide the specific content.]
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <h2 className="font-display text-2xl mb-4">Thematic Analysis</h2>
                <p className="text-gray-300">
                  [This section will delve into the key themes and motifs of the production, providing a deeper interpretation of the narrative. Your brother will provide the specific content.]
                </p>
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16 text-center"
            >
              <p className="text-gray-300 mb-6">
                We hope this additional context enhances your experience of our production. We'd love to hear your thoughts after the show!
              </p>
              <Link
                href="/"
                className="inline-block bg-accent hover:bg-accent/90 
                  text-white px-8 py-3 rounded-md transition"
              >
                Return to Main Site
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}