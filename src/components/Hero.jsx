import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Lightbulb } from "lucide-react";
import SearchBar from "./SearchBar";

// Import STEM icon images
import icon2 from "../assets/STEM ICONS/image 2.png";
import icon3 from "../assets/STEM ICONS/image 3.png";
import icon4 from "../assets/STEM ICONS/image 4.png";
import icon5 from "../assets/STEM ICONS/image 5.png";
import icon6 from "../assets/STEM ICONS/image 6.png";
import icon7 from "../assets/STEM ICONS/image 7.png";
import icon8 from "../assets/STEM ICONS/image 8.png";
import icon9 from "../assets/STEM ICONS/image 9.png";
import icon10 from "../assets/STEM ICONS/image 10.png";
import icon11 from "../assets/STEM ICONS/image 11.png";
import icon12 from "../assets/STEM ICONS/image 12.png";
import icon13 from "../assets/STEM ICONS/image 13.png";
import icon14 from "../assets/STEM ICONS/image 14.png";
import icon15 from "../assets/STEM ICONS/image 15.png";
import icon16 from "../assets/STEM ICONS/image 16.png";
import icon17 from "../assets/STEM ICONS/image 17.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const heroRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  // STEM icons for background - using custom PNG images
  const stemIcons = [
    { image: icon2, x: 10, y: 15, rotation: -12 },
    { image: icon3, x: 85, y: 20, rotation: 8 },
    { image: icon4, x: 20, y: 60, rotation: -5 },
    { image: icon5, x: 75, y: 55, rotation: 15 },
    { image: icon6, x: 5, y: 45, rotation: -8 },
    { image: icon7, x: 90, y: 40, rotation: 12 },
    { image: icon8, x: 15, y: 80, rotation: -15 },
    { image: icon9, x: 80, y: 75, rotation: 10 },
    { image: icon10, x: 50, y: 10, rotation: -10 },
    { image: icon11, x: 45, y: 85, rotation: 5 },
    { image: icon12, x: 30, y: 30, rotation: -7 },
    { image: icon13, x: 65, y: 25, rotation: 9 },
    { image: icon14, x: 25, y: 70, rotation: 6 },
    { image: icon15, x: 70, y: 15, rotation: -9 },
    { image: icon16, x: 40, y: 50, rotation: 11 },
    { image: icon17, x: 60, y: 65, rotation: -6 },
  ];

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    if (prefersReducedMotion) {
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener("change", handleChange);
        } else {
          mediaQuery.removeListener(handleChange);
        }
      };
    }

    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
        const clientY = e.clientY || e.touches?.[0]?.clientY || 0;
        setMousePosition({
          x: clientX - rect.left,
          y: clientY - rect.top,
        });
        setContainerSize({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    // Update container size on resize
    const handleResize = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setContainerSize({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial size

    // Support both mouse and touch events
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove, { passive: true });
    window.addEventListener("touchstart", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchstart", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [prefersReducedMotion]);

  // Calculate letter movement based on mouse position - more active and responsive
  const getLetterOffset = (
    index,
    totalLetters,
    containerWidth,
    containerHeight
  ) => {
    if (prefersReducedMotion) return 0;
    if (!containerWidth || !containerHeight) return 0;

    const normalizedX = mousePosition.x / containerWidth;
    const normalizedY = mousePosition.y / containerHeight;

    // Calculate distance from center for more responsive movement
    const centerX = 0.5;
    const centerY = 0.5;
    const distanceX = normalizedX - centerX;
    const distanceY = normalizedY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // Create a more pronounced wave effect that varies by letter position
    const wavePhase = (index / totalLetters) * Math.PI * 2;
    const waveFrequency = 3; // More waves for more activity
    const wave = Math.sin(wavePhase + normalizedX * Math.PI * waveFrequency);

    // More responsive vertical movement based on mouse Y position
    const verticalOffset = distanceY * 12; // Increased from 6 to 12 for more responsiveness
    const waveOffset = wave * 6 * (1 + distance); // Increased and distance-based for more activity
    const proximityEffect = (1 - Math.min(distance * 2, 1)) * 3; // Extra movement when cursor is close

    return verticalOffset + waveOffset + proximityEffect;
  };

  const titleText = "Your Future in STEM Starts Here";
  const letters = titleText.split("");

  return (
    <div
      ref={heroRef}
      className="relative bg-background py-16 md:py-24 pt-32 md:pt-[8rem]"
      style={{ overflow: "visible", minHeight: "100vh" }}
    >
      {/* Background gradients - starts from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none"
        style={{ top: "-64px" }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      {/* STEM Icons Background */}
      <div className="absolute inset-0 z-0 overflow-visible pointer-events-none">
        {stemIcons.map((item, index) => {
          return (
            <div
              key={index}
              className="absolute transition-all duration-300 pointer-events-auto cursor-pointer group stem-icon"
              data-rotation={item.rotation}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                width: "clamp(24px, 3vw, 48px)",
                height: "clamp(24px, 3vw, 48px)",
                "--rotation": `${item.rotation}deg`,
                transform: `rotate(${item.rotation}deg)`,
              }}
              onMouseEnter={(e) => {
                if (!prefersReducedMotion) {
                  // All icons shake on hover - force add class
                  const element = e.currentTarget;
                  // Remove any existing animation first
                  element.classList.remove("animate-shake");
                  // Force reflow
                  void element.offsetWidth;
                  // Add animation class
                  element.classList.add("animate-shake");
                }
              }}
              onMouseLeave={(e) => {
                const element = e.currentTarget;
                element.classList.remove("animate-shake");
              }}
              onTouchStart={(e) => {
                if (!prefersReducedMotion) {
                  // All icons shake on touch - force add class
                  const element = e.currentTarget;
                  element.classList.remove("animate-shake");
                  void element.offsetWidth;
                  element.classList.add("animate-shake");
                }
              }}
              onTouchEnd={(e) => {
                const element = e.currentTarget;
                // Keep shaking for a moment after touch ends
                setTimeout(() => {
                  element.classList.remove("animate-shake");
                }, 500);
              }}
            >
              <img
                src={item.image}
                alt={`STEM icon ${index + 1}`}
                className="w-full h-full object-contain"
                style={{
                  filter: "brightness(0) saturate(100%) invert(80%)",
                  opacity: 0.7,
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 md:px-24 lg:px-40 xl:px-64 2xl:px-80 pb-10 flex flex-col items-center justify-center text-center pointer-events-none">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text mb-6 flex flex-wrap justify-center items-center gap-1 pointer-events-auto"
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            overflow: "visible",
          }}
        >
          {letters.map((letter, index) => {
            // Check if this is part of "STEM" - indices 15-18
            // "Your Future in " = 0-14, "STEM" = 15-18
            const isSTEM = index >= 15 && index <= 18;
            const offset = prefersReducedMotion
              ? 0
              : getLetterOffset(
                  index,
                  letters.length,
                  containerSize.width,
                  containerSize.height
                );

            if (letter === " ") {
              return (
                <span key={index} className="inline-block w-2 md:w-4"></span>
              );
            }

            if (isSTEM) {
              return (
                <span
                  key={index}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary transition-all duration-150 ease-out hover:scale-125 cursor-pointer"
                  style={{
                    transform: `translateY(${offset}px)`,
                    willChange: "transform",
                  }}
                >
                  {letter}
                </span>
              );
            }

            return (
              <span
                key={index}
                className="inline-block transition-transform duration-150 ease-out"
                style={{
                  transform: `translateY(${offset}px)`,
                  willChange: "transform",
                }}
              >
                {letter}
              </span>
            );
          })}
        </h1>

        <p className="text-md md:text-kg text-text-muted w-full mb-10 pointer-events-auto">
          Explore exciting majors, find your path, and build the skills you need
          to change the world.
          <br />
          No matter where you start, you can go anywhere.
        </p>

        {/* Search Bar */}
        <div className="w-full mb-8 pointer-events-auto">
          <SearchBar />
        </div>

        {/* Self-assessment CTA */}
        <div className="w-full max-w-3xl mx-auto mt-8 pointer-events-auto">
          <div className="  p-4 md:p-6 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
              <p className="text-sm md:text-base text-text-muted">
                I don't know what I can do and want to do…
              </p>
            </div>
            <Link
              to="/explore/self-assessment"
              className="px-4 py-2 md:px-6 md:py-2.5 rounded-lg text-sm md:text-base font-medium bg-white border-2 border-primary hover:bg-primary transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 whitespace-nowrap"
              style={{
                color: "#4f46e5",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#4f46e5";
              }}
            >
              STEM Fit Test
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
