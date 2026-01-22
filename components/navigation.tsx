"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "about", href: "#about", isHash: true },
  { name: "skills", href: "#skills", isHash: true },
  { name: "projects", href: "#projects", isHash: true },
  { name: "experience", href: "#experience", isHash: true },
  { name: "blog", href: "/blog", isHash: false },
  { name: "contact", href: "#contact", isHash: true },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (pathname === "/") {
        const sections = navItems
          .filter((item) => item.isHash)
          .map((item) => item.href.substring(1));
        const current = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (item: (typeof navItems)[number]) => {
    if (item.isHash) {
      if (pathname?.startsWith("/blog")) {
        window.location.href = `/${item.href}`;
      } else {
        scrollToSection(item.href);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-6 md:px-8 lg:pl-4 lg:pr-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  scrollToSection("#home");
                }
              }}
              className="relative w-28 h-16 sm:w-32 sm:h-20 md:w-48 md:h-24 flex-shrink-0"
            >
              <Image
                src="/logo-white.svg"
                alt="BaharHamzeh"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive =
                  item.isHash && pathname === "/"
                    ? activeSection === item.href.substring(1)
                    : !item.isHash && pathname?.startsWith(item.href);

                if (item.isHash) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item)}
                      className={`text-base uppercase tracking-wider transition-colors ${
                        isActive
                          ? "text-[#E5E7EB]"
                          : "text-[#9CA3AF] hover:text-[#E5E7EB]"
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                } else {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-base uppercase tracking-wider transition-colors ${
                        isActive
                          ? "text-[#E5E7EB]"
                          : "text-[#9CA3AF] hover:text-[#E5E7EB]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                }
              })}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`hamburger p-2 ${isMobileMenuOpen ? "is-active" : ""}`}
                id="hamburger-1"
                aria-label="Toggle menu"
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-[55] md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-md z-[55] md:hidden shadow-2xl"
      >
        <div className="flex flex-col h-full p-6 pt-28">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => {
              const isActive =
                item.isHash && pathname === "/"
                  ? activeSection === item.href.substring(1)
                  : !item.isHash && pathname?.startsWith(item.href);

              if (item.isHash) {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`text-right text-base uppercase tracking-wider transition-colors ${
                      isActive
                        ? "text-[#E5E7EB]"
                        : "text-[#9CA3AF] hover:text-[#E5E7EB]"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              } else {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-right text-base uppercase tracking-wider transition-colors ${
                      isActive
                        ? "text-[#E5E7EB]"
                        : "text-[#9CA3AF] hover:text-[#E5E7EB]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
}
