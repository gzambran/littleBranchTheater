"use client"

import React from 'react'
import { motion } from 'framer-motion'
import PageHeader, { SiteBlurb } from '@/components/PageHeader'

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Page Header */}
      <PageHeader>
        <SiteBlurb>
          Join the <span className="text-accent font-normal">journey</span> and be part of what&apos;s <span className="text-accent font-normal">next</span>.
        </SiteBlurb>
      </PageHeader>

      {/* Main Content */}
      <section className="pt-8 pb-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Two Column Layout for Desktop, Stack on Mobile */}
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Collaborate With Us Section - No animation on the card itself */}
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-lg border border-gray-800 hover:border-accent/20 transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h2 className="font-display text-3xl text-white">Collaborate With Us</h2>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  We're building a network of passionate artists and theater lovers. Whether you're interested in acting, directing, designing, or volunteering, we want to connect with you.
                </p>
                
                <p className="text-gray-300 mb-8">
                  Fill out our artist interest form and we'll keep you in the loop about upcoming opportunities that match your interests.
                </p>
                
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfE2Abl5mHHJdjo1jflpapaJSyYC1gaoCC0pAJweyXuzoT6pg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent hover:bg-accent/90 text-black font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg shadow-accent/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Our Artist Network
                </motion.a>
              </div>

              {/* Support Little Branch Section - No animation on the card itself */}
              <div className="bg-gradient-to-br from-accent/10 to-black/50 p-8 rounded-lg border border-accent/30 hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h2 className="font-display text-3xl text-white">Support Little Branch</h2>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Your support helps us pay artists, secure venues, and bring stories that matter to our community.
                </p>
                
                <div className="bg-black/30 p-4 rounded-lg border-l-2 border-accent/50 mb-8">
                  <p className="text-gray-400 text-sm italic">
                    Please note: Little Branch Theater is not a 501(c)(3) non-profit, so donations are not tax-deductible at this time – but they go directly toward supporting our artists and productions.
                  </p>
                </div>
                
                <motion.form
                  action="https://www.paypal.com/ncp/payment/65T6297LRLSQ2"
                  method="post"
                  target="_blank"
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    type="submit"
                    className="bg-accent hover:bg-accent/90 text-black font-bold py-3 px-8 rounded-full transition-all duration-200 shadow-lg shadow-accent/20"
                  >
                    Support Our Work
                  </button>
                </motion.form>
              </div>
            </div>

            {/* Additional Ways to Connect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <h3 className="font-display text-2xl text-white mb-8">More Ways to Connect</h3>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Newsletter */}
                <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all">
                  <div className="text-accent mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-medium mb-2">Stay Updated</h4>
                  <p className="text-gray-400 text-sm">Get news about upcoming shows and events</p>
                </div>

                {/* Social Media */}
                <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all">
                  <div className="text-accent mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-medium mb-2">Follow Us</h4>
                  <p className="text-gray-400 text-sm">Join the conversation on social media</p>
                </div>

                {/* Attend Shows */}
                <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all">
                  <div className="text-accent mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-medium mb-2">Attend Shows</h4>
                  <p className="text-gray-400 text-sm">The best way to support is to experience our work</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}