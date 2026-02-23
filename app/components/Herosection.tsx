"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, FileText, MapPin } from "lucide-react"
import { JSX } from "react"

interface SocialLink {
  href: string
  label: string
  icon: React.ReactNode
}

const STACK: string[] = [
  "Next.js · React",
  "Node.js · Express",
  "PostgreSQL · MongoDB",
  "REST APIs · TypeScript",
]

const SOCIALS: SocialLink[] = [
  {
    href: "https://github.com/digitalVishalkumarsingh",
    label: "GitHub",
    icon: <Github size={17} />,
  },
  {
    href: "https://www.linkedin.com/in/vishal-kumar-singh-597660324",
    label: "LinkedIn",
    icon: <Linkedin size={17} />,
  },
  {
    href: "mailto:digitalvishalkrsingh@gmail.com",
    label: "Email",
    icon: <Mail size={17} />,
  },
]

export default function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen flex flex-col bg-zinc-950 text-white overflow-hidden font-mono">

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between px-8 md:px-14 pt-8">
        <span className="text-[10px] tracking-[4px] uppercase text-zinc-600">
          Portfolio
        </span>
        <span className="text-[10px] tracking-[4px] uppercase text-zinc-600">
          Bangalore, IN
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto w-full px-8 md:px-14 items-center py-16 lg:py-0">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center lg:pr-20 lg:border-r lg:border-white/5 py-12">

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 bg-zinc-900 border border-white/10 text-zinc-300 px-4 py-2 text-[11px] tracking-[2px] uppercase rounded-sm mb-10 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to Work
          </div>

          {/* Name */}
          <div className="mb-6">
            <h1
              className="text-[clamp(52px,8vw,100px)] font-extrabold leading-none tracking-tighter"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              VISHAL
            </h1>
            <h1
              className="text-[clamp(52px,8vw,100px)] font-extrabold leading-none tracking-tighter text-emerald-400"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              SINGH
            </h1>
          </div>

          {/* Role */}
          <p className="text-[11px] tracking-[3px] uppercase text-zinc-500 mb-6">
            Full-Stack Engineer
          </p>

          {/* Description */}
          <p className="text-sm text-zinc-400 leading-relaxed max-w-md mb-10">
            Building scalable web applications using{" "}
            <span className="text-white font-semibold">Next.js</span>,{" "}
            <span className="text-white font-semibold">Node.js</span> and modern
            backend architectures focused on performance and clean code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-[12px] tracking-[2px] uppercase px-6 py-3.5 rounded-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              View Work <ArrowRight size={14} />
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/40 text-zinc-300 hover:text-white font-bold text-[12px] tracking-[2px] uppercase px-6 py-3.5 rounded-sm transition-all duration-200"
            >
              <FileText size={14} /> Resume
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {SOCIALS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 border border-white/10 rounded-sm text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center justify-center lg:pl-20 py-12">

          <div className="relative w-full max-w-[360px]">

            <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] bg-emerald-500/20 rounded-sm border border-emerald-500/20" />

            <div className="relative z-10 rounded-sm overflow-hidden border border-white/10 aspect-[3/4]">
              <Image
                src="/profile.png"
                alt="Vishal Singh"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            </div>

            {/* Location Badge */}
            <div className="absolute bottom-6 left-[-20px] z-20 flex items-center gap-2 bg-zinc-900 border border-white/10 px-4 py-3 rounded-sm shadow-xl">
              <MapPin size={14} className="text-emerald-400" />
              <span className="text-sm font-bold tracking-tight">
                Bangalore, India
              </span>
            </div>
          </div>

          {/* Stack */}
          <div className="w-full max-w-[360px] mt-10 space-y-3">
            {STACK.map((item) => (
              <div key={item} className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[12px] tracking-[1.5px] uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  {item}
                </span>
                <div className="flex-1 h-px bg-white/5 group-hover:bg-emerald-500/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}