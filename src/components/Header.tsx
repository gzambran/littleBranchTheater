import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-block font-display text-2xl font-bold tracking-wide text-accent"> 
            Little Branch Theater
          </Link>
          <div className="space-x-6">
            <Link href="/shows/upcoming" className="text-base hover:text-accent transition font-medium">
              Upcoming Show
            </Link>
            <Link href="/team" className="text-base hover:text-accent transition font-medium">
              Team
            </Link>
            <Link href="/vision" className="text-base hover:text-accent transition font-medium">
              Vision
            </Link>
            <Link href="/gallery" className="text-base hover:text-accent transition font-medium">
              Gallery
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}