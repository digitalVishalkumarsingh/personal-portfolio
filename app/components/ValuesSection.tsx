import { Heart, ShieldCheck, Sparkles, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type ValueItem = {
  title: string
  description: string
  icon: LucideIcon
  number: string
}

const values: ValueItem[] = [
  {
    title: "Engineering Passion",
    description:
      "I focus on building scalable systems that solve real-world problems with clean and maintainable architecture.",
    icon: Sparkles,
    number: "01",
  },
  {
    title: "Adaptive Growth",
    description:
      "Constantly evolving from modern JavaScript ecosystems into enterprise-grade backend engineering.",
    icon: TrendingUp,
    number: "02",
  },
  {
    title: "Ownership & Quality",
    description:
      "Taking full responsibility for performance, security, and long-term maintainability.",
    icon: ShieldCheck,
    number: "03",
  },
]

export default function ValuesSection() {
  return (
    <section
      id="values"
      className="relative bg-zinc-900 text-white py-28 overflow-hidden font-mono"
    >
      {/* SAME Subtle Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* SAME Glow Placement (bottom-right like Skills) */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] tracking-[4px] uppercase text-red-500 mb-3">
            03 — Philosophy
          </p>

          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="text-[clamp(36px,5.5vw,72px)] font-extrabold leading-none tracking-tighter">
              What <br />
              <span className="text-red-400">Drives Me.</span>
            </h2>

            <p className="text-[13px] text-zinc-500 max-w-sm leading-relaxed">
              Core principles that shape how I design scalable systems.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon
            const isPrimary = index === 0

            return (
              <div
                key={item.title}
                className={`group relative border rounded-sm transition-all duration-300 flex flex-col ${
                  isPrimary
                    ? "border-red-500/25 bg-red-500/5"
                    : "border-white/10 bg-zinc-950/40"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 flex items-center justify-center border rounded-sm ${
                        isPrimary
                          ? "border-red-500/30 bg-red-500/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <Icon
                        size={16}
                        className={
                          isPrimary ? "text-red-400" : "text-zinc-400"
                        }
                      />
                    </div>
                    <h3 className="text-sm font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  <span className="text-xs text-zinc-600">
                    {item.number}
                  </span>
                </div>

                {/* Body */}
                <div className="px-6 py-6 flex-1">
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Watermark */}
                <span className="absolute bottom-3 right-4 text-[64px] font-extrabold text-white/[0.02] select-none pointer-events-none">
                  {item.number}
                </span>
              </div>
            )
          })}
        </div>

        {/* Bottom Callout (same styling pattern as Skills section) */}
        <div className="mt-12 border border-dashed border-white/10 bg-zinc-950/40 rounded-sm px-6 py-5 flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center border border-red-500/30 bg-red-500/10 rounded-sm">
            <Heart size={16} className="text-red-400" />
          </div>

          <p className="text-sm text-zinc-300">
            Building software with responsibility, clarity, and long-term thinking.
          </p>
        </div>
      </div>
    </section>
  )
}