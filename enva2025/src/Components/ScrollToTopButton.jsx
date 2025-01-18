import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down past threshold
  useEffect(() => {
    const threshold = 100; // Adjust as needed
    const handleScroll = () => {
      window.pageYOffset > threshold ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  };

  return (
    <button 
      className={`fixed bottom-4 right-4 bg-blue-500 text-white rounded-full w-10 h-10 flex z-99999 justify-center items-center ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
      onClick={scrollToTop}>
      ↑
    </button>
  );
}

export default ScrollToTopButton;