import React, { useEffect, useRef, useState, useMemo } from "react";
import Hero from "../components/Hero";
import InteractiveBackground from "../components/InteractiveBackground";
import FeatureCard from "../components/FeatureCard";
import InterviewCarousel from "../components/InterviewCarousel";
import SchoolRanking from "../components/SchoolRanking";
import { Compass, Map, FlaskConical, BrainCircuit } from "lucide-react";

// Features data - defined outside component to avoid recreation
const featuresData = [
  {
    icon: Compass,
    title: "Explore Majors",
    description:
      "Discover diverse STEM fields and find the perfect match for your interests and skills.",
    link: "/explore",
    linkText: "Start Exploring",
  },
  {
    icon: Map,
    title: "Visual Roadmaps",
    description:
      "See clear roadmaps from high school to your dream major, including education and training.",
    link: "/explore",
    linkText: "Explore Majors",
  },
  {
    icon: FlaskConical,
    title: "Interactive Activities",
    description:
      "Try hands-on simulations and mini-modules to experience what different jobs are really like.",
    link: "/activities",
    linkText: "Try Activities",
  },
  {
    icon: BrainCircuit,
    title: "AI Guidance",
    description:
      "Get personalized recommendations and answers to your questions about STEM majors.",
    link: "/explore",
    linkText: "Get Advice",
  },
];

// Real Voices of the Field Section Component
const RealVoicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #E3F2FD, #FFF8E1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-24 lg:px-40 xl:px-64 2xl:px-80 overflow-x-hidden pb-10">
        <div
          className={`bg-white/80 backdrop-blur-sm rounded-3xl  p-8 md:p-12 lg:p-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
              Real Voices of the Field
            </h2>
            <p className="text-base md:text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
              Hear from professionals across different STEM fields - their
              honest advice, lessons learned, and what it's really like to work
              in their industry.
            </p>
          </div>

          {/* Interview Carousel */}
          <div className="mt-8">
            <InterviewCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature Cards Section Component with scroll animation
const FeatureCardsSection = () => {
  const prefersReducedMotionInitial = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  }, []);

  const [isVisible, setIsVisible] = useState(prefersReducedMotionInitial);
  const [cardVisibilities, setCardVisibilities] = useState(() => {
    if (prefersReducedMotionInitial) {
      const vis = {};
      featuresData.forEach((_, index) => {
        vis[index] = true;
      });
      return vis;
    }
    return {};
  });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    prefersReducedMotionInitial
  );
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            } else {
              const index = cardRefs.current.indexOf(entry.target);
              if (index !== -1) {
                setCardVisibilities((prev) => ({ ...prev, [index]: true }));
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    const currentCardRefs = cardRefs.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    currentCardRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      currentCardRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-surface/50 backdrop-blur-sm overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-24 lg:px-40 xl:px-64 2xl:px-80 overflow-x-hidden pb-10">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 ${
            prefersReducedMotion
              ? ""
              : `transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`
          }`}
        >
          <h2 className="text-3xl font-bold text-text mb-4">
            Why Choose STEM?
          </h2>
          <p className="text-lg text-text-muted">
            Science, Technology, Engineering, and Math are shaping the future.
            These majors offer high growth, creativity, and the chance to solve
            real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2 overflow-visible items-stretch">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className={`overflow-visible h-full ${
                prefersReducedMotion
                  ? ""
                  : `transition-all duration-700 ${
                      cardVisibilities[index]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`
              }`}
              style={
                prefersReducedMotion
                  ? {}
                  : {
                      transitionDelay: `${index * 150}ms`,
                    }
              }
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// School Ranking Section Component with scroll animation
const SchoolRankingSection = () => {
  const prefersReducedMotionInitial = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  }, []);

  const [isVisible, setIsVisible] = useState(prefersReducedMotionInitial);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    prefersReducedMotionInitial
  );
  const sectionRef = useRef(null);

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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={sectionRef}
      className={`overflow-x-hidden ${
        prefersReducedMotion
          ? ""
          : `transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`
      }`}
    >
      <SchoolRanking />
    </div>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col relative w-full overflow-x-hidden">
      <InteractiveBackground />
      <div className="relative z-10 w-full overflow-x-hidden">
        <Hero />

        {/* Feature Cards Section */}
        <FeatureCardsSection />

        {/* Real Voices of the Field Section */}
        <RealVoicesSection />

        {/* School Ranking Section */}
        <SchoolRankingSection />
      </div>
    </div>
  );
};

export default Home;
