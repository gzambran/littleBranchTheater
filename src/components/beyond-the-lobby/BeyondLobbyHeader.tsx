import { motion } from 'framer-motion';
import React from 'react';

export default function BeyondLobbyHeader() {
  return (
    <motion.header 
      className="relative py-12 bg-gradient-to-b from-[#D4A017] to-[#E6B325] overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <svg 
            className="h-16 w-16 mx-auto mb-4" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M21 6H3C2.4 6 2 6.4 2 7V17C2 17.6 2.4 18 3 18H21C21.6 18 22 17.6 22 17V7C22 6.4 21.6 6 21 6Z" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z" fill="#8B4513"/>
            <path d="M6 18V21" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 18V21" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14V18" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 10H9" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 className="font-display text-5xl md:text-7xl text-[#333333] mb-4">
            Beyond the Lobby
          </h1>
          <p className="text-xl md:text-2xl text-[#8B4513] max-w-2xl mx-auto">
            Exclusive content for theater patrons
          </p>
        </div>
        <div className="bg-black/10 w-20 h-1 mx-auto my-6 rounded-full"></div>
        <p className="text-lg text-[#8B4513] max-w-3xl mx-auto mb-4">
          Thank you for scanning our QR code. Explore behind-the-scenes information about our current production and enhance your viewing experience.
        </p>
      </div>
    </motion.header>
  );
}