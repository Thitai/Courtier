import React from 'react';
import logo from '../assets/courtier.svg';

export const Header = () => {
  return (
    <header className="bg-transparent backdrop-blur-md bg-opacity-50 text-white fixed w-full top-0 z-50">
      <div className="navbar container mx-auto p-4 flex justify-between items-center">
        <div className="navbar-start">
          
        </div>
        <nav className="hidden lg:flex space-x-6">
          <a href="/" className="hover:text-cyan-400">Home</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#blog" className="hover:text-cyan-400">Blog</a>
        </nav>
        <div className="lg:hidden">
          {/* Add a hamburger menu if needed for mobile */}
        </div>
      </div>
    </header>
  );
};
