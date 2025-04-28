"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHeader, {SiteBlurb} from '@/components/PageHeader'
import ContactModal from '@/components/ContactModal'

// Animation variants
const animations = {
  fadeIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  },
  
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }
};

export const revalidate = 3600

export default function WhoWeAre() {
  const { fadeIn, staggerContainer } = animations;

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <PageHeader>
        <SiteBlurb>
          Little Branch is a Boise-based theater company committed to creating <span className="text-accent font-normal">intimate</span>, emotionally <span className="text-accent font-normal">honest</span> work that embraces <span className="text-accent font-normal">curiosity</span>, <span className="text-accent font-normal">risk</span>, and <span className="text-accent font-normal">connection</span>.
        </SiteBlurb>
      </PageHeader>

      {/* Founders Section */}
      <motion.section 
        className="pt-8 pb-16 bg-black relative"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Subtle gradient background */}
        <div className="absolute inset-0 opacity-3 bg-gradient-to-b from-accent/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="font-display text-4xl mb-12 text-center"
            variants={fadeIn}
          >
            Meet the Artists Behind the Story
          </motion.h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Amela */}
            <motion.div 
              className="flex flex-col md:flex-row items-start gap-8 mb-20"
              variants={fadeIn}
            >
              <div className="w-64 h-64 relative overflow-hidden flex-shrink-0 border border-accent/30 shadow-lg shadow-black/20">
                <Image
                  src="/images/ensemble/karadza.webp"
                  alt="Amela - Artistic Director"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 256px"
                  className="object-cover"
                />
                {/* Gradient overlay at the bottom of the image */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <h3 className="font-display text-xl mb-0 text-white">Amela Karadža</h3>
                  <p className="text-accent text-sm">Artistic Director</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-black/50 p-6 backdrop-blur-sm border-l border-accent/30 shadow-md shadow-black/10">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Born in <span className="italic">Bosnia</span> and arriving in Boise at age 5, as her family sought refuge, Amela brings a depth of lived experience to her theatrical work.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    After earning her MFA from Rutgers Mason Gross School of the Arts, she performed memorable roles including Joan in <em>Vinegar Tom</em>, the Duke of Aumerle in <em>Richard II</em> at Shakespeare's Globe in London, and #2 in <em>The Wolves</em> at Boise Contemporary Theater.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Her passion for the craft extends beyond performance—she loves teaching Meisner Technique throughout the Treasure Valley and will be bringing her teaching to Little Branch soon. When not creating, you'll find her spending time with her fur-children! Amela's work is inspired by her supportive family– especially her mother, husband, and the enduring memory of her father, whose influence remains a cornerstone of her artistic influence. 
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Jovani */}
            <motion.div 
              className="flex flex-col md:flex-row-reverse items-start gap-8"
              variants={fadeIn}
            >
              <div className="w-64 h-64 relative overflow-hidden flex-shrink-0 border border-accent/30 shadow-lg shadow-black/20">
                <Image
                  src="/images/ensemble/zambrano.jpg"
                  alt="Jovani - Artistic Director"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay at the bottom of the image */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <h3 className="font-display text-xl mb-0 text-white">Jovani Zambrano</h3>
                  <p className="text-accent text-sm">Artistic Director</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-black/50 p-6 backdrop-blur-sm border-r border-accent/30 shadow-md shadow-black/10">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <span className="italic">Brooklyn</span>-born and now proudly calling Boise home, Jovani's theatrical journey has taken him from Shakespeare's Globe in London to collaborating with numerous inspiring companies including Hudson Valley Shakespeare, Alley Repertory Theater, Theater for the New City, and The Spot.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Playing Oscar in Lynn Nottage's <em>Sweat</em> at Boise Contemporary Theater stands among his most favorite and meaningful roles. He is excited and fueled for his next role in building Little Branch with his very creative and supportive wife, Amela, who he would not be able to do any of this without. He wants Little Branch to be a space where artists can <span className="italic">learn, take risks, fail spectacularly, and create something extraordinary</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Subtle divider */}
        <div className="w-24 h-px bg-accent/30 mx-auto mt-20"></div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section 
        className="py-16 bg-gray-900 relative"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('/images/texture.png')] bg-repeat"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="font-display text-4xl md:text-5xl mb-8 text-center"
              variants={fadeIn}
            >
              Our Story
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="p-8 rounded-lg border-l-2 border-r-2 border-accent/30 shadow-[0_5px_25px_rgba(217,119,6,0.15)] bg-gray-900/50 backdrop-blur-sm"
            >
              {/* Visual timeline styling */}
              <div className="relative border-l-2 border-accent/20 pl-8 pb-6 mb-6">
                <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-accent/60"></div>
                <h3 className="text-xl text-accent mb-3">The Beginning</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Amela and Jovani's paths intertwined at Rutgers' Mason Gross School of the Arts, where they trained in the Meisner Technique, Williamson Movement Technique, and classical theater. 
                Their shared love of storytelling and craft formed the roots of a creative partnership that would eventually grow far beyond the East Coast.
                </p>
              </div>
              
              <div className="relative border-l-2 border-accent/20 pl-8 pb-6 mb-6">
                <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-accent/60"></div>
                <h3 className="text-xl text-accent mb-3">The Pivot</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                When the pandemic brought them to Boise to be near Amela's family, they discovered a community of talented theater artists eager for more opportunities. 
                What began as a temporary move soon blossomed into a deeper connection with the people and the creative possibilities they discovered in Boise.
                </p>
              </div>
              
              <div className="relative border-l-2 border-accent/20 pl-8">
                <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-accent/60"></div>
                <h3 className="text-xl text-accent mb-3">Little Branch Is Born</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With their shared passion for challenging perspectives and creating meaningful work, Little Branch was born. The name carries personal significance–Amela's great-grandfather lovingly called her his "little branch" because she was so small. 
                This term of endearment captured exactly what they hope to build: something that starts small but grows into something greater with time and care.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                Little Branch exists to uplift diverse voices, build artistic connections, and celebrate the creativity that makes a community thrive. 
                Like the branches of a tree reaching outward while staying rooted, we are committed to bringing varied theatrical experiences to the City of Trees, nurturing both artists and audiences along the way.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Subtle divider */}
        <div className="w-24 h-px bg-accent/30 mx-auto mt-16"></div>
      </motion.section>

      {/* Future Vision Section */}
      <motion.section 
        className="py-16 bg-black relative overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="font-display text-4xl md:text-5xl mb-10 text-center"
            variants={fadeIn}
          >
            Looking Forward
          </motion.h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform -translate-x-1/2 z-0"></div>
              
              {/* Timeline Item 1 */}
              <motion.div 
                className="relative z-10 mb-16"
                variants={fadeIn}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-black border-2 border-accent flex items-center justify-center text-accent font-serif text-xl shadow-[0_0_15px_rgba(217,119,6,0.2)]">1</div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto shadow-lg shadow-black/20">
                  <h3 className="text-2xl font-display text-accent mb-4">Community Building</h3>
                  <p className="text-gray-300 leading-relaxed">
                  We're building a vibrant and engaged theatrical community in Boise. Our productions spotlight emerging local talent and share diverse stories that resonate with our audience.
                  </p>
                </div>
              </motion.div>
              
              {/* Timeline Item 2 */}
              <motion.div 
                className="relative z-10 mb-16"
                variants={fadeIn}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-black border-2 border-accent flex items-center justify-center text-accent font-serif text-xl shadow-[0_0_15px_rgba(217,119,6,0.2)]">2</div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto shadow-lg shadow-black/20">
                  <h3 className="text-2xl font-display text-accent mb-4">Artist Development</h3>
                  <p className="text-gray-300 leading-relaxed">
                  We're developing a structured program where early-career artists grow their craft alongside seasoned professionals through workshops, masterclasses, and collaborative productions.
                  </p>
                </div>
              </motion.div>
              
              {/* Timeline Item 3 */}
              <motion.div 
                className="relative z-10"
                variants={fadeIn}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-black border-2 border-accent flex items-center justify-center text-accent font-serif text-xl shadow-[0_0_15px_rgba(217,119,6,0.2)]">3</div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto shadow-lg shadow-black/20">
                  <h3 className="text-2xl font-display text-accent mb-4">Permanent Theater Home</h3>
                  <p className="text-gray-300 leading-relaxed">
                  Our long-term vision includes establishing a permanent space in Boise—a creative home for our productions, our Meisner teaching studio, and a gathering space for workshops and community events.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Subtle divider */}
        <div className="w-24 h-px bg-accent/30 mx-auto mt-16"></div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-black relative"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-6">Join Our Journey</h2>
            <p className="text-gray-300 text-lg mb-8">
              Little Branch is more than a theater company—it's a community of artists, audiences, and supporters 
              growing something beautiful together. We'd love for you to join us.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="https://www.instagram.com/littlebranchtheater/" 
                target="_blank"
                className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center shadow-md shadow-black/10"
              >
                <span className="mr-2">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Link>
              
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-accent text-black px-6 py-3 rounded-lg font-medium hover:bg-accent/80 transition-colors shadow-md shadow-black/10"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  )
}