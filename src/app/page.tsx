"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHeader, { SiteBlurb } from "@/components/PageHeader";

export const revalidate = 3600;

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Page Header with Site Blurb */}
      <PageHeader>
        <h1 className="sr-only">Little Branch Theater</h1>
        <SiteBlurb>
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
              <div className="rounded-xl overflow-hidden shadow-[0_0_40px_rgba(166,226,46,0.15)] border border-accent/20 transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(166,226,46,0.25)] group-hover:border-accent/30">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/images/sanctuary-city-main.webp"
                    alt="Sanctuary City by Martyna Majok - May 2026"
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
                  />

                  {/* Lighter Gradient Overlay for Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Production Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      className="text-center"
                    >
                      <h2 className="font-display text-3xl md:text-4xl text-white mb-2 group-hover:text-accent transition-colors">
                        Sanctuary City
                      </h2>
                      <p className="text-gray-300 text-lg italic mb-2">
                        by Martyna Majok
                      </p>
                      <p className="text-accent text-xl font-medium">
                        May 2026
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Playwright Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-4xl mx-auto"
          >
            <div className="bg-black/40 p-6 md:p-8 rounded-lg text-center">
  <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic mb-3">
                "Some of the things I'm exploring are the extent to which we help when we can, how much we are willing to care for and sacrifice for another person, and the cost of that, for both sides, particularly when coming from a world of limited means and guarantees."
              </p>
              <p className="text-accent text-sm md:text-base font-medium">
                — Martyna Majok, Playwright
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subtle divider */}
      <div className="w-24 h-px bg-accent/30 mx-auto my-6"></div>

      {/* Audition Announcement Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-accent/10 to-black/30 p-8 md:p-12 rounded-lg border border-accent/30">
              <div className="text-center">
                <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                  Auditions: February 15th, 2026
                </h2>
                
                <div className="bg-black/30 p-6 rounded-lg mb-6 max-w-2xl mx-auto">
                  <p className="text-gray-300 text-lg mb-3">
                    <strong className="text-white">When:</strong> Sunday, February 15th, 2026
                  </p>
                  <p className="text-gray-300 text-lg mb-3">
                    <strong className="text-white">Where:</strong> Xanadu (5015 Bond St, Boise, Idaho 83706)
                  </p>
                  <p className="text-gray-300 text-lg">
                    <strong className="text-white">Prepare:</strong> 60-90 second contemporary monologue
                  </p>
                </div>

                <p className="text-gray-300 text-base mb-6">
                  Casting for <em>Sanctuary City</em> and future Little Branch Theater productions.
                </p>

                <motion.a
                  href="https://www.signupgenius.com/go/10C044EA8AE23AAF8C16-61616113-sanctuary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent hover:bg-accent/90 text-black font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg shadow-accent/20 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up for Auditions
                </motion.a>

                <p className="text-gray-400 text-sm mt-4">
                  Questions? <a href="mailto:info@littlebranchtheater.org" className="text-accent hover:underline">info@littlebranchtheater.org</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subtle divider */}
      <div className="w-24 h-px bg-accent/30 mx-auto my-6"></div>

      {/* Mission Section */}
      <section className="py-8 bg-black relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 opacity-3 bg-gradient-to-b from-accent/5 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="font-display text-4xl mb-8 text-center">
              Our Mission
            </h2>
            <div className="bg-black/50 p-8 backdrop-blur-sm rounded-lg max-w-3xl mx-auto shadow-md shadow-black/10 border-l border-r border-accent/30 mb-10">
              <p className="text-xl text-gray-300 text-center">
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