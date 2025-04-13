import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-2 md:pt-8 md:pb-4">
      <div className="container mx-auto px-4">
        {/* Mobile Layout (Balanced) */}
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <Image 
              src="/images/logo.svg" 
              alt="Little Branch Theater Logo" 
              width={200}
              height={200}
              className="w-38 h-38 -mt-6 mb-0" 
              priority
            />
            
            {/* Tagline */}
            <p className="text-gray-300 text-sm text-center -mt-4 mb-2">
              Rooted in storytelling, reaching for change.
            </p>
            
            {/* Contact Info - Minimal */}
            <p className="text-gray-300 text-sm text-center">
              Garden City, Idaho<br />
              <a href="mailto:info@littlebranchtheater.org">info@littlebranchtheater.org</a>
            </p>
          </div>
        </div>
        
        {/* Desktop Layout (Unchanged) */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <div className="flex flex-col items-center" style={{ marginTop: '-40px' }}>
              <Image 
                src="/images/logo.svg" 
                alt="Little Branch Theater Logo" 
                width={200}
                height={200}
                className="w-48 h-48" 
                priority
              />
              <p className="text-gray-300 mt-2 text-center">
                Rooted in storytelling, reaching for change.
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="font-bold mb-4 text-left">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shows/upcoming" className="text-gray-300 hover:text-accent">
                  Upcoming Show
                </Link>
              </li>
              <li>
                <Link href="/ensemble" className="text-gray-300 hover:text-accent">
                  Meet the Ensemble
                </Link>
              </li>
              <li>
                <Link href="/who-we-are" className="text-gray-300 hover:text-accent">
                  Who We Are
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="mb-8 md:mb-0">
            <h4 className="font-bold mb-4 text-left">Contact</h4>
            <p className="text-gray-300">
              <a href="mailto:info@littlebranchtheater.org">info@littlebranchtheater.org</a>
              <br />
              Garden City, Idaho
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-2 mt-2 border-t border-gray-800 text-center text-gray-500 text-sm">
          {/* Reduced pt-3 and mt-3 to pt-2 and mt-2 */}
          &copy; {new Date().getFullYear()} Little Branch. All rights reserved.
        </div>
      </div>
    </footer>
  )
}