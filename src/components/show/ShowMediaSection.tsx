import React from 'react'

interface ShowMediaSectionProps {
  children: React.ReactNode
}

export default function ShowMediaSection({ children }: ShowMediaSectionProps) {
  return (
    <section className="relative flex flex-col items-center bg-black-warm">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-vignette opacity-20"></div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="rounded-xl overflow-hidden shadow-dramatic relative">
          <div className="block relative">
            <div className="relative w-full flex justify-center bg-black-deep/30 py-8">
              <div className="w-full max-w-4xl mx-auto px-0 md:px-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
