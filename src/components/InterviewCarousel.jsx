import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, UserCircle } from "lucide-react";

const interviews = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    role: "Software Engineer",
    major: "Computer Science",
    company: "Google",
    quote:
      "Don't be intimidated by coding. Start with small projects and build your way up. Every expert was once a beginner.",
    insight:
      "The tech industry values problem-solving skills and creativity just as much as technical knowledge.",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Biomedical Engineer",
    major: "Biomedical Engineering",
    company: "Medtronic",
    quote:
      "If you love both science and helping people, this field combines the best of both worlds.",
    insight:
      "You'll work on projects that directly impact patient care and medical innovation.",
  },
  {
    id: "3",
    name: "Dr. Priya Patel",
    role: "Data Scientist",
    major: "Data Science",
    company: "Microsoft",
    quote:
      "Data science is about storytelling with numbers. Learn to ask the right questions, not just find answers.",
    insight:
      "Every industry needs data scientists - from healthcare to entertainment to finance.",
  },
  {
    id: "4",
    name: "James Kim",
    role: "Environmental Scientist",
    major: "Environmental Science",
    company: "EPA",
    quote:
      "If you care about the planet, this field lets you make a real difference. Your work protects our future.",
    insight:
      "Field work and lab research go hand-in-hand. You'll spend time both indoors and outdoors.",
  },
  {
    id: "5",
    name: "Amanda Williams",
    role: "Mechanical Engineer",
    major: "Mechanical Engineering",
    company: "Boeing",
    quote:
      "Engineering is about solving real-world problems. Start by taking things apart and understanding how they work.",
    insight:
      "You'll design everything from tiny medical devices to massive aerospace systems.",
  },
  {
    id: "6",
    name: "Dr. David Park",
    role: "Nurse Practitioner",
    major: "Nursing",
    company: "Mayo Clinic",
    quote:
      "Nursing is a calling, not just a job. If you want to make a difference in people's lives every day, this is it.",
    insight:
      "You'll have direct patient care and the opportunity to specialize in areas you're passionate about.",
  },
  {
    id: "7",
    name: "Maria Garcia",
    role: "Financial Analyst",
    major: "Finance",
    company: "Goldman Sachs",
    quote:
      "Finance isn't just about numbers - it's about understanding how businesses and economies work.",
    insight:
      "You'll analyze trends, make predictions, and help guide important financial decisions.",
  },
  {
    id: "8",
    name: "Jordan Taylor",
    role: "Project Manager",
    major: "Business Management",
    company: "Amazon",
    quote:
      "Project management is about bringing people together to achieve something great. Leadership and organization are key.",
    insight:
      "You'll work across different teams and industries, making every project a new learning experience.",
  },
];

const InterviewCarousel = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  // Check for reduced motion and mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);

    // Check for mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkMobile);

    return () => {
      mediaQuery.removeEventListener("change", handler);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle scroll and detect center card
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout;
    let rafId;

    const updateScrollButtons = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    const findCenterCard = () => {
      const cards = container.querySelectorAll(".interview-card-item");
      if (cards.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      // Update state to trigger re-render
      setCurrentIndex(closestIndex);
      updateScrollButtons();
    };

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      // Update on every scroll event using requestAnimationFrame
      rafId = requestAnimationFrame(() => {
        findCenterCard();
      });

      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Final update after scroll ends
      scrollTimeout = setTimeout(() => {
        findCenterCard();
      }, 100);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    // Use scrollend event if available (modern browsers)
    container.addEventListener("scrollend", findCenterCard, { passive: true });
    window.addEventListener("resize", findCenterCard);

    // Initial detection with multiple attempts
    const initTimeout1 = setTimeout(findCenterCard, 50);
    const initTimeout2 = setTimeout(findCenterCard, 200);
    const initTimeout3 = setTimeout(findCenterCard, 500);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("scrollend", findCenterCard);
      window.removeEventListener("resize", findCenterCard);
      clearTimeout(scrollTimeout);
      clearTimeout(initTimeout1);
      clearTimeout(initTimeout2);
      clearTimeout(initTimeout3);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Scroll to specific index
  const scrollToIndex = (index) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cards = container.querySelectorAll(".interview-card-item");
    if (cards[index]) {
      const card = cards[index];
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const containerWidth = container.clientWidth;
      const scrollPosition = cardLeft - containerWidth / 2 + cardWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });

      setCurrentIndex(index);

      // Update buttons after scroll
      setTimeout(
        () => {
          const { scrollLeft, scrollWidth, clientWidth } = container;
          setCanScrollLeft(scrollLeft > 10);
          setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        },
        prefersReducedMotion ? 50 : 500
      );
    }
  };

  // Navigate left
  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  // Navigate right
  const scrollRight = () => {
    if (currentIndex < interviews.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" && canScrollLeft) {
        e.preventDefault();
        scrollLeft();
      } else if (e.key === "ArrowRight" && canScrollRight) {
        e.preventDefault();
        scrollRight();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, canScrollLeft, canScrollRight]);

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-5 h-5 text-primary" />
        </button>
      )}

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: prefersReducedMotion ? "auto" : "smooth",
          paddingLeft: isMobile ? "1rem" : "clamp(3rem, 10vw, 6rem)",
          paddingRight: isMobile ? "1rem" : "clamp(3rem, 10vw, 6rem)",
          WebkitOverflowScrolling: "touch",
        }}
        role="region"
        aria-label="Interview cards carousel"
      >
        {/* Left Placeholder */}
        <div
          className="flex-shrink-0"
          style={{
            width: isMobile ? "160px" : "320px",
            minWidth: isMobile ? "160px" : "320px",
          }}
          aria-hidden="true"
        />

        {/* Interview Cards */}
        {interviews.map((interview, index) => {
          const isCenter = index === currentIndex;
          const isHovered = hoveredIndex === index;
          const distance = Math.abs(index - currentIndex);

          let scale = 1;
          let blur = 0;
          let opacity = 1;

          if (prefersReducedMotion) {
            scale = isCenter ? 1 : 0.95;
            opacity = isCenter ? 1 : 0.9;
            blur = 0;
          } else {
            if (isCenter) {
              // Center card: bigger, no blur, full opacity
              scale = isHovered ? 0.95 : 1.0;
              blur = 0; // Always no blur for center card
              opacity = 1;
            } else if (distance === 1) {
              // Adjacent cards: smaller, slightly blurred
              scale = isHovered ? 0.88 : 0.85;
              blur = 2;
              opacity = 0.8;
            } else {
              // Far cards: smallest, more blurred
              scale = isHovered ? 0.83 : 0.8;
              blur = 4;
              opacity = 0.7;
            }
          }

          // Mobile responsive widths (50% of desktop)
          const cardWidth = isMobile
            ? isCenter
              ? "200px"
              : "160px"
            : isCenter
            ? "400px"
            : "320px";
          const cardMinWidth = isMobile
            ? isCenter
              ? "200px"
              : "160px"
            : isCenter
            ? "400px"
            : "320px";

          return (
            <div
              key={interview.id}
              className="interview-card-item flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-100 p-3 md:p-6 relative"
              style={{
                width: cardWidth,
                minWidth: cardMinWidth,
                scrollSnapAlign: "center",
                transform: `scale(${scale})`,
                filter: isCenter
                  ? "none"
                  : prefersReducedMotion
                  ? "none"
                  : `blur(${blur}px)`,
                opacity: opacity,
                zIndex: isCenter ? 10 : 1,
                transformOrigin: "center center",
                transition:
                  "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), filter 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1), width 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              onClick={() => scrollToIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-current={isCenter ? "true" : undefined}
              role="article"
              aria-label={`Interview with ${interview.name}, ${interview.role}`}
              tabIndex={0}
            >
              {/* Quote Icon Background */}
              <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
                <Quote className="w-24 h-24 text-primary" />
              </div>

              {/* Card Content */}
              <div className="space-y-2 md:space-y-4 relative z-10">
                {/* Quote */}
                <blockquote className="text-sm md:text-lg lg:text-xl font-medium text-text leading-relaxed">
                  "{interview.quote}"
                </blockquote>

                {/* Insight */}
                <div className="pt-2 md:pt-3 border-t border-gray-100">
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                    {interview.insight}
                  </p>
                </div>

                {/* Name, Role, Major */}
                <div className="pt-2 md:pt-4 border-t border-gray-100">
                  <div className="flex items-start gap-2 md:gap-3">
                    {/* Profile Icon */}
                    <div className="flex-shrink-0">
                      <UserCircle className="w-6 h-6 md:w-10 md:h-10 text-primary/60" />
                    </div>
                    {/* Profile Text */}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-text text-xs md:text-base truncate">
                        {interview.name}
                      </p>
                      <p className="text-xs md:text-sm text-text-muted mt-1 truncate">
                        {interview.role}
                      </p>
                      <p className="text-xs text-text-muted mt-1 line-clamp-2">
                        {interview.major} • {interview.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Right Placeholder */}
        <div
          className="flex-shrink-0"
          style={{
            width: isMobile ? "160px" : "320px",
            minWidth: isMobile ? "160px" : "320px",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Next card"
        >
          <ChevronRight className="w-5 h-5 text-primary" />
        </button>
      )}
    </div>
  );
};

export default InterviewCarousel;
