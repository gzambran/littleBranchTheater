"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import { TeamMember, teamMembers } from '@/data/team-members'

export const revalidate = 3600

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Team Hero */}
      <section className="relative py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <AnimatedText
              text="Ensemble"
              className="font-display text-5xl md:text-7xl mb-6"
            />
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Meet the talented individuals bringing Honey Brown Eyes to the stage
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-black">
        <motion.div 
          className="container mx-auto px-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ y: -5 }} // Reduced hover effect for smaller cards
                onClick={() => setSelectedMember(member)}
              >
                {/* Image Container */}
                <div className="aspect-square relative">
                  <Image
                    src={member.image || '/images/placeholder.jpg'}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-accent/10" />
                </div>
                
                {/* Content */}
                <div className="p-3 md:p-4"> {/* Reduced padding for smaller cards */}
                  <h2 className="font-display text-lg md:text-xl mb-1 group-hover:text-accent transition-colors line-clamp-1">
                    {member.name}
                  </h2>
                  <p className="text-accent text-sm md:text-base line-clamp-2">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8 relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Add image to modal */}
                <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden relative mx-auto md:mx-0">
                  <Image
                    src={selectedMember.image || '/images/placeholder.jpg'}
                    alt={`${selectedMember.name} - ${selectedMember.role}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="font-display text-2xl md:text-3xl mb-2">{selectedMember.name}</h2>
                  <p className="text-accent mb-4">{selectedMember.role}</p>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedMember.bio || "Bio coming soon..."}
                  </p>

                  {Object.values(selectedMember.socials).some(url => url !== "#") && (
                    <div className="flex space-x-4">
                      {Object.entries(selectedMember.socials).map(([platform, url]) => (
                        url !== "#" && (
                          <Link
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent transition-colors"
                          >
                            {platform.charAt(0).toUpperCase() + platform.slice(1)}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}