"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Logo() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isShowPage = pathname.includes('/shows/')
  
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
          width={480}
          height={240}
          className="h-24 w-auto"
          priority
        />
      </div>
    </Link>
  )
}