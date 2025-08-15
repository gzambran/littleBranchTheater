import React from 'react'

interface ShowMediaSectionProps {
  children: React.ReactNode
}

export default function ShowMediaSection({ children }: ShowMediaSectionProps) {
  return (
    <section className="relative flex flex-col items-center bg-black">
      <div className="absolute inset-0 opacity-3 bg-gradient-to-b from-accent/5 to-transparent"></div>
      
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(217,119,6,0.2)] relative">
          <div className="block relative">
            <div className="relative w-full flex justify-center bg-black/30 py-8">
              <div className="w-full max-w-4xl mx-auto px-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}