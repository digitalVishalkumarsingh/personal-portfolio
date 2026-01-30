import { Code2, Server, Terminal, Workflow, Coffee, Database } from "lucide-react"

const skillsData = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    accent: "from-blue-500 to-cyan-500",
    description: "Building interactive, SEO-friendly interfaces.",
    skills: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Angular",
      "State Management (Context/Redux)"
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    accent: "from-purple-500 to-indigo-500",
    description: "Developing robust server-side logic and APIs.",
    skills: [
      "Node.js & Express.js",
      "Java (Core & OOPs)",
      "Spring Boot (Learning)",
      "RESTful API Design",
      "Authentication (JWT/OAuth)",
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database, 
    accent: "from-emerald-500 to-teal-500",
    description: "Managing data and deployment pipelines.",
    skills: [
      "MongoDB (NoSQL)",
      "PostgreSQL / SQL",
      "Redis (Caching Basics)",
      "Git & GitHub",
      "Vercel & AWS Basics",
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-black text-white py-24 overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Terminal className="h-3 w-3 text-blue-400" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
            My <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">Toolbox.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            I specialize in the JavaScript ecosystem but am currently expanding into Java Enterprise for building high-scale backends.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((group) => (
            <div
              key={group.title}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${group.accent} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center">
                   <group.icon className="h-7 w-7 text-white" />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold mb-2 text-white">
                {group.title}
              </h3>
              <p className="text-sm text-gray-500 mb-6 font-medium leading-relaxed">
                {group.description}
              </p>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 group-hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Background Glow on Hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${group.accent} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity rounded-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Learning Callout */}
        <div className="mt-12 p-6 rounded-3xl border border-dashed border-white/20 bg-white/2 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-500/10 rounded-2xl border border-orange-500/20 text-orange-400">
                 <Coffee className="h-6 w-6" />
              </div>
              <div>
                 <h4 className="font-bold text-white uppercase tracking-wider text-xs">Currently Mastering</h4>
                 <p className="text-gray-400 text-sm">Java Spring Boot, Microservices & System Design Fundamentals</p>
              </div>
           </div>
           <div className="flex gap-2 text-[10px] font-bold text-gray-500 uppercase">
              <span className="px-2 py-1 bg-white/5 rounded">LeetCode </span>
              <span className="px-2 py-1 bg-white/5 rounded text-blue-400 tracking-widest">Active Search</span>
           </div>
        </div>
      </div>
    </section>
  )
}