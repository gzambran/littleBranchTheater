"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Logo() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  
  // Don't render the logo in the header if we're on the home page
  if (isHomePage) {
    return null
  }
  
  return (
    <Link href="/" className="inline-block">
      <div className="flex items-center">
        <Image 
          src="/images/logo.svg" 
          alt="Little Branch Theater Logo" 
          width={960}  // Doubled again from 480 to 960
          height={480} // Doubled again from 240 to 480
          className="h-36 w-auto" // Increased from h-24 to h-36 (50% larger)
          priority
        />
      </div>
    </Link>
  )
}