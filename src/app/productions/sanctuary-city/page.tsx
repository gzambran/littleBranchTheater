"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHeader, { SiteBlurb } from "@/components/PageHeader";
import ShowMediaSection from "@/components/show/ShowMediaSection";
import ShowDateVenue from "@/components/show/ShowDateVenue";
import ShowContentSection from "@/components/show/ShowContentSection";
import ShowSidebar from "@/components/show/ShowSidebar";
import SocialShare from "@/components/show/SocialShare";

export const revalidate = 3600;

export default function SanctuaryCityPage() {
  // Production Details content (shared between mobile and desktop)
  const productionDetailsContent = (
    <div className="space-y-6 text-gray-300">
      <div>
        <h4 className="font-medium mb-2">Play</h4>
        <p className="text-xl font-display">Sanctuary City</p>
        <p className="text-sm text-gray-400">by Martyna Majok</p>
      </div>
      <div>
        <h4 className="font-medium mb-2">Performance Dates</h4>
        <p className="text-lg font-medium text-white">May 2026</p>
        <p className="text-sm mt-1">Dates and times to be announced</p>
      </div>
      <div>
        <h4 className="font-medium mb-2">Directors</h4>
        <p>Amela Karadža</p>
        <p>Jovani Zambrano</p>
      </div>
      <div>
        <h4 className="font-medium mb-2">Venue</h4>
        <p>To be announced</p>
      </div>

      <SocialShare
        shareUrl="https://www.littlebranchtheater.org/productions/sanctuary-city"
        shareText="Little Branch Theater presents Sanctuary City by Martyna Majok - May 2026"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* PageHeader Component with Show Description */}
      <PageHeader>
        <SiteBlurb>
          An intimate story of friendship, identity, and the{" "}
          <span className="text-accent font-normal">courage</span> it takes to{" "}
          <span className="text-accent font-normal">fight</span> for the future you deserve.
        </SiteBlurb>
      </PageHeader>

      {/* Image Section */}
      <ShowMediaSection>
        <div className="relative aspect-[16/9]">
          <Image
            src="/images/sanctuary-city-main.webp"
            alt="Sanctuary City by Martyna Majok - May 2026"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
            priority
          />
        </div>
      </ShowMediaSection>

      <ShowDateVenue 
        dates={<>May 7<sup className="text-xs">th</sup> - May 17<sup className="text-xs">th</sup>, 2026</>}
        venue="Venue TBD" 
      />

      {/* Subtle divider */}
      <div className="w-24 h-px bg-accent/30 mx-auto my-6"></div>

      {/* MOBILE LAYOUT */}
      <section className="py-16 bg-black md:hidden">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <ShowContentSection title="About Sanctuary City">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                In post-9/11 Newark, NJ, two teenagers who were brought to America as children become one another's sanctuaries from harsh circumstances. When G becomes naturalized, she and B hatch a plan so that he may legally remain in the country and pursue the future he imagines for his life. But as time hurtles on and complications mount, the young friends find that this plan challenges and fractures the closest relationship either has ever had.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Written by Pulitzer Prize-winning playwright Martyna Majok, <em>Sanctuary City</em> is a powerful exploration of friendship, love, and what it means to find home in an uncertain world.
              </p>
            </ShowContentSection>

            {/* Production Details - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl mb-6">Production Details</h3>
              <div className="bg-gray-900/50 p-8 rounded-lg shadow-lg shadow-black/20 backdrop-blur-sm">
                {productionDetailsContent}
              </div>
            </motion.div>

            {/* Audition Announcement - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/10 to-black/30 p-8 rounded-lg border border-accent/30"
            >
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                  Auditions: February 15th, 2026
                </h3>
                
                <div className="text-left bg-black/30 p-6 rounded-lg mb-6 space-y-3">
                  <p className="text-gray-300">
                    <strong className="text-white">When:</strong> Sunday, February 15th, 2026
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Where:</strong> Xanadu (5015 Bond St, Boise, Idaho 83706)
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">What to Prepare:</strong> 60-90 second contemporary monologue
                  </p>
                  <p className="text-gray-300 text-sm">
                    Each audition slot is 10 minutes. Sides will be provided. Headshots and resumes appreciated but not required.
                  </p>
                </div>

                <p className="text-gray-300 text-base mb-4">
                  We're casting for <em>Sanctuary City</em> and future Little Branch Theater productions.
                </p>
              </div>

              <div className="text-center">
                <motion.a
                  href="https://www.signupgenius.com/go/10C044EA8AE23AAF8C16-61616113-sanctuary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent hover:bg-accent/90 text-black font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg shadow-accent/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up for Auditions
                </motion.a>
                <p className="text-gray-400 text-sm mt-4">
                  Questions? <a href="mailto:info@littlebranchtheater.org" className="text-accent hover:underline">info@littlebranchtheater.org</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DESKTOP LAYOUT */}
      <section className="py-16 bg-black hidden md:block">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content - Left 2 Columns */}
            <div className="md:col-span-2 space-y-16">
              <ShowContentSection title="About Sanctuary City">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  In post-9/11 Newark, NJ, two teenagers who were brought to America as children become one another's sanctuaries from harsh circumstances. When G becomes naturalized, she and B hatch a plan so that he may legally remain in the country and pursue the future he imagines for his life. But as time hurtles on and complications mount, the young friends find that this plan challenges and fractures the closest relationship either has ever had.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Written by Pulitzer Prize-winning playwright Martyna Majok, <em>Sanctuary City</em> is a powerful exploration of friendship, love, and what it means to find home in an uncertain world.
                </p>
              </ShowContentSection>

              {/* Audition Announcement - Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-accent/10 to-black/30 p-8 rounded-lg border border-accent/30"
              >
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                    Auditions: February 15th, 2026
                  </h3>
                  
                  <div className="text-left bg-black/30 p-6 rounded-lg mb-6 space-y-3">
                    <p className="text-gray-300">
                      <strong className="text-white">When:</strong> Sunday, February 15th, 2026
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Where:</strong> Xanadu (5015 Bond St, Boise, Idaho 83706)
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">What to Prepare:</strong> 60-90 second contemporary monologue
                    </p>
                    <p className="text-gray-300 text-sm">
                      Each audition slot is 10 minutes. Sides will be provided. Headshots and resumes appreciated but not required.
                    </p>
                  </div>

                  <p className="text-gray-300 text-base mb-4">
                    We're casting for <em>Sanctuary City</em> and future Little Branch Theater productions.
                  </p>
                </div>

                <div className="text-center">
                  <motion.a
                    href="https://www.signupgenius.com/go/10C044EA8AE23AAF8C16-61616113-sanctuary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent hover:bg-accent/90 text-black font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg shadow-accent/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign Up for Auditions
                  </motion.a>
                  <p className="text-gray-400 text-sm mt-4">
                    Questions? <a href="mailto:info@littlebranchtheater.org" className="text-accent hover:underline">info@littlebranchtheater.org</a>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Right Column */}
            <div>
              <ShowSidebar title="Production Details">
                {productionDetailsContent}
              </ShowSidebar>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}