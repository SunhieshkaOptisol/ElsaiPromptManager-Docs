import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/elsaiFoundry.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-10">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Elsai Foundry" className="h-8" />
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900">
            {/* Sun icon for light/dark mode */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
