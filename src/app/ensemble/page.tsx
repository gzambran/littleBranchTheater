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
  extendedBio: string;
  socials: {
    instagram: string;
    website: string;
  };
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers = [
    {
      "name": "Wendy Fox",
      "role": "Costume Designer",
      "image": "/images/placeholder.jpg",
      "bio": "Creating costumes that enhance character and storytelling.",
      "extendedBio": "Wendy brings characters to life through her thoughtful costume designs, ensuring authenticity and visual appeal on stage.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Trevor Ferguson",
      "role": "Dragan",
      "image": "/images/placeholder.jpg",
      "bio": "Bringing depth and emotion to the role of Dragan.",
      "extendedBio": "Trevor embodies the complexities of his character, delivering a performance that captivates and moves audiences.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Chaz Gentry",
      "role": "Lighting Designer",
      "image": "/images/placeholder.jpg",
      "bio": "Shaping the visual atmosphere through dynamic lighting design.",
      "extendedBio": "Chaz uses lighting to enhance mood, create tension, and immerse the audience in the world of the play.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Amber Ellis",
      "role": "Scenic Assistant/Scenic Charge Assist",
      "image": "/images/placeholder.jpg",
      "bio": "Supporting scenic design and set construction with precision and creativity.",
      "extendedBio": "Amber contributes to the scenic design process, ensuring that every set element is executed to perfection and enhances the production.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Edin Ferkic",
      "role": "Denis",
      "image": "/images/placeholder.jpg",
      "bio": "Portraying Denis with nuance and intensity.",
      "extendedBio": "Edin brings authenticity and power to his performance, helping to shape the emotional core of the production.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Majda Zahič",
      "role": "Radio Broadcaster",
      "image": "/images/placeholder.jpg",
      "bio": "Bringing key narrative elements to life through voice and sound.",
      "extendedBio": "Majda provides a compelling voice that enhances the storytelling and atmosphere of the production.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Lexi Johns",
      "role": "Stage Manager",
      "image": "/images/placeholder.jpg",
      "bio": "Coordinating all aspects of production to keep everything running smoothly.",
      "extendedBio": "Lexi ensures that rehearsals, technical cues, and performances flow seamlessly, making sure every detail is in place for a successful show.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Amela Karadza",
      "role": "Director/Alma",
      "image": "/images/placeholder.jpg",
      "bio": "Bringing a bold vision to the stage as director and performer in Honey Brown Eyes.",
      "extendedBio": "As director and performer, Amela leads the production with a deep commitment to storytelling and theatrical excellence. Her work brings nuance and authenticity to every performance.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Jessica Nebeker",
      "role": "Set Designer",
      "image": "/images/placeholder.jpg",
      "bio": "Transforming the stage into a compelling and immersive environment.",
      "extendedBio": "Jessica crafts the physical world of the production, ensuring that every element supports the story being told.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Anthony Parry",
      "role": "Musician/Composer",
      "image": "/images/placeholder.jpg",
      "bio": "Crafting the musical backdrop that enhances the emotional landscape of the play.",
      "extendedBio": "Anthony's compositions set the tone for each scene, providing an evocative auditory experience that complements the story.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Mirza Suman",
      "role": "Zlata",
      "image": "/images/placeholder.jpg",
      "bio": "Delivering a heartfelt performance as Zlata.",
      "extendedBio": "Mirza brings emotional depth and sincerity to her role, helping to drive the narrative forward.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Mike Ward",
      "role": "Musician/Composer",
      "image": "/images/placeholder.jpg",
      "bio": "Creating evocative musical compositions to accompany the narrative.",
      "extendedBio": "Mike's music serves as an emotional undercurrent throughout the play, reinforcing the themes and tensions of each scene.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "John Wicks",
      "role": "Assistant Director",
      "image": "/images/placeholder.jpg",
      "bio": "Supporting the creative vision and ensuring smooth execution behind the scenes.",
      "extendedBio": "John works closely with the director to refine performances and maintain the artistic integrity of Honey Brown Eyes.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Jovani Zambrano",
      "role": "Sound Designer/Branko/Milenko",
      "image": "/images/zambrano.jpg",
      "bio": "Designing immersive soundscapes while bringing characters to life on stage.",
      "extendedBio": "Jovani blends technical expertise with creative performance, crafting a rich auditory world while portraying key roles in Honey Brown Eyes.",
      "socials": {
        "instagram": "#",
        "website": "#"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <AnimatedText
              text="Ensemble"
              className="font-display text-5xl md:text-7xl mb-6"
            />
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}