import React, { useState, useEffect } from 'react';

const TextChanger = () => {
  const texts = [
    "Hello, I'm Keerthiga",
    "Aspiring AI/ML Developer",
    "Full Stack Web Enthusiast"
  ];

  const [currentText, setCurrentText] = useState('');
  const [displayIndex, setDisplayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 100;
    const timeout = setTimeout(() => {
      const fullText = texts[displayIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setDisplayIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, displayIndex]);

  const renderText = () => {
    if (currentText.includes('Keerthiga')) {
      const parts = currentText.split('Keerthiga');
      return (
        <span>
          {parts[0]}
          <span className='text-[#b78dff] font-semibold'>Keerthiga</span>
          {parts[1]}
        </span>
      );
    }
    return currentText;
  };

  return (
    <div className='text-center text-3xl md:text-5xl font-bold text-white min-h-[100px] transition duration-300'>
      {renderText()}
    </div>
  );
};

export default TextChanger;
