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
import Newsletter from "@/components/newsletter/Newsletter";
import "@/components/newsletter/newsletter.css";

export const revalidate = 3600;

export default function ComingSoonPage() {
  // Production Details content (shared between mobile and desktop)
  const productionDetailsContent = (
    <div className="space-y-6 text-gray-300">
      <div>
        <h4 className="font-medium mb-2">Play</h4>
        <p className="text-xl font-display">Sanctuary City</p>
        <p className="text-sm text-gray-400">by Martyna Majok</p>
      </div>
      <div>
        <h4 className="font-medium mb-2">Timeline</h4>
        <p>Spring 2026</p>
        <p className="text-sm">Exact dates to be announced</p>
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
        shareUrl="https://www.littlebranchtheater.org/productions/coming-soon"
        shareText="Little Branch Theater presents Sanctuary City by Martyna Majok - Spring 2026"
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
            src="/images/Sanctuary-city-promo.jpeg"
            alt="Sanctuary City by Martyna Majok - Coming Spring 2026"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
            priority
          />
        </div>
      </ShowMediaSection>

      <ShowDateVenue dates="Spring 2026" venue="Venue TBD" />

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

            {/* Stay Updated Section - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/30 to-black/30 p-8 rounded-lg border border-gray-800"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-white mb-3">Stay Updated</h3>
                <p className="text-gray-300 mb-6">
                  Be the first to know about auditions, show announcements, and ticket sales for <em>Sanctuary City</em>.
                </p>
              </div>

              <div className="flex justify-center">
                <Newsletter />
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

              {/* Stay Updated Section - Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/30 to-black/30 p-8 rounded-lg border border-gray-800"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-3">Stay Updated</h3>
                  <p className="text-gray-300 mb-6">
                    Be the first to know about auditions, show announcements, and ticket sales for <em>Sanctuary City</em>.
                  </p>
                </div>

                <div className="flex justify-center">
                  <Newsletter />
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