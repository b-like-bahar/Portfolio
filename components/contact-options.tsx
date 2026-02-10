"use client";

import Link from "next/link";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const RESUME_URL =
  "https://drive.google.com/file/d/1XHiOkju4w7qkGKgeR7YOlAo_K7Mta5hR/view?usp=sharing";

type ContactOptionsProps = {
  className?: string;
  showResume?: boolean;
};

export default function ContactOptions({
  className = "",
  showResume = false,
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

  const iconClassName =
    "group relative w-12 h-12 rounded-full border-2 border-[#E5E7EB] flex items-center justify-center text-[#E5E7EB] hover:border-[#8B8CF6] hover:text-[#8B8CF6] transition-all duration-300";

  return (
    <TooltipProvider delayDuration={150} skipDelayDuration={300}>
      <div className={`flex items-center gap-4 ${className}`}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://github.com/b-like-bahar"
              target="_blank"
              className={iconClassName}
              style={iconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label="GitHub"
            >
              <Github size={25} className="transition-colors duration-300" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>GitHub</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://www.linkedin.com/in/bahareh-hamzeh"
              target="_blank"
              className={iconClassName}
              style={iconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="transition-colors duration-300" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>LinkedIn</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="mailto:blikebahar76@gmail.com"
              className={iconClassName}
              style={iconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label="Email"
            >
              <Mail size={20} className="transition-colors duration-300" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Email</TooltipContent>
        </Tooltip>
        {showResume && (
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={iconClassName}
                style={iconStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-label="Resume"
              >
                <FileText size={20} className="transition-colors duration-300" />
              </a>
            </TooltipTrigger>
            <TooltipContent>Resume</TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  );
}
