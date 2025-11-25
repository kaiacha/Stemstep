import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-text-muted text-sm">
              &copy; {new Date().getFullYear()} StemStep. All design rights
              reserved. by Mikyo Kaia Cha.
            </p>
          </div>
          <div className="flex items-center space-x-1 text-sm text-text-muted">
            <span>Arizona State University</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>HSE 543 Learning Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
