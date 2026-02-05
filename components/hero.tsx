"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactOptions from "@/components/contact-options";
import { Heading1, Heading2, Text } from "@/components/ui/typography";
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
      className="min-h-screen flex flex-col lg:flex-row relative bg-[#0B0F14] mt-6"
    >
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-12 lg:pl-16 pt-20 sm:pt-24 md:pt-28 lg:pt-24 pb-2 sm:pb-4 md:pb-6 lg:pb-0 bg-[#0B0F14]">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <Text size="lg" weight="bold" className="text-[#8B8CF6] mb-2">
              Hi,
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Heading1 className="mb-2 text-[#8B8CF6]">
              I'm Bahar Hamzeh
            </Heading1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heading2 className="mb-4 sm:mb-6 text-[#8B8CF6]">
              Software Engineer
            </Heading2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Text variant="muted" size="lg" className="mb-6 sm:mb-8 max-w-xl">
              I design and build scalable web applications with a focus on
              quality and usability. I care about clean abstractions,
              maintainable systems, and writing code that's tested, documented,
              and ready to ship.
            </Text>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={handleContactClick}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#8B8CF6] hover:bg-[#A5B4FC] text-[#0B0F14] font-semibold rounded-lg transition-colors duration-300 text-lg"
            >
              Let's talk
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <a
                href="https://drive.google.com/file/d/1WZS-68HFYR1lHZFdVOJcL879lK_6z4Qu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#8B8CF6]/60 hover:border-[#8B8CF6] hover:bg-[#8B8CF6]/10 text-[#8B8CF6] font-semibold rounded-lg transition-all duration-300 text-lg text-center shadow-[0_0_15px_rgba(139,140,246,0.2)] hover:shadow-[0_0_25px_rgba(139,140,246,0.5)]"
              >
                View Full Resume
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ContactOptions />
          </motion.div>
        </div>
      </div>
      <div className="flex-1 relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-8 pt-2 sm:pt-4 md:pt-6 lg:pt-0 pb-8 sm:pb-12 lg:pb-0 bg-[#0B0F14] overflow-visible lg:overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] lg:-mr-16">
            <div
              className="absolute inset-0 rounded-full -m-8 lg:m-0"
              style={{
                background:
                  "radial-gradient(circle, #8B8CF6 0%, #8B8CF6 40%, transparent 70%)",
                filter: "blur(40px)",
                opacity: 0.6,
              }}
            />
            <div
              className="absolute inset-0 rounded-full border-4 sm:border-6 lg:border-8 border-[#8B8CF6]"
              style={{
                boxShadow:
                  "0 0 60px rgba(139, 140, 246, 0.5), inset 0 0 60px rgba(139, 140, 246, 0.2)",
              }}
            />
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
