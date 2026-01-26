import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import ScrollToTop from "@/components/scroll-to-top";
import AnimatedSeparator from "@/components/animated-separator";
import ScrollIndicator from "@/components/scroll-indicator";
import ScrollProgress from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Bahar Hamzeh | Software Engineer",
  description:
    "Software engineer with a physics background. I design and build scalable web applications with a focus on quality, usability, and clean abstractions.",
  keywords: [
    "software engineer",
    "web developer",
    "Next.js",
    "React",
    "TypeScript",
    "full-stack developer",
    "portfolio",
  ],
  authors: [{ name: "Bahar Hamzeh" }],
  openGraph: {
    title: "Bahar Hamzeh | Software Engineer",
    description:
      "Software engineer with a physics background. I design and build scalable web applications with a focus on quality and usability.",
    type: "website",
    locale: "en_US",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <ScrollIndicator targetId="about" label="About Me" />
      <AnimatedSeparator />
      <About />
      <ScrollIndicator targetId="skills" label="Explore Skills" />
      <AnimatedSeparator />
      <Skills />
      <ScrollIndicator targetId="projects" label="View Projects" />
      <AnimatedSeparator />
      <Projects />
      <ScrollIndicator targetId="experience" label="My Experience" />
      <AnimatedSeparator />
      <Experience />
      <ScrollIndicator targetId="contact" label="Get in Touch" />
      <AnimatedSeparator />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
