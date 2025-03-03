import React from 'react'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TransitionProvider from '@/components/TransitionProvider'
import PageTransition from '@/components/PageTransition';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' })

export const metadata = {
  title: 'Little Branch Theater',
  description: 'A new theater company bringing fresh perspectives to the stage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} 
        font-sans bg-black text-white min-h-screen`}>
        <Header />
        <main className="pt-16">
          <TransitionProvider>
            {children}
          </TransitionProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}