"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  gitHubLink: string;
  liveLink?: string;
  image?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Kickoff",
    description:
      "A production-ready Next.js starter inspired by Twitter, built to remove common setup friction in modern web apps. It ships with authentication, SEO, analytics, Supabase integration, UI components, and end-to-end testing, so developers can focus on building features, not boilerplate.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Playwright",
      "PostHog",
    ],
    gitHubLink: "https://github.com/b-like-bahar/Kickoff.git",
    liveLink: "https://kickoffstudio.vercel.app/",
    image: "/projects-preview/kickoff-preview.png",
  },
  {
    id: 2,
    title: "JourneyNook",
    description:
      "A full-stack, AI-powered travel planning platform that simplifies trip planning through personalized, day-by-day itineraries. It uses AI to tailor recommendations based on budget, trip style, and duration, helping travelers plan faster while discovering destinations and practical travel details in one place.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "Knex.js",
      "OpenAI API",
      "Sass",
    ],
    gitHubLink: "https://github.com/b-like-bahar/JourneyNook.git",
    liveLink: "https://journeynook.netlify.app/",
    image: "/projects-preview/journeynook-preview.png",
  },
  {
    id: 3,
    title: "WebIdeasSprout",
    description:
      "A collaborative platform for sharing and discovering web application ideas, powered by Sanity CMS for structured content management. It allows users to publish project pitches, browse ideas by category, and search in real time, making it easier to find inspiration and validate early-stage concepts.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Sanity CMS",
      "NextAuth.js",
    ],
    gitHubLink: "https://github.com/b-like-bahar/WebIdeasSprout.git",
    liveLink: "https://webideassprout.vercel.app/",
    image: "/projects-preview/webideassprout-preview.png",
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "An earlier iteration of my personal portfolio, showcasing selected projects and technical skills. Designed as a clean, responsive single-page application with a focus on clarity and responsiveness.",
    technologies: ["React", "Sass", "tsParticles"],
    gitHubLink: "https://github.com/b-like-bahar/Portfolio.git",
    liveLink: "https://blikebahar.netlify.app/",
    image: "/projects-preview/oldportfolio-preview.png",
  },
  {
    id: 5,
    title: "MiniPyProjects",
    description:
      "A collection of small Python projects focused on problem-solving, game logic, and basic GUI development. Built as hands-on exercises to strengthen core programming concepts through practical experimentation.",
    technologies: ["Python", "Tkinter"],
    gitHubLink: "https://github.com/b-like-bahar/MiniPyProjects.git",
    image: "/projects-preview/minipyprojects-preview.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-5xl md:text-6xl font-bold text-[#E5E7EB] mb-4">
            Projects
          </h2>
          <p className="text-base md:text-2xl text-[#9CA3AF]">
            A selection of my more recent projects. Hover to explore details,
            tech stack, and live demos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="group relative bg-[#111827] p-6 rounded-lg border border-[#111827] hover:border-[#8B8CF6] transition-all duration-300 overflow-hidden"
              style={{
                boxShadow: "0 0 0 0 rgba(139, 140, 246, 0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(139, 140, 246, 0.15)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 0 0 rgba(139, 140, 246, 0)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="relative w-full aspect-[16/10] rounded mb-4 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#0B0F14]">
                    <span className="text-[#9CA3AF] text-base">
                      Project Image
                    </span>
                  </div>
                )}
              </div>
              <h4 className="text-2xl md:text-3xl font-semibold mb-3 text-[#E5E7EB] group-hover:text-[#8B8CF6] transition-colors duration-300">
                {project.title}
              </h4>

              {/* Overlay that slides up on hover with title, description, and links */}
              <div className="absolute inset-0 bg-[#111827] p-6 md:p-8 rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col overflow-y-auto">
                <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-[#8B8CF6]">
                  {project.title}
                </h4>
                <p className="text-base md:text-lg text-[#9CA3AF] mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-4">
                    <p className="text-base md:text-lg font-medium text-[#E5E7EB] mb-3">
                      Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 text-sm md:text-base bg-[#0B0F14] text-[#E5E7EB] rounded border border-[#111827]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-4 mt-auto pt-4">
                  <Link
                    href={project.gitHubLink}
                    target="_blank"
                    className="flex items-center gap-2 text-base text-[#9CA3AF] hover:text-[#8B8CF6] transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </Link>
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center gap-2 text-base text-[#9CA3AF] hover:text-[#8B8CF6] transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      <span>Live</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
