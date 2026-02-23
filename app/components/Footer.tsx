"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart, Coffee, MapPin } from "lucide-react";
import { JSX } from "react";

type SocialLink = {
  name: string;
  href: string;
  icon: React.ElementType;
};

type QuickLink = {
  name: string;
  href: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/digitalVishalkumarsingh",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vishal-kumar-singh-597660324",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:digitalvishalkrsingh@gmail.com",
    icon: Mail,
  },
];

const quickLinks: QuickLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 text-white border-t border-white/5 font-mono overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-white/5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="flex items-center justify-center w-10 h-10 border border-white/10 group-hover:border-emerald-500/40 rounded-sm transition-colors">
                <span
                  className="text-sm font-extrabold text-emerald-400 tracking-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  VKS
                </span>
              </div>
              <span
                className="text-lg font-extrabold tracking-tighter text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Vishal<span className="text-emerald-400">.DEV</span>
              </span>
            </Link>

            <p className="text-[13px] text-zinc-500 max-w-xs leading-relaxed mb-8">
              Full-Stack Engineer building high-performance web systems.
              Currently mastering Java & Spring Boot.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2">
              {socialLinks.map(({ name, href, icon: Icon }) => {
                const isExternal = href.startsWith("http");
                return (
                  <a
                    key={name}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={name}
                    className="flex items-center justify-center w-9 h-9 border border-white/8 rounded-sm text-zinc-600 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-200"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[3px] uppercase text-zinc-600 mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  {href.startsWith("/") ? (
                    <Link
                      href={href}
                      className="text-[12px] tracking-[1px] text-zinc-500 hover:text-emerald-400 transition-colors duration-200"
                    >
                      {name}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className="text-[12px] tracking-[1px] text-zinc-500 hover:text-emerald-400 transition-colors duration-200"
                    >
                      {name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-[3px] uppercase text-zinc-600 mb-6">
              Connect Directly
            </p>

            <div className="space-y-3">
              <a
                href="mailto:digitalvishalkrsingh@gmail.com"
                className="flex items-center gap-4 border border-white/6 bg-zinc-900/40 hover:border-emerald-500/25 hover:bg-emerald-500/4 px-4 py-3.5 rounded-sm transition-all duration-200 group"
              >
                <Mail size={13} className="text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                <span className="text-[12px] text-zinc-500 group-hover:text-zinc-300 truncate">
                  digitalvishalkrsingh@gmail.com
                </span>
              </a>

              <div className="flex items-center gap-4 border border-white/6 bg-zinc-900/40 px-4 py-3.5 rounded-sm">
                <MapPin size={13} className="text-zinc-500" />
                <span className="text-[12px] text-zinc-500">
                  Bengaluru, Karnataka
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[2px] uppercase text-zinc-700">
            © {currentYear} Vishal Kumar Singh — All Rights Reserved
          </p>

          <div className="flex items-center gap-4 text-[10px] tracking-[1.5px] uppercase text-zinc-700">
            <span className="flex items-center gap-1.5">
              Built with <Coffee size={11} /> & <Heart size={11} />
            </span>
            <span className="w-px h-3 bg-white/8" />
            <span>Next.js · Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}