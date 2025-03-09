"use client"

import React from 'react'
import Link from 'next/link'
import MobileNav from './MobileNav'

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-block"> 
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-wide text-white">
                Little Branch
              </span>
              <span 
                className="font-display text-sm text-accent -mt-1"
                style={{ 
                  letterSpacing: '0.15em',
                  fontStretch: 'expanded',
                  width: '100%',
                  display: 'inline-block'
                }}
              >
                a theater company
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex space-x-6">
            <Link href="/who-we-are" className="text-base hover:text-accent transition font-medium">
              Who We Are
            </Link>
            <Link href="/shows/upcoming" className="text-base hover:text-accent transition font-medium">
              Upcoming Show
            </Link>
            <Link href="/ensemble" className="text-base hover:text-accent transition font-medium">
              Ensemble
            </Link>
            <Link href="/gallery" className="text-base hover:text-accent transition font-medium">
              Gallery
            </Link>
          </div>
          
          {/* Mobile Navigation - Shown only on mobile */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  )
}