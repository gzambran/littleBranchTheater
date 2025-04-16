// src/components/QuoteCarousel.tsx
"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QuoteData } from '@/data/bosnian-war/quoteData'

interface QuoteCarouselProps {
  quotes: QuoteData[]
}

export default function QuoteCarousel({ quotes }: QuoteCarouselProps) {
  const [activeQuoteId, setActiveQuoteId] = useState<string>(quotes[0]?.id || "")
  const [isScrollable, setIsScrollable] = useState(false)
  const quoteContainerRef = useRef<HTMLDivElement>(null)
  
  // Get the active quote
  const activeQuote = quotes.find(quote => quote.id === activeQuoteId) || quotes[0]
  
  // Get unique names for selector
  const uniqueNames = Array.from(new Set(quotes.map(quote => quote.name)))
  
  // Styles for honey theme
  const styles = {
    activeButton: "bg-[#D4A017] text-white font-medium ring-2 ring-[#D4A017]/30 ring-offset-2 ring-offset-white",
    inactiveButton: "bg-[#FEF9E7] text-[#8B4513] hover:bg-[#E6B325] hover:text-white border border-[#D4A017]/30",
    titleBadge: "bg-[#8B4513] text-white",
    quoteCard: "bg-[#FEF9E7] border border-[#D4A017]/20 shadow-md",
    quoteText: "text-[#333333]",
    quoteIcon: "text-[#D4A017]/30",
    sourceText: "text-[#8B4513]",
    scrollGradient: "from-[#FEF9E7]"
  }
  
  // Check if content is scrollable whenever active quote changes
  useEffect(() => {
    const checkScrollable = () => {
      if (quoteContainerRef.current) {
        const { scrollHeight, clientHeight } = quoteContainerRef.current
        setIsScrollable(scrollHeight > clientHeight)
      }
    }
    
    checkScrollable()
    
    // Also check after any potential layout changes
    const timer = setTimeout(checkScrollable, 100)
    
    return () => clearTimeout(timer)
  }, [activeQuoteId])
  
  return (
    <div className="w-full">
      {/* Name selection tabs - with increased fixed height for multiple rows */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 min-h-[120px] py-2">
        {uniqueNames.map((name) => {
          const isActive = activeQuote?.name === name
          return (
            <button
              key={name}
              onClick={() => {
                const quote = quotes.find(q => q.name === name)
                if (quote) {
                  setActiveQuoteId(quote.id)
                }
              }}
              className={`px-4 py-2 rounded-full transition-colors duration-300 text-sm md:text-base focus:outline-none mb-2 ${
                isActive 
                  ? styles.activeButton
                  : styles.inactiveButton
              }`}
            >
              {name}
            </button>
          )
        })}
      </div>
      
      {/* Fixed height for the entire quote section */}
      <div className="h-[400px]">
        {/* Quote role/title badges */}
        {activeQuote && (
          <div className="flex justify-center mb-4 h-[28px]">
            <span className={`px-3 py-1 rounded-full text-sm ${styles.titleBadge}`}>
              {activeQuote.title}
            </span>
          </div>
        )}
        
        {/* Quote container with fixed height */}
        <div className="relative flex justify-center h-[368px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuoteId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`rounded-lg p-6 max-w-2xl w-full h-full flex flex-col ${styles.quoteCard}`}
            >
              <div className="relative flex-grow overflow-hidden flex items-center">
                {/* Quote icon */}
                <svg 
                  className={`absolute top-6 left-0 w-10 h-10 ${styles.quoteIcon}`} 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                {/* Scrollable quote container with vertical centering */}
                <div 
                  ref={quoteContainerRef}
                  className="max-h-full w-full overflow-y-auto pr-2 custom-scrollbar"
                >
                  <blockquote className={`italic text-lg md:text-xl pl-12 pt-1 ${styles.quoteText}`}>
                    {activeQuote.quote}
                  </blockquote>
                </div>
                
                {/* Scroll gradient indicator - only shown when content is scrollable */}
                {isScrollable && (
                  <div className={`absolute bottom-0 left-0 right-2 h-8 bg-gradient-to-t ${styles.scrollGradient} to-transparent pointer-events-none`}></div>
                )}
              </div>
              
              <div className="text-right mt-4">
                <p className={`text-xs ${styles.sourceText}`}>Source: {activeQuote.source}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Custom scrollbar styles - use honey theme values */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(139, 69, 19, 0.1);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 160, 23, 0.5);
          border-radius: 10px;
        }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(212, 160, 23, 0.5) rgba(139, 69, 19, 0.1);
        }
      `}</style>
    </div>
  )
}