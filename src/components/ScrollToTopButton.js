import React from 'react';
import { FiChevronUp } from 'react-icons/fi'; // Importing the FiChevronUp icon from react-icons

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md"
      onClick={scrollToTop}
    >
      <FiChevronUp /> 
    </button>
  );
}

export default ScrollToTopButton;