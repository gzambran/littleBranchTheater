// /src/pages/beyond-the-lobby.tsx

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
import TimelineMediaModal from '@/components/beyond-the-lobby/TimelineMediaModal';
import HorizontalGallery from '@/components/beyond-the-lobby/HorizontalGallery';
import QuoteCarousel from '@/components/beyond-the-lobby/QuoteCarousel';
import BeyondLobbyHeader from '@/components/beyond-the-lobby/BeyondLobbyHeader';
import BeyondLobbySection from '@/components/beyond-the-lobby/BeyondLobbySection';

// Import data
import { timelineData } from '@/data/beyond-the-lobby';
import { TimelineMedia } from '@/data/beyond-the-lobby/timelineData';
import { quoteData, bosnianWarPhotos } from '@/data/beyond-the-lobby';
import { lobbyPhotos } from '@/data/beyond-the-lobby/lobbyData';

// Load fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' });

export default function BeyondTheLobbyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<WarPhoto | null>(null);
  const [timelineMedia, setTimelineMedia] = useState<TimelineMedia[] | null>(null);
  const [timelineTitle, setTimelineTitle] = useState<string>('');
  
  // Function to open photo modal
  const openModal = (photo: WarPhoto) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Function to close modals
  const closeModal = () => {
    setSelectedPhoto(null);
    setTimelineMedia(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Function to handle timeline info icon clicks
  const handleTimelineInfoClick = (id: string, title: string) => {
    const timelineItem = timelineData.find(item => item.id === id);
    if (timelineItem && timelineItem.additionalMedia && timelineItem.additionalMedia.length > 0) {
      setTimelineMedia(timelineItem.additionalMedia);
      setTimelineTitle(title);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
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
        <meta name="robots" content="noindex, nofollow" />
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
              {/* Enhanced Welcome section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-[#FEF9E7] to-[#FEF9E7]/80 p-8 rounded-lg border border-[#D4A017]/20 shadow-lg mb-12">
                  <h2 className="font-display text-3xl text-[#8B4513] mb-4">Welcome to Beyond the Lobby</h2>
                  
                  <div className="mt-8">
                    <h3 className="text-[#D4A017] font-display text-xl mb-4">Scroll to Explore:</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                      <div className="bg-white/50 p-4 rounded-lg border border-[#D4A017]/10">
                        <span className="text-[#D4A017] font-medium block mb-1">Lobby Photo Gallery</span>
                        <span className="text-sm text-[#8B4513]">Step into our virtual exhibition and discover the visual elements that complement our storytelling</span>
                      </div>
                      
                      <div className="bg-white/50 p-4 rounded-lg border border-[#D4A017]/10">
                        <span className="text-[#D4A017] font-medium block mb-1">The Bosnian War Timeline</span>
                        <span className="text-sm text-[#8B4513]">Understand the historical backdrop through key events from 1992-1995</span>
                      </div>
                      
                      <div className="bg-white/50 p-4 rounded-lg border border-[#D4A017]/10">
                        <span className="text-[#D4A017] font-medium block mb-1">Voices of the War</span>
                        <span className="text-sm text-[#8B4513]">Hear different perspectives that shaped our narrative </span>
                      </div>
                      
                      <div className="bg-white/50 p-4 rounded-lg border border-[#D4A017]/10">
                        <span className="text-[#D4A017] font-medium block mb-1">The Bosnian War Through Pictures</span>
                        <span className="text-sm text-[#8B4513]">Explore additional photography that brings context to our production</span>
                      </div>
                      
                      <div className="bg-white/50 p-4 rounded-lg border border-[#D4A017]/10">
                        <span className="text-[#D4A017] font-medium block mb-1">About Little Branch</span>
                        <span className="text-sm text-[#8B4513]">Learn more about our theater company and what drives us forward</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <BeyondLobbySection
                id="lobby"
                title="Lobby Photo Gallery"
                description="Take a virtual tour of our theater lobby created to deepen your connection to Honey Brown Eyes."
              >
                <HorizontalGallery 
                  photos={lobbyPhotos}
                  onPhotoClick={openModal}
                />
              </BeyondLobbySection>

              <BeyondLobbySection
                id="timeline"
                title="The Bosnian War Timeline"
                description="Learn about the key events of the Bosnian War (1992-1995) that provide historical context for our production. This conflict tore apart communities and shaped the lives of our characters."
              >
                <Timeline 
                  items={timelineData}
                  onInfoClick={handleTimelineInfoClick}
                />
              </BeyondLobbySection>

              <BeyondLobbySection
                id="voices"
                title="Voices of the War"
                description="Explore a collection of quotes that reveal how the war was experienced, witnessed, and remembered."
              >
                <QuoteCarousel quotes={quoteData} />
              </BeyondLobbySection>

              <BeyondLobbySection
                id="photos"
                title="The Bosnian War Through Pictures"
                description="Journey through a curated selection of additional photographs that offer deeper visual context for the world of the play."
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
                marginBottom="mb-10" // Less margin since followed by footer
              >
                <div className="bg-gradient-to-br from-[#FEF9E7] to-[#FEF9E7]/80 p-8 rounded-lg border border-[#D4A017]/20 shadow-lg">
                  <p className="text-[#333333] mb-6">
                    Little Branch is a new theater company rooted in the belief that storytelling builds connection, uplifts unheard voices, and nurtures the art that makes a community thrive.
                  </p>
                  
                  <p className="text-[#333333] mb-6">
                    Founded by artists Amela and Jovani, we’re committed to creating opportunities for local talent and bringing bold, diverse stories to Boise.
                  </p>
                  
                  <p className="text-[#333333] mb-8">
                    With productions like Honey Brown Eyes, we aim to spark meaningful dialogue and celebrate the shared humanity at the heart of every story. We’re grateful to Alley Repertory Theater and the Visual Arts Collective for giving us a space to begin.
                  </p>

                  <p className="text-[#333333] mb-8">
                    We hope you’ll continue this journey with us.
                  </p>
                  
                  <div className="flex justify-center">
                    <Link
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
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
                <p className="text-xs text-[#8B4513]/80 mt-1">
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

        {/* New Timeline Media Modal */}
        <AnimatePresence>
          {timelineMedia && timelineMedia.length > 0 && (
            <TimelineMediaModal 
              media={timelineMedia} 
              title={timelineTitle}
              onClose={closeModal} 
            />
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