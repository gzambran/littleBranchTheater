"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'

// Metadata needs to be in a separate file when using client components
// Using static values inline instead

export const revalidate = 3600 // Revalidate this page every hour

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  extendedBio: string;
  socials: {
    linkedin: string;
    instagram: string;
  };
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers = [
    {
      name: 'Amela Karadza',
      role: 'Co-Founder, Artistic Director',
      bio: 'A passionate theater director with a vision for bringing unique perspectives to the stage. Currently directing Honey Brown Eyes.',
      extendedBio: `As co-founder and artistic director of Little Branch Theater, Amela brings her unique vision and passion for storytelling to every production. With Honey Brown Eyes, she continues her dedication to bringing powerful, thought-provoking theater to the stage.`,
      socials: {
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'Jovani Zambrano',
      role: 'Co-Founder',
      bio: 'Dedicated to creating meaningful theatrical experiences that challenge and inspire audiences.',
      extendedBio: `As co-founder of Little Branch Theater, Jovani focuses on creating meaningful connections between performers and audiences. His vision helps shape the company's artistic direction and community engagement.`,
      socials: {
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'John Wicks',
      role: 'Assistant Director',
      bio: 'Assistant Director for Honey Brown Eyes, bringing fresh insights to the production process.',
      extendedBio: `John's attention to detail and creative insights help bring additional depth to Little Branch Theater's productions. As Assistant Director for Honey Brown Eyes, he works closely with the creative team to realize the show's vision.`,
      socials: {
        linkedin: '#',
        instagram: '#'
      }
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      <section className="relative py-32 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <AnimatedText
              text="Our Team"
              className="font-display text-5xl md:text-7xl mb-6"
            />
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Meet the passionate individuals bringing fresh perspectives to the stage
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ y: -8 }}
                onClick={() => setSelectedMember(member)}
              >
                {/* Image Container */}
                <div className="aspect-square relative bg-gray-800">
                  <div className="absolute inset-0 bg-accent/10" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h2 className="font-display text-2xl mb-2 group-hover:text-accent transition-colors">
                    {member.name}
                  </h2>
                  <p className="text-accent mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6">{member.bio}</p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {Object.entries(member.socials).map(([platform, url]) => (
                      <Link
                        key={platform}
                        href={url}
                        className="text-gray-400 hover:text-accent transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </Link>
                    ))}
                  </div>
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
              className="bg-gray-900 rounded-lg max-w-2xl w-full p-8 relative"
              initial={{ opacity: 0, y: 20 }}
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

              <div className="mb-6">
                <h2 className="font-display text-3xl mb-2">{selectedMember.name}</h2>
                <p className="text-accent">{selectedMember.role}</p>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedMember.extendedBio}
              </p>

              <div className="flex space-x-4">
                {Object.entries(selectedMember.socials).map(([platform, url]) => (
                  <Link
                    key={platform}
                    href={url}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}