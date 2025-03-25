"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiServer, FiShield, FiZap, FiClock } from 'react-icons/fi';

export default function AboutMe() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-4xl text-black font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your 24/7 Technical Problem-Solver
        </motion.h2>

        {/* Section Description */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-600 text-center mb-12">
            Hi, I'm George Okello, a <span className="font-bold text-blue-600">Lead Technical Virtual Assistant</span> with expertise in IT support, automation, and cybersecurity. I don't just fix problems - I <span className="italic">prevent</span> them before they disrupt your business.
          </p>

          {/* Value Proposition Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <FiServer className="text-blue-500 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-black">IT Infrastructure Support</h3>
              </div>
              <p className="text-gray-600">
                Remote server management, network troubleshooting, and system optimization to keep your operations running smoothly.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <FiZap className="text-green-500 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-black">Workflow Automation</h3>
              </div>
              <p className="text-gray-600">
                Custom bots and scripts to automate repetitive tasks, saving you 15+ hours per week.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <FiShield className="text-purple-500 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-black">Cybersecurity Protection</h3>
              </div>
              <p className="text-gray-600">
                Implement security best practices to protect your business from threats and data breaches.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <FiClock className="text-orange-500 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-black">Always Available</h3>
              </div>
              <p className="text-gray-600">
                24/7 emergency support because tech issues don't wait for business hours.
              </p>
            </motion.div>
          </div>

          {/* Fun Fact/Call to Action */}
          <motion.div 
            className="mt-16 bg-blue-50 p-6 rounded-lg text-center"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
          >
            <p className="text-lg font-medium text-black">
              <span className="text-blue-600">Fun Fact:</span> I once debugged a client's e-commerce checkout system during their Black Friday sale - saved them $28,000 in lost revenue!
            </p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Let's Prevent Your Next Tech Emergency
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}