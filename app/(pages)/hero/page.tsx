"use client";
import React, { useState, ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiDatabase, FiTrendingUp, FiShield } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql } from 'react-icons/si';

type TabKey = 'development' | 'data' | 'health';

interface Tab {
  id: TabKey;
  label: string;
  icon: ReactElement;
}

interface Skill {
  icon: ReactElement;
  name: string;
}

interface TabContent {
  title: string;
  description: string;
  skills: Skill[];
}

function Hero() {
  const [activeTab, setActiveTab] = useState<TabKey>('development');

  const tabs: Tab[] = [
    { id: 'development', label: 'Development', icon: <FiCode /> },
    { id: 'data', label: 'Data', icon: <FiDatabase /> },
    { id: 'health', label: 'Health Tech', icon: <FiTrendingUp /> }
  ];

  const tabContent: Record<TabKey, TabContent> = {
    development: {
      title: "Fullstack Development",
      description: "Building modern web applications with React, Next.js, and Node.js",
      skills: [
        { icon: <SiReact className="text-blue-500" />, name: "React/Next.js" },
        { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
        { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
        { icon: <SiPostgresql className="text-blue-600" />, name: "PostgreSQL" }
      ]
    },
    data: {
      title: "Data Solutions",
      description: "Creating powerful data pipelines and visualization dashboards",
      skills: [
        { icon: <FiDatabase className="text-purple-500" />, name: "SQL/NoSQL" },
        { icon: <FiTrendingUp className="text-red-500" />, name: "Power BI" },
        { icon: <FiCode className="text-orange-500" />, name: "Python" },
        { icon: <FiDatabase className="text-yellow-500" />, name: "Kobo Toolbox" }
      ]
    },
    health: {
      title: "Health Informatics",
      description: "Specialized solutions for healthcare and NGO sectors",
      skills: [
        { icon: <FiShield className="text-blue-400" />, name: "KenyaEMR" },
        { icon: <FiTrendingUp className="text-green-400" />, name: "DHIS2" },
        { icon: <FiDatabase className="text-purple-400" />, name: "M&E Systems" },
        { icon: <FiCode className="text-red-400" />, name: "HIV/STI Reporting" }
      ]
    }
  };
  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-800 opacity-20"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full w-full flex items-center px-4 md:px-8 lg:px-12">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content - Main Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Headline - Title Only (Name moved to right) */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
                Fullstack Developer
              </span>
            </motion.h1>

            {/* Tab Navigation */}
            <motion.div 
              className="flex justify-center md:justify-start mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="inline-flex bg-gray-800 rounded-full p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-colors ${
                      activeTab === tab.id 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-10"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {tabContent[activeTab].title}
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  {tabContent[activeTab].description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {tabContent[activeTab].skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center bg-gray-800 bg-opacity-50 px-4 py-2 rounded-lg backdrop-blur-sm"
                      whileHover={{ y: -5 }}
                    >
                      <div className="mr-2">{skill.icon}</div>
                      <span className="text-white font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="/contactus"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lets Build your Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                className="px-6 py-3 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-semibold transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Image and Name (hidden on small screens) */}
          <div className="hidden md:flex flex-col items-center justify-center w-1/2">
            <motion.div
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl bg-cover bg-center mb-4"
              style={{ backgroundImage: "url('/Profile.jpg')" }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            />
            <motion.h2 
              className="text-3xl text-blue-300 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              George Okello
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;