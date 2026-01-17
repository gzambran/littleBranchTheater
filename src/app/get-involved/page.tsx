"use client"

import React from 'react'
import { motion } from 'framer-motion'
import PageHeader, { SiteBlurb } from '@/components/PageHeader'
import SpotlightCard from '@/components/SpotlightCard'
import Newsletter from '@/components/newsletter/Newsletter'
import '@/components/newsletter/newsletter.css'

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-black-warm">
      {/* Page Header */}
      <PageHeader variant="contextual" className="pb-8 md:pb-10">
        <SiteBlurb>
          Join the <span className="text-accent font-normal">journey</span> and be part of what&apos;s <span className="text-accent font-normal">next</span>.
        </SiteBlurb>
      </PageHeader>

      {/* Main Content */}
      <section className="pt-4 pb-16 bg-black-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">

           {/* Box 1: Collaborate With Us - Glassy Blue with Spotlight */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <SpotlightCard 
              className="bg-[#0a1628]/30 backdrop-blur-lg p-6 md:p-8 rounded-lg border border-white/15 hover:border-accent/30 transition-all duration-300 flex flex-col group shadow-elevated hover:shadow-glow-accent"
                spotlightColor="rgba(166, 226, 46, 0.15)"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-white">Collaborate With Us</h2>
                </div>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  A growing community of actors, directors, designers, and volunteers. Fill out our interest form to stay connected to upcoming opportunities.
                </p>

                <div className="text-center mt-2">
                  <motion.a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfE2Abl5mHHJdjo1jflpapaJSyYC1gaoCC0pAJweyXuzoT6pg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent hover:bg-accent/90 text-black font-bold py-3 px-6 md:px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg shadow-accent/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Our Artist Network
                  </motion.a>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Box 2: Support Little Branch - Glassy Blue with Spotlight AND Subtle Glow */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <SpotlightCard 
                className="bg-[#0a1628]/50 backdrop-blur-lg p-6 md:p-8 rounded-lg border border-white/15 hover:border-accent/30 transition-all duration-300 flex flex-col group shadow-[0_0_30px_rgba(166,226,46,0.1)] hover:shadow-[0_0_40px_rgba(166,226,46,0.2)]"
                spotlightColor="rgba(166, 226, 46, 0.15)"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-white">Support Little Branch</h2>
                </div>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  Your donation directly supports our productions, artists, and accessible ticket prices. Help us continue creating bold, community-centered theater.
                </p>

                <div className="text-center mt-2">
                  <motion.a
                    href="https://square.link/u/UO5LLWNE?src=embed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent hover:bg-accent/90 text-black font-bold py-3 px-6 md:px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg shadow-accent/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Support
                  </motion.a>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Box 3: Stay Updated - Glassy Blue with Spotlight */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <SpotlightCard 
               className="bg-[#0a1628]/30 backdrop-blur-lg p-6 md:p-8 rounded-lg border border-white/15 hover:border-accent/30 transition-all duration-300 flex flex-col group shadow-elevated hover:shadow-glow-accent"
                spotlightColor="rgba(166, 226, 46, 0.15)"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-white">Stay Updated</h3>
                </div>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  Be the first to hear about upcoming shows, special events, and behind-the-scenes updates. Join our mailing list and grow with us.
                </p>

                <div className="flex justify-center mt-2">
                  <Newsletter />
                </div>
              </SpotlightCard>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}