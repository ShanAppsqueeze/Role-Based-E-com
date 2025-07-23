import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link, NavLink  } from 'react-router-dom';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                YourLogo
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <NavLink
                  to="/"
                  className="text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  className="text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  About
                </NavLink>

                <NavLink
                  to="/services"
                  className="text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Services
                </NavLink>
                
                <NavLink
                  to="/contact"
                  className="text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Contact
                </NavLink>
                
                {/* Dark mode toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                
                {/* CTA Button */}
                <Link
                  to="/get-started"
                  className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 mr-2"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition duration-300"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-800 transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-800 transition duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-800 transition duration-300"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-800 transition duration-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/get-started"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}