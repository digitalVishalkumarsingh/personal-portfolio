import { GraduationCap, Briefcase, Code2, Rocket, MapPin, Search } from "lucide-react"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* LEFT – STORY */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <MapPin className="h-3 w-3 text-blue-400" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">Currently in Bangalore</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter">
            Full-Stack <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-indigo-500">
              Product Engineer.
            </span>
          </h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I am <span className="text-white font-medium">Vishal Kumar Singh</span>. After a successful 6-month stint at Sarthak Tech, I relocated to Bangalore to immerse myself in the heart of India&apos;s tech ecosystem.
            </p>

            <p>
              My time at Sarthak Tech (Feb 2025 - Aug 2025) was focused on building enterprise-grade MERN applications. Now, I am bridging the gap between high-performance frontends and robust backends by mastering <span className="text-white font-medium">Java and Spring Boot</span>.
            </p>

            <p>
              I am currently seeking a <span className="text-white font-medium">SDE-1 role</span> where I can leverage my production experience in Next.js while contributing to scalable backend architectures.
            </p>
          </div>

          {/* Status Indicators */}
          <div className="mt-10 grid grid-cols-2 gap-4">
             <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-blue-400 font-bold text-xl mb-1">6+ Months</div>
                <div className="text-gray-500 text-xs uppercase tracking-wider">Production Exp.</div>
             </div>
             <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-purple-400 font-bold text-xl mb-1">Immediate</div>
                <div className="text-gray-500 text-xs uppercase tracking-wider">Joining Date</div>
             </div>
          </div>
        </div>

        {/* RIGHT – CARDS */}
        <div className="space-y-6">
          
          {/* Current Focus Card - SHOWING YOU ARE UPSKILLING */}
          <div className="group relative bg-linear-to-br from-blue-600/20 to-transparent border border-blue-500/20 rounded-3xl p-8 hover:bg-blue-600/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform">
                  <Search className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Current Focus</h3>
                  <p className="text-sm text-blue-400 font-medium tracking-wide">Upskilling & Seeking Roles</p>
                </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-300">Deep diving into Enterprise Java to build distributed systems:</p>
              <div className="flex flex-wrap gap-2">
                 {["Java OOPs", "Spring Boot", "Spring Data JPA", "REST APIs", "SQL"].map((skill) => (
                   <span key={skill} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-bold rounded-md">
                     {skill}
                   </span>
                 ))}
              </div>
            </div>
          </div>

          {/* Experience Card (Updated to show completion) */}
          <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20 group-hover:scale-110 transition-transform">
                <Briefcase className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Past Experience</h3>
                <p className="text-sm font-medium tracking-wide text-blue-400">Sarthak Tech</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white font-semibold">Software Developer Engineer</span>
                <span className="text-gray-500">Feb &apos;25 - Aug &apos;25</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Built and deployed full-stack web applications using the MERN stack. Focused on admin dashboard performance and secure authentication modules.
              </p>
            </div>
          </div>

          {/* Education Card */}
          <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300">
            <div className="flex items-center gap-4">
               <GraduationCap className="h-6 w-6 text-gray-500" />
               <div className="text-sm">
                  <span className="text-white font-bold block">BCA (Expected 2025)</span>
                  <span className="text-gray-500">Microtek College (MCT), Varanasi</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}