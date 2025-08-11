import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className, ...props }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default MagneticButton;
