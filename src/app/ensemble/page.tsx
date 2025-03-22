"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'

export const revalidate = 3600

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    instagram: string;
    website: string;
  };
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      "name": "Terri Dillion",
      "role": "Jovanka",
      "image": "/images/placeholder.jpg",
      "bio": "",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Amber Ellis",
      "role": "Scenic Assistant/Scenic Charge Assist",
      "image": "/images/placeholder.jpg",
      "bio": "",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Edin Ferkić",
      "role": "Denis",
      "image": "/images/placeholder.jpg",
      "bio": "",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Trevor Ferguson",
      "role": "Dragan",
      "image": "/images/placeholder.jpg",
      "bio": "",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Wendy Fox",
      "role": "Costume Designer",
      "image": "/images/placeholder.jpg",
      "bio": "",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Chaz Gentry",
      "role": "Lighting Designer",
      "image": "/images/placeholder.jpg",
      "bio": "",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Lexi Johns",
      "role": "Stage Manager",
      "image": "/images/placeholder.jpg",
      "bio": "",  
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Amela Karadža",
      "role": "Director/Alma",
      "image": "/images/karadza.webp",
      "bio": "Amela Karadža was born in Bosnia and at the age of 5 immigrated to Boise where she spent many delightful years. She's a graduate of Rutgers Mason Gross School of the Arts, MFA program. Some of her favorite roles include: Joan (Vinegar Tom/Theatre C and Rutgers Theatre Co.), Duke of Aumerle (Richard II at Shakespeare's Globe Theatre in London), and #2 (The Wolves/Boise Contemporary Theater). She loves teaching Meisner Technique around the valley in her free time and hanging out with her fur-children! Thank you to my beautiful mom and wonderful husband for all your support. Love you dad, forever and always.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Jessica Nebeker",
      "role": "Set Designer",
      "image": "/images/placeholder.jpg",
      "bio": "",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Anthony Parry",
      "role": "Musician/Composer",
      "image": "/images/placeholder.jpg",
      "bio": "",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Mirza Suman",
      "role": "Zlata",
      "image": "/images/placeholder.jpg",
      "bio": "",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Mike Ward",
      "role": "Musician/Composer",
      "image": "/images/placeholder.jpg",
      "bio": "",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "John Wicks",
      "role": "Assistant Director",
      "image": "/images/placeholder.jpg",
      "bio": "",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Ellie Wirth",
      "role": "Prop Designer/Assistant Stage Manager",
      "image": "/images/placeholder.jpg",
      "bio": "",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Majda Zahić",
      "role": "Radio Broadcaster",
      "image": "/images/placeholder.jpg",
      "bio": "",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Jovani Zambrano",
      "role": "Sound Designer/Branko/Milenko",
      "image": "/images/zambrano.jpg",
      "bio": "Jovani Zambrano was born and raised in Brooklyn, New York, and now calls Boise, Idaho, home, where he pursues his passion for acting and theater-making. He studied at Rutgers Mason Gross School of the Arts and performed at Shakespeare's Globe in As You Like It. His work has been seen at Hudson Valley Shakespeare, Theater for the New City, Boise Contemporary Theater, Alley Repertory Theater, and The Spot. Collaborating with these inspiring companies and ensembles fueled his desire to build Little Branch Theater—a space where artists can learn, take risks, fail spectacularly, and create something extraordinary. He would not be able to do any of this without the creativity and support of his wife. Among his favorite roles, playing Oscar in Sweat by Lynn Nottage was a particularly meaningful experience.",
      "socials": {
        "instagram": "https://www.instagram.com/jovani_witha_j/",
        "website": "https://www.jovanizambrano.com"
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
                <div className="aspect-square relative">
                  <Image
                    src={member.image || '/images/placeholder.jpg'}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-accent/10" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h2 className="font-display text-2xl mb-2 group-hover:text-accent transition-colors">
                    {member.name}
                  </h2>
                  <p className="text-accent mb-4">{member.role}</p>
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
                <div className="w-32 h-32 rounded-full overflow-hidden relative mx-auto md:mx-0">
                  <Image
                    src={selectedMember.image || '/images/placeholder.jpg'}
                    alt={`${selectedMember.name} - ${selectedMember.role}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="font-display text-3xl mb-2">{selectedMember.name}</h2>
                  <p className="text-accent mb-4">{selectedMember.role}</p>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedMember.bio}
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