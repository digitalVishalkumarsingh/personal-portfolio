"use client";

import { JSX, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

export default function ContactSection(): JSX.Element {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText("digitalvishalkrsingh@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Clipboard copy failed");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-zinc-900 text-white py-28 overflow-hidden font-mono"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] tracking-[4px] uppercase text-emerald-500 mb-3">
            04 — Contact
          </p>

          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2
              className="text-[clamp(36px,5.5vw,72px)] font-extrabold leading-none tracking-tighter"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Let&apos;s Build
              <br />
              <span className="text-emerald-400">Something</span>
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.18)" }}
              >
                Great.
              </span>
            </h2>

            <p className="text-[13px] text-zinc-500 max-w-sm leading-relaxed">
              Open to Full-Stack or Backend SDE-1 roles.
              I typically respond within a few hours.
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0">
          {/* LEFT */}
          <div className="lg:pr-16 pb-12 lg:pb-0">
            {/* Availability */}
            <div className="inline-flex items-center gap-2.5 border border-emerald-500/20 bg-emerald-500/6 px-5 py-3 rounded-sm mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] tracking-[2px] uppercase text-emerald-400">
                Available · Immediate Joining
              </span>
            </div>

            {/* Email */}
            <div className="space-y-3 mb-10">
              <div className="group flex items-center gap-4 border border-white/6 bg-zinc-950/40 hover:border-emerald-500/25 hover:bg-emerald-500/4 px-5 py-4 rounded-sm transition-all duration-200">
                <Mail size={15} className="text-zinc-500 group-hover:text-emerald-400 transition-colors" />

                <div className="flex-1 min-w-0">
                  <p className="text-[10px] tracking-[2px] uppercase text-zinc-600">
                    Email
                  </p>
                  <p className="text-[13px] text-zinc-300 truncate">
                    digitalvishalkrsingh@gmail.com
                  </p>
                </div>

                <button
                  onClick={copyEmail}
                  aria-label="Copy email"
                  className="flex items-center justify-center w-8 h-8 border border-white/6 hover:border-emerald-500/30 rounded-sm transition-all"
                >
                  {copied ? (
                    <Check size={13} className="text-emerald-500" />
                  ) : (
                    <Copy size={13} className="text-zinc-600" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <a
                href="tel:+919112564731"
                className="group flex items-center gap-4 border border-white/6 bg-zinc-950/40 hover:border-emerald-500/25 hover:bg-emerald-500/4 px-5 py-4 rounded-sm transition-all duration-200"
              >
                <Phone size={15} className="text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                <div>
                  <p className="text-[10px] tracking-[2px] uppercase text-zinc-600">
                    Phone
                  </p>
                  <p className="text-[13px] text-zinc-300">
                    +91 91125 64731
                  </p>
                </div>
                <ExternalLink size={12} className="ml-auto text-zinc-700 group-hover:text-emerald-500 transition-colors" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 border border-white/6 bg-zinc-950/40 px-5 py-4 rounded-sm">
                <MapPin size={15} className="text-zinc-500" />
                <div>
                  <p className="text-[10px] tracking-[2px] uppercase text-zinc-600">
                    Location
                  </p>
                  <p className="text-[13px] text-zinc-300">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://github.com/digitalVishalkumarsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/8 bg-zinc-900/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-zinc-400 hover:text-emerald-400 text-[12px] tracking-[2px] uppercase px-5 py-3 rounded-sm transition-all duration-200"
              >
                <Github size={14} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vishal-kumar-singh-597660324"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/8 bg-zinc-900/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-zinc-400 hover:text-emerald-400 text-[12px] tracking-[2px] uppercase px-5 py-3 rounded-sm transition-all duration-200"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-white/5" />

          {/* RIGHT */}
          <div className="lg:pl-16 pt-12 lg:pt-0">
            <div className="border border-white/6 bg-zinc-950/50 rounded-sm p-8">
              <h3
                className="text-2xl font-extrabold text-white tracking-tight mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Start a Conversation
              </h3>

              <p className="text-[13px] text-zinc-500 leading-relaxed mb-8">
                Whether it&apos;s a role, project, or collaboration —
                feel free to reach out directly.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:digitalvishalkrsingh@gmail.com"
                  className="flex items-center gap-3 w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-[12px] tracking-[2px] uppercase px-6 py-4 rounded-sm transition-all duration-200"
                >
                  <Mail size={15} />
                  Send an Email
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full border border-white/6 text-zinc-600 hover:text-zinc-400 hover:border-white/12 font-bold text-[12px] tracking-[2px] uppercase px-6 py-4 rounded-sm transition-all duration-200"
                >
                  <ExternalLink size={15} />
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}