"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { TeamMember, teamMembers } from '@/data/team-members'
import PageHeader, {SiteBlurb} from '@/components/PageHeader'

export const revalidate = 3600

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Preload the selected member's image when they're clicked
  useEffect(() => {
    if (selectedMember) {
      const imgElement = new window.Image();
      imgElement.src = selectedMember.image || '/images/placeholder.jpg';
    }
  }, [selectedMember]);
  
  // Creative design team members
  const creativeDesignMembers = [
    { name: "Amber Ellis", role: "Scenic Assistant" },
    { name: "Wendy Fox", role: "Costume Design" },
    { name: "Chaz Gentry", role: "Lighting Design" },
    { name: "Jessica Nebeker", role: "Set Design" }
  ];

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
    <div className="min-h-screen bg-black">
      {/* Introduction using PageHeader component */}
      <PageHeader>
        <SiteBlurb>
          Meet the <span className="text-accent font-normal">talented</span> individuals bringing Honey Brown Eyes to life through their <span className="text-accent font-normal">craft</span> and <span className="text-accent font-normal">passion</span> for storytelling.
        </SiteBlurb>
      </PageHeader>

      {/* Cast & Production Team Grid with pt-8 to match other pages */}
      <section className="pt-8 pb-16 bg-black relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 opacity-3 bg-gradient-to-b from-accent/5 to-transparent"></div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <h2 className="font-display text-2xl md:text-3xl text-white mb-8 border-l-4 border-accent pl-4">
            Cast & Production Team
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer shadow-md shadow-black/20 border border-accent/10"
                whileHover={{ y: -5, scale: 1.02 }} 
                transition={{ duration: 0.2 }}
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
                    priority={index < 4} // Add priority loading for the first 4 images
                    loading={index < 4 ? "eager" : "lazy"} // Explicitly set loading strategy
                  />
                  <div className="absolute inset-0 bg-accent/10" />
                </div>
                
                {/* Content */}
                <div className="p-3 md:p-4">
                  <h2 className="font-display text-lg md:text-xl mb-1 group-hover:text-accent transition-colors line-clamp-1">
                    {member.name}
                  </h2>
                  <p className="text-accent text-sm md:text-base line-clamp-2">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Subtle divider */}
        <div className="w-24 h-px bg-accent/30 mx-auto mt-16"></div>
      </section>
      
      {/* Creative Design Team Section */}
      <section className="py-16 bg-black relative">
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          variants={container}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-white mb-8 border-l-4 border-accent pl-4">
            Creative Design Team
          </h2>
          
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-md shadow-black/20 border border-accent/10 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {creativeDesignMembers.map((designer, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="flex items-center space-x-4"
                >
                  <div>
                    <h3 className="font-display text-xl text-white">{designer.name}</h3>
                    <p className="text-accent">{designer.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              className="bg-gray-900/90 backdrop-blur-sm rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8 relative shadow-[0_5px_25px_rgba(217,119,6,0.15)] border border-accent/20"
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
                {/* Add image to modal with priority loading */}
                <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden relative mx-auto md:mx-0 shadow-md shadow-black/20 border border-accent/30">
                  <Image
                    src={selectedMember.image || '/images/placeholder.jpg'}
                    alt={`${selectedMember.name} - ${selectedMember.role}`}
                    fill
                    className="object-cover"
                    priority={true}
                    loading="eager"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="font-display text-2xl md:text-3xl mb-2">{selectedMember.name}</h2>
                  <p className="text-accent mb-4">{selectedMember.role}</p>
                  
                  <div className="bg-black/40 p-4 rounded backdrop-blur-sm shadow-inner shadow-black/20">
                    <p className="text-gray-300 leading-relaxed">
                      {selectedMember.bio || "Bio coming soon..."}
                    </p>
                  </div>

                  {Object.values(selectedMember.socials).some(url => url !== "#") && (
                    <div className="flex space-x-4 mt-6">
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