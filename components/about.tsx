"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Play, Check, RefreshCw } from "lucide-react";
import { Heading2, Text } from "@/components/ui/typography";

const paragraphs = [
  "I'm a software engineer with a physics background, which explains my patience for complex problems and my low tolerance for vague bugs. I switched from research to web development because I like building systems people can interact with, not just simulate.",
  "I work across the stack with TypeScript, React, Next.js, and Supabase, building features that span UI, data, and application logic. I care about how things behave in real usage: how state flows, how data is stored and queried, and how small decisions affect reliability over time.",
  "I enjoy writing tests, keeping docs alive, and making small improvements that quietly make a product better. Curiosity keeps me moving forward, and I'm always learning what's next.",
];

type ScanState = "idle" | "scanning" | "done" | "resetting";

export default function About() {
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [contentHeight, setContentHeight] = useState(0);
  const scanTargetRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (scanTargetRef.current) {
      setContentHeight(scanTargetRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleScanClick = () => {
    // Only allow clicking when in idle state
    if (scanState !== "idle") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setScanState("done");
      return;
    }
    setScanState("scanning");
    timeoutRef.current = setTimeout(() => {
      setScanState("done");
      timeoutRef.current = setTimeout(() => {
        setScanState("resetting");
        timeoutRef.current = setTimeout(() => {
          setScanState("idle");
        }, 800);
      }, 3000);
    }, 2500);
  };

  const isScanning = scanState === "scanning";
  const isDone = scanState === "done";
  const isResetting = scanState === "resetting";

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Heading2 className="section-title mb-4">About</Heading2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div
            ref={scanTargetRef}
            className="aboutScanTarget space-y-6 relative mb-10"
          >
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
                className="scan-line absolute left-0 right-0 h-1 z-50 pointer-events-none"
              />
            )}

            {paragraphs.map((text, index) => (
              <motion.div
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
                <Text>{text}</Text>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-3">
            <button
              onClick={handleScanClick}
              disabled={isScanning || isResetting || isDone}
              className={`magic-scan-button group flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                isScanning || isResetting || isDone
                  ? "border-[#9CA3AF]/30 bg-[#111827] cursor-not-allowed opacity-70"
                  : "border-[#9CA3AF]/30 bg-transparent hover:border-[#A5B4FC]/50 hover:bg-[#111827] cursor-pointer"
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
                  <RefreshCw className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#A5B4FC]" />
                ) : isResetting ? (
                  <motion.div
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    <RefreshCw className="w-4 h-4 text-[#9CA3AF]" />
                  </motion.div>
                ) : isDone ? (
                  <Check className="w-4 h-4 text-[#8B8CF6] group-hover:text-[#A5B4FC] transition-colors" />
                ) : (
                  <Play className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#A5B4FC]" />
                )}
              </motion.div>
              <Text as="span" size="md">
                {isScanning
                  ? "Scanning..."
                  : isResetting
                    ? "Resetting..."
                    : isDone
                      ? "No Bugs Found. Success!"
                      : "Click to see magic"}
              </Text>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
