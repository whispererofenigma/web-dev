"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import { motion } from "framer-motion";

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
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Enigma Logo"
            width={120}
            height={25}
            priority
            className="dark:invert"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-foreground/80">
          <Link href="#services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="#portfolio" className="hover:text-foreground transition-colors">
            Our Work
          </Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggler />
          <motion.a
            href="#contact"
            className="hidden sm:block relative px-5 py-2.5 rounded-full text-sm font-medium bg-primary text-primary-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10">Get in Touch</span>
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;