"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiServer, FiShield, FiZap, FiClock, FiCode, FiCloud, FiDatabase, FiTerminal } from 'react-icons/fi';
import { SiZapier, SiGooglecloud, SiUbuntu, SiLinux } from 'react-icons/si';
import { FaNetworkWired, FaRobot, FaWindows } from 'react-icons/fa';
import { VscAzureDevops } from "react-icons/vsc";

export default function Skills() {
  const skillCategories = [
    {
      title: "IT Support & Infrastructure",
      skills: [
        { name: "Remote Desktop Support", icon: <FiServer className="text-4xl text-blue-500" /> },
        { name: "Network Troubleshooting", icon: <FaNetworkWired className="text-4xl text-green-500" /> },
        { name: "System Administration", icon: <SiUbuntu className="text-4xl text-orange-500" /> },
        { name: "Windows/Linux Servers", icon: <FaWindows className="text-4xl text-blue-400" /> }
      ]
    },
    {
      title: "Automation & Integration",
      skills: [
        { name: "Zapier Automation", icon: <SiZapier className="text-4xl text-blue-400" /> },
        { name: "Python Scripting", icon: <FiTerminal className="text-4xl text-yellow-500" /> },
        { name: "AI Workflows", icon: <FaRobot className="text-4xl text-purple-500" /> },
        { name: "API Integrations", icon: <FiCode className="text-4xl text-green-400" /> }
      ]
    },
    {
      title: "Cloud & Security",
      skills: [
        { name: "AWS/Azure Setup", icon: <VscAzureDevops className="text-4xl text-blue-600" /> },
        { name: "Cybersecurity", icon: <FiShield className="text-4xl text-red-500" /> },
        { name: "Data Backup Solutions", icon: <FiDatabase className="text-4xl text-indigo-500" /> },
        { name: "Cloud Migration", icon: <FiCloud className="text-4xl text-sky-400" /> }
      ]
    },
    {
      title: "Productivity Tools",
      skills: [
        { name: "Helpdesk Systems", icon: <FiClock className="text-4xl text-amber-500" /> },
        { name: "CRM Configuration", icon: <SiGooglecloud className="text-4xl text-red-400" /> },
        { name: "Documentation", icon: <FiCode className="text-4xl text-gray-500" /> },
        { name: "24/7 Emergency Support", icon: <FiZap className="text-4xl text-green-600" /> }
      ]
    }
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
          Technical Expertise
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My toolkit for solving technical challenges and streamlining business operations
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
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="text-blue-500">{skill.icon}</div>
                    <span className="font-medium text-gray-700">{skill.name}</span>
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