"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiCode, FiLayers, FiTrendingUp, FiSmartphone, FiServer, FiShield, FiCloud } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql, SiPython } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: "Fullstack Development",
      description: "Building complete web applications from front to back",
      skills: [
        { name: "React & Next.js", icon: <SiReact className="text-4xl text-blue-500" />, description: "Modern, responsive user interfaces" },
        { name: "Node.js Backend", icon: <SiNodedotjs className="text-4xl text-green-500" />, description: "Server-side logic and APIs" },
        { name: "Database Systems", icon: <FiDatabase className="text-4xl text-orange-500" />, description: "MongoDB, PostgreSQL, cloud databases" },
        { name: "Sanity CMS", icon: <FiLayers className="text-4xl text-purple-500" />, description: "Content management solutions" }
      ]
    },
    {
      title: "Data & Automation",
      description: "Transforming raw data into actionable insights",
      skills: [
        { name: "Data Dashboards", icon: <FiTrendingUp className="text-4xl text-red-500" />, description: "Interactive reports with Power BI" },
        { name: "Python Scripting", icon: <SiPython className="text-4xl text-yellow-500" />, description: "Automate repetitive tasks" },
        { name: "Kobo Toolbox", icon: <FiSmartphone className="text-4xl text-green-400" />, description: "Mobile data collection systems" },
        { name: "Data Cleaning", icon: <FiDatabase className="text-4xl text-indigo-500" />, description: "Ensure data accuracy and quality" }
      ]
    },
    {
      title: "Health Informatics",
      description: "Technology solutions for healthcare systems",
      skills: [
        { name: "KenyaEMR", icon: <FiServer className="text-4xl text-blue-600" />, description: "Electronic medical records" },
        { name: "DHIS2 Integration", icon: <FiCloud className="text-4xl text-sky-400" />, description: "National health reporting" },
        { name: "HIV/STI Reporting", icon: <FiShield className="text-4xl text-red-500" />, description: "Public health data systems" },
        { name: "M&E Systems", icon: <FiTrendingUp className="text-4xl text-amber-500" />, description: "Monitoring & evaluation tools" }
      ]
    },
    {
      title: "Technical Support",
      description: "Keeping systems running smoothly",
      skills: [
        { name: "IT Troubleshooting", icon: <FiServer className="text-4xl text-gray-500" />, description: "Hardware & software issues" },
        { name: "Web Hosting", icon: <FiCloud className="text-4xl text-blue-400" />, description: "Domain setup & management" },
        { name: "Technical Training", icon: <FiCode className="text-4xl text-green-600" />, description: "User guides & documentation" },
        { name: "Linux Systems", icon: <FiServer className="text-4xl text-orange-400" />, description: "Server administration" }
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-4xl text-black font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills & Expertise
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I build technology solutions that solve real-world problems, with a focus on healthcare, data systems, and business automation.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{category.title}</h3>
              <p className="text-gray-500 mb-4">{category.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex flex-col p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div>{skill.icon}</div>
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </div>
                    <p className="text-sm text-gray-500 pl-11">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}