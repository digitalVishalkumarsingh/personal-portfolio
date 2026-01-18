import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "../components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            Software Developer
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600">
              Vishal Kumar Singh
            </span>
          </h1>

          <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
            Enthusiastic Software Developer specializing in{" "}
            <span className="text-white">Next.js</span>,{" "}
            <span className="text-white">TypeScript</span>,{" "}
            <span className="text-white">Node.js</span>, and{" "}
            <span className="text-white">MongoDB</span>.  
            I build scalable, clean, and high-performance web applications.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button size="lg" asChild>
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5">
            <a
              href="https://github.com/digitalVishalkumarsingh"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/in/vishalkumarsingh"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="mailto:digitalvishalkrsingh@gmail.com"
              className="text-gray-400 hover:text-white transition"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute -inset-2 rounded-full bg-linear-to-r from-blue-500 to-purple-600 blur-2xl opacity-30"></div>

          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10">
            <Image
              src="/profile.png" 
              alt="Vishal Kumar Singh"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
