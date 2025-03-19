"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    {
      id: 1,
      name: 'React',
      icon: 'fab fa-react', // Font Awesome icon class
      proficiency: 90, // Proficiency percentage
    },
    {
      id: 2,
      name: 'JavaScript',
      icon: 'fab fa-js-square', // Font Awesome icon class
      proficiency: 95,
    },
    {
      id: 3,
      name: 'Tailwind CSS',
      icon: 'fab fa-css3-alt', // Font Awesome icon class
      proficiency: 85,
    },
    {
      id: 4,
      name: 'Node.js',
      icon: 'fab fa-node-js', // Font Awesome icon class
      proficiency: 80,
    },
    {
      id: 5,
      name: 'Python',
      icon: 'fab fa-python', // Font Awesome icon class
      proficiency: 75,
    },
    {
      id: 6,
      name: 'Git',
      icon: 'fab fa-git-alt', // Font Awesome icon class
      proficiency: 90,
    },
  ];

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
          Skills
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of the skills I've developed over the years. I'm always learning and improving to stay ahead in the ever-evolving tech landscape.
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
                <i className={`${skill.icon} text-5xl text-blue-600`}></i>
              </div>

              {/* Skill Name */}
              <h3 className="text-2xl font-semibold text-center mb-4">{skill.name}</h3>

              {/* Proficiency Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1, delay: 0.6 }}
                ></motion.div>
              </div>

              {/* Proficiency Percentage */}
              <p className="text-sm text-gray-600 text-right mt-2">{skill.proficiency}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}