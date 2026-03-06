import { useEffect, useRef, useState } from 'react';

interface UseMagneticCursorOptions {
    strength?: number;
}

export const useMagneticCursor = (options: UseMagneticCursorOptions = {}) => {
    const { strength = 0.3 } = options;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const elementRef = useRef<any>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) * strength;
            const deltaY = (e.clientY - centerY) * strength;

            setPosition({ x: deltaX, y: deltaY });
        };

        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
            setPosition({ x: 0, y: 0 });
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mousemove', handleMouseMove);

        return () => {
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
            element.removeEventListener('mousemove', handleMouseMove);
        };
    }, [strength]);

    return { elementRef, position, isHovered };
};
