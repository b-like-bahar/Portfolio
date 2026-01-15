"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-[#111827] border border-[#8B8CF6]/30 rounded-full shadow-lg hover:border-[#8B8CF6] transition-all duration-300 group"
          style={{
            boxShadow: "0 0 0 0 rgba(139, 140, 246, 0)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 20px rgba(139, 140, 246, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 0 0 rgba(139, 140, 246, 0)";
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp
            size={30}
            className="text-[#8B8CF6] group-hover:text-[#A5B4FC] transition-colors"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
