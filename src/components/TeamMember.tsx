"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  headshot: any
  index: number
}

export default function TeamMember({ name, role, bio, headshot, index }: TeamMemberProps) {
  return (
    <motion.div 
      className="bg-gray-950 p-6 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
        {headshot ? (
          <Image
            src=""
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 rounded-full" />
        )}
      </div>
      <h2 className="font-display text-2xl text-center mb-2">{name}</h2>
      <p className="text-accent text-center mb-4">{role}</p>
      <p className="text-gray-300 text-center">{bio}</p>
    </motion.div>
  )
}