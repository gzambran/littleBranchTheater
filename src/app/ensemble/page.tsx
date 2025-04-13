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
      "image": "/images/dillion.jpg",
      "bio": "After starting her career in theater followed by a second career at HP, Inc. Terri is now thoroughly enjoying retirement. Terri recently introduced live Audio Description to Idaho theater and dance, providing a more complete audience experience for people who are blind or have limited vision. So far, live AD is offered at the Morrison Center Main Stage and Danny Peterson Theaters and at the Idaho Shakespeare Festival - (check their websites!).  Every day I think of how very fortunate I am to be surrounded by loved ones - thank you for including me in your busy lives!",
      "socials": {
        "instagram": "#",
        "website": "https://www.morrisoncenter.com/news/detail/morrison-center-audio-descriptor-wins-governors-award-for-support-of-the-arts"
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
      "name": "Trevor Ferguson",
      "role": "Dragan",
      "image": "/images/ferguson.jpg",
      "bio": "Trevor is beyond excited to be joining Little Branch's first production, Honey Brown Eyes. Born and raised in Idaho, Trevor currently attends Boise State University as a Theatre Arts Major. When not at school you can probably find him underneath his '69 beetle trying to figure out where it all went wrong. Trevor has worked with Amela since 2022, learning about Meisner technique. Now he is excited to finally share the stage with her and the rest of the talented cast and see where it takes them! Other shows include: Anastasia, Nightfall with Edgar Allen Poe, American Buffalo, Little Prince, Grease, and Sound of Music. ",
      "socials": {
        "instagram": "https://www.instagram.com/tre_boogie101/",
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
      "image": "/images/johns.jpg",
      "bio": "Lexi Johns is a senior at Boise State University, where she has stage managed and assistant stage-managed multiple productions. For her technical work, she received a Certificate of Merit for Stage Management from KCACTF Region 7. Outside of her technical roles, her primary artistic focus is acting. At Boise State, she performed as a chorus nun in The Sound of Music and most recently portrayed Jerrie Cobb in They Promised Her the Moon. With a strong foundation in both stage management and performance, she is excited to contribute to Honey Brown Eyes as she prepares to graduate.",  
      "socials": {
        "instagram": "https://www.instagram.com/lexijohns/",
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
      "name": "Francisco Negron",
      "role": "Denis",
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
      "image": "/images/parry.png",
      "bio": "Anthony Parry, a native of Boise, is a multi-instrumentalist and composer. He hosts the 'Behind Gray Walls' podcast and has composed music for the podcast as well as various short films and plays. Anthony is thrilled to be performing again with his jazz combo bandmates, Mike and Lauryn. Recently, he was seen performing solo and with his band, aka Belle, at the Dream Team Variety Flora Fantasia show. When he's not on stage, Anthony can be found at the Old Idaho Penitentiary, sharing tales of Idaho's colorful history.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Mirza Šuman",
      "role": "Zlata",
      "image": "/images/suman.jpg",
      "bio": "Mirza Šuman was born and raised in Boise, as a first-generation American to refugee parents from Bosnia. Mirza is passionate about Honey Brown Eyes for its authentic depiction of the hardships many Bosniaks endured, and its potential for viewers to consider parallels to current genocides. This marks her debut role in a production, and she is hopeful for a future in theater! A heartfelt thank you to my parents, Izudin and Alda, for teaching me about our history and raising me to always remember where I came from.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Mike Ward",
      "role": "Musician/Composer",
      "image": "/images/ward.jpg",
      "bio": "Mike studied music at The College of Idaho. He plays guitar and saxophone pretty well, and about 15 other instruments poorly. He has played with a ton of bands around Boise, and currently plays sax with Lauryn and Anthony in their jazz trio, Kitchen Syncopation. He has also composed and performed music for several theater productions, films and other media in about every genre and ensemble you can think of. Mike is also the brewer at Mad Swede Brewing, and likes Jason Statham movies.",
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
      "image": "/images/wirth.jpg",
      "bio": "Ellie is excited to join Honey Brown Eyes as the Assistant Stage Manager and Props Master! Previously, she worked on Lost Girl and Charlie Brown Christmas at Boise State as props master and The Little Prince as an assistant stage manager where she honed skills in organizing, problem-solving, and ensuring the smooth execution of live performances. Outside of backstage work, Ellie enjoys acting and has a passion for theater and a dedication to supporting the creative process.",
      "socials": {
        "instagram": "#",
        "website": "#"
      }
    },
    {
      "name": "Majda Zahić",
      "role": "Radio Broadcaster",
      "image": "/images/placeholder.jpg",
      "bio": "Majda Zahić is a freshman at Boise State University. Her family is from Bosnia and Herzegovina, but Majda was born and raised in Meridian, Idaho. She has never done theater before, but she has been a dancer for about 13 years and enjoys everything to do with performance art! She is so grateful that Amela asked her to be a part of this show—Majda loves sharing the history and culture of her people, especially since it's quite an unknown region of the world and often overlooked when taught in schools. She is excited to simply be a part of a theater production and experience the behind-the-scenes of it all!",
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
        staggerChildren: 0.1 // Reduced stagger time for faster animation with more cards
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