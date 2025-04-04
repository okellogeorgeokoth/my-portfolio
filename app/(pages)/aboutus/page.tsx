"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiTrendingUp, FiShield, FiServer, FiLayers } from 'react-icons/fi';
import { SiReact, SiNextdotjs } from 'react-icons/si';

export default function Aboutus() {
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
          Fullstack Developer & Data Solutions Expert
        </motion.h2>

        {/* Section Description */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-600 text-center mb-12">
            Hi, I'm <span className="font-bold text-blue-600">George Okello</span>, a Fullstack Developer specializing in building data-driven web applications and health information systems. I bridge the gap between <span className="italic">software engineering</span> and <span className="italic">data analytics</span> to create solutions that drive real impact.
          </p>

          {/* Value Proposition Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <SiReact className="text-blue-500 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-black">Fullstack Development</h3>
              </div>
              <p className="text-gray-600">
                Building complete web applications with React, Next.js, Node.js, and modern databases like MongoDB and PostgreSQL.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <FiDatabase className="text-green-500 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-black">Data Systems</h3>
              </div>
              <p className="text-gray-600">
                Creating automated data pipelines, dashboards, and reporting tools for informed decision-making.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <FiTrendingUp className="text-purple-500 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-black">Health Informatics</h3>
              </div>
              <p className="text-gray-600">
                Specialized in KenyaEMR, DHIS2, and digital health solutions for NGOs and research organizations.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <FiShield className="text-orange-500 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-black">Technical Support</h3>
              </div>
              <p className="text-gray-600">
                IT infrastructure support, system troubleshooting, and user training for seamless operations.
              </p>
            </motion.div>
          </div>

          {/* Unique Value Proposition */}
          <motion.div 
            className="mt-16 bg-blue-50 p-6 rounded-lg"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
          >
            <h3 className="text-xl font-bold text-black mb-3 text-center">What Makes My Approach Different</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start">
                <FiServer className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700"><span className="font-semibold">Backend-first thinking:</span> I build APIs and data systems that scale before polishing the frontend.</p>
              </div>
              <div className="flex items-start">
                <FiLayers className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700"><span className="font-semibold">NGO experience:</span> I understand the unique tech challenges in humanitarian and health sectors.</p>
              </div>
              <div className="flex items-start">
                <SiNextdotjs className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700"><span className="font-semibold">Modern stack:</span> Using cutting-edge tools like Next.js 15 and Sanity CMS for future-proof solutions.</p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Let's Build Your Digital Solution
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}