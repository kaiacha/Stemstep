import React, { useEffect, useRef, useState } from 'react';

const InteractiveBackground = () => {
    const blobRef = useRef(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e) => {
            setPrefersReducedMotion(e.matches);
        };

        // Modern browsers
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange);
        } else {
            // Fallback for older browsers
            mediaQuery.addListener(handleChange);
        }

        if (mediaQuery.matches) {
            return; // Skip interactive animations if user prefers reduced motion
        }

        const handleMouseMove = (e) => {
            if (blobRef.current) {
                const { clientX, clientY } = e;
                blobRef.current.animate(
                    {
                        left: `${clientX}px`,
                        top: `${clientY}px`,
                    },
                    { duration: 3000, fill: 'forwards' }
                );
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleChange);
            } else {
                mediaQuery.removeListener(handleChange);
            }
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl z-10"></div>
            <div
                ref={blobRef}
                className="absolute w-[500px] h-[500px] bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
                style={{ left: '50%', top: '50%' }}
            ></div>
            <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-30 ${prefersReducedMotion ? '' : 'animate-pulse'}`}></div>
            <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-30 ${prefersReducedMotion ? '' : 'animate-pulse animation-delay-2000'}`}></div>
        </div>
    );
};

export default InteractiveBackground;
