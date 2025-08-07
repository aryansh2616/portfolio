import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    'Home',
    'Projects',
    'Skills',
    'Resume',
    'Certifications',
    'About',
    'Contact',
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16 relative">
          {/* ✅ Centered Logo on Mobile, Left on Desktop */}
          <div className="md:static absolute mx-8 transform -translate-x-1/2 md:transform-none md:left-0 mt-2">
            <Link to="/">
              <img src={img1} alt="Logo" className="h-12  w-auto rounded" />
            </Link>
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((text) => (
              <Link
                key={text}
                to={`/${text.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {text}
              </Link>
            ))}
          </div>

          {/* ✅ Hamburger Menu Button (Visible on Mobile) */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none transition-transform transform"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-6 py-4 bg-white shadow-lg rounded-b-xl space-y-3 absolute top-16 left-0 right-0 text-center"
          >
            {navItems.map((text) => (
              <Link
                key={text}
                to={`/${text.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 font-semibold text-lg hover:text-blue-600 transition"
              >
                {text}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
