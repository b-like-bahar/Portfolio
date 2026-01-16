"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

type ScrollIndicatorProps = {
  targetId: string;
  label?: string;
};

export default function ScrollIndicator({
  targetId,
  label = "Scroll",
}: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById(targetId);
      if (target) {
        const rect = target.getBoundingClientRect();
        setIsVisible(rect.top > window.innerHeight * 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetId]);

  const scrollToTarget = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center gap-2 py-4 cursor-pointer group"
      onClick={scrollToTarget}
    >
      <span className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#9CA3AF] group-hover:text-[#8B8CF6] transition-colors">
        {label}
      </span>
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-[#8B8CF6]"
      >
        <ChevronDown size={30} />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="text-[#8B8CF6] opacity-60 -mt-4"
      >
        <ChevronDown size={20} />
      </motion.div>
    </motion.div>
  );
}
