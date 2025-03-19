"use client";
import React, { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Explicitly define the ref type

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => { // Add type for event
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) { // Cast event.target to Node
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
          {/* Hamburger Menu for Mobile */}
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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex justify-center flex-1 space-x-8">
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="/about" className="hover:text-gray-400">About</a>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#skills" className="hover:text-gray-400">Skills</a>
            <a href="#skills" className="hover:text-gray-400">Blogs</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
        </div>

        {/* Mobile Navigation Links */}
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
            <a href="#home" className="block py-2 hover:text-gray-400">Home</a>
            <a href="#about" className="block py-2 hover:text-gray-400">About</a>
            <a href="#projects" className="block py-2 hover:text-gray-400">Projects</a>
            <a href="#skills" className="block py-2 hover:text-gray-400">Skills</a>
            <a href="#skills" className="block py-2 hover:text-gray-400">Blogs</a>
            <a href="#contact" className="block py-2 hover:text-gray-400">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}