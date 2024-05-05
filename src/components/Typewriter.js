import React, { useState, useEffect } from 'react';

function Typewriter({ text, speed }) {
  const [visibleText, setVisibleText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setVisibleText((prevVisibleText) => prevVisibleText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [currentIndex, text, speed]);

  return <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">{visibleText}</h1>;
}

export default Typewriter;
