import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Rocket } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore STEM", path: "/explore" },
    { name: "Try-It Activities", path: "/activities" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-text tracking-tight">
                StemStep
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-text-muted hover:text-primary hover:bg-gray-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              style={{ backgroundColor: "transparent" }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" style={{ color: "black" }} />
              ) : (
                <Menu className="block h-6 w-6" style={{ color: "black" }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-text-muted hover:text-primary hover:bg-gray-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
