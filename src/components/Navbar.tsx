"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 shadow-neumorphic backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Company Logo"
            width={120}
            height={25}
            priority
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#portfolio" className="hover:text-primary transition-colors">
            Our Work
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggler />
          <a
            href="#contact"
            className="hidden sm:block bg-background shadow-neumorphic-inset rounded-full text-sm font-medium px-5 py-2.5"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;