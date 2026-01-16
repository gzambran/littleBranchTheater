"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

interface AuditionCalloutProps {
    className?: string;
}

export default function AuditionCallout({ className = "" }: AuditionCalloutProps) {
    return (
        <div className={`max-w-4xl mx-auto ${className}`}>
            <SpotlightCard
                className="shadow-glow-accent border-accent/30"
                spotlightColor="rgba(166, 226, 46, 0.25)"
            >
                <div className="bg-gradient-to-br from-accent/10 to-black-deep/50 p-8 md:p-12 rounded-lg">
                    <div className="text-center">
                        <h2 className="font-display text-2xl md:text-4xl text-white mb-6">
                            Auditions: February 15th, 2026
                        </h2>

                        <div className="bg-black-deep/50 p-6 rounded-lg mb-8 max-w-2xl mx-auto shadow-inner-dark border border-white/5 text-left md:text-center">
                            <p className="text-gray-200 text-lg mb-3">
                                <strong className="text-white">When:</strong> Sunday, February 15th, 2026
                            </p>
                            <p className="text-gray-200 text-lg mb-3">
                                <strong className="text-white">Where:</strong> Xanadu (5015 Bond St, Boise, Idaho 83706)
                            </p>
                            <p className="text-gray-200 text-lg">
                                <strong className="text-white">Prepare:</strong> 60-90 second contemporary monologue
                            </p>
                            <p className="text-gray-400 text-sm mt-4 text-center">
                                Each audition slot is 10 minutes. Sides will be provided. Headshots and resumes appreciated but not required.
                            </p>
                        </div>

                        <p className="text-gray-300 text-base md:text-lg mb-6">
                            Casting for <em>Sanctuary City</em> and future Little Branch Theater productions.
                        </p>

                        <motion.a
                            href="https://www.signupgenius.com/go/10C044EA8AE23AAF8C16-61616113-sanctuary"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-accent hover:bg-accent/90 text-black font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-glow-accent-strong text-lg tracking-wide transform hover:scale-105"
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
            </SpotlightCard>
        </div>
    );
}
