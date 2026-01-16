"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Play, Check, Sparkles } from "lucide-react";

const paragraphs = [
  "I'm a software engineer with a physics background, which explains my patience for complex problems and my low tolerance for vague bugs. I switched from research to web development because I like building systems people can interact with, not just simulate.",
  "I work across the stack with TypeScript, React, Next.js, and Supabase, building features that span UI, data, and application logic. I care about how things behave in real usage: how state flows, how data is stored and queried, and how small decisions affect reliability over time.",
  "I enjoy writing tests, keeping docs alive, and making small improvements that quietly make a product better. Curiosity keeps me moving forward, and I'm always learning what's next.",
];

type ScanState = "idle" | "scanning" | "done";

export default function About() {
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [contentHeight, setContentHeight] = useState(0);
  const scanTargetRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Calculate content height when component mounts
    if (scanTargetRef.current) {
      setContentHeight(scanTargetRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleScanClick = () => {
    if (scanState === "scanning") return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Skip animation, go straight to done
      setScanState("done");
      return;
    }

    // Start scanning
    setScanState("scanning");

    // Transition to done after scan animation completes (2500ms)
    timeoutRef.current = setTimeout(() => {
      setScanState("done");
    }, 2500);
  };

  const handleReplay = () => {
    if (scanState === "done") {
      setScanState("idle");
    }
  };

  const isScanning = scanState === "scanning";
  const isDone = scanState === "done";

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-5xl md:text-6xl font-bold text-[#E5E7EB] mb-4">
            About
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Scan target wrapper */}
          <div
            ref={scanTargetRef}
            className="aboutScanTarget space-y-6 text-base md:text-lg lg:text-xl text-[#E5E7EB] leading-relaxed relative overflow-hidden mb-8"
          >
            {/* Scan line overlay */}
            {isScanning && contentHeight > 0 && (
              <motion.div
                initial={{ top: -10 }}
                animate={{
                  top: [-10, contentHeight + 10, -10, contentHeight + 10],
                }}
                transition={{
                  duration: 2.5,
                  times: [0, 0.33, 0.66, 1],
                  ease: "easeInOut",
                }}
                className="scan-line absolute left-0 right-0 h-1 z-10 pointer-events-none"
              />
            )}

            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* CTA Button Row */}
          <div className="flex justify-center items-center gap-3">
            {!isDone ? (
              <button
                onClick={handleScanClick}
                disabled={isScanning}
                className={`magic-scan-button group flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  isScanning
                    ? "border-[#9CA3AF]/30 bg-[#111827] cursor-not-allowed"
                    : "border-[#9CA3AF]/30 bg-transparent hover:border-[#A5B4FC]/50 hover:bg-[#111827]"
                }`}
              >
                <motion.div
                  animate={isScanning ? { rotate: 360 } : {}}
                  transition={
                    isScanning
                      ? { duration: 2, repeat: Infinity, ease: "linear" }
                      : {}
                  }
                >
                  {isScanning ? (
                    <Sparkles className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#A5B4FC]" />
                  ) : (
                    <Play className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#A5B4FC]" />
                  )}
                </motion.div>
                <span className="text-sm text-[#E5E7EB]">
                  {isScanning ? "Scanning..." : "Click to see magic"}
                </span>
              </button>
            ) : (
              <button
                onClick={handleReplay}
                className="magic-scan-button-done flex items-center gap-2 px-4 py-2 rounded-lg border border-[#8B8CF6] bg-[#111827] hover:bg-[#1a1f2e] transition-all duration-300"
              >
                <Check className="w-4 h-4 text-[#8B8CF6]" />
                <span className="text-sm text-[#E5E7EB]">
                  Nothing broke. Success!
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
