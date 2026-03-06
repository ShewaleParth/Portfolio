import { useEffect, useRef, useState } from 'react';

interface UseParallaxOptions {
    speed?: number;
    direction?: 'up' | 'down';
}

export const useParallax = (options: UseParallaxOptions = {}) => {
    const { speed = 0.5, direction = 'up' } = options;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const elementRef = useRef<any>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!elementRef.current) return;

            const rect = elementRef.current.getBoundingClientRect();
            const scrolled = window.scrollY;
            const elementTop = rect.top + scrolled;
            const windowHeight = window.innerHeight;

            // Calculate offset based on scroll position
            if (rect.top < windowHeight && rect.bottom > 0) {
                const distance = scrolled - elementTop + windowHeight;
                const movement = distance * speed;
                setOffset(direction === 'up' ? -movement : movement);
            }
        };

        // Use passive listener for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [speed, direction]);

    return { elementRef, offset };
};
