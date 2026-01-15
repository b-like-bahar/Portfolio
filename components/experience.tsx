"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import Link from "next/link";

type ExperienceItem = {
  title: string;
  period: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer | Deepflow Labs",
    period: "Feb 2025 – Present · Remote",
    description:
      "Contributed to the development of a focus and productivity platform, working across both user-facing features and backend workflows with an emphasis on reliability and data correctness. I built core functionality such as configurable focus timers, scheduling, website blocking, and progress visualization, allowing users to track their productivity over time. I designed and implemented a timezone-aware daily reset system that snapshots user activity before resetting counters, preserving historical data for analytics while ensuring a clean start each day. I also added comprehensive end-to-end tests using Playwright to cover critical flows across the application, and collaborated closely with backend engineers to build scalable, cron-based systems.",
  },
  {
    title: "Front-End Developer | TaifGostar",
    period: "Sep 2021 – Sep 2024 · Remote",
    description:
      "Worked on a student-focused web platform, building and maintaining core UI features used across dashboards, registration flows, and performance views. I developed a reusable UI system using vanilla JavaScript, HTML, and SASS, and integrated REST APIs to display student progress and leaderboard data in real time. Alongside feature development, I contributed to debugging, cross-browser compatibility improvements, and code reviews to improve overall stability and quality. I also wrote internal documentation to support planning, onboarding, and clearer collaboration within the team.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#E5E7EB] mb-4">
            Experience
          </h2>
          <p className="text-base md:text-2xl text-[#9CA3AF]">
            A journey through my professional growth, building products and
            solving problems across different teams and technologies.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#111827] rounded-full"></div>

              {/* Timeline dot with glow */}
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[6px] rounded-full bg-[#8B8CF6] border-2 border-[#0B0F14] shadow-[0_0_12px_rgba(139,140,246,0.4)]"></div>

              {/* Card container */}
              <div
                className="bg-[#111827] p-6 md:p-8 rounded-lg border border-[#111827] hover:border-[#8B8CF6] transition-all duration-300"
                style={{
                  boxShadow: "0 0 0 0 rgba(139, 140, 246, 0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(139, 140, 246, 0.15)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 0 0 rgba(139, 140, 246, 0)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#E5E7EB]">
                    {exp.title.split(" | ")[0]}
                  </h3>
                  <p className="text-xl md:text-2xl font-semibold text-[#8B8CF6] mb-2">
                    {exp.title.split(" | ")[1]}
                  </p>
                  <p className="text-base md:text-lg text-[#9CA3AF]">
                    {exp.period}
                  </p>
                </div>
                <p className="text-base md:text-lg text-[#E5E7EB] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-[#8B8CF6] transition-colors duration-300 group"
          >
            <FileText size={20} className="group-hover:stroke-[#8B8CF6]" />
            <span className="text-base md:text-lg">View full resume</span>
            <ExternalLink
              size={16}
              className="group-hover:stroke-[#8B8CF6] opacity-70"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
