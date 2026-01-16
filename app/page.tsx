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
