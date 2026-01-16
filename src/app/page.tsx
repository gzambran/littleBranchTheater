"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHeader, { SiteBlurb } from "@/components/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";
import AuditionCallout from "@/components/AuditionCallout";

export const revalidate = 3600;

export default function Home() {
  return (
    <div className="min-h-screen bg-black-warm">
      {/* Page Header with Site Blurb */}
      <PageHeader variant="statement">
        <h1 className="sr-only">Little Branch Theater</h1>
        <SiteBlurb variant="large">
          Little Branch is a Boise-based theater company committed to creating{" "}
          <span className="text-accent font-normal">intimate</span>, emotionally{" "}
          <span className="text-accent font-normal">honest</span> work that
          embraces <span className="text-accent font-normal">curiosity</span>,{" "}
          <span className="text-accent font-normal">risk</span>, and{" "}
          <span className="text-accent font-normal">connection</span>.
        </SiteBlurb>
      </PageHeader>

      {/* Hero Section - Sanctuary City */}
      <section className="pt-8 pb-8">
        <div className="container mx-auto px-4">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <Link href="/productions/sanctuary-city" className="group block">
              <SpotlightCard className="transition-all duration-500 hover:border-accent/40 shadow-dramatic group-hover:shadow-glow-accent-strong" spotlightColor="rgba(166, 226, 46, 0.25)">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/images/sanctuary-city-main.webp"
                    alt="Sanctuary City by Martyna Majok - May 2026"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
                  />

                  {/* Enhanced gradient overlays for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>
                  <div className="absolute inset-0 bg-gradient-vignette opacity-40"></div>

                  {/* Production Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      className="text-center"
                    >
                      <h2 className="font-display text-xl md:text-4xl text-white mb-1 md:mb-2 group-hover:text-accent transition-colors">
                        Sanctuary City
                      </h2>
                      <p className="text-gray-300 text-sm md:text-lg italic mb-0.5 md:mb-2">
                        by Martyna Majok
                      </p>
                      <p className="text-accent text-base md:text-xl font-medium">
                        May 2026
                      </p>
                    </motion.div>
                  </div>
                </div>
              </SpotlightCard>
            </Link>
          </motion.div>

          {/* Playwright Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 max-w-4xl mx-auto"
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

      {/* Subtle divider */}
      <div className="divider-theatrical my-8"></div>

      {/* Audition Announcement Section */}
      <section className="py-12 bg-black-warm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <AuditionCallout />
          </motion.div>
        </div>
      </section>

      {/* Subtle divider */}
      <div className="divider-theatrical my-8"></div>

      {/* Mission Section */}
      <section className="py-12 bg-black-warm relative">
        {/* Enhanced gradient background */}
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
