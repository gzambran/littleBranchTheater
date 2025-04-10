"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import PhotoCard, { WarPhoto } from '@/components/PhotoCard'
import PhotoModal from '@/components/PhotoModal'

export const revalidate = 3600

// Sample data for Bosnian War photos
const bosnianWarPhotos: WarPhoto[] = [
  {
    id: "bw-1",
    src: "/images/bosnian-war-1.jpg", // Placeholder image path
    alt: "Sarajevo under siege during the Bosnian War",
    caption: "Sarajevo residents cross the infamous 'Sniper Alley' during the nearly four-year siege of the city. The street became notorious for Serb snipers shooting at civilians crossing from one side to another.",
    source: "Photo: Ron Haviv / VII Photo Agency, 1992"
  },
  {
    id: "bw-2",
    src: "/images/bosnian-war-2.jpg", // Placeholder image path
    alt: "Refugees fleeing Srebrenica",
    caption: "Bosniak refugees flee Srebrenica as Serb forces advance in July 1995. The fall of the UN-declared 'safe area' resulted in the genocide of more than 8,000 Bosniak men and boys.",
    source: "Photo: Alexandra Boulat / VII Photo Agency, 1995"
  },
  {
    id: "bw-3",
    src: "/images/bosnian-war-3.jpg", // Placeholder image path
    alt: "Destruction in Mostar",
    caption: "The ruins of the historic Stari Most bridge in Mostar after its destruction. The 16th-century Ottoman bridge was deliberately shelled by Croat forces, symbolizing the rupture between communities.",
    source: "Photo: Gilles Peress / Magnum Photos, 1993"
  },
  {
    id: "bw-4",
    src: "/images/bosnian-war-4.jpg", // Placeholder image path
    alt: "UN peacekeepers in Bosnia",
    caption: "UN peacekeepers patrol through a destroyed village near Tuzla. The UNPROFOR mission was often criticized for its limited mandate that prevented troops from effectively protecting civilians.",
    source: "Photo: James Nachtwey / VII Photo Agency, 1994"
  },
  {
    id: "bw-5",
    src: "/images/bosnian-war-5.jpg", // Placeholder image path
    alt: "Bosnian soldier walking through destroyed building",
    caption: "A Bosnian Army soldier navigates through the remains of a bombed-out building in Sarajevo. Urban combat characterized much of the conflict as cities became besieged battlegrounds.",
    source: "Photo: Christopher Morris / VII Photo Agency, 1993"
  },
  {
    id: "bw-6",
    src: "/images/bosnian-war-6.jpg", // Placeholder image path
    alt: "Children in Sarajevo during the siege",
    caption: "Children in Sarajevo play amid the dangers of the siege. Despite constant shelling and sniper fire, residents attempted to maintain some semblance of normal life throughout the 1,425 days of encirclement.",
    source: "Photo: Tom Stoddart / Getty Images, 1994"
  }
];

export default function Research() {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative py-16 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <AnimatedText
              text="Beyond the Lobby"
              className="font-display text-5xl md:text-7xl mb-6"
            />
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Explore the history and research that shaped Honey Brown Eyes.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-gray-900 p-8 rounded-lg mb-12">
                <h2 className="font-display text-3xl text-accent mb-6">Welcome, Theater Patron!</h2>
                
                <p className="text-gray-300 mb-6">
                  Thank you for scanning our QR code. This hidden page contains exclusive behind-the-scenes information about our current production, research materials that informed our creative decisions, and deeper context to enhance your viewing experience.
                </p>
                
                <div className="border-l-4 border-accent pl-4 italic text-gray-400 mb-6">
                  "The true magic of theater lies not just in what audiences see on stage, but in the countless hours of research, exploration, and discovery that shape every production." 
                </div>
              </div>
            </motion.div>

            {/* Bosnian War Through Pictures Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-16"
            >
              <h2 className="font-display text-3xl text-accent mb-8 text-center">The Bosnian War Through Pictures</h2>
              <p className="text-gray-300 mb-8 text-center">
                These images provide visual context for the setting of our production. The Bosnian War (1992-1995) tore apart communities that had coexisted for generations, setting the backdrop for our story.
              </p>
              
              {/* Photo Card Container */}
              <div className="space-y-8">
                {bosnianWarPhotos.map((photo, index) => (
                  <PhotoCard 
                    key={photo.id}
                    photo={photo}
                    onClick={openModal}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16 text-center"
            >
              <p className="text-gray-300 mb-6">
                We hope this additional context enhances your experience of our production. We'd love to hear your thoughts after the show!
              </p>
              <Link
                href="/"
                className="inline-block bg-accent hover:bg-accent/90 
                  text-white px-8 py-3 rounded-md transition"
              >
                Return to Main Site
              </Link>
            </motion.div>
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
  )
}