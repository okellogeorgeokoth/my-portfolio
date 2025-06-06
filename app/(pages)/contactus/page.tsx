"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert(response.data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl text-black font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a question or want to work together? Feel free to reach out!
          I&apos;ll get back to you as soon as possible.
        </motion.p>

        <div className="max-w-2xl mx-auto">
          <motion.form
            className="bg-white p-8 rounded-lg shadow-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-600 mb-4">Or connect with me on:</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/george-o-a76513136/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaLinkedinIn className="text-xl cursor-pointer hover:text-blue-600" />
              </a>
              <a
                href="https://wa.me/+254790987845"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaWhatsapp className="text-xl cursor-pointer hover:text-green-500" />
              </a>
              <a
                href="https://x.com/GeorgeTechElite"
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