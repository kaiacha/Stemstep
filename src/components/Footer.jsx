import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto relative z-10">
      <div className="mt-20 md-12 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-text-muted text-[10px] md:text-sm">
              &copy; {new Date().getFullYear()} StemStep. All design rights
              reserved by @KaiaCha.
            </p>
          </div>
          <div className="flex items-center space-x-1 text-text-muted text-[10px] md:text-sm">
            <span>Arizona State University</span>
            <Heart className="h-3 w-3 md:h-4 md:w-4 text-red-500 fill-current" />
            <span>HSE 543 Learning Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
