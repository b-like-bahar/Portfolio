"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactOptions from "@/components/contact-options";
export default function Hero() {
  const smoothScrollTo = (element: HTMLElement, duration: number = 2000) => {
    const start = window.pageYOffset;
    const target = element.offsetTop - 100;
    const distance = target - start;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, start + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      smoothScrollTo(contactSection, 100);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-[#0B0F14]"
    >
      {/* Left Side - Text Content */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-12 lg:pl-16 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-4 sm:pb-6 md:pb-8 lg:pb-24">
        <div className="max-w-2xl">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 text-[#8B8CF6]"
          >
            I'm Bahar Hamzeh
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6 text-[#8B8CF6]"
          >
            Software Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#9CA3AF] mb-6 sm:mb-8 leading-relaxed max-w-xl"
          >
            I design and build scalable web applications with a focus on quality
            and usability. I care about clean abstractions, maintainable
            systems, and writing code that’s tested, documented, and ready to
            ship.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={handleContactClick}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#8B8CF6] hover:bg-[#A5B4FC] text-[#0B0F14] font-semibold rounded-lg transition-colors duration-300 mb-8 sm:mb-12 text-sm sm:text-base"
          >
            Let's talk
          </motion.button>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ContactOptions />
          </motion.div>
        </div>
      </div>

      {/* Right Side - Image with Glowing Circular Frame */}
      <div className="flex-1 relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-8 sm:pt-6 md:pt-8 lg:pt-0 pb-8 sm:pb-12 lg:pb-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Large circular frame with glow - extends beyond edges */}
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] lg:-mr-16">
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, #8B8CF6 0%, #8B8CF6 40%, transparent 70%)",
                filter: "blur(40px)",
                opacity: 0.6,
              }}
            />

            {/* Circular frame border */}
            <div
              className="absolute inset-0 rounded-full border-4 sm:border-6 lg:border-8 border-[#8B8CF6]"
              style={{
                boxShadow:
                  "0 0 60px rgba(139, 140, 246, 0.5), inset 0 0 60px rgba(139, 140, 246, 0.2)",
              }}
            />

            {/* Image container with circular clip */}
            <div className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-full overflow-hidden bg-[#8B8CF6]">
              <Image
                src="/hero-image.png"
                alt="Bahar Hamzeh"
                fill
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
                priority
                sizes="(max-width: 768px) 350px, 450px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
