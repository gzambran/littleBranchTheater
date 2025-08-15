"use client"

import React from 'react'
import { motion } from 'framer-motion'
import PageHeader, { SiteBlurb } from '@/components/PageHeader'
import Newsletter from '@/components/newsletter/Newsletter'
import '@/components/newsletter/newsletter.css'

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
              
              {/* Collaborate With Us Section */}
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
                
                <div className="text-center">
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
              </div>

              {/* Support Little Branch Section */}
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
                
                <div className="text-center">
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
            </div>

            {/* Newsletter Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-br from-gray-900/30 to-black/30 p-8 rounded-lg border border-gray-800"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-white mb-3">Stay Updated</h3>
                <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                  Get news about upcoming shows, special events, and opportunities to get involved with Little Branch Theater.
                </p>
              </div>

              <div className="flex justify-center">
                <Newsletter />
              </div>
            </motion.div>

            {/* Additional Ways to Connect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <h3 className="font-display text-2xl text-white mb-8">Follow Us on Social Media</h3>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/littlebranchtheater"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 hover:border-accent/30 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-accent mb-3 group-hover:scale-110 transition-transform">
                    <svg className="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </div>
                  <h4 className="text-white font-medium mb-2">Instagram</h4>
                  <p className="text-gray-400 text-sm">@littlebranchtheater</p>
                </motion.a>

                {/* Facebook */}
                <motion.a
                  href="https://www.facebook.com/LittleBranchTheater"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 hover:border-accent/30 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-accent mb-3 group-hover:scale-110 transition-transform">
                    <svg className="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <h4 className="text-white font-medium mb-2">Facebook</h4>
                  <p className="text-gray-400 text-sm">Little Branch Theater</p>
                </motion.a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}