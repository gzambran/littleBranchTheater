import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Different layout for mobile vs desktop */}
        <div className="block md:grid md:grid-cols-3 md:gap-8">
          {/* First column (Logo) */}
          <div className="mb-8 md:mb-0">
            {/* For desktop - position the logo aligned with the column headers */}
            <div className="hidden md:flex md:flex-col md:items-center" style={{ marginTop: '-40px' }}>
              <Image 
                src="/images/logo.svg" 
                alt="Little Branch Theater Logo" 
                width={200}
                height={200}
                className="w-48 h-48" 
                priority
              />
              <p className="text-gray-400 mt-2 text-center">
                Rooted in storytelling, reaching for change.
              </p>
            </div>
          </div>
          
          {/* Quick Links - shows on both mobile and desktop */}
          <div className="mb-8 md:mb-0">
            <h4 className="font-bold mb-4 text-left">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shows/upcoming" className="text-gray-400 hover:text-accent">
                  Upcoming Show
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-accent">
                  Meet the Ensemble
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-gray-400 hover:text-accent">
                  Who We Are
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact - shows on both mobile and desktop */}
          <div className="mb-8 md:mb-0">
            <h4 className="font-bold mb-4 text-left">Contact</h4>
            <p className="text-gray-400">
              <a href="mailto:info@littlebranchtheater.org">info@littlebranchtheater.org</a>
              <br />
              Garden City, Idaho
            </p>
          </div>
        </div>
        
        {/* Mobile-only logo section - positioned between sections */}
        <div className="flex flex-col items-center my-8 md:hidden">
          <Image 
            src="/images/logo.svg" 
            alt="Little Branch Theater Logo" 
            width={180}
            height={180}
            className="w-44 h-44" 
            priority
          />
          <p className="text-gray-400 mt-2 text-center">
            Rooted in storytelling, reaching for change.
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Little Branch. All rights reserved.
        </div>
      </div>
    </footer>
  )
}