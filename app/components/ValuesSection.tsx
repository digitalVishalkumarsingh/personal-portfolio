import { Heart, GraduationCap, Briefcase } from "lucide-react"

const values = [
  {
    title: "Passion",
    description:
      "I genuinely enjoy building software, solving problems, and turning ideas into reliable digital products.",
    icon: Heart,
    accent: "from-pink-500 to-red-500",
  },
  {
    title: "Continuous Learning",
    description:
      "Technology evolves fast, and I stay curious—constantly learning new tools, patterns, and best practices.",
    icon: GraduationCap,
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "Quality & Ownership",
    description:
      "I believe in clean code, scalable systems, and taking ownership of what I build—from UX to performance.",
    icon: Briefcase,
    accent: "from-green-500 to-emerald-500",
  },
]

export default function ValuesSection() {
  return (
    <section
      className="relative bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            Values
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            What{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-red-500">
              Drives Me
            </span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon

            return (
              <div
                key={value.title}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition hover:border-primary/50 group"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 mx-auto rounded-xl bg-linear-to-r ${value.accent} flex items-center justify-center mb-6`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
