"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHeader, { SiteBlurb } from "@/components/PageHeader";
import AmbientBackground from "@/components/AmbientBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-black-warm">
      <div className="absolute top-0 left-0 right-0 h-[100vh] pointer-events-none z-0">
        <AmbientBackground />
      </div>
      <PageHeader variant="immersive" className="pt-12 md:pt-16">
        <h1 className="sr-only">Little Branch Theater</h1>
      </PageHeader>

      <section className="pt-0 pb-8 relative z-10">
        <div className="container mx-auto px-0 md:px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-2xl mx-auto"
          >
            <Link href="/productions/sanctuary-city" className="group block">
              <div className="relative aspect-square">
                <Image
                  src="/images/sanctuary-city-poster-crop.webp"
                  alt="Sanctuary City by Martyna Majok - May 2026"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: 'center top' }}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
                />

                <div className="absolute inset-0 bg-gradient-vignette opacity-20"></div>

                <p className="hidden md:block absolute bottom-2 right-3 text-sm text-gray-400 italic">Artwork by Aspyn Peak</p>
              </div>
            </Link>
            <p className="block md:hidden text-xs text-gray-400 italic text-right mt-1 px-1">Artwork by Aspyn Peak</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-4xl mx-auto px-4 text-center"
          >
            <div className="text-accent text-lg mb-1">
              May 7 &ndash; 17, 2026
            </div>
            <div className="text-white text-base mb-6">
              The Lounge &mdash; 2417 Bank Dr, Boise, ID 83705
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://littlebranchtheater.ludus.com/200526657"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent/90 text-black font-bold px-10 py-4 rounded-full transition-all duration-200 text-lg shadow-lg shadow-accent/20"
              >
                Get Tickets
              </Link>
            </motion.div>
          </motion.div>

          <div className="w-24 h-px bg-accent/30 mx-auto my-6"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 max-w-4xl mx-auto px-4"
          >
            <div className="bg-black-deep/60 p-8 md:p-10 rounded-lg shadow-elevated">
              <p className="text-gray-200 text-lg md:text-xl lg:text-2xl leading-relaxed italic mb-4">
                "Some of the things I'm exploring are the extent to which we help when we can, how much we are willing to care for and sacrifice for another person, and the cost of that, for both sides, particularly when coming from a world of limited means and guarantees."
              </p>
              <p className="text-accent text-base md:text-lg font-medium tracking-wide">
                — Martyna Majok, Playwright
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-black-warm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent opacity-60"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="heading-2 mb-10 text-center">
              Our Mission
            </h2>
            <div className="bg-black-deep/50 p-8 md:p-10 backdrop-blur-sm rounded-lg max-w-3xl mx-auto shadow-elevated border-l-2 border-r-2 border-accent/30 mb-12">
              <p className="text-lg md:text-xl text-gray-200 text-center leading-relaxed">
                Little Branch connects communities through bold storytelling and
                the celebration of diverse voices. We are dedicated to providing
                opportunities for local artists, engaging with underrepresented
                communities, and creating work that inspires meaningful
                conversation. We aim to build a new audience filled with
                curiosity and the courage to challenge their perspectives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://square.link/u/UO5LLWNE?src=embed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent hover:bg-accent/90
  text-black font-bold px-8 py-3 rounded-full transition-all duration-200 text-lg shadow-lg shadow-accent/20"
                >
                  Support Little Branch
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/who-we-are"
                  className="inline-block border-2 border-accent hover:bg-accent/10
    text-accent font-medium px-8 py-3 rounded-full transition-all duration-200 text-lg"
                >
                  Who We Are
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
