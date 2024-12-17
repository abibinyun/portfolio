"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`font-medium fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[720px] bg-gray-800 text-white py-2 shadow-lg z-50 rounded-full transition-all ${showNavbar ? "translate-y-0" : "translate-y-full"}`}>
      <div className="flex justify-around space-x-6 p-3">
        <Link href="/#home" className="hover:text-gray-400 transition-colors text-sm md:text-base">
          Home
        </Link>
        <Link href="/#about" className="hover:text-gray-400 transition-colors text-sm md:text-base">
          About
        </Link>
        <Link href="/#experience" className="hover:text-gray-400 transition-colors text-sm md:text-base">
          Experience
        </Link>
        <Link href="/#projects" className="hover:text-gray-400 transition-colors text-sm md:text-base">
          Projects
        </Link>
        <Link href="/#contact" className="hover:text-gray-400 transition-colors text-sm md:text-base">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
