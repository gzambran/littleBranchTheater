"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'

export const revalidate = 3600

export default function Vision() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative py-16 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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

      {/* Co-founders Section */}
      <motion.section 
        className="py-16 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-center">Our Co-founders</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Amela */}
            <motion.div 
              className="bg-gray-900 p-8 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-40 h-40 mx-auto mb-6 relative rounded-full overflow-hidden">
                <Image
                  src="/images/karadza.webp"
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
              className="bg-gray-900 p-8 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-40 h-40 mx-auto mb-6 relative rounded-full overflow-hidden">
                <Image
                  src="/images/zambrano.jpg"
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

      {/* Our Story Section */}
      <motion.section 
        className="py-24 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-3xl md:text-4xl mb-6 text-center">Our Story</h2>
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

      {/* Little Branch Name Story */}
      <motion.section 
        className="py-24 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-3xl md:text-4xl mb-6 text-center">The Meaning Behind the Name</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Every voice, every story, every artist matters. We wanted the name of our company to reflect connection and growth. 
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

      {/* Values Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Innovation",
                description: "We embrace bold, creative approaches to storytelling and stagecraft."
              },
              {
                title: "Community",
                description: "We build connections through theater, fostering collaboration, local artistry, and an engaged audience."
              },
              {
                title: "Authenticity",
                description: "We bring honest, meaningful stories to the stage with integrity and care."
              },
              {
                title: "Impact",
                description: "We produce work that sparks conversation, challenges perspectives, and inspires change."
              },
              {
                title: "Representation",
                description: "We highlight diverse voices and underrepresented narratives in our productions."
              },
              {
                title: "Empowerment",
                description: "We create opportunities for artists to grow, collaborate, and share their voices."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gray-800 p-8 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-display text-2xl mb-4 text-accent">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Section */}
      <motion.section 
        className="py-24 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-6">Looking Forward</h2>
            <p className="text-xl text-gray-300 mb-8">
              As we grow, we envision Little Branch becoming a creative hub where:
            </p>
            <ul className="text-left text-lg text-gray-300 space-y-4 mb-12">
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-accent">•</span>
                <span>Diverse stories inspire, challenge, and unite our community.</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-accent">•</span>
                <span>Emerging local artists develop their craft alongside seasoned professionals.</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-accent">•</span>
                <span>A dedicated teaching studio introduces performers to the fundamentals of Meisner technique, culminating in a live performance.</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-accent">•</span>
                <span>One day, we hope to establish a permanent space to call our theater home.</span>
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  )
}