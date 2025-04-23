"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'

export const revalidate = 3600

export default function Vision() {
  // Animation variants for more theatrical, less corporate feel
  const fadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative py-16 pb-8 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <AnimatedText
              text="Who We Are"
              className="font-display text-5xl md:text-7xl mb-6"
            />
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Our journey, values, and vision – discover what drives Little Branch forward
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Co-founders Section - Stylized with artistic elements */}
      <motion.section 
        className="pt-8 pb-16 bg-black relative overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="font-display text-3xl md:text-4xl mb-12 text-center"
            variants={fadeIn}
          >
            Our Co-founders
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Amela */}
            <motion.div 
              className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border-l-2 border-accent/40"
              variants={fadeIn}
              viewport={{ once: true }}
            >
              <div className="w-40 h-40 mx-auto mb-6 relative rounded-full overflow-hidden border-2 border-accent/20 shadow-lg shadow-accent/10">
                <Image
                  src="/images/ensemble/karadza.webp"
                  alt="Amela - Artistic Director"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-center mb-2">Amela</h3>
              <p className="text-accent text-center mb-6">Artistic Director</p>
              <p className="text-gray-300 leading-relaxed">
              Amela Karadža was born in Bosnia and at the age of 5 immigrated to Boise where she spent many delightful years. 
              She's a graduate of Rutgers Mason Gross School of the Arts, MFA program. 
              Some of her favorite roles include: Joan (Vinegar Tom/Theatre C and Rutgers Theatre Co.), Duke of Aumerle (Richard II at Shakespeare's Globe Theatre in London), 
              and #2 (The Wolves/Boise Contemporary Theater). She loves teaching Meisner Technique around the valley in her free time and hanging out with her fur-children! 
              Thank you to my beautiful mom and wonderful husband for all your support. Love you dad, forever and always. 
              </p>
            </motion.div>

            {/* Jovani */}
            <motion.div 
              className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border-r-2 border-accent/40"
              variants={fadeIn}
              viewport={{ once: true }}
            >
              <div className="w-40 h-40 mx-auto mb-6 relative rounded-full overflow-hidden border-2 border-accent/20 shadow-lg shadow-accent/10">
                <Image
                  src="/images/ensemble/zambrano.jpg"
                  alt="Jovani - Artistic Director"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-center mb-2">Jovani</h3>
              <p className="text-accent text-center mb-6">Artistic Director</p>
              <p className="text-gray-300 leading-relaxed">
              Jovani Zambrano was born and raised in Brooklyn, New York, and now calls Boise, Idaho, home, where he pursues his passion for acting and theater-making. 
              He studied at Rutgers Mason Gross School of the Arts and performed at Shakespeare's Globe in As You Like It. 
              His work has been seen at Hudson Valley Shakespeare, Theater for the New City, Boise Contemporary Theater, Alley Repertory Theater, and The Spot. 
              Collaborating with these inspiring companies and ensembles fueled his desire to build Little Branch Theater—a space where artists can learn, take risks, fail spectacularly, and create something extraordinary. 
              He would not be able to do any of this without the creativity and support of his wife. Among his favorite roles, playing Oscar in Sweat by Lynn Nottage was a particularly meaningful experience.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Story Section - Floating card without background */}
      <motion.section 
        className="py-24 bg-gray-900 relative"
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
              className="font-display text-3xl md:text-4xl mb-8 text-center"
              variants={fadeIn}
            >
              Our Story
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="p-6 rounded-lg border-l-2 border-r-2 border-accent/30 shadow-xl shadow-black/30"
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Amela and Jovani met at Rutgers Mason Gross School of the Arts, where they trained in the Meisner Technique, Williamson Movement Technique, and classical theater. 
                After graduating, they worked in theater, commercials, and film on the East Coast until the pandemic led them to Boise to be near Amela's family. 
                In Boise, they discovered a welcoming and talented theater community eager for more opportunities to create.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With their training, passion, and drive to challenge perspectives, Amela and Jovani felt they had something to offer—with this they founded Little Branch.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                More than just a company, they envisioned a space where artists could take risks, push their craft, and build something meaningful together. 
                They also saw the opportunity to cultivate an audience ready to engage with bold storytelling, challenge perspectives, and celebrate the work of local artists.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Little Branch Name Story - With decorative elements */}
      <motion.section 
        className="py-24 bg-black relative overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Decorative branch illustrations */}
        <div className="absolute top-10 right-0 w-64 h-64 opacity-10 bg-[url('/images/branch-illustration.png')] bg-no-repeat bg-contain"></div>
        <div className="absolute bottom-10 left-0 w-64 h-64 opacity-10 bg-[url('/images/branch-illustration.png')] bg-no-repeat bg-contain transform -scale-x-100"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="font-display text-3xl md:text-4xl mb-8 text-center" 
              variants={fadeIn}
            >
              The Meaning Behind the Name
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="border-r-2 border-accent/30 bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg"
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "Every voice, every story, every artist matters."
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We wanted the name of our company to reflect connection and growth. 
                That's when Amela recalled that her great-grandfather, out of love and because she was so small, called her his "little branch."
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Little branches may be small, but in time, they grow into something greater. A tree isn't whole without its little branches. 
                They stretch, reach, and help shape the bigger picture. We believe the same is true in theater.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Little Branch exists to uplift voices, build connections, and celebrate the artistry that makes a community thrive. 
                We hope the name carries a sense of possibility—rooted in growth and reaching for something beyond itself. 
                Our goal is to bring a wide variety of theater to the City of Trees, one branch at a time, nurturing creativity and a sense of belonging along the way.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What Matters to Us Section - New artistic design */}
      <motion.section 
        className="py-24 bg-gray-900 relative overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Abstract decorative elements */}
        <div className="absolute left-0 top-1/4 w-40 h-40 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 w-40 h-40 rounded-full bg-accent/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="font-display text-3xl md:text-4xl mb-10 text-center"
              variants={fadeIn}
            >
              What Matters to Us
            </motion.h2>
            
            <div className="space-y-6">
              {[
                "We embrace bold stories.",
                "We believe in collaboration, in building something together.",
                "We care about engaging our audience and creating space for local and emerging artists.",
                "We want to lift up voices that don't always get heard—especially those that reflect underrepresented experiences.",
                "We think theater should challenge how we see the world—and maybe even change it.",
                "And we believe art should feel like it belongs to everyone."
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="relative"
                >
                  <div className="ml-6 pl-4 py-3 bg-black/30 backdrop-blur-sm rounded-lg border-l-2 border-accent/50">
                    <p className="text-xl md:text-2xl leading-relaxed text-white">
                      {value}
                    </p>
                  </div>
                  {/* Theater "spotlight" effect */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-radial from-accent/30 to-transparent"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Looking Forward Section - With theatrical act numbers instead of bullets */}
      <motion.section 
        className="py-24 bg-black relative overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 opacity-5 bg-[url('/images/stage-texture.png')] bg-repeat"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="font-display text-3xl md:text-4xl mb-10 text-center"
              variants={fadeIn}
            >
              Looking Forward
            </motion.h2>
            
            <motion.div
              variants={fadeIn}
              className="bg-gradient-to-b from-gray-900/60 to-gray-900/20 backdrop-blur-sm p-8 rounded-lg border-t border-b border-gray-800"
            >
              <p className="text-xl text-gray-300 mb-8 italic font-light text-center">
                "As we grow, we envision Little Branch becoming a creative hub where..."
              </p>
              
              <div className="space-y-8">
                {[
                  "Diverse stories inspire, challenge, and unite our community.",
                  "Emerging local artists develop their craft alongside seasoned professionals.",
                  "A dedicated teaching studio introduces performers to the fundamentals of Meisner technique, culminating in a live performance.",
                  "One day, we hope to establish a permanent space to call our theater home."
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="relative pl-14"
                    variants={fadeIn}
                  >
                    {/* Act number styling - theatrical instead of bullets */}
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gray-900/60 backdrop-blur-sm flex items-center justify-center border border-accent/30">
                      <span className="text-accent text-sm font-serif italic">Act {index + 1}</span>
                    </div>
                    
                    <p className="text-gray-300 text-lg">{item}</p>
                    
                    {/* Decorative divider except for last item */}
                    {index < 3 && (
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent mt-4"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}