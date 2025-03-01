import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import MobileNav from './MobileNav'

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden lg:flex space-x-8">
            <Link href="/shows/upcoming" className="hover:text-accent transition">
              Upcoming Show
            </Link>
            <Link href="/team" className="hover:text-accent transition">
              Team
            </Link>
            <Link href="/vision" className="hover:text-accent transition">
              Vision
            </Link>
            <Link href="/gallery" className="hover:text-accent transition">
              Gallery
            </Link>
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}