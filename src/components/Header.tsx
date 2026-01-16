"use client"

import React from 'react'
import Link from 'next/link'
import MobileNav from './MobileNav'

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-black-deep/90 backdrop-blur-md border-b border-white/5">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-block">
           <div className="flex flex-col">
              <span className="font-display text-3xl md:text-4xl font-bold tracking-wide text-white drop-shadow-sm">
                Little Branch
              </span>
              <span
                className="font-display text-base md:text-lg text-accent -mt-1"
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
            <Link href="/who-we-are" className="text-base hover:text-accent transition font-semibold tracking-wide drop-shadow-sm">
              Who We Are
            </Link>
            <Link href="/productions" className="text-base hover:text-accent transition font-semibold tracking-wide drop-shadow-sm">
              Productions
            </Link>
            <Link href="/gallery" className="text-base hover:text-accent transition font-semibold tracking-wide drop-shadow-sm">
              Gallery
            </Link>
            <Link href="/get-involved" className="text-base hover:text-accent transition font-semibold tracking-wide drop-shadow-sm">
              Get Involved
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