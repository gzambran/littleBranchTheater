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
      name: 'Amela Karadza',
      role: 'Co-Founder, Director',
      bio: 'A passionate theater director with a vision for bringing unique perspectives to the stage. Currently directing Honey Brown Eyes.',
      extendedBio: `As co-founder and artistic director of Little Branch Theater, Amela brings her unique vision and passion for storytelling to every production. With Honey Brown Eyes, she continues her dedication to bringing powerful, thought-provoking theater to the stage.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Jovani Zambrano',
      role: 'Co-Founder',
      bio: 'Dedicated to creating meaningful theatrical experiences that challenge and inspire audiences.',
      extendedBio: `As co-founder of Little Branch Theater, Jovani focuses on creating meaningful connections between performers and audiences. His vision helps shape the company's artistic direction and community engagement.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'John Wicks',
      role: 'Assistant Director',
      bio: 'Assistant Director for Honey Brown Eyes, bringing fresh insights to the production process.',
      extendedBio: `John's attention to detail and creative insights help bring additional depth to Little Branch Theater's productions. As Assistant Director for Honey Brown Eyes, he works closely with the creative team to realize the show's vision.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Emily Carter',
      role: 'Stage Manager',
      bio: 'Ensuring seamless performances behind the scenes at Little Branch Theater.',
      extendedBio: `Emily's organizational skills and keen eye for detail keep every production running smoothly. As Stage Manager, she coordinates rehearsals, manages schedules, and ensures every show goes off without a hitch.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Michael Sanders',
      role: 'Lighting Designer',
      bio: 'Creating immersive lighting designs to set the mood for each performance.',
      extendedBio: `Michael's passion for lighting design helps craft the visual storytelling of each production. He experiments with color and intensity to enhance the emotions on stage.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Sophia Reynolds',
      role: 'Costume Designer',
      bio: 'Bringing characters to life through thoughtful costume design.',
      extendedBio: `Sophia blends historical accuracy with creative flair, designing costumes that reflect each character's journey. She ensures actors feel comfortable and confident in their roles.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Nathan Brooks',
      role: 'Set Designer',
      bio: 'Transforming blank spaces into immersive theatrical worlds.',
      extendedBio: `Nathan's innovative set designs transport audiences into the heart of the story. He collaborates closely with directors and lighting designers to create dynamic stage environments.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Ava Mitchell',
      role: 'Choreographer',
      bio: 'Bringing movement and expression to life through choreography.',
      extendedBio: `Ava infuses productions with dynamic and expressive movement. Whether subtle gestures or large ensemble pieces, her choreography enhances storytelling on stage.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Ryan Fisher',
      role: 'Sound Designer',
      bio: 'Crafting the perfect auditory landscape for each production.',
      extendedBio: `Ryan designs immersive soundscapes that complement the story and setting of each play. He ensures seamless audio transitions and a balanced mix for live performances.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Isabella Moore',
      role: 'Props Master',
      bio: 'Bringing authenticity to every production with meticulously crafted props.',
      extendedBio: `Isabella is dedicated to the details, creating and sourcing props that add depth and realism to each performance. Her keen eye ensures every piece fits seamlessly into the world of the play.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'David Collins',
      role: 'Technical Director',
      bio: 'Overseeing the technical elements to ensure a smooth performance.',
      extendedBio: `David manages the behind-the-scenes logistics of each production, from lighting and sound to set construction. His expertise keeps everything running seamlessly.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Grace Thompson',
      role: 'Dramaturg',
      bio: 'Providing research and context to deepen each production’s impact.',
      extendedBio: `Grace delves into historical, cultural, and thematic research to support directors and actors in their storytelling. Her work helps bring authenticity and depth to every play.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Ethan Rivera',
      role: 'Production Manager',
      bio: 'Ensuring productions stay on schedule and within budget.',
      extendedBio: `Ethan oversees production logistics, from rehearsals to opening night. His ability to balance creative needs with practical constraints makes each show a success.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Chloe Harrison',
      role: 'Marketing Coordinator',
      bio: 'Connecting audiences with the magic of live theater.',
      extendedBio: `Chloe leads marketing efforts to engage and grow Little Branch’s audience. Through social media, press, and community outreach, she ensures every production gets the attention it deserves.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Liam Bennett',
      role: 'Fight Choreographer',
      bio: 'Designing realistic and safe stage combat sequences.',
      extendedBio: `Liam specializes in stage combat, ensuring that fight scenes look thrilling while keeping actors safe. His work adds intensity and realism to dramatic moments on stage.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Olivia Scott',
      role: 'Assistant Director',
      bio: 'Supporting the director in bringing each vision to life.',
      extendedBio: `Olivia collaborates with directors to fine-tune performances, provide actor feedback, and ensure the production's vision stays intact. She’s an invaluable creative partner behind the scenes.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Benjamin Carter',
      role: 'Playwright-in-Residence',
      bio: 'Developing original works for Little Branch’s stage.',
      extendedBio: `Benjamin crafts compelling stories and characters, writing new works and adapting existing pieces for the company. His voice helps shape the identity of Little Branch’s productions.`,
      socials: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Emma Sullivan',
      role: 'House Manager',
      bio: 'Ensuring audiences have a great experience from the moment they arrive.',
      extendedBio: `Emma oversees front-of-house operations, greeting guests, coordinating ushers, and ensuring smooth audience flow. Her work creates a welcoming environment for theatergoers.`,
      socials: {
        instagram: '#',
        website: '#'
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
                <div className="aspect-square relative bg-gray-800">
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