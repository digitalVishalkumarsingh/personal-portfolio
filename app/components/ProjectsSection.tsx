import { ExternalLink, Github, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "../data/project";
import { JSX } from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  category?: string;
  impact?: string[];
};

export default function ProjectsSection(): JSX.Element {
  return (
    <section
      id="projects"
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

      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] tracking-[4px] uppercase text-emerald-500 mb-3">
            03 — Projects
          </p>

          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2
              className="text-[clamp(36px,5.5vw,72px)] font-extrabold leading-none tracking-tighter"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Featured
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.18)" }}
              >
                Engineering
              </span>
              <span className="text-emerald-400"> Work.</span>
            </h2>

            <p className="text-[13px] text-zinc-500 max-w-sm leading-relaxed">
              Production-ready applications focusing on performance,
              scalability, and seamless user experiences.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 lg:grid-cols-2">
          {(projects as Project[]).map((project, index) => (
            <div
              key={project.title}
              className={`group relative border rounded-sm overflow-hidden transition-all duration-300 flex flex-col ${
                index === 0
                  ? "border-emerald-500/25 bg-emerald-500/4 hover:bg-emerald-500/7 hover:border-emerald-500/40"
                  : "border-white/6 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-white/12"
              }`}
            >
              {/* Top strip */}
              <div className="flex items-center justify-between px-7 pt-7 pb-5 border-b border-white/4">
                <span
                  className={`text-[10px] tracking-[2px] uppercase px-2.5 py-1 rounded-sm border font-semibold ${
                    index === 0
                      ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
                      : "text-zinc-500 border-white/8 bg-white/4"
                  }`}
                >
                  {project.category ?? "Full-Stack System"}
                </span>

                {/* Removed hardcoded year */}
              </div>

              {/* Body */}
              <div className="px-7 py-6 flex-1 flex flex-col">
                <h3
                  className="text-2xl font-extrabold tracking-tight text-white mb-3 group-hover:text-emerald-400 transition-colors duration-200"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {project.title}
                </h3>

                <p className="text-[13px] text-zinc-500 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Impact */}
                {project.impact?.length ? (
                  <div className="space-y-2.5 mb-6">
                    {project.impact.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Zap
                          size={13}
                          className="text-emerald-500 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-[12px] text-zinc-400 leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="flex-1" />

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] tracking-[1px] uppercase text-zinc-600 border border-white/6 bg-zinc-950/60 px-2.5 py-1 rounded-sm group-hover:text-zinc-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/4">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-[11px] tracking-[2px] uppercase px-5 py-2.5 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/20"
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 border border-white/6 text-zinc-600 text-[11px] tracking-[2px] uppercase px-5 py-2.5 rounded-sm cursor-not-allowed">
                      <ExternalLink size={12} />
                      Private
                    </span>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/8 bg-zinc-900/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-zinc-400 hover:text-emerald-400 text-[11px] tracking-[2px] uppercase px-5 py-2.5 rounded-sm transition-all duration-200"
                  >
                    <Github size={12} />
                    Codebase
                  </a>
                </div>
              </div>

              {/* Watermark number */}
              <span
                className="absolute bottom-4 right-6 text-[80px] font-extrabold text-white/[0.025] leading-none select-none pointer-events-none"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/digitalVishalkumarsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/8 bg-zinc-900/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-zinc-400 hover:text-emerald-400 text-[12px] tracking-[2px] uppercase px-6 py-3.5 rounded-sm transition-all duration-200"
          >
            <Github size={14} />
            View All on GitHub
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}