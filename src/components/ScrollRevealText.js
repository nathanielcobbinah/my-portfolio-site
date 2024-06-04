import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function ScrollRevealText({ children }) {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, 
  });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default ScrollRevealText;
