import React from 'react'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="inline-block">
      <div className="text-white font-display text-xl md:text-2xl font-bold">
        <span className="text-accent">Little</span> Branch <span className="text-accent">Theater</span>
      </div>
    </Link>
  )
}