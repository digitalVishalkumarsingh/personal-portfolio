import { ExternalLink, Github } from "lucide-react"
import { Button } from "../components/ui/button"
import { projects } from "../data/project"

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated selection of projects showcasing my experience in
            full-stack development and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative group bg-white/5 border border-white/10 rounded-2xl p-8 transition hover:border-primary/50"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs rounded-full border border-white/10 px-3 py-1 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>

                <Button variant="ghost" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
