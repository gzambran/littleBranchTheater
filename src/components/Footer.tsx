"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ContactModal from './ContactModal'

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
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
            
            {/* Contact Info - Minimal with button */}
            <p className="text-gray-300 text-sm text-center mb-2">
              Garden City, Idaho
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-accent hover:text-white transition-colors text-sm font-medium"
            >
              Contact Us
            </button>
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
                <Link href="/productions" className="text-gray-300 hover:text-accent">
                  Productions
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-gray-300 hover:text-accent">
                  Get Involved
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
            <p className="text-gray-300 mb-3">
              Garden City, Idaho
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-accent hover:text-white transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </button>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-2 mt-2 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Little Branch Theater. All rights reserved.
        </div>
      </div>
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </footer>
  )
}