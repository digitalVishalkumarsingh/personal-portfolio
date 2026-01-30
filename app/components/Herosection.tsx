import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "../components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Available for immediate hiring in Bangalore</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            Building systems with{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
              purpose.
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
            I&apos;m <span className="text-white font-medium">Vishal Kumar Singh</span>, a Full-Stack Engineer specializing in 
            <span className="text-white"> Next.js</span> & <span className="text-white">Node.js</span>. 
            Focused on building production-ready applications with 6 months of hands-on experience in high-performance web systems.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200" asChild>
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5" asChild>
              <Link href="/resume.pdf" target="_blank">
                <FileText className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-500 font-medium uppercase tracking-widest">Connect:</span>
            <div className="flex gap-5">
              <a href="https://github.com/digitalVishalkumarsingh" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/vishal-kumar-singh-597660324" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:digitalvishalkrsingh@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">
          {/* Animated Glow behind image */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-linear-to-r from-blue-500 to-purple-600 blur-[80px] opacity-20 animate-pulse"></div>

          <div className="relative w-80 h-80 md:w-112.5 md:h-112.5 p-2 rounded-3xl overflow-hidden">
             {/* Frame Design */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-linear-to-b from-white/10 to-transparent"></div>
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5">
              <Image
                src="/profile.png" 
                alt="Vishal Kumar Singh"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}