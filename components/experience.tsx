"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { Heading2, Heading3, Text } from "@/components/ui/typography";

type ExperienceItem = {
  title: string;
  period: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer I | Deepflow Labs",
    period: "Feb 2025 – Present · Remote",
    description:
      "At Deepflow Labs, I work as a Software Engineer building and shipping production features across a Next.js web app and a React Native iOS app. I’ve owned end-to-end systems that combine product UX with backend logic, including a timezone-aware daily reset pipeline that snapshots user progress before resetting at 4:00 AM local time, plus analytics charts powered by those snapshots. I’ve also improved reliability and release readiness by fixing real user edge cases—like supporting overnight scheduled sessions (11 PM–5 AM) and enforcing validation rules to prevent invalid schedules. To reduce debugging time, I instrumented PostHog client/server events and error tracking with Slack alerting, and I built Playwright E2E coverage for critical journeys. I was promoted from intern to Software Engineer I in about six months and have also mentored an intern through onboarding and PR reviews.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Heading2 className="section-title mb-4">Experience</Heading2>
          <Text variant="muted" size="lg">
            A journey through my professional growth, building products and
            solving problems across different teams and technologies.
          </Text>
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
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#111827] rounded-full"></div>
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[6px] rounded-full bg-[#8B8CF6] border-2 border-[#0B0F14] shadow-[0_0_12px_rgba(139,140,246,0.4)]"></div>
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
                  <Heading3 className="mb-2">
                    {exp.title.split(" | ")[0]}
                  </Heading3>
                  <Text
                    size="lg"
                    weight="semibold"
                    className="text-[#8B8CF6] mb-2"
                  >
                    {exp.title.split(" | ")[1]}
                  </Text>
                  <Text size="sm" variant="muted">
                    {exp.period}
                  </Text>
                </div>
                <Text size="lg">{exp.description}</Text>
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
          <a
            href="https://drive.google.com/file/d/1XHiOkju4w7qkGKgeR7YOlAo_K7Mta5hR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#8B8CF6]/60 hover:border-[#8B8CF6] hover:bg-[#8B8CF6]/10 text-[#8B8CF6] font-semibold rounded-lg transition-all duration-300 group shadow-[0_0_15px_rgba(139,140,246,0.2)] hover:shadow-[0_0_25px_rgba(139,140,246,0.5)]"
          >
            <FileText size={20} className="group-hover:stroke-[#8B8CF6]" />
            <Text
              as="span"
              size="md"
              className="group-hover:text-[#8B8CF6] transition-colors duration-300"
            >
              View full resume
            </Text>
            <ExternalLink
              size={16}
              className="group-hover:stroke-[#8B8CF6] opacity-70"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
