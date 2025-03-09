"use client"

import React from 'react'
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

      {/* Mission Section */}
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
              className="bg-gray-900 p-8 rounded-lg mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Little Branch Theater connects communities through bold storytelling and the celebration of diverse voices. 
                We are dedicated to providing opportunities for local artists, engaging with underrepresented communities, 
                and creating work that inspires meaningful conversation. We aim to build a new audience filled with curiosity 
                and the courage to challenge their perspectives.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="py-24 bg-black">
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
                className="bg-gray-900 p-8 rounded-lg"
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
        className="py-24 bg-gray-900"
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