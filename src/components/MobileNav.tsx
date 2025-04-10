"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  // Force close if window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navItems = [
    { path: '/who-we-are', label: 'Who We Are' },
    { path: '/shows/upcoming', label: 'Upcoming Show' },
    { path: '/ensemble', label: 'Ensemble' },
    { path: '/gallery', label: 'Gallery' },
  ]

  return (
    <div>
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="text-white p-2 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Mobile Menu Sliding from right - half width */}
      <div 
        className={`fixed top-0 right-0 z-50 h-screen w-1/2 bg-black/90 border-l border-gray-800 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <div className="pt-4 px-4">
          <div className="flex justify-end mb-2">
            <button 
              onClick={closeMenu}
              className="text-gray-400 hover:text-white p-1"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          
          <nav>
            {navItems.map((item) => (
              <div key={item.path} className="py-2">
                <Link 
                  href={item.path} 
                  className="block w-full text-white hover:bg-gray-800 rounded-md transition-colors px-2 py-2 text-lg"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}