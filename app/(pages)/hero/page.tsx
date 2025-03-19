"use client"
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <motion.div
          className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mx-auto mb-6"
          style={{ backgroundImage: "url('/path/to/your/profile-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          whileHover={{ scale: 1.1 }}
        ></motion.div>

        {/* Title and Subtitle */}
        <motion.h1 
          className="text-6xl font-bold mb-4"
          whileHover={{ scale: 1.05 }}
        >
          Hi, I'm [Your Name]
        </motion.h1>
        <motion.p 
          className="text-xl mb-8"
          whileHover={{ scale: 1.05 }}
        >
          A passionate [Your Profession] building innovative solutions.
        </motion.p>

        {/* Resume Button */}
        <motion.a 
          href="/path/to/your/resume.pdf" // Replace with the actual path to your resume
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Hero;