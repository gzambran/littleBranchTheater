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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed right-0 top-16 z-50 md:hidden">
          {/* Menu container - compact dropdown with black background and rounder corners */}
          <div 
            className="w-56 rounded-lg shadow-lg bg-black border border-gray-800"
          >
            {/* Navigation links - compact menu */}
            <nav className="flex flex-col py-3">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link 
                    href={item.path} 
                    className="text-base text-white hover:text-accent transition block px-5 py-2"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}