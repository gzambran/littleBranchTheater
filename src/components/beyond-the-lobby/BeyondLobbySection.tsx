import { motion } from 'framer-motion';
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
  marginBottom?: string;
}

export default function BeyondLobbySection({ 
  id, 
  title, 
  description, 
  children,
  marginBottom = "mb-16"
}: SectionProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={`${marginBottom} scroll-mt-8`}
    >
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl text-[#D4A017] mb-4">{title}</h2>
        <p className="text-[#333333] max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      
      {children}
    </motion.div>
  );
}