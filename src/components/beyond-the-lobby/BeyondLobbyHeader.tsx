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
          <h1 className="font-display text-5xl md:text-7xl text-[#333333] mb-4">
            Beyond the Lobby
          </h1>
          <p className="text-xl md:text-2xl text-[#8B4513] max-w-2xl mx-auto">
            Exclusive content for theater patrons
          </p>
        </div>
        <div className="bg-black/10 w-20 h-1 mx-auto my-6 rounded-full"></div>
        <p className="text-lg text-[#8B4513] max-w-3xl mx-auto mb-4">
          Thank you for scanning our QR code. This digital extension of our lobby experience offers both the physical gallery and timeline of the Bosnian War you saw in the theater, plus exclusive content only available here.
        </p>
      </div>
    </motion.header>
  );
}