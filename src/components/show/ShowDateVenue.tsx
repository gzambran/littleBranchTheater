import React from 'react'
import { motion } from 'framer-motion'

interface ShowDateVenueProps {
  dates: string
  venue: string
}

export default function ShowDateVenue({ dates, venue }: ShowDateVenueProps) {
  return (
    <div className="mt-6 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-center"
      >
        <p className="text-accent font-medium text-lg md:text-xl">{dates}</p>
        <p className="text-white text-lg md:text-xl">{venue}</p>
      </motion.div>
    </div>
  )
}