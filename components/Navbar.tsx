"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaProjectDiagram, FaCode, FaBlog, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-transparent md:bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <div className="hidden md:flex justify-center flex-1 space-x-8">
            <Link href="/" className="hover:text-gray-400 flex items-center">
              <FaHome className="mr-2" /> Home
            </Link>
            <Link href="/aboutus" className="hover:text-gray-400 flex items-center">
              <FaUser className="mr-2" /> About
            </Link>
            <Link href="/projects" className="hover:text-gray-400 flex items-center">
              <FaProjectDiagram className="mr-2" /> Projects
            </Link>
            <Link href="/skills" className="hover:text-gray-400 flex items-center">
              <FaCode className="mr-2" /> Skills
            </Link>
            <Link href="/blogs" className="hover:text-gray-400 flex items-center">
              <FaBlog className="mr-2" /> Blogs
            </Link>
            <Link href="/contactus" className="hover:text-gray-400 flex items-center">
              <FaEnvelope className="mr-2" /> Contact
            </Link>
          </div>
        </div>

        <div
          ref={menuRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white bg-opacity-90 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="mt-16 p-4">
            <button onClick={closeMenu} className="absolute top-4 right-4 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <Link href="/" className="block py-2 hover:text-gray-400 items-center">
              <FaHome className="mr-2" /> Home
            </Link>
            <Link href="/aboutus" className="block py-2 hover:text-gray-400 items-center">
              <FaUser className="mr-2" /> About
            </Link>
            <Link href="/projects" className="block py-2 hover:text-gray-400 items-center">
              <FaProjectDiagram className="mr-2" /> Projects
            </Link>
            <Link href="/skills" className="block py-2 hover:text-gray-400 items-center">
              <FaCode className="mr-2" /> Skills
            </Link>
            <Link href="/blogs" className="block py-2 hover:text-gray-400 items-center">
              <FaBlog className="mr-2" /> Blogs
            </Link>
            <Link href="/contactus" className="block py-2 hover:text-gray-400 items-center">
              <FaEnvelope className="mr-2" /> Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}