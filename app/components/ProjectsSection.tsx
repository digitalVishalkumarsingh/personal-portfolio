import { ExternalLink, Github, Code2, Layers, Zap } from "lucide-react"
import { Button } from "../components/ui/button"
import { projects } from "../data/project"

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-black text-white py-24 overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.03)_0%,transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Layers className="h-3 w-3 text-blue-400" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
            Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">Engineering Work.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            A curated selection of production-ready applications focusing on performance, scalability, and seamless user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white/3 border border-white/10 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:bg-white/6 hover:border-blue-500/30 overflow-hidden"
            >
              {/* Top Row: Category & Year */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 px-3 py-1 rounded-full">
                  {project.category || "Full-Stack System"}
                </span>
                <span className="text-xs text-gray-600 font-mono italic">2025/26</span>
              </div>

              {/* Project Title & Description */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Key Features / Impact (Adds high value) */}
              <div className="space-y-3 mb-8">
                 {project.impact?.map((point: string, i: number) => (
                   <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                     <Zap className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                     <span>{point}</span>
                   </div>
                 )) || (
                   <div className="flex items-start gap-3 text-sm text-gray-500 italic">
                     Focusing on high-concurrency and real-time updates.
                   </div>
                 )}
              </div>

              {/* Tech Stack - Pill design */}
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-bold uppercase tracking-tight rounded-lg bg-black/40 border border-white/5 px-3 py-1.5 text-gray-400 group-hover:text-white group-hover:border-white/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 relative z-20">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-xl" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>

                <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 rounded-xl" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Codebase
                  </a>
                </Button>
              </div>

              {/* Decorative Corner Icon */}
              <Code2 className="absolute -bottom-4 -right-4 h-32 w-32 text-white/2 -rotate-12 group-hover:text-blue-500/5 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}