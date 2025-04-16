import React from 'react';
import Head from 'next/head';
import { Inter, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

// Import Tailwind directly
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

// Import components
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Timeline from '@/components/beyond-the-lobby/Timeline';
import Link from 'next/link';
import { WarPhoto } from '@/components/beyond-the-lobby/PhotoCard';
import PhotoModal from '@/components/beyond-the-lobby/PhotoModal';
import HorizontalGallery from '@/components/beyond-the-lobby/HorizontalGallery';
import QuoteCarousel from '@/components/beyond-the-lobby/QuoteCarousel';
import BeyondLobbyHeader from '@/components/beyond-the-lobby/BeyondLobbyHeader';
import BeyondLobbySection from '@/components/beyond-the-lobby/BeyondLobbySection';

// Import data
import { timelineData, quoteData, bosnianWarPhotos } from '@/data/beyond-the-lobby';
import { lobbyPhotos } from '@/data/beyond-the-lobby/lobbyData';

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

      <div className={`${inter.variable} ${playfair.variable} font-sans min-h-screen bg-white text-[#333333] overflow-x-hidden`}>
        {/* Use the new header component */}
        <BeyondLobbyHeader />

        {/* Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Welcome section - keep this as is since it's unique */}
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

              <BeyondLobbySection
                id="lobby"
                title="Lobby Photo Gallery"
                description="Take a virtual tour of our theater lobby and the special exhibition we've created to enhance your understanding of 'Honey Brown Eyes' and its historical context."
              >
                <HorizontalGallery 
                  photos={lobbyPhotos}
                  onPhotoClick={openModal}
                />
              </BeyondLobbySection>

              <BeyondLobbySection
                id="timeline"
                title="The Bosnian War Timeline"
                description="Explore the key events of the Bosnian War (1992-1995) that form the historical backdrop for our production. This conflict tore apart communities and shaped the experiences of our characters."
              >
                <Timeline 
                  items={timelineData}
                  onInfoClick={handleTimelineInfoClick}
                />
              </BeyondLobbySection>

              <BeyondLobbySection
                id="voices"
                title="Voices from the War"
                description="Hear firsthand accounts from those who lived through the conflict. These personal perspectives shaped the development of our characters and their stories."
              >
                <QuoteCarousel quotes={quoteData} />
              </BeyondLobbySection>

              <BeyondLobbySection
                id="photos"
                title="The Bosnian War Through Pictures"
                description="These images provide visual context for the setting of our production. The Bosnian War (1992-1995) tore apart communities that had coexisted for generations, setting the backdrop for our story."
              >
                <HorizontalGallery 
                  photos={bosnianWarPhotos}
                  onPhotoClick={openModal}
                />
              </BeyondLobbySection>

              {/* About Little Branch Section */}
              <BeyondLobbySection
                id="about"
                title="About Little Branch Theater"
                description=""
              >
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
              </BeyondLobbySection>
              
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