"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu,  ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Cards", href: "#cards", hasDropdown: true },
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Testimonials", href: "#Testimonials" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              FinTech
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(({ label, href, hasDropdown }) => (
              <div key={label} className="relative group">
                <a
                  href={href}
                  className={`flex items-center space-x-1 text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                    isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                  }`}
                >
                  <span>{label}</span>
                  {hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              </div>
            ))}
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className={`text-sm ${
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
              }`}
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={isScrolled ? "text-gray-700" : "text-white"}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="bg-white border-b">
                <div className="space-y-4 mt-6">
                  {navItems.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="block px-4 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded-lg"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="pt-4 border-t space-y-2">
                    <Button variant="ghost" className="w-full text-left">
                      Sign In
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
