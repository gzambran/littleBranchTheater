"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import EventStructuredData from "@/components/EventStructuredData";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import PageHeader, { SiteBlurb } from "@/components/PageHeader";
import ShowMediaSection from "@/components/show/ShowMediaSection";
import ShowDateVenue from "@/components/show/ShowDateVenue";
import ShowContentSection from "@/components/show/ShowContentSection";
import ShowSidebar from "@/components/show/ShowSidebar";
import SocialShare from "@/components/show/SocialShare";

export const revalidate = 3600;

export default function HoneyBrownEyesPage() {
  // Performance Details content (shared between mobile and desktop)
  const performanceDetailsContent = (
    <div className="space-y-6 text-gray-300">
      <div>
        <h4 className="font-medium mb-2">Preview Night</h4>
        <p>Thursday, May 22, 2025</p>
        <p className="text-sm">Doors: 7:00 PM • Show: 8:00 PM</p>
      </div>
      <div>
        <h4 className="font-medium mb-2">Opening Night</h4>
        <p>Friday, May 23, 2025</p>
        <p className="text-sm">Doors: 7:00 PM • Show: 8:00 PM</p>
      </div>
      <div>
        <h4 className="font-medium mb-2">Additional Performances</h4>
        <ul className="space-y-2 text-sm">
          <li>Saturday, May 24 • 8:00 PM</li>
          <li>Thursday, May 29 • 8:00 PM</li>
          <li>Friday, May 30 • 8:00 PM</li>
          <li>Saturday, May 31 • 8:00 PM</li>
          <li>Sunday, June 1 • 2:00 PM (Matinee)</li>
        </ul>
      </div>
      <div>
        <h4 className="font-medium mb-2">Venue</h4>
        <p>Visual Arts Collective</p>
        <p className="text-sm">Garden City, Idaho</p>
      </div>

      <SocialShare
        shareUrl="https://www.littlebranchtheater.org/productions/honey-brown-eyes"
        shareText="Honey Brown Eyes at Little Branch Theater"
      />
    </div>
  );

  // Sponsors grid (shared between mobile and desktop)
  const sponsorsGrid = (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <a
        href="https://alleyrep.org"
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center h-32 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300 shadow-md shadow-black/20"
      >
        <Image
          src="/images/sponsors/alley-rep-logo.svg"
          alt="Alley Rep"
          width={200}
          height={100}
          className="max-w-full max-h-full object-contain"
        />
      </a>
      <a
        href="https://visualartscollective.com"
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center h-32 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300 shadow-md shadow-black/20"
      >
        <Image
          src="/images/sponsors/visual-arts-collective-logo.svg"
          alt="Visual Arts Collective"
          width={200}
          height={100}
          className="max-w-full max-h-full object-contain"
        />
      </a>
      <a
        href="https://arts.idaho.gov"
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center h-32 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300 shadow-md shadow-black/20"
      >
        <Image
          src="/images/sponsors/arts-idaho-logo.jpg"
          alt="Arts Idaho"
          width={200}
          height={100}
          className="max-w-full max-h-full object-contain"
        />
      </a>
      <a
        href="https://www.puffinfoundation.org"
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center h-32 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300 shadow-md shadow-black/20"
      >
        <Image
          src="/images/sponsors/puffin-foundation-logo.jpeg"
          alt="Puffin Foundation"
          width={200}
          height={100}
          className="max-w-full max-h-full object-contain"
        />
      </a>
    </div>
  );

  // Cast & Crew content (shared between mobile and desktop)
  const castCrewContent = (
    <div className="space-y-4 text-gray-300">
      <div className="grid gap-3">
        <div>
          <span className="font-medium">Amela Karadža</span> - Director/Alma
        </div>
        <div>
          <span className="font-medium">John Wicks</span> - Assistant Director
        </div>
        <div>
          <span className="font-medium">Trevor Ferguson</span> - Dragan
        </div>
        <div>
          <span className="font-medium">Mirza Šuman</span> - Zlata
        </div>
        <div>
          <span className="font-medium">Majda Zahić</span> - Radio Broadcaster
        </div>
        <div>
          <span className="font-medium">Terri Dillion</span> - Jovanka
        </div>
        <div>
          <span className="font-medium">Francisco Negron</span> - Denis
        </div>
        <div>
          <span className="font-medium">Jovani Zambrano</span> - Sound
          Designer/Branko
        </div>
        <div>
          <span className="font-medium">Lexi Johns</span> - Stage Manager
        </div>
        <div>
          <span className="font-medium">Ellie Wirth</span> - Prop Designer/ASM
        </div>
        <div>
          <span className="font-medium">Anthony Parry</span> - Musician/Composer
        </div>
        <div>
          <span className="font-medium">Mike Ward</span> - Musician/Composer
        </div>
        <div>
          <span className="font-medium">Lauryn Mederios</span> -
          Musician/Composer
        </div>
        <div>
          <span className="font-medium">Sabina Selimović</span> - Singer
        </div>
      </div>
    </div>
  );

  return (
    <>
      <EventStructuredData
        name="Honey Brown Eyes"
        description="Bosnia 1992: In two kitchens, two soldiers recover a little of what they've lost during the war. A Serbian paramilitary soldier must face the consequences of his own brutality, while a Bosnian resistance fighter, crippled by the limits of his own courage, seeks refuge with a kindred soul."
        startDate="2025-05-23T20:00:00-06:00"
        endDate="2025-06-01T14:00:00-06:00"
        location={{
          name: "Visual Arts Collective",
          address: "Garden City, Idaho",
        }}
        ticketUrl="https://alleyreptheater.thundertix.com/events/236398"
        doorTime="2025-05-23T19:00:00-06:00"
        performer="Little Branch Theater"
        image="https://www.littlebranchtheater.org/images/honeybrowneyes.webp"
      />

      <div className="min-h-screen bg-black-warm">
        {/* PageHeader Component with Show Description */}
        <PageHeader>
          <SiteBlurb>
            Experience the{" "}
            <span className="text-accent font-normal">powerful</span> story of
            two former friends divided by war, brought to life through our{" "}
            <span className="text-accent font-normal">partnership</span> with
            Alley Repertory Theater.
          </SiteBlurb>
        </PageHeader>

        {/* Trailer Section */}
        <ShowMediaSection>
          <YouTubeEmbed
            videoId="MSlH4x8vMTM"
            title="Honey Brown Eyes Trailer"
            aspectRatio="16:9"
          />
        </ShowMediaSection>

        <ShowDateVenue
          dates="May 22 - June 1, 2025"
          venue="Visual Arts Collective, Garden City"
        />

        {/* Subtle divider */}
        <div className="w-24 h-px bg-accent/30 mx-auto my-6"></div>

        {/* MOBILE LAYOUT */}
        <section className="py-16 bg-black md:hidden">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              <ShowContentSection title="Reviews" variant="gray">
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-gray-300 italic text-lg mb-2">
                      "The feeling of the play is of an atomic explosion at the
                      microscopic level."
                    </p>
                    <p className="text-accent text-sm">
                      — Kemper Corner Reviews
                      <a
                        href="https://www.kempercornerreviews.com/post/honey-brown-eyes"
                        className="ml-2 underline hover:text-accent/80 transition-colors"
                      >
                        (Read Full Review)
                      </a>
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-300 italic text-lg mb-2">
                      "An explosive entrance for Little Branch."
                    </p>
                    <p className="text-accent text-sm">— The Spot</p>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-300 italic text-lg mb-2">
                      "It was an incredible show."
                    </p>
                    <p className="text-accent text-sm">— Stagecoach Theatre</p>
                  </div>
                  <div className="pt-2">
                    <div className="text-center">
                      <p className="text-gray-300 italic text-lg mb-2">
                        "Unpredictable and completely satisfying."
                      </p>
                      <p className="text-accent text-sm">— From Our Audience</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-300 italic text-lg mb-2">
                      "A beautiful, heart-wrenching production."
                    </p>
                    <p className="text-accent text-sm">— From Our Audience</p>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-300 italic text-lg mb-2">
                      "Such an amazing play–could not stop talking about it."
                    </p>
                    <p className="text-accent text-sm">— From Our Audience</p>
                  </div>
                </div>
              </ShowContentSection>

              <ShowContentSection title="About the Show">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  In partnership with Alley Repertory Theater, Little Branch, a
                  new theater company founded by Amela Karadza and Jovani
                  Zambrano, brings you <em>Honey Brown Eyes</em> by{" "}
                  <em>Stefanie Zadravec</em>.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Bosnia 1992: In two kitchens, two soldiers recover a little of
                  what they've lost during the war. A Serbian paramilitary
                  soldier must face the consequences of his own brutality, while
                  a Bosnian resistance fighter, crippled by the limits of his
                  own courage, seeks refuge with a kindred soul.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The story of two young men, once friends, and the connection
                  that will tie them forever; their love of music and the
                  unimaginable horror of war.
                </p>
              </ShowContentSection>

              <ShowContentSection title="Cast & Crew">
                {castCrewContent}
              </ShowContentSection>

              {/* Performance Details - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display text-2xl mb-6">
                  Performance Details
                </h3>
                <div className="bg-black-deep/50 p-8 rounded-lg shadow-lg shadow-black/20 backdrop-blur-sm">
                  {performanceDetailsContent}
                </div>
              </motion.div>

              {/* Our Supporters - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl mb-6">Our Supporters</h2>
                {sponsorsGrid}
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
                {/* DESKTOP LAYOUT - Reviews Section */}
                <ShowContentSection title="Reviews" variant="gray">
                  <div className="space-y-6">
                    {/* Theater Community Quotes - with attribution */}
                    <div className="text-center">
                      <p className="text-gray-300 italic text-lg mb-2">
                        "The feeling of the play is of an atomic explosion at
                        the microscopic level."
                      </p>
                      <p className="text-accent text-sm">
                        — Kemper Corner Reviews
                        <a
                          href="https://www.kempercornerreviews.com/post/honey-brown-eyes"
                          className="ml-2 underline hover:text-accent/80 transition-colors"
                        >
                          (Read Full Review)
                        </a>
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-300 italic text-lg mb-2">
                        "An explosive entrance for Little Branch."
                      </p>
                      <p className="text-accent text-sm">— The Spot</p>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-300 italic text-lg mb-2">
                        "It was an incredible show."
                      </p>
                      <p className="text-accent text-sm">
                        — Stagecoach Theatre
                      </p>
                    </div>

                    <div className="pt-2">
                      <div className="text-center">
                        <p className="text-gray-300 italic text-lg mb-2">
                          "Unpredictable and completely satisfying."
                        </p>
                        <p className="text-accent text-sm">
                          — From Our Audience
                        </p>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-300 italic text-lg mb-2">
                        "A beautiful, heart-wrenching production."
                      </p>
                      <p className="text-accent text-sm">— From Our Audience</p>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-300 italic text-lg mb-2">
                        "Such an amazing play–could not stop talking about it."
                      </p>
                      <p className="text-accent text-sm">— From Our Audience</p>
                    </div>
                  </div>
                </ShowContentSection>

                <ShowContentSection title="About the Show" delay={0.2}>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    In partnership with Alley Repertory Theater, Little Branch,
                    a new theater company founded by Amela Karadza and Jovani
                    Zambrano, brings you <em>Honey Brown Eyes</em> by{" "}
                    <em>Stefanie Zadravec</em>.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Bosnia 1992: In two kitchens, two soldiers recover a little
                    of what they've lost during the war. A Serbian paramilitary
                    soldier must face the consequences of his own brutality,
                    while a Bosnian resistance fighter, crippled by the limits
                    of his own courage, seeks refuge with a kindred soul.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    The story of two young men, once friends, and the connection
                    that will tie them forever; their love of music and the
                    unimaginable horror of war.
                  </p>
                </ShowContentSection>

                <ShowContentSection title="Cast & Crew" delay={0.2}>
                  {castCrewContent}
                </ShowContentSection>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-3xl mb-6">Our Supporters</h2>
                  {sponsorsGrid}
                </motion.div>
              </div>

              {/* Sidebar - Right Column */}
              <div>
                <ShowSidebar title="Performance Details">
                  {performanceDetailsContent}
                </ShowSidebar>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
