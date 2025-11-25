import React from "react";
import { Link } from "react-router-dom";
import { Lightbulb } from "lucide-react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="relative overflow-visible bg-background py-16 md:py-24 -mt-16 pt-32 md:pt-40">
      {/* Background gradients - starts from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none"
        style={{ top: "-64px" }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 md:px-24 lg:px-40 xl:px-64 2xl:px-80 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text mb-6">
          Your Future in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            STEM
          </span>{" "}
          Starts Here
        </h1>

        <p className="text-md md:text-kg text-text-muted w-full mb-10">
          Explore exciting majors, find your path, and build the skills you need
          to change the world.
          <br />
          No matter where you start, you can go anywhere.
        </p>

        {/* Search Bar */}
        <div className="w-full mb-8">
          <SearchBar />
        </div>

        {/* Self-assessment CTA */}
        <div className="w-full max-w-3xl mx-auto mt-8">
          <div className="  p-4 md:p-6 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
              <p className="text-sm md:text-base text-text-muted">
                I don't know what I can do and want to do…
              </p>
            </div>
            <Link
              to="/explore/self-assessment"
              className="px-4 py-2 md:px-6 md:py-2.5 rounded-lg text-sm md:text-base font-medium text-primary bg-white border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 whitespace-nowrap"
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
