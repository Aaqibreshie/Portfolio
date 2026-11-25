import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export function ReactIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="12" fill="#F7DF1E" />
      <path
        d="M18 48.5c1.5 2.5 4 4 7.5 4 4.5 0 7.5-2.5 7.5-7.5V26h-6.5v18.5c0 2-1 3-2.5 3-1.5 0-2.5-1-3-2.5l-3 3.5zm21-2.5c1.5 2.5 4.5 4.5 8.5 4.5 4 0 7-2 7-5.5 0-4-3-5.5-7.5-7-5-2-7.5-4-7.5-8.5 0-4 3.5-7 8.5-7 3.5 0 6.5 1.5 8 3.5l-3 4c-1-1.5-2.5-2.5-5-2.5-2.5 0-4 1.5-4 3.5 0 3 2.5 4 6.5 5.5 5.5 2 8.5 4.5 8.5 9 0 5-4 8-9.5 8-4.5 0-8-2-9.5-5l3-3.5z"
        fill="#000000"
      />
    </svg>
  );
}

export function PythonIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path
        fill="#3776AB"
        d="M63.7 3.1c-16 0-30 2.2-30 14.5v10.9h30.6v3.6H22.1C8.7 32.1 0 42.1 0 62.4c0 19.3 7.8 30.6 22.1 30.6h7.3v-10.9c0-12.8 11.2-24 24-24h30.6c11.7 0 21.8-9.5 21.8-21.8V17.6c0-12.3-13.4-14.5-30-14.5h-12.1zm-8.8 8.7c2.6 0 4.8 2.2 4.8 4.8 0 2.6-2.2 4.8-4.8 4.8s-4.8-2.2-4.8-4.8c0-2.6 2.2-4.8 4.8-4.8z"
      />
      <path
        fill="#FFD43B"
        d="M64.3 124.9c16 0 30-2.2 30-14.5V99.5H63.7v-3.6h42.2c13.4 0 22.1-10 22.1-30.3 0-19.3-7.8-30.6-22.1-30.6h-7.3v10.9c0 12.8-11.2 24-24 24H44c-11.7 0-21.8 9.5-21.8 21.8v18.2c0 12.3 13.4 14.5 30 14.5h12.1zm8.8-8.7c-2.6 0-4.8-2.2-4.8-4.8 0-2.6 2.2-4.8 4.8-4.8s4.8 2.2 4.8 4.8c0 2.6-2.2 4.8-4.8 4.8z"
      />
    </svg>
  );
}

export function NodeIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path
        fill="#539E43"
        d="M64 4.5L14 33.4v57.8L64 120l50-28.8V33.4L64 4.5zm-5.7 87.2c-15.6 0-22.8-8.3-22.8-20.7 0-13.1 8.5-20.4 23.3-20.4 8.7 0 15 2.1 19.3 5.4l-4.7 6.4c-3.6-2.6-8.7-4.1-14.3-4.1-9.9 0-15.1 4.5-15.1 12.7 0 8.3 5.3 12.9 14.7 12.9 8.8 0 14.8-3.4 17.5-6.2l3.8 6.4c-4.4 4.5-12.2 7.6-21.7 7.6zm38.1.1l-6.8-9.8-6.6 9.8h-9.5l11.4-16.1-11.1-15.5h9.7l6.3 9.4 6.3-9.4h9.5l-11.1 15.6 11.5 16h-9.6z"
      />
    </svg>
  );
}

export function ExpressIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="28" fill="#111827" stroke="#374151" strokeWidth="4" />
      <text
        x="64"
        y="78"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize="34"
        fontWeight="800"
        fill="#FFFFFF"
        textAnchor="middle"
        letterSpacing="-1"
      >
        ex
      </text>
      <circle cx="95" cy="50" r="5" fill="#38BDF8" />
    </svg>
  );
}

export function MongoDBIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path
        fill="#47A248"
        d="M64 4c-3.1 7.4-23.7 35.8-23.7 65 0 25.4 16.8 45.4 23.7 55 6.9-9.6 23.7-29.6 23.7-55C87.7 39.8 67.1 11.4 64 4z"
      />
      <path
        fill="#3FA037"
        d="M64 4v120c6.9-9.6 23.7-29.6 23.7-55C87.7 39.8 67.1 11.4 64 4z"
      />
      <path
        fill="#FFFFFF"
        d="M64 45v60c0 4.2-.8 8.1-2 11.8 1.4-1.9 2-4.2 2-6.8V45z"
        opacity="0.3"
      />
    </svg>
  );
}

export function NumPyIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <defs>
        <linearGradient id="npGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4DABCF" />
          <stop offset="100%" stopColor="#013243" />
        </linearGradient>
      </defs>
      <rect width="128" height="128" rx="28" fill="url(#npGrad)" />
      {/* 3D Grid matrix lines */}
      <path d="M28 40h72M28 64h72M28 88h72M44 28v72M64 28v72M84 28v72" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />
      <text
        x="64"
        y="75"
        fontFamily="monospace"
        fontSize="34"
        fontWeight="900"
        fill="#ffffff"
        textAnchor="middle"
      >
        NP
      </text>
    </svg>
  );
}

export function PandasIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="28" fill="#130654" />
      {/* Geometric modern data bars */}
      <rect x="30" y="32" width="16" height="64" rx="8" fill="#FFD43B" />
      <rect x="56" y="24" width="16" height="80" rx="8" fill="#E70488" />
      <rect x="82" y="44" width="16" height="52" rx="8" fill="#00D2FF" />
    </svg>
  );
}

export function CloudinaryIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="28" fill="#0B132B" stroke="#3448C5" strokeWidth="2" />
      <path
        fill="#3448C5"
        d="M87 48c-1.3-11.8-11.2-21-23.2-21-9.4 0-17.5 5.6-21.2 13.7C40.6 41.2 38.3 41 36 41c-13.8 0-25 11.2-25 25s11.2 25 25 25h50c12.7 0 23-10.3 23-23 0-12.2-9.5-22.1-21.5-22.9-.2-.7-.3-1.4-.5-2.1z"
      />
      <circle cx="64" cy="62" r="10" fill="#38BDF8" />
      <path d="M54 62h20M64 52v20" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function MulterIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="28" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
      {/* Multi-part file upload streaming icon */}
      <rect x="32" y="42" width="64" height="48" rx="10" fill="none" stroke="#38BDF8" strokeWidth="4" />
      <path d="M44 32h40l8 10H36z" fill="#0284C7" />
      <path d="M64 54v24M54 64l10-10 10 10" stroke="#34D399" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="80" cy="74" r="3" fill="#38BDF8" />
    </svg>
  );
}

export function PostmanIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="28" fill="#FF6C37" />
      <circle cx="64" cy="64" r="34" fill="#FFFFFF" />
      <path
        fill="#FF6C37"
        d="M64 42c-12.2 0-22 9.8-22 22s9.8 22 22 22 22-9.8 22-22-9.8-22-22-22zm-4 12c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm8 24h-8v-4h8v4zm0-8h-8V58h8v12z"
      />
    </svg>
  );
}

export function Html5Icon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path fill="#E34F26" d="M19 116.5L9 4h110l-10 112.5L64 128z" />
      <path fill="#EF652A" d="M64 118V14h46l-8.5 95z" />
      <path
        fill="#ECECEC"
        d="M64 46H43.5l1.5 17h19v17H46l1.5 17 16.5 4.5V113l-30-8-3-33h19.5v-17H31L28 14h36v32z"
      />
      <path
        fill="#FFFFFF"
        d="M64 46h20.5l-2 22.5L64 73v17l16.5-4.5 1.5-17.5h11l-3 33-26 8v-11.5zM64 14v32h36l2-32z"
      />
    </svg>
  );
}

export function Css3Icon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path fill="#1572B6" d="M19 116.5L9 4h110l-10 112.5L64 128z" />
      <path fill="#33A9DC" d="M64 118V14h46l-8.5 95z" />
      <path
        fill="#ECECEC"
        d="M64 46H43.5l1.5 17h19v17H46l1.5 17 16.5 4.5V113l-30-8-3-33h19.5v-17H31L28 14h36v32z"
      />
      <path
        fill="#FFFFFF"
        d="M64 46h20.5l-2 22.5L64 73v17l16.5-4.5 1.5-17.5h11l-3 33-26 8v-11.5zM64 14v32h36l2-32z"
      />
    </svg>
  );
}

export function TailwindIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="28" fill="#0B1120" stroke="#0EA5E9" strokeWidth="2" />
      <path
        fill="#38BDF8"
        d="M64 36c-16 0-26 8-30 24 6-8 13.5-11 22.5-9 5.1 1.1 8.8 4.9 12.8 9 6.6 6.7 14.2 14.5 30.7 14.5 16 0 26-8 30-24-6 8-13.5 11-22.5 9-5.1-1.1-8.8-4.9-12.8-9-6.6-6.7-14.2-14.5-30.7-14.5zm-30 27c-16 0-26 8-30 24 6-8 13.5-11 22.5-9 5.1 1.1 8.8 4.9 12.8 9 6.6 6.7 14.2 14.5 30.7 14.5 16 0 26-8 30-24-6 8-13.5 11-22.5 9-5.1-1.1-8.8-4.9-12.8-9-6.6-6.7-14.2-14.5-30.7-14.5z"
      />
    </svg>
  );
}

export function NextJsIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="62" fill="#000000" stroke="#334155" strokeWidth="2" />
      <path
        fill="#FFFFFF"
        d="M87.5 96.5L48.2 46H39v36h6V54.4l36.5 47c2-.8 3.9-1.8 5.7-3z"
      />
      <path fill="url(#nextGrad)" d="M82 46h6v36h-6z" />
      <defs>
        <linearGradient id="nextGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AntigravityIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="28" fill="#0A0F1D" stroke="#06B6D4" strokeWidth="2" />
      <circle cx="64" cy="64" r="14" fill="#06B6D4" />
      <circle cx="64" cy="64" r="28" fill="none" stroke="#38BDF8" strokeWidth="3" strokeDasharray="6 6" />
      <circle cx="64" cy="64" r="42" fill="none" stroke="#22D3EE" strokeWidth="1.5" opacity="0.6" />
      <circle cx="64" cy="22" r="5" fill="#34D399" />
      <circle cx="106" cy="64" r="5" fill="#38BDF8" />
    </svg>
  );
}

export function RedisIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="28" fill="#1C1917" stroke="#DC382D" strokeWidth="2" />
      <path
        fill="#DC382D"
        d="M64 26l38 18-38 18-38-18 38-18zm0 28l38 18v16l-38 18-38-18V72l38-18zm0 28l38 18-38 18-38-18 38-18z"
      />
    </svg>
  );
}
