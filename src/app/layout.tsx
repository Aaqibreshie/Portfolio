import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://aaqibreshie.vercel.app";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aaqib Nabi Reshie — Front-End & Full-Stack MERN Developer | Agentic AI Engineer",
    template: "%s | Aaqib Nabi Reshie",
  },
  description:
    "Portfolio of Aaqib Nabi Reshie: Front-End & MERN Stack Developer with 9+ months teaching experience at ILS & Swift ITI. Building responsive production web apps with React, Next.js 15, Node.js, and Google Antigravity agentic workflows.",
  applicationName: "Aaqib Nabi Reshie Portfolio",
  authors: [
    {
      name: "Aaqib Nabi Reshie",
      url: "https://github.com/Aaqibreshie",
    },
  ],
  generator: "Next.js 15",
  keywords: [
    "Aaqib Nabi Reshie",
    "Front-End Developer",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "React.js Developer",
    "Next.js 15 Developer",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "Agentic AI Engineer",
    "Google Antigravity",
    "Agentic Code",
    "TypeScript",
    "Tailwind CSS v4",
    "Framer Motion",
    "Three.js 3D Portfolio",
    "ILS MERN Trainer",
    "Swift ITI Instructor",
    "VTU Computer Science",
    "Srinagar Developer",
    "Kashmir Web Developer",
  ],
  creator: "Aaqib Nabi Reshie",
  publisher: "Aaqib Nabi Reshie",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Aaqib Nabi Reshie — Developer Portfolio",
    title: "Aaqib Nabi Reshie — Front-End & Full-Stack MERN Developer",
    description:
      "Crafting fluid, high-performance production web apps with Next.js 15, MERN Stack & Google Antigravity agentic AI workflows. Explore verified projects & live interactive terminal.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aaqib Nabi Reshie — Front-End & Full-Stack MERN Developer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaqib Nabi Reshie — Front-End & Full-Stack MERN Developer",
    description:
      "Crafting fluid, high-performance production web apps with Next.js 15, MERN Stack & Google Antigravity agentic AI workflows.",
    images: ["/og-image.png"],
    creator: "@aaqibreshie",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aaqib Nabi Reshie",
  jobTitle: "Front-End & Full-Stack MERN Developer",
  url: siteUrl,
  email: "reshieaaqib@gmail.com",
  telephone: "+91-7780883029",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Srinagar",
    addressRegion: "Jammu and Kashmir",
    addressCountry: "India",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Visvesvaraya Technological University",
  },
  knowsAbout: [
    "React.js",
    "Next.js 15",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "Agentic AI",
    "Google Antigravity",
    "JavaScript ES6+",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Redis",
    "Leaflet Maps",
  ],
  sameAs: [
    "https://github.com/Aaqibreshie",
    "https://linkedin.com/in/reshieaaqib",
    "https://exam-guard-eight.vercel.app/",
    "https://quiet-croquembouche-2cf6e0.netlify.app/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#09090b] text-zinc-100 antialiased selection:bg-emerald-500/30 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
