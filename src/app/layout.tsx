import React from 'react'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import OrganizationStructuredData from '@/components/OrganizationStructuredData'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' })

export const metadata = {
  title: 'Little Branch',
  description: 'A theater company bringing fresh perspectives to the stage',
  alternates: {
    canonical: 'https://www.littlebranchtheater.org',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <OrganizationStructuredData />
      </head>
      <body className={`${inter.variable} ${playfair.variable} 
        font-sans bg-black text-white min-h-screen`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:border focus:border-white">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-16">
          {children}
      </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}