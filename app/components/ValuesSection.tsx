import { Heart, GraduationCap, Briefcase, ShieldCheck, Sparkles, TrendingUp } from "lucide-react"

const values = [
  {
    title: "Engineering Passion",
    description:
      "I don't just write code; I build solutions. I find joy in architecting systems that solve real-world problems and scale with user growth.",
    icon: Sparkles,
    accent: "from-blue-500 to-indigo-600",
  },
  {
    title: "Adaptive Growth",
    description:
      "In the fast-paced tech world, I stay ahead by mastering new paradigms—like my current transition from MERN to the Java Spring ecosystem.",
    icon: TrendingUp,
    accent: "from-purple-500 to-pink-500",
  },
  {
    title: "Ownership & Quality",
    description:
      "I believe in 'Clean Code' as a standard, not an option. I take full responsibility for the performance, security, and UX of my deployments.",
    icon: ShieldCheck,
    accent: "from-emerald-500 to-teal-500",
  },
]

export default function ValuesSection() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Background Subtle Noise/Grain or Glow */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-red-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
              <Heart className="h-3 w-3 text-red-400" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-red-400 font-bold">Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              What <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500">Drives Me.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-sm md:text-right">
            My core principles for building software that lasts and teams that thrive.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon

            return (
              <div
                key={value.title}
                className="group relative bg-white/3 border border-white/10 rounded-4xl p-10 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20"
              >
                {/* Icon Container with Glass Effect */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${value.accent} p-0.5 mb-8 group-hover:rotate-6 transition-transform duration-500`}
                >
                  <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-500 transition-all">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed font-medium">
                  {value.description}
                </p>

                {/* Hidden "Read More" or subtle detail that appears on hover */}
                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-gray-600 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-1 w-8 bg-gray-800 rounded-full"></div>
                  Core Principle
                </div>

                {/* Interactive Background Glow */}
                <div className={`absolute inset-0 rounded-4xl bg-linear-to-br ${value.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}