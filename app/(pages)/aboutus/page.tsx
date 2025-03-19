"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We are a team of passionate individuals dedicated to creating innovative solutions that make a difference. Our mission is to empower businesses and individuals through technology, design, and creativity.
        </motion.p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src="/path/to/team-member-1.jpg" // Replace with your image path
              alt="Team Member 1"
              width={128} // Set the width
              height={128} // Set the height
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Image
              src="/path/to/team-member-2.jpg" // Replace with your image path
              alt="Team Member 2"
              width={128} // Set the width
              height={128} // Set the height
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600">Lead Designer</p>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Image
              src="/path/to/team-member-3.jpg" // Replace with your image path
              alt="Team Member 3"
              width={128} // Set the width
              height={128} // Set the height
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
            <p className="text-gray-600">Senior Developer</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}