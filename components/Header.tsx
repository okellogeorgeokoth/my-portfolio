"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FaSquareGithub, FaXTwitter } from 'react-icons/fa6';

export default function Header() {
  // State to manage the changing text
  const [text, setText] = useState("George Okello");

  // Array of phrases to cycle through
  const phrases = [
    "George Okello",
    "a Full Stack Developer",
    "a UI/UX Developer",
    "a Monitoring and Evaluation Officer",
    "a GIS Expert",
    "a Virtual Assistant",
    "a Technical Writer",
    "a natural Problem Solver",
    "a Coffee Lover",
  ];

  useEffect(() => {
    // Set up an interval to change the text every 5 seconds
    const interval = setInterval(() => {
      setText((prevText) => {
        const currentIndex = phrases.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % phrases.length;
        return phrases[nextIndex];
      });
    }, 5000); // Change text every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [phrases]);

  // Animation variants for the container
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3, // Delay before children animations start
        staggerChildren: 0.2, // Stagger animation between children
      },
    },
  };

  // Animation variants for each icon
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between p-4">
        {/* Header Text (Centered on Small Screens, Above Icons) */}
        <h1 className="text-xl font-bold mb-4 sm:mb-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          I am <span className="text-blue-600">{text}</span>
        </h1>

        {/* Left Side: First 4 Icons (Hidden on Small Screens) */}
        <motion.div
          className="hidden sm:flex space-x-4 mb-4 sm:mb-0"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="https://www.linkedin.com/in/george-o-a76513136/"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
          >
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-blue-600" />
          </motion.a>
          <motion.a
            href="https://github.com/okellogeorgeokoth"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
          >
            <FaSquareGithub className="text-xl cursor-pointer hover:text-gray-600" />
          </motion.a>
          <motion.a
            href="https://x.com/GeorgeTechElite"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
          >
            <FaXTwitter className="text-xl cursor-pointer hover:text-black" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
          >
            <BsInstagram className="text-xl cursor-pointer hover:text-pink-600" />
          </motion.a>
        </motion.div>

        {/* Right Side: WhatsApp and Mail Icons (Visible on All Screens) */}
        <motion.div
          className="flex space-x-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="https://wa.me/+254790987845"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
          >
            <FaWhatsapp className="text-xl cursor-pointer hover:text-green-500" />
          </motion.a>
          <motion.a
            href="mailto:okoth603@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
          >
            <FaEnvelope className="text-xl cursor-pointer hover:text-red-600" />
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
}