"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Heart, Coffee, MapPin } from "lucide-react"
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/digitalVishalkumarsingh",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vishal-kumar-singh-597660324",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:digitalvishalkrsingh@gmail.com",
    icon: Mail,
  },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="relative bg-black text-white border-t border-white/5"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid gap-16 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Brand & Bio */}
          <motion.div variants={item} className="md:col-span-2">
            <Link
              href="/logo.png"
              className="flex items-center gap-3 text-2xl font-bold mb-6 tracking-tighter"
            >
              <span className="rounded-xl bg-linear-to-br from-blue-600 to-purple-600 p-1.5 shadow-lg shadow-blue-500/20">
                <div className="bg-black rounded-lg px-2 py-0.5 text-sm uppercase">VKS</div>
              </span>
              <span>Vishal Kumar Singh</span>
            </Link>

            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed font-medium">
              Full-Stack Engineer building high-performance web systems. 
              Currently mastering Java Spring Boot in the heart of Bangalore.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  whileHover={{ y: -3 }}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-blue-400 font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={item} className="md:col-span-1 lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">
              Connect Directly
            </h3>

            <div className="space-y-5 text-gray-500">
              <a
                href="mailto:digitalvishalkrsingh@gmail.com"
                className="flex items-center gap-3 hover:text-white transition group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:text-blue-400 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">digitalvishalkrsingh@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:text-purple-400 transition-colors">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">HSR Layout, Bengaluru, KA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-600"
          variants={item}
        >
          <p>© {currentYear} Vishal Kumar Singh — Design & Code</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              Built with <Coffee className="h-3 w-3 text-orange-500" /> & <Heart className="h-3 w-3 text-red-500 fill-red-500" />
            </span>
            <span className="h-3 w-px bg-white/10" />
            <span className="text-gray-400">Next.js 14 • Tailwind • Framer</span>
          </div>
        </motion.div>

      </div>
    </motion.footer>
  )
}