"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Home, GraduationCap, Trophy, Newspaper, FolderOpen, Smartphone, Menu, X, Download } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";


const navLinks = [
  { href: "#home", label: "Home", Icon: Home },
  { href: "#courses", label: "Courses", Icon: GraduationCap },
  { href: "#hall-of-fame", label: "Hall of Fame", Icon: Trophy },
  { href: "#blog", label: "Blog", Icon: Newspaper },
  { href: "#resources", label: "Resources", Icon: FolderOpen },
  { href: "#biology-made-fun", label: "App", Icon: Smartphone },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0,128,128,0)", "rgba(2,44,34,0.5)"]
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(0,0,0,0)", "0 4px 6px -1px rgba(0,0,0,0.1)"]
  );
  return (
    <motion.header
      style={{
        backgroundColor: headerBg,
        boxShadow: headerShadow,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 bg-white rounded-xl p-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <Image
              src="/images/logo.png"
              alt="Dr. Ragab Biology Logo"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const NavIcon = link.Icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all font-medium text-sm"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5">
                    <NavIcon className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
                  </span>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Download App Button */}
          <div className="flex items-center gap-3">
            <MagneticButton className="hidden sm:block">
              <Link
                href="#download"
                className="inline-flex items-center justify-center gap-2 min-w-[160px] sm:min-w-[200px] h-11 sm:h-12 px-4 sm:px-5 py-2.5 rounded-xl bg-[var(--accent-orange)] text-white font-semibold text-sm sm:text-base hover:bg-[var(--accent-orange-hover)] transition-colors shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <Download className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                Get the App
              </Link>
            </MagneticButton>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-white hover:bg-white/15 transition-colors"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={2} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const NavIcon = link.Icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-white/10 font-medium transition-colors"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">
                      <NavIcon className="w-5 h-5 text-[var(--accent-orange)]" strokeWidth={2} />
                    </span>
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--accent-orange)] text-white font-semibold w-fit mt-2"
              >
                <Download className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                Get the App
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
