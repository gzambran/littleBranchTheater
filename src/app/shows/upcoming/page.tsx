"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'

// Metadata needs to be in a separate file when using client components
// Using static values inline instead

export const revalidate = 3600 // Revalidate this page every hour

export default function UpcomingShow() {
  return (
    <div className="min-h-screen">
      {/* Show Hero Section */}
      <section className="relative h-[60vh] bg-black">
        {/* Background Image - Repositioned and lightened */}
        <div className="absolute inset-0 z-0 overflow-hidden flex items-center">
          <div className="relative w-[200%] md:w-[180%] h-[200%] md:h-[180%] ml-[25%] md:ml-[35%]">
            <Image 
              src="/images/honeybrowneyes.png"
              alt="Honey Brown Eyes production artwork"
              fill
              quality={100}
              priority
              className="scale-50 opacity-80 brightness-110 contrast-110"
              sizes="100vw"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedText
              text="Honey Brown Eyes"
              className="font-display text-5xl md:text-7xl mb-6 leading-tight"
            />
            <motion.p 
              className="text-2xl text-gray-300 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              By Stefanie Zadravec
            </motion.p>
            <motion.p 
              className="text-xl text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              May 22 - June 1, 2025
            </motion.p>
            <motion.p 
              className="text-xl text-accent font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Visual Arts Collective • Garden City, Idaho
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Show Details */}
            <div className="md:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl mb-6">About the Show</h2>
                <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                  <p>
                    In partnership with Alley Repertory Theater, Little Branch Company, a new theater company 
                    founded by Amela Karadza and Jovani Zambrano, brings you <em>Honey Brown Eyes</em>.
                  </p>
                  <p>
                    Bosnia 1992: In two kitchens, two soldiers recover a little of what they've lost during 
                    the war. A Serbian paramilitary soldier must face the consequences of his own brutality, 
                    while a Bosnian resistance fighter, crippled by the limits of his own courage, seeks 
                    refuge with a kindred soul.
                  </p>
                  <p>
                    The story of two young men, once friends, and the connection that will tie them forever; 
                    their love of music and the unimaginable horror of war.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl mb-6">Creative Team</h2>
                <ul className="space-y-4 text-gray-300">
                  <li>
                    <span className="font-medium">Director:</span> Amela Karadza
                  </li>
                  <li>
                    <span className="font-medium">Assistant Director:</span> John Wicks
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Ticket Info Sidebar */}
            <div>
              <motion.div 
                className="bg-gray-900 p-8 rounded-lg sticky top-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display text-2xl mb-6">Performance Details</h3>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h4 className="font-medium mb-2">Preview Night</h4>
                    <p>Thursday, May 22, 2025</p>
                    <p className="text-sm">Doors: 7:00 PM • Show: 8:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Opening Night</h4>
                    <p>Friday, May 23, 2025</p>
                    <p className="text-sm">Doors: 7:00 PM • Show: 8:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Additional Performances</h4>
                    <ul className="space-y-2 text-sm">
                      <li>Saturday, May 24 • 8:00 PM</li>
                      <li>Thursday, May 29 • 8:00 PM</li>
                      <li>Friday, May 30 • 8:00 PM</li>
                      <li>Saturday, May 31 • 8:00 PM</li>
                      <li>Sunday, June 1 • 2:00 PM (Matinee)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Venue</h4>
                    <p>Visual Arts Collective</p>
                    <p className="text-sm">Garden City, Idaho</p>
                  </div>
                  <div className="pt-4 space-y-4">
                    <a 
                      href="https://alleyreptheater.thundertix.com/events/236398"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-accent hover:bg-accent/80 text-white py-3 px-6 rounded-md text-center transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      Get Tickets
                    </a>
                    
                    {/* Social Sharing */}
                    <div className="flex justify-center items-center space-x-4 pt-2">
                      <p className="text-sm text-gray-400">Share:</p>
                      <motion.a
                        href={`https://www.instagram.com/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors"
                        whileHover={{ scale: 1.1 }}
                        aria-label="Share on Instagram"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </motion.a>
                      <motion.a
                        href={`mailto:?subject=Honey Brown Eyes at Little Branch Theater&body=Check out Honey Brown Eyes at Little Branch Theater: https://littlebranch.theater/shows/upcoming`}
                        className="text-gray-400 hover:text-accent transition-colors"
                        whileHover={{ scale: 1.1 }}
                        aria-label="Share via Email"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}