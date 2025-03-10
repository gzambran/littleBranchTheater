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
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <AnimatedText
              text="Who We Are"
              className="font-display text-5xl md:text-7xl mb-6"
            />
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Building a stage where powerful stories find their voice
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Co-founders Section */}
      <motion.section 
        className="py-24 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-center">Our Co-founders</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Amela */}
            <motion.div 
              className="bg-gray-900 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-40 h-40 mx-auto mb-6 relative rounded-full overflow-hidden">
                <Image
                  src="/images/placeholder.jpg"
                  alt="Amela - Artistic Director"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-center mb-2">Amela</h3>
              <p className="text-accent text-center mb-6">Artistic Director</p>
              <p className="text-gray-300 leading-relaxed">
                About Amela: A visionary theater director with a passion for innovative storytelling and community engagement. 
                With a background in both classical and experimental theater, Amela brings a unique perspective to every production, 
                focusing on authentic representation and powerful narratives that resonate with diverse audiences.
              </p>
            </motion.div>

            {/* Jovani */}
            <motion.div 
              className="bg-gray-900 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-40 h-40 mx-auto mb-6 relative rounded-full overflow-hidden">
                <Image
                  src="/images/placeholder.jpg"
                  alt="Jovani - Artistic Director"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-center mb-2">Jovani</h3>
              <p className="text-accent text-center mb-6">Artistic Director</p>
              <p className="text-gray-300 leading-relaxed">
                About Jovani: A dedicated theater artist with extensive experience in producing groundbreaking performances. 
                Jovani's work explores the intersection of traditional theatrical elements with contemporary social themes, 
                creating immersive experiences that challenge and inspire audiences to see the world from new perspectives.
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
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-3xl md:text-4xl mb-6 text-center">Our Story</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Little Branch Theater was born from a shared vision and a pressing question: How can theater become more accessible, 
                representative, and meaningful in today's rapidly changing world? In 2022, Amela and Jovani, who had collaborated 
                on various productions throughout their careers, decided to create a space where innovative theatrical approaches 
                could flourish.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                After months of planning, community outreach, and building a network of like-minded artists, Little Branch Theater 
                launched with its first production—a reimagining of a classic text through a contemporary lens. The enthusiastic response 
                from audiences confirmed what the founders believed: there was a hunger for theater that breaks conventions while 
                remaining deeply connected to human experience.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we continue to grow organically, building relationships with artists and audiences who share our passion for 
                storytelling that challenges, inspires, and unites. Each production is an opportunity to explore new creative territory 
                while staying true to our core values of authenticity, inclusivity, and artistic excellence.
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
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-3xl md:text-4xl mb-6 text-center">The Little Branch Story</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our name, "Little Branch Theater," embodies our philosophy and aspirations. The image of a little branch represents growth, 
                resilience, and connection—all essential elements of our artistic approach.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The story behind our name comes from an ancient proverb that speaks of how even the smallest branch, when nurtured properly, 
                can grow into something magnificent that provides shelter and sustenance. Similarly, we believe that small, thoughtful 
                beginnings in theatrical creation can lead to profound cultural impact.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Just as a branch is connected to something larger than itself yet maintains its own unique direction, our theater 
                company honors theatrical traditions while branching out in new, exciting directions. Each production, each collaboration, 
                represents another extension of our creative reach—another little branch reaching toward the light.
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
                description: "We push the boundaries of theatrical expression, exploring new ways to tell stories and engage our audience."
              },
              {
                title: "Community",
                description: "Theater is a collaborative art form. We foster strong connections within our creative community and with our audience."
              },
              {
                title: "Authenticity",
                description: "We believe in honest storytelling that reflects the complexity and diversity of human experience."
              },
              {
                title: "Accessibility",
                description: "We strive to make theater accessible to all, breaking down barriers between art and audience."
              },
              {
                title: "Excellence",
                description: "We maintain high artistic standards while nurturing new talent and fresh perspectives."
              },
              {
                title: "Impact",
                description: "Every production should leave a lasting impression, sparking conversation and inspiring change."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gray-800 p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
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
              As we grow, we envision Little Branch Theater becoming a creative hub where:
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
                <span>New voices find their stage and their audience</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-accent">•</span>
                <span>Diverse stories inspire and unite our community</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-accent">•</span>
                <span>Emerging artists develop their craft alongside seasoned professionals</span>
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  )
}