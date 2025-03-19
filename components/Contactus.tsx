"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import {  FaXTwitter } from 'react-icons/fa6';

export default function ContactUs() {
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
          Contact Us
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a question or want to work together? Feel free to reach out! I&apos;ll get back to you as soon as possible.
        </motion.p>

        {/* Contact Form and Social Media Links */}
        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <motion.form
            className="bg-white p-8 rounded-lg shadow-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5} // Ensure `rows` is a number, not a string
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your Message"
                required
                ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </motion.form>

          {/* Social Media Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-600 mb-4">Or connect with me on:</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/your-profile" // Replace with your LinkedIn profile
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaLinkedinIn className="text-xl cursor-pointer hover:text-blue-600" />
              </a>
              <a
                href="https://wa.me/yourphonenumber" // Replace with your GitHub profile
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
               <FaWhatsapp className="text-xl cursor-pointer hover:text-green-500" />
              </a>
              <a
                href="https://twitter.com/your-profile" // Replace with your Twitter profile
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaXTwitter className="text-xl cursor-pointer hover:text-black" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}