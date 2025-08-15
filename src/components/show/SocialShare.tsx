import React from 'react'
import { motion } from 'framer-motion'

interface SocialShareProps {
  shareUrl?: string
  shareText?: string
}

export default function SocialShare({ 
  shareUrl = "https://littlebranch.theater", 
  shareText = "Check out Little Branch Theater" 
}: SocialShareProps) {
  
  return (
    <div className="pt-4">
      <p className="text-sm text-gray-400 mb-2">Share:</p>
      <div className="flex items-center space-x-4">
        <motion.a
          href={`https://www.instagram.com/`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-accent transition-colors"
          whileHover={{ scale: 1.1 }}
          aria-label="Share on Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </motion.a>
        <motion.a
          href={`mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareText + ': ' + shareUrl)}`}
          className="text-gray-400 hover:text-accent transition-colors"
          whileHover={{ scale: 1.1 }}
          aria-label="Share via Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </motion.a>
      </div>
    </div>
  )
}