"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

type ContactOptionsProps = {
  className?: string;
};

export default function ContactOptions({
  className = "",
}: ContactOptionsProps) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.boxShadow = "0 0 20px rgba(139, 140, 246, 0.2)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.boxShadow = "0 0 0 0 rgba(139, 140, 246, 0)";
  };

  const iconStyle = {
    boxShadow: "0 0 0 0 rgba(139, 140, 246, 0)",
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link
        href="https://github.com/b-like-bahar"
        target="_blank"
        className="group relative w-12 h-12 rounded-full border-2 border-[#E5E7EB] flex items-center justify-center text-[#E5E7EB] hover:border-[#8B8CF6] hover:text-[#8B8CF6] transition-all duration-300"
        style={iconStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="GitHub"
      >
        <Github size={25} className="transition-colors duration-300" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/bahareh-hamzeh"
        target="_blank"
        className="group relative w-12 h-12 rounded-full border-2 border-[#E5E7EB] flex items-center justify-center text-[#E5E7EB] hover:border-[#8B8CF6] hover:text-[#8B8CF6] transition-all duration-300"
        style={iconStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="LinkedIn"
      >
        <Linkedin size={20} className="transition-colors duration-300" />
      </Link>
      <Link
        href="mailto:blikebahar76@gmail.com"
        className="group relative w-12 h-12 rounded-full border-2 border-[#E5E7EB] flex items-center justify-center text-[#E5E7EB] hover:border-[#8B8CF6] hover:text-[#8B8CF6] transition-all duration-300"
        style={iconStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Email"
      >
        <Mail size={20} className="transition-colors duration-300" />
      </Link>
    </div>
  );
}
