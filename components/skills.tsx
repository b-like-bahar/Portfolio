"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="section-title text-5xl md:text-6xl font-bold text-[#E5E7EB] mb-4">
            Skills
          </h2>
          <p className="text-base md:text-2xl text-[#9CA3AF]">
            A snapshot of the technologies and tools I use to design, build,
            test, and ship production-ready web applications.
          </p>
        </div>
        <TooltipProvider>
          <div className="flex flex-wrap justify-center gap-5 md:gap-6 mx-10">
            {icons.map((icon) => (
              <Tooltip key={icon.name}>
                <TooltipTrigger asChild>
                  <button
                    className="group relative w-16 h-16 md:w-19 md:h-19 rounded-lg bg-[#111827] border border-[#111827] flex items-center justify-center transition-all duration-300 hover:border-[#8B8CF6] hover:bg-[#1a1f2e] focus:outline-none focus:ring-2 focus:ring-[#8B8CF6] focus:ring-offset-2 focus:ring-offset-[#0B0F14]"
                    style={{
                      boxShadow: "0 0 0 0 rgba(139, 140, 246, 0)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 20px rgba(139, 140, 246, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 0 0 rgba(139, 140, 246, 0)";
                    }}
                  >
                    <Image
                      src={icon.path}
                      alt={icon.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-[10000%] group-hover:hue-rotate-[240deg]"
                      style={{
                        filter: "brightness(0) invert(1)",
                      }}
                      priority={false}
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-lg">{icon.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        <p className="text-center md:text-center lg:text-right text-lg md:text-xl lg:text-2xl text-[#9CA3AF] mt-16 max-w-2xl mx-auto lg:ml-auto lg:mr-0 italic">
          This stack continues to evolve through practice, curiosity, and
          real-world work.
        </p>
      </div>
    </section>
  );
}
