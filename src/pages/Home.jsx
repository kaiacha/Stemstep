import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import InteractiveBackground from "../components/InteractiveBackground";
import FeatureCard from "../components/FeatureCard";
import InterviewCarousel from "../components/InterviewCarousel";
import SchoolRanking from "../components/SchoolRanking";
import { Compass, Map, FlaskConical, BrainCircuit } from "lucide-react";

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
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #E3F2FD, #FFF8E1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 transition-all duration-1000 ${
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

const Home = () => {
  const features = [
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

  return (
    <div className="flex flex-col relative">
      <InteractiveBackground />
      <div className="relative z-10">
        <Hero />

        {/* Feature Cards Section */}
        <section className="py-24 bg-surface/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-text mb-4">
                Why Choose STEM?
              </h2>
              <p className="text-lg text-text-muted">
                Science, Technology, Engineering, and Math are shaping the
                future. These majors offer high growth, creativity, and the
                chance to solve real-world problems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Real Voices of the Field Section */}
        <RealVoicesSection />

        {/* School Ranking Section */}
        <SchoolRanking />
      </div>
    </div>
  );
};

export default Home;
