"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Lightbulb } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Heading2, Text } from "@/components/ui/typography";

const icons = [
  // Web fundamentals
  { name: "HTML5", path: "/icons/html5.svg", description: "HTML5" },
  { name: "CSS3", path: "/icons/css3.svg", description: "CSS3" },
  {
    name: "JavaScript",
    path: "/icons/javascript.svg",
    description: "JavaScript",
  },
  {
    name: "TypeScript",
    path: "/icons/typescript.svg",
    description: "TypeScript",
  },

  // Frontend
  { name: "React", path: "/icons/react.svg", description: "React" },
  { name: "Next.js", path: "/icons/nextjs.svg", description: "Next.js" },
  {
    name: "Tailwind CSS",
    path: "/icons/tailwind.svg",
    description: "Tailwind CSS",
  },
  { name: "SASS", path: "/icons/sass.svg", description: "SASS" },

  // Backend
  { name: "Node.js", path: "/icons/nodejs.svg", description: "Node.js" },
  { name: "Express", path: "/icons/express.svg", description: "Express" },
  { name: "Python", path: "/icons/python.svg", description: "Python" },

  // Data & backend services
  { name: "Supabase", path: "/icons/supabase.svg", description: "Supabase" },
  { name: "Clerck", path: "/icons/clerck.svg", description: "Clerck" },
  { name: "Convex", path: "/icons/convex.svg", description: "Convex" },
  { name: "MySQL", path: "/icons/mysql.svg", description: "MySQL" },

  // DevOps / hosting
  { name: "Vercel", path: "/icons/vercel.svg", description: "Vercel" },

  // Testing & quality
  {
    name: "Playwright",
    path: "/icons/playwright.svg",
    description: "Playwright",
  },
  { name: "Postman", path: "/icons/postman.svg", description: "Postman" },

  // Product & analytics
  { name: "PostHog", path: "/icons/posthog.svg", description: "PostHog" },

  // Collaboration
  { name: "Git", path: "/icons/git.svg", description: "Git" },
  { name: "GitHub", path: "/icons/github.svg", description: "GitHub" },
  { name: "Jira", path: "/icons/jira.svg", description: "Jira" },

  // Workflow
  { name: "VS Code", path: "/icons/vscode.svg", description: "VS Code" },
  { name: "Cursor", path: "/icons/cursor.svg", description: "Cursor" },
  { name: "Notion", path: "/icons/notion.svg", description: "Notion" },
];

export default function Skills() {
  const [lightingIconIndex, setLightingIconIndex] = useState<number | null>(
    null
  );
  const [allLighting, setAllLighting] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  const handleLightUp = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setLightingIconIndex(null);
    setAllLighting(false);
    timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
    timeoutRefs.current = [];

    const totalIcons = icons.length;
    const delayBetweenIcons = 200;
    const iconLightDuration = 200;

    // Animate through each icon sequentially
    icons.forEach((_, index) => {
      const lightUpTimeout = setTimeout(() => {
        setLightingIconIndex(index);
      }, index * delayBetweenIcons);
      const lightDownTimeout = setTimeout(
        () => {
          setLightingIconIndex(null);
        },
        index * delayBetweenIcons + iconLightDuration
      );

      timeoutRefs.current.push(lightUpTimeout, lightDownTimeout);
    });
    const allLightUpTimeout = setTimeout(
      () => {
        setAllLighting(true);
        setLightingIconIndex(null);
      },
      totalIcons * delayBetweenIcons + iconLightDuration
    );

    const finishTimeout = setTimeout(
      () => {
        setAllLighting(false);
        setIsAnimating(false);
      },
      totalIcons * delayBetweenIcons + iconLightDuration + 600
    ); // All icons lit for 600ms

    timeoutRefs.current.push(allLightUpTimeout, finishTimeout);
  };

  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <Heading2 className="section-title mb-4">Skills</Heading2>
          <Text variant="muted">
            A snapshot of the technologies and tools I use to design, build,
            test, and ship production-ready web applications.
          </Text>
        </div>
        <div className="flex justify-center mb-8">
          <button
            onClick={handleLightUp}
            disabled={isAnimating}
            className={`group flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
              isAnimating
                ? "border-[#9CA3AF]/30 bg-[#111827] cursor-not-allowed opacity-70"
                : "border-[#8B8CF6]/60 bg-[#111827]/50 hover:border-[#8B8CF6] hover:bg-[#111827] cursor-pointer shadow-[0_0_15px_rgba(139,140,246,0.3)] hover:shadow-[0_0_25px_rgba(139,140,246,0.5)]"
            }`}
          >
            <Lightbulb
              className={`w-4 h-4 transition-colors ${
                isAnimating
                  ? "text-[#9CA3AF]"
                  : "text-[#8B8CF6] group-hover:text-[#A5B4FC]"
              }`}
            />
            <Text as="span" size="md">
              {isAnimating ? "Lighting up..." : "Click here to light them up!"}
            </Text>
          </button>
        </div>

        <TooltipProvider>
          <div className="flex flex-wrap justify-center gap-5 md:gap-6 mx-10">
            {icons.map((icon, index) => {
              const isLighting = allLighting || lightingIconIndex === index;
              return (
                <Tooltip key={icon.name}>
                  <TooltipTrigger asChild>
                    <button
                      className={`group relative w-16 h-16 md:w-19 md:h-19 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                        isLighting
                          ? "border-[#8B8CF6] bg-[#1a1f2e]"
                          : "border-[#111827] bg-[#111827] hover:border-[#8B8CF6] hover:bg-[#1a1f2e]"
                      } focus:outline-none focus:ring-2 focus:ring-[#8B8CF6] focus:ring-offset-2 focus:ring-offset-[#0B0F14]`}
                      style={{
                        boxShadow: isLighting
                          ? "0 0 20px rgba(139, 140, 246, 0.15)"
                          : "0 0 0 0 rgba(139, 140, 246, 0)",
                      }}
                      onMouseEnter={(e) => {
                        if (!isLighting) {
                          e.currentTarget.style.boxShadow =
                            "0 0 20px rgba(139, 140, 246, 0.15)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isLighting) {
                          e.currentTarget.style.boxShadow =
                            "0 0 0 0 rgba(139, 140, 246, 0)";
                        }
                      }}
                    >
                      <Image
                        src={icon.path}
                        alt={icon.name}
                        width={32}
                        height={32}
                        className={`w-8 h-8 object-contain transition-all duration-300 ${
                          isLighting
                            ? "brightness-0 invert sepia saturate-[10000%] hue-rotate-[240deg]"
                            : "group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-[10000%] group-hover:hue-rotate-[240deg]"
                        }`}
                        style={{
                          filter: isLighting
                            ? "brightness(0) invert(1) sepia(100%) saturate(10000%) hue-rotate(240deg)"
                            : "brightness(0) invert(1)",
                        }}
                        priority={false}
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-lg">{icon.description}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>

        <Text
          variant="muted"
          className="text-center md:text-center lg:text-right mt-16 max-w-2xl mx-auto lg:ml-auto lg:mr-0 italic"
        >
          This stack continues to evolve through practice, curiosity, and
          real-world work.
        </Text>
      </div>
    </section>
  );
}
