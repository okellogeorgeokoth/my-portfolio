import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              We are a company dedicated to providing the best services and products to our customers.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-2">
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/aboutus" className="hover:text-white">About</Link>
              </li>
              <li className="mb-2">
                <Link href="/projects" className="hover:text-white">Projects</Link>
              </li>
              <li className="mb-2">
                <Link href="/skills" className="hover:text-white">Skills</Link>
              </li>
              <li className="mb-2">
                <Link href="/blogs" className="hover:text-white">Blogs</Link>
              </li>
              <li className="mb-2">
                <Link href="/contactus" className="hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://wa.me/+254790987845" className="text-gray-400 hover:text-white">
                <FaWhatsapp className="text-xl cursor-pointer hover:text-green-500" />
              </a>
              <a href="https://x.com/GeorgeTechElite" className="text-gray-400 hover:text-white">
                <FaXTwitter className="text-xl cursor-pointer hover:text-black" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <BsInstagram className="text-xl cursor-pointer hover:text-pink-600" />
              </a>
              <a href="https://www.linkedin.com/in/george-o-a76513136/" className="text-gray-400 hover:text-white">
                <FaLinkedinIn className="text-xl cursor-pointer hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} George Okello. All rights reserved.
        </div>
      </div>
    </footer>
  );
}