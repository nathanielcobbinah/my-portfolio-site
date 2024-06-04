import React, { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi'; 

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to check scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Show button when scrolled down 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md"
          onClick={scrollToTop}
        >
          <FiChevronUp />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
