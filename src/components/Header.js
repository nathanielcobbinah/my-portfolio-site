import React, { useState } from 'react';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-scroll';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.querySelector('body');
    if (isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  };

  return (
    <header className={`px-3 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-900  text-gray-200 border-b border-gray-200'}`}>
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">N_Escade</div>
        <nav className="hidden md:block">
          <ul className="flex">
            <li className="mx-4">
              <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className="mx-4">
              <Link to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li className="mx-4">
              <Link to="projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li className="mx-4">
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center">
          <button onClick={toggleDarkMode} className="text-xl mr-4">
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl">
            <FiMenu />
          </button>
        </div>
      </div>
      {/* Responsive Mobile Menu */}
      <nav className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} transition-all duration-500 ease-in-out ${isOpen ? 'h-auto' : 'h-0 overflow-hidden'}`}>
        <ul className={`flex flex-col ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <li className="py-2 mx-4"><a href="#about">About</a></li>
          <li className="py-2 mx-4"><a href="#skills">Skills</a></li>
          <li className="py-2 mx-4"><a href="#projects">Projects</a></li>
          <li className="py-2 mx-4"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
