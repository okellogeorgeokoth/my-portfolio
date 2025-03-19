"use client";
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-lg">
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
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <a href="#home" className="block py-2 hover:text-gray-400">Home</a>
            <a href="#about" className="block py-2 hover:text-gray-400">About</a>
            <a href="#projects" className="block py-2 hover:text-gray-400">Projects</a>
            <a href="#skills" className="block py-2 hover:text-gray-400">Skills</a>
            <a href="#skills" className="block py-2 hover:text-gray-400">Blogs</a>
            <a href="#contact" className="block py-2 hover:text-gray-400">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}