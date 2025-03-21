"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJsSquare, FaCss3Alt, FaNodeJs, FaPython, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiStripe, SiPaypal } from 'react-icons/si';
import { SiSanity } from 'react-icons/si';
import { GiSpiderWeb } from 'react-icons/gi';

export default function Skills() {
  const skills = [
    {
      id: 1,
      name: 'React',
      icon: <FaReact className="text-5xl text-blue-600" />,
    },
    {
      id: 2,
      name: 'JavaScript',
      icon: <FaJsSquare className="text-5xl text-yellow-400" />,
    },
    {
      id: 3,
      name: 'Tailwind CSS',
      icon: <FaCss3Alt className="text-5xl text-blue-400" />,
    },
    {
      id: 4,
      name: 'Node.js',
      icon: <FaNodeJs className="text-5xl text-green-600" />,
    },
    {
      id: 5,
      name: 'Python',
      icon: <FaPython className="text-5xl text-blue-500" />,
    },
    {
      id: 6,
      name: 'Git',
      icon: <FaGitAlt className="text-5xl text-red-600" />,
    },
    {
      id: 7,
      name: 'Next.js',
      icon: <SiNextdotjs className="text-5xl text-black" />,
    },
    {
      id: 8,
      name: 'Daraja API',
      icon: <FaCode className="text-5xl text-green-700" />, // Generic API icon
    },
    {
      id: 9,
      name: 'Sanity',
      icon: <SiSanity className="text-5xl text-pink-600" />,
    },
    {
      id: 10,
      name: 'MongoDB',
      icon: <SiMongodb className="text-5xl text-green-500" />,
    },
    {
      id: 11,
      name: 'Stripe',
      icon: <SiStripe className="text-5xl text-blue-500" />,
    },
    {
      id: 12,
      name: 'PayPal',
      icon: <SiPaypal className="text-5xl text-blue-700" />,
    },
    {
      id: 13,
      name: 'Web Scraping',
      icon: <GiSpiderWeb className="text-5xl text-orange-500" />,
    },
  ];

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
          Skills
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of the skills I&apos;ve developed over the years. I&apos;m always learning and improving to stay ahead in the ever-evolving tech landscape.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Skill Icon */}
              <div className="text-center mb-4">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-2xl font-semibold text-center mb-4 text-black">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}