"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import EventStructuredData from '@/components/EventStructuredData'

export const revalidate = 3600

export default function UpcomingShow() {

  return (
    <>
      <EventStructuredData 
        name="Honey Brown Eyes"
        description="Bosnia 1992: In two kitchens, two soldiers recover a little of what they've lost during the war. A Serbian paramilitary soldier must face the consequences of his own brutality, while a Bosnian resistance fighter, crippled by the limits of his own courage, seeks refuge with a kindred soul."
        startDate="2025-05-23T20:00:00-06:00"
        endDate="2025-06-01T14:00:00-06:00"
        location={{
          name: "Visual Arts Collective",
          address: "Garden City, Idaho"
        }}
        ticketUrl="https://alleyreptheater.thundertix.com/events/236398"
        doorTime="2025-05-23T19:00:00-06:00"
        performer="Little Branch Theater"
        image="https://littlebranchtheater.org/images/honeybrowneyes.png"
      />
      
      <div className="min-h-screen bg-black">
        <section className="relative pt-10 flex flex-col items-center">
          <div className="w-full max-w-6xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(217,119,6,0.2)] relative">
              <div className="block relative group">
                <div className="relative w-full flex justify-center bg-black/30 py-8">
                  <Image 
                    src="/images/honeybrowneyes.webp"
                    alt="Honey Brown Eyes"
                    width={500}
                    height={750}
                    className="object-contain h-[45vh] md:h-[55vh] w-auto"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1536px"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent pt-16 pb-6 px-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      className="text-center"
                    >
                      <p className="text-white text-lg md:text-xl">
                        <span className="text-accent font-medium">May 22 - June 1, 2025</span> • Visual Arts Collective, Garden City
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ticket button */}
        <div className="container mx-auto px-4">
          <div className="mt-8 mb-12 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a 
                href="https://alleyreptheater.thundertix.com/events/236398"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-white py-3 px-12 rounded-md text-center transition-all duration-200 transform hover:scale-[1.02] text-lg font-medium"
              >
                Get Tickets
              </a>
            </motion.div>
          </div>
        </div>

        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Show Details */}
              <div className="md:col-span-2 space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-3xl mb-6">About the Show</h2>
                  <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                    <p>
                      In partnership with Alley Repertory Theater, Little Branch, a new theater company 
                      founded by Amela Karadza and Jovani Zambrano, brings you <em>Honey Brown Eyes</em> by <em>Stefanie Zadravec</em>.
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
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-3xl mb-6">Our Supporters</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <a href="https://alleyrep.org" target="_blank" rel="noopener" 
                      className="flex items-center justify-center h-32 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300">
                      <Image 
                        src="/images/sponsors/alley-rep-logo.svg"
                        alt="Alley Rep"
                        width={200}
                        height={100}
                        className="max-w-full max-h-full object-contain"
                      />
                    </a>
                    <a href="https://visualartscollective.com" target="_blank" rel="noopener" 
                      className="flex items-center justify-center h-32 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300">
                      <Image 
                        src="/images/sponsors/visual-arts-collective-logo.svg"
                        alt="Visual Arts Collective"
                        width={200}
                        height={100}
                        className="max-w-full max-h-full object-contain"
                      />
                    </a>
                    <a href="https://arts.idaho.gov" target="_blank" rel="noopener" 
                      className="flex items-center justify-center h-32 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300">
                      <Image 
                        src="/images/sponsors/arts-idaho-logo.jpg"
                        alt="Arts Idaho"
                        width={200}
                        height={100}
                        className="max-w-full max-h-full object-contain"
                      />
                    </a>
                    <a href="https://www.puffinfoundation.org" target="_blank" rel="noopener" 
                      className="flex items-center justify-center h-32 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300">
                      <Image 
                        src="/images/sponsors/puffin-foundation-logo.jpeg"
                        alt="Puffin Foundation"
                        width={200}
                        height={100}
                        className="max-w-full max-h-full object-contain"
                      />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Performance Details Sidebar */}
              <div>
                <motion.div 
                  className="bg-gray-900 p-8 rounded-lg sticky top-24"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
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
                    
                    {/* Social Sharing */}
                    <div className="pt-4">
                      <p className="text-sm text-gray-400 mb-2">Share:</p>
                      <div className="flex items-center space-x-4">
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
    </>
  )
}