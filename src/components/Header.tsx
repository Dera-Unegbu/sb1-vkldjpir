import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
            Golden Hands Medical Centre
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 text-gray-700 hover:text-gray-900">Home</Link>
              <Link to="/services" className="px-3 py-2 text-gray-700 hover:text-gray-900">Services</Link>
              <Link to="/contact" className="px-3 py-2 text-gray-700 hover:text-gray-900">Contact Us</Link>
              <Link to="/tour" className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                Take A Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}