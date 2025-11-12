"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PageHeader, { SiteBlurb } from '@/components/PageHeader'

export default function ProductionsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Page Header with consistent pattern */}
      <PageHeader>
        <h1 className="sr-only">Productions</h1>
        <SiteBlurb>
          Discover the <span className="text-accent font-normal">stories</span> we've shared—and the ones <span className="text-accent font-normal">ahead</span>.
        </SiteBlurb>
      </PageHeader>

      {/* Productions Grid - adjusted padding to pt-8 to match other pages */}
      <section className="pt-8 pb-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Coming Soon Card - Sanctuary City */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group"
            >
              <Link href="/productions/coming-soon" className="block">
                <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/images/sanctuary-city-promo.jpeg"
                    alt="Sanctuary City by Martyna Majok"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Card Content */}
                <div className="mt-4 text-center">
                  <h2 className="text-white text-xl font-display mb-2 group-hover:text-accent transition-colors">
                    Sanctuary City
                  </h2>
                  <p className="text-gray-400 text-sm mb-1">by Martyna Majok</p>
                  <p className="text-gray-400 text-sm mb-1">
                    Directed by Amela Karadža and Jovani Zambrano
                  </p>
                  <p className="text-accent text-lg font-medium">Spring 2026</p>
                </div>
              </Link>
            </motion.div>

            {/* Honey Brown Eyes Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group"
            >
              <Link href="/productions/honey-brown-eyes" className="block">
                <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/images/honeybrowneyes.webp"
                    alt="Honey Brown Eyes"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Card Content */}
                <div className="mt-4 text-center">
                  <h2 className="text-white text-xl font-display mb-2 group-hover:text-accent transition-colors">
                    Honey Brown Eyes
                  </h2>
                  <p className="text-gray-400 text-sm mb-1">By Stefanie Zadravec</p>
                  <p className="text-gray-400 text-sm mb-1">
                    Directed by Amela Karadža and John Wicks
                  </p>
                  <p className="text-accent text-lg font-medium">
                    May 22<sup>nd</sup> - June 1<sup>st</sup> 2025
                  </p>
                </div>
              </Link>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  )
}