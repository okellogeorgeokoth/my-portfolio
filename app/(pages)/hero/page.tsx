"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiTrendingUp, FiShield } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiNodedotjs } from 'react-icons/si';

function Hero() {
  return (
    <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('/Banner1.jpg')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
        <motion.div 
          className="w-full max-w-2xl mx-auto text-center text-white py-12 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Profile Image */}
          <motion.div
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-blue-500 mx-auto mb-4 sm:mb-6 shadow-lg bg-cover bg-center"
            style={{ backgroundImage: "url('/Profile.jpg')" }}
            whileHover={{ scale: 1.1 }}
          />

          {/* Headline */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
          >
            <span className="block text-blue-400 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 font-semibold tracking-wide">Fullstack Developer</span>
            <span className="font-extrabold tracking-tight">Building <span className="text-blue-300">Data-Driven</span> Solutions</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg mb-5 sm:mb-6 max-w-md mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-white">George Okello</span> - <span className="text-blue-300 font-semibold">MERN/PERN Stack</span> specialist with expertise in health informatics and data automation.
          </motion.p>

          {/* Value Points */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-xs sm:max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: <SiReact className="text-blue-400 text-xl sm:text-2xl" />, text: "React/Next.js" },
              { icon: <SiNodedotjs className="text-green-400 text-xl sm:text-2xl" />, text: "Node.js" },
              { icon: <FiDatabase className="text-purple-400 text-xl sm:text-2xl" />, text: "Data Systems" },
              { icon: <FiTrendingUp className="text-orange-400 text-xl sm:text-2xl" />, text: "Health Tech" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-1 sm:gap-2 text-sm sm:text-base font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="/contactus"
              className="px-5 py-3 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-lg text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Build Your Project →
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              className="px-5 py-3 sm:px-6 sm:py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black rounded-lg font-semibold transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;