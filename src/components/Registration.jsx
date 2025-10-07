import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Registration() {
  const googleFormUrl = 'https://forms.gle/r2ShWznUQqoR1VgT7'; // Replace with your Google Form URL

  const popUpVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        delay: 0.5 
      }
    }
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-l from-neon-cyan to-neon-purple rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black neon-text mb-4">READY TO JOIN VORTEX 2K25?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Register now for the Hackathon and be part of an unforgettable journey of learning, networking, and celebration.
          </p>
          {/* Pop-up Animation for On-Spot Registration */}
          <motion.div
            variants={popUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-cyan text-white rounded-full font-bold text-lg shadow-lg shadow-neon-purple/50 neon-text"
          >
            On-Spot Registration is Available
          </motion.div>
        </div>
        {/* Fee Box */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-8 rounded-2xl text-center max-w-md w-full border border-neon-cyan/30 hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold neon-text mb-4">Registration Fee</h3>
            <p className="text-5xl font-black neon-cyan mb-2">₹250</p>
            <p className="text-white/70">Per Participant</p>
            <p className="text-white/70">Team must contain at least 1 member to 3 member participants</p>
          </div>
        </div>
        {/* CTA Box with Google Form Link */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 rounded-2xl border border-neon-cyan/30 text-center">
            <h3 className="text-2xl font-bold neon-text mb-4">Event Registration</h3>
            <p className="text-white/80 mb-6">Complete the form to secure your spot at Vortex 2K25.</p>
            <p className="text-white/80 mb-6">Food will be provide by us</p>
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              Fill Registration Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
