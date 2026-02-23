import { Code2, Server, Database, Coffee } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type SkillGroup = {
  title: string
  icon: LucideIcon
  number: string
  description: string
  skills: string[]
}

const skillsData: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    number: "01",
    description: "Building interactive, SEO-friendly interfaces.",
    skills: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Angular",
      "State Management (Context/Redux)",
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    number: "02",
    description: "Developing robust server-side logic and APIs.",
    skills: [
      "Node.js & Express.js",
      "Java (Core & OOPs)",
      "RESTful API Design",
      "Authentication (JWT/OAuth)",
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    number: "03",
    description: "Managing data and deployment pipelines.",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Redis (Basics)",
      "Git & GitHub",
      "Vercel",
    ],
  },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative bg-zinc-900 text-white py-28 overflow-hidden font-mono"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow Effect */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] tracking-[4px] uppercase text-emerald-500 mb-3">
            02 — Skills
          </p>

          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="text-[clamp(36px,5.5vw,72px)] font-extrabold leading-none tracking-tighter">
              My <br />
              <span className="text-emerald-400">Toolbox.</span>
            </h2>

            <p className="text-[13px] text-zinc-500 max-w-sm leading-relaxed">
              Focused on full-stack JavaScript development with strong backend
              fundamentals.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
          {skillsData.map((group, index) => {
            const Icon = group.icon
            const isPrimary = index === 0

            return (
              <div
                key={group.title}
                className={`group relative border rounded-sm transition-all duration-300 flex flex-col ${
                  isPrimary
                    ? "border-emerald-500/25 bg-emerald-500/5"
                    : "border-white/10 bg-zinc-950/40"
                }`}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 flex items-center justify-center border rounded-sm ${
                        isPrimary
                          ? "border-emerald-500/30 bg-emerald-500/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <Icon
                        size={16}
                        className={
                          isPrimary ? "text-emerald-400" : "text-zinc-400"
                        }
                      />
                    </div>
                    <h3 className="text-sm font-semibold">
                      {group.title}
                    </h3>
                  </div>

                  <span className="text-xs text-zinc-600">
                    {group.number}
                  </span>
                </div>

                {/* Card Body */}
                <div className="px-6 py-6 flex flex-col flex-1">
                  <p className="text-xs text-zinc-500 mb-6">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {group.skills.map((skill) => (
                      <span
                        key={`${group.title}-${skill}`}
                        className={`text-xs px-3 py-1.5 border rounded-sm ${
                          isPrimary
                            ? "text-emerald-300 border-emerald-500/20 bg-emerald-500/10"
                            : "text-zinc-400 border-white/10 bg-zinc-900/60"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Watermark */}
                <span className="absolute bottom-3 right-4 text-[64px] font-extrabold text-white/[0.02] select-none pointer-events-none">
                  {group.number}
                </span>
              </div>
            )
          })}
        </div>

        {/* Currently Learning */}
        <div className="border border-dashed border-white/10 bg-zinc-950/40 rounded-sm px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center border border-orange-500/20 bg-orange-500/10 rounded-sm">
              <Coffee size={16} className="text-orange-400" />
            </div>

            <div>
              <h4 className="text-xs uppercase text-zinc-500 mb-1">
                Currently Learning
              </h4>
              <p className="text-sm text-zinc-300">
                Spring Boot · Microservices · System Design Basics
              </p>
            </div>
          </div>

          <span className="text-xs uppercase text-emerald-400 border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 rounded-sm">
            Open to Opportunities
          </span>
        </div>
      </div>
    </section>
  )
}