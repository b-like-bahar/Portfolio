"use client";

import { motion } from "framer-motion";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function Hero() {
  const smoothScrollTo = (element: HTMLElement, duration: number = 2000) => {
    const start = window.pageYOffset;
    const target = element.offsetTop - 100; // Offset for navigation
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

  const handleScrollClick = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      smoothScrollTo(skillsSection, 100);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      <ShaderGradientCanvas
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
        pixelDensity={1.5}
        fov={45}
      >
        <ShaderGradient
          animate="on"
          brightness={1}
          cAzimuthAngle={180}
          cDistance={3.6}
          cPolarAngle={90}
          cameraZoom={1}
          color1="#000000"
          color2="#23a1db"
          color3="#e1bfec"
          envPreset="city"
          grain="on"
          lightType="3d"
          positionX={-1.4}
          positionY={0}
          positionZ={0}
          reflection={0.1}
          rotationX={0}
          rotationY={10}
          rotationZ={50}
          shader="defaults"
          type="plane"
          uAmplitude={1}
          uDensity={2}
          uFrequency={5.5}
          uSpeed={0.4}
          uStrength={2.5}
          wireframe={false}
          enableCameraUpdate={false}
        />
      </ShaderGradientCanvas>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          Bahar Hamzeh
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 mb-12"
        >
          Software Engineer & App Developer.
        </motion.h2>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={handleScrollClick}
          className="mx-auto w-[60px] h-[72px] cursor-pointer group"
          aria-label="Scroll to next section"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 60 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="a1 stroke-[#2994D1] fill-transparent stroke-[2.5px] animate-[arrow_2s_infinite]"
              style={{ animationDelay: "-1s" }}
              d="M0 0 L30 32 L60 0"
            />
            <path
              className="a2 stroke-[#2994D1] fill-transparent stroke-[2.5px] animate-[arrow_2s_infinite]"
              style={{ animationDelay: "-0.5s" }}
              d="M0 20 L30 52 L60 20"
            />
            <path
              className="a3 stroke-[#2994D1] fill-transparent stroke-[2.5px] animate-[arrow_2s_infinite]"
              style={{ animationDelay: "0s" }}
              d="M0 40 L30 72 L60 40"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}
