"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with React and Tailwind CSS.',
      image: '/path/to/project-1.jpg', // Replace with your image path
      link: '#', // Replace with your project link
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'An e-commerce platform with seamless user experience.',
      image: '/path/to/project-2.jpg', // Replace with your image path
      link: '#', // Replace with your project link
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A mobile app for productivity and task management.',
      image: '/path/to/project-3.jpg', // Replace with your image path
      link: '#', // Replace with your project link
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
          Projects
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore some of the projects I&apos;ve worked on. Each project showcases my skills in design, development, and problem-solving.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}