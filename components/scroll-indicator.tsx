"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Text } from "@/components/ui/typography";

type ScrollIndicatorProps = {
  targetId: string;
  label?: string;
};

export default function ScrollIndicator({
  targetId,
  label = "Scroll",
}: ScrollIndicatorProps) {
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById(targetId);
      if (target && !hasShown) {
        const rect = target.getBoundingClientRect();
        // Show indicator when target section is visible in viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setHasShown(true);
        }
      }
    };

    // Check initial state
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetId, hasShown]);

  const scrollToTarget = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Once shown, always render to prevent layout shifts

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={hasShown ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-2 py-4 cursor-pointer group"
      onClick={scrollToTarget}
    >
      <Text
        as="span"
        variant="muted"
        size="md"
        className="md:text-base lg:text-lg group-hover:text-[#8B8CF6] transition-colors"
      >
        {label}
      </Text>
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
