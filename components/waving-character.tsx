import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

export default function WavingCharacter({ className = "", ...props }: Props) {
  return (
    <svg
      viewBox="0 0 240 320"
      fill="none"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`waving-character ${className}`}
      {...props}
    >
      {/* Head */}
      <circle cx="110" cy="80" r="44" className="head-circle" />

      {/* Face */}
      <circle cx="95" cy="75" r="4" fill="currentColor" stroke="none" />
      <circle cx="125" cy="75" r="4" fill="currentColor" stroke="none" />
      <path d="M95 95 Q110 110 125 95" strokeWidth="8" />

      {/* Body */}
      <line x1="110" y1="125" x2="110" y2="235" className="body-line" />
      <path d="M95 240 Q110 250 125 240" strokeWidth="8" />

      {/* Left arm (down) */}
      <g className="arm arm-left">
        <path d="M110 150 Q85 190 75 225" />
        <path d="M75 225 Q82 228 87 222" strokeWidth="8" />
      </g>

      {/* Right arm (waving) */}
      <g className="arm arm-right">
        {/* Upper+forearm */}
        <path d="M110 150 Q150 120 170 95" />
        <path d="M170 95 Q182 78 190 72" />
        {/* Hand */}
        <path d="M190 72 Q200 82 206 94" strokeWidth="8" />
        <path d="M190 72 Q196 62 206 60" strokeWidth="8" />
        <path d="M190 72 Q188 60 196 54" strokeWidth="8" />
      </g>

      {/* Legs */}
      <path d="M110 235 Q95 270 90 300" />
      <path d="M110 235 Q125 270 130 300" />
      <path d="M90 300 Q75 300 65 300" strokeWidth="8" />
      <path d="M130 300 Q145 300 155 300" strokeWidth="8" />

      {/* Waving motion lines */}
      <g className="wave-lines">
        <path d="M205 62 Q220 72 224 88" strokeWidth="6" />
        <path d="M185 58 Q200 66 206 80" strokeWidth="6" />
      </g>

      {/* Ground shadow */}
      <ellipse
        cx="120"
        cy="308"
        rx="80"
        ry="10"
        opacity="0.12"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
