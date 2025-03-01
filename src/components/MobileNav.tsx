"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './Logo'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="text-white p-2 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm z-50"
          >
            <nav className="flex flex-col p-6 space-y-6">
              <Link 
                href="/shows/upcoming" 
                className="text-xl hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                Upcoming Show
              </Link>
              <Link 
                href="/team" 
                className="text-xl hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link 
                href="/vision" 
                className="text-xl hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                Vision
              </Link>
              <Link 
                href="/gallery" 
                className="text-xl hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}