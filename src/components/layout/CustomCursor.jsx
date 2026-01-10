import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.scss';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        // Add magnetic effect listeners to interactive elements
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        const interactiveElements = document.querySelectorAll('a, button, .btn');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []); // Note: In a real app, you might need to re-run this when route changes to attach listeners to new elements. 
    // For simplicity in this demo, simple listener. 

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        hover: {
            height: 50,
            width: 50,
            x: mousePosition.x - 25,
            y: mousePosition.y - 25,
            backgroundColor: "rgba(14, 184, 246, 0.3)", // Cyan tint
            mixBlendMode: "difference"
        }
    };

    return (
        <motion.div
            className={styles.cursor}
            variants={variants}
            animate={isHovering ? "hover" : "default"}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    );
};

export default CustomCursor;
