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

      {/* Mobile Menu Dropdown - completely redesigned */}
      {isOpen && (
        <div className="fixed right-0 top-16 z-50 md:hidden">
          <div 
            className="w-72 rounded-lg shadow-lg bg-black border border-gray-800"
          >
            <nav className="py-2">
              {navItems.map((item) => (
                <div key={item.path} className="px-2 py-1">
                  <Link 
                    href={item.path} 
                    className="block w-full text-white hover:bg-gray-800 rounded-md transition-colors px-4 py-3.5 text-lg"
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