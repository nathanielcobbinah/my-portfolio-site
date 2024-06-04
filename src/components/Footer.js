// Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-black h-full bg-no-repeat text-gray-400 py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Nathaniel Cobbinah. All rights reserved.</p>
        <div className="mt-4 flex justify-center">
          <a href="#home" className="mr-4 hover:text-gray-400">Home</a>
          <a href="#skills" className="mr-4 hover:text-gray-400">Skills</a>
          <a href="#about" className="mr-4 hover:text-gray-400">About</a>
          <a href="#projects" className="mr-4 hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
