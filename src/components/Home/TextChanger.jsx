import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TextChanger = () => {
    const texts = [
        "Aspiring AI/ML Developer",
        "Full Stack Web Enthusiast"
    ];

    const [currentText, setCurrentText] = useState('');
    const [displayIndex, setDisplayIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? 40 : 100;
        const fullText = texts[displayIndex];

        const timeout = setTimeout(() => {
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
    }, [charIndex, isDeleting, displayIndex, texts]);

    return (
        <motion.span
            className='block text-2xl md:text-4xl font-semibold text-gray-300 mt-2 h-[40px] md:h-[50px]'
            key={displayIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            {currentText}
        </motion.span>
    );
};

export default TextChanger;
