"use client"

import {
  GraduationCap,
  Briefcase,
  Search,
  MapPin,
  ArrowRight,
} from "lucide-react"
import { JSX } from "react"

interface Stat {
  value: string
  label: string
}

const STATS: Stat[] = [
  { value: "SDE-1", label: "Role Seeking" },
  { value: "ASAP", label: "Joining" },
  { value: "Full-Stack", label: "Specialization" },
  { value: "BCA", label: "Degree" },
]

const UPSKILLING: string[] = [
  "Java OOPs",
  "Spring Boot",
  "Spring Data JPA",
  "REST APIs",
  "SQL",
]

export default function AboutSection(): JSX.Element {
  return (
    <section
      id="about"
      className="relative bg-zinc-950 text-white py-28 overflow-hidden font-mono"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="text-[10px] tracking-[4px] uppercase text-emerald-500 mb-3">
              About Me
            </p>
            <h2
              className="text-[clamp(40px,6vw,70px)] font-extrabold leading-none tracking-tighter"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Full-Stack Engineer
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 border border-white/10 bg-zinc-900 px-5 py-3 rounded-sm">
            <MapPin size={13} className="text-emerald-400" />
            <span className="text-[11px] tracking-[2px] uppercase text-zinc-400">
              Bangalore, India
            </span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0">

          {/* LEFT — Description */}
          <div className="lg:pr-16 pb-12 lg:pb-0 space-y-5 text-[14px] text-zinc-400 leading-[1.8]">

            <p>
              I am <span className="text-white font-semibold">Vishal Kumar Singh</span>,
              a Full-Stack Developer with internship experience at{" "}
              <span className="text-white font-semibold">Sarthak Tech</span>.
              I worked on MERN-based applications focusing on performance
              optimization and secure authentication systems.
            </p>

            <p>
              Currently upskilling in{" "}
              <span className="text-white font-semibold">Java & Spring Boot</span>{" "}
              to strengthen backend architecture and system design skills.
            </p>

            <p>
              Actively seeking an{" "}
              <span className="text-emerald-400 font-semibold">SDE-1 role</span>{" "}
              where I can contribute to scalable production systems.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 pt-6">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="border border-white/10 bg-zinc-900/50 p-5 rounded-sm"
                >
                  <div
                    className="text-xl font-extrabold tracking-tight mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {value}
                  </div>
                  <div className="text-[10px] tracking-[2px] uppercase text-zinc-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-white/5" />

          {/* RIGHT — Cards */}
          <div className="lg:pl-16 pt-12 lg:pt-0 space-y-6">

            {/* Current Focus */}
            <div className="border border-emerald-500/20 bg-emerald-500/5 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Search size={18} className="text-emerald-400" />
                <h3
                  className="text-sm font-bold"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Current Focus
                </h3>
                <ArrowRight size={14} className="text-zinc-500 ml-auto" />
              </div>

              <div className="flex flex-wrap gap-2">
                {UPSKILLING.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-[11px] font-semibold tracking-[1px] uppercase rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Internship */}
            <div className="border border-white/10 bg-zinc-900/40 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={18} className="text-zinc-400" />
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Software Developer Intern
                  </p>
                  <p className="text-[11px] uppercase text-emerald-500">
                    Sarthak Tech · Feb–Aug 2025
                  </p>
                </div>
              </div>

              <p className="text-[13px] text-zinc-500 leading-relaxed">
                Built full-stack applications using MERN stack with focus on
                dashboard optimization and authentication modules.
              </p>
            </div>

            {/* Education */}
            <div className="border border-white/10 bg-zinc-900/40 rounded-sm p-6">
              <div className="flex items-center gap-3">
                <GraduationCap size={18} className="text-zinc-400" />
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    BCA — Computer Applications
                  </p>
                  <p className="text-[12px] text-zinc-600">
                    Microtek College, Varanasi · 2025
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}