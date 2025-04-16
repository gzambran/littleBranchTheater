// src/pages/beyond-the-lobby.tsx
import React from 'react';
import Head from 'next/head';
import { Inter, Playfair_Display } from 'next/font/google';
import Document from 'next/document';
import { Analytics } from '@vercel/analytics/react';

// Import Tailwind directly
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

// Import your components and data
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Timeline from '@/components/Timeline';
import Link from 'next/link';
import { WarPhoto } from '@/components/PhotoCard';
import PhotoModal from '@/components/PhotoModal';
import HorizontalGallery from '@/components/HorizontalGallery';
import QuoteCarousel from '@/components/QuoteCarousel';
import { timelineData, quoteData, bosnianWarPhotos } from '@/data/bosnian-war';
import { lobbyPhotos } from '@/data/bosnian-war/lobbyData';

// Load fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' });

export default function BeyondTheLobbyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<WarPhoto | null>(null);
  
  // Function to open modal with selected photo
  const openModal = (photo: WarPhoto) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Function to handle timeline info icon clicks
  const handleTimelineInfoClick = (id: string) => {
    // For future functionality - could show a modal with more information
    console.log(`More info requested for timeline item: ${id}`);
  };

  // Function to scroll to section smoothly
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Beyond the Lobby | Little Branch Theater</title>
        <meta name="description" content="Exclusive behind-the-scenes content for Little Branch Theater productions" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Critical styles to ensure nothing from the main site affects this page */}
        <style jsx global>{`
          html, body {
            background-color: white !important;
            color: #333333 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
        `}</style>
      </Head>

      <div className={`${inter.variable} ${playfair.variable} font-sans min-h-screen bg-white text-[#333333]`}>
        {/* Custom Header for Beyond the Lobby */}
        <motion.header 
          className="relative py-12 bg-gradient-to-b from-[#D4A017] to-[#E6B325]"
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

        {/* Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-[#FEF9E7] to-[#FEF9E7]/80 p-8 rounded-lg border border-[#D4A017]/20 shadow-lg mb-12">
                  <h2 className="font-display text-3xl text-[#8B4513] mb-6">Welcome to Honey Brown Eyes</h2>
                  
                  <p className="text-[#333333] mb-6">
                    This digital companion contains exclusive behind-the-scenes information about our production, research materials that informed our creative decisions, and deeper context to enhance your viewing experience.
                  </p>
                  
                  <div className="border-l-4 border-[#D4A017] pl-4 italic text-[#8B4513] mb-8">
                    "The true magic of theater lies not just in what audiences see on stage, but in the countless hours of research, exploration, and discovery that shape every production." 
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-[#8B4513] font-medium mb-4">In this digital program, you'll find:</p>
                    
                    <ul className="space-y-3">
                      <li>
                        <a 
                          href="#lobby" 
                          onClick={(e) => scrollToSection(e, 'lobby')}
                          className="block p-3 border border-[#D4A017]/30 rounded bg-white/80 text-[#333333] hover:bg-[#FEF9E7] transition-colors"
                        >
                          <span className="text-[#D4A017] font-medium">Lobby Photo Gallery</span>
                          <span className="block text-sm text-[#8B4513] mt-1">Take a virtual tour of our theater lobby exhibition</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#timeline" 
                          onClick={(e) => scrollToSection(e, 'timeline')}
                          className="block p-3 border border-[#D4A017]/30 rounded bg-white/80 text-[#333333] hover:bg-[#FEF9E7] transition-colors"
                        >
                          <span className="text-[#D4A017] font-medium">The Bosnian War Timeline</span>
                          <span className="block text-sm text-[#8B4513] mt-1">Key events from 1992-1995 that form the backdrop of our story</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#voices" 
                          onClick={(e) => scrollToSection(e, 'voices')}
                          className="block p-3 border border-[#D4A017]/30 rounded bg-white/80 text-[#333333] hover:bg-[#FEF9E7] transition-colors"
                        >
                          <span className="text-[#D4A017] font-medium">Voices from the War</span>
                          <span className="block text-sm text-[#8B4513] mt-1">Firsthand accounts that inspired our characters</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#photos" 
                          onClick={(e) => scrollToSection(e, 'photos')}
                          className="block p-3 border border-[#D4A017]/30 rounded bg-white/80 text-[#333333] hover:bg-[#FEF9E7] transition-colors"
                        >
                          <span className="text-[#D4A017] font-medium">The Bosnian War Through Pictures</span>
                          <span className="block text-sm text-[#8B4513] mt-1">Visual context for the world of the play</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#about" 
                          onClick={(e) => scrollToSection(e, 'about')}
                          className="block p-3 border border-[#D4A017]/30 rounded bg-white/80 text-[#333333] hover:bg-[#FEF9E7] transition-colors"
                        >
                          <span className="text-[#D4A017] font-medium">About Little Branch Theater</span>
                          <span className="block text-sm text-[#8B4513] mt-1">Learn about our company and artistic mission</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Lobby Photos Section */}
              <motion.div
                id="lobby"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-16 scroll-mt-8"
              >
                <div className="mb-8 text-center">
                  <h2 className="font-display text-3xl text-[#D4A017] mb-4">Lobby Photo Gallery</h2>
                  <p className="text-[#333333] max-w-2xl mx-auto">
                    Take a virtual tour of our theater lobby and the special exhibition we've created to enhance your understanding of "Honey Brown Eyes" and its historical context.
                  </p>
                </div>
                
                {/* Horizontal Gallery */}
                <div className="gallery-custom">
                  <HorizontalGallery 
                    photos={lobbyPhotos}
                    onPhotoClick={openModal}
                  />
                </div>
              </motion.div>

              {/* Timeline Section */}
              <motion.div
                id="timeline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-16 scroll-mt-8"
              >
                <div className="mb-8 text-center">
                  <h2 className="font-display text-3xl text-[#D4A017] mb-4">The Bosnian War Timeline</h2>
                  <p className="text-[#333333] max-w-2xl mx-auto">
                    Explore the key events of the Bosnian War (1992-1995) that form the historical backdrop for our production. This conflict tore apart communities and shaped the experiences of our characters.
                  </p>
                </div>
                
                <Timeline 
                  items={timelineData}
                  onInfoClick={handleTimelineInfoClick}
                />
              </motion.div>

              {/* Voices from the War Section */}
              <motion.div
                id="voices"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-16 scroll-mt-8"
              >
                <div className="mb-8 text-center">
                  <h2 className="font-display text-3xl text-[#D4A017] mb-4">Voices from the War</h2>
                  <p className="text-[#333333] max-w-2xl mx-auto">
                    Hear firsthand accounts from those who lived through the conflict. These personal perspectives shaped the development of our characters and their stories.
                  </p>
                </div>
                
                {/* Apply custom styles directly to the existing component */}
                <div className="quotes-custom">
                  <QuoteCarousel quotes={quoteData} />
                </div>
              </motion.div>

              {/* Bosnian War Through Pictures Section */}
              <motion.div
                id="photos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-16 scroll-mt-8"
              >
                <div className="mb-8 text-center">
                  <h2 className="font-display text-3xl text-[#D4A017] mb-4">The Bosnian War Through Pictures</h2>
                  <p className="text-[#333333] max-w-2xl mx-auto">
                    These images provide visual context for the setting of our production. The Bosnian War (1992-1995) tore apart communities that had coexisted for generations, setting the backdrop for our story.
                  </p>
                </div>
                
                {/* Horizontal Gallery */}
                <div className="gallery-custom">
                  <HorizontalGallery 
                    photos={bosnianWarPhotos}
                    onPhotoClick={openModal}
                  />
                </div>
              </motion.div>

              {/* About Little Branch Section */}
              <motion.div
                id="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 mb-16 scroll-mt-8"
              >
                <div className="mb-8 text-center">
                  <h2 className="font-display text-3xl text-[#D4A017] mb-4">About Little Branch Theater</h2>
                </div>
                
                <div className="bg-gradient-to-br from-[#FEF9E7] to-[#FEF9E7]/80 p-8 rounded-lg border border-[#D4A017]/20 shadow-lg">
                  <p className="text-[#333333] mb-6">
                    Little Branch Theater is a new theater company dedicated to bringing fresh perspectives to the stage. Founded in 2022 by a collective of artists committed to thought-provoking storytelling, we aim to create theatrical experiences that challenge, inspire, and connect.
                  </p>
                  
                  <p className="text-[#333333] mb-6">
                    Our mission is to produce works that explore complex human experiences across borders and cultures. We believe in theater's unique power to foster empathy and understanding by inviting audiences to witness stories that might otherwise remain untold.
                  </p>
                  
                  <p className="text-[#333333] mb-8">
                    Through productions like "Honey Brown Eyes," we hope to illuminate historical events and personal narratives that resonate with contemporary audiences and inspire meaningful dialogue about our shared humanity.
                  </p>
                  
                  <div className="flex justify-center">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 bg-[#D4A017] hover:bg-[#E6B325] text-white px-8 py-3 rounded-md transition group shadow-md"
                    >
                      <span>Discover Our Main Site</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 transform transition group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
              
              {/* Custom Footer */}
              <footer className="mt-16 text-center py-6 border-t border-[#D4A017]/20">
                <p className="text-sm text-[#8B4513]">
                  &copy; {new Date().getFullYear()} Little Branch Theater | Exclusive Digital Content
                </p>
                <p className="text-xs text-[#8B4513]/70 mt-1">
                  Scan the QR code in our playbill to access this content anytime
                </p>
              </footer>
            </div>
          </div>
        </section>

        {/* Modal for expanded photos */}
        <AnimatePresence>
          {selectedPhoto && (
            <PhotoModal photo={selectedPhoto} onClose={closeModal} />
          )}
        </AnimatePresence>
      </div>

      {/* Analytics */}
      <Analytics />
    </>
  );
}

// This tells Next.js that this is a standalone page that doesn't use the default layout
BeyondTheLobbyPage.getLayout = function getLayout(page: React.ReactElement) {
  return page;
};