"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
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
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="relative bg-black text-white border-t border-white/10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <motion.div
          className="grid gap-12 md:grid-cols-3"
          variants={container}
        >
          {/* Brand */}
          <motion.div variants={item}>
            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-bold mb-6"
            >
              <span className="rounded-lg bg-primary px-3 py-1 text-primary-foreground">
                VKS
              </span>
              <span>Vishal Kumar Singh</span>
            </Link>

            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              Software Developer specializing in full-stack development with
              Next.js, TypeScript, Node.js, and MongoDB. Focused on building
              scalable, clean, and performant applications.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">
              Get In Touch
            </h3>

            <div className="space-y-3 text-gray-400">
              <a
                href="mailto:digitalvishalkrsingh@gmail.com"
                className="block hover:text-white transition"
              >
                digitalvishalkrsingh@gmail.com
              </a>

              <a
                href="tel:+919112564731"
                className="block hover:text-white transition"
              >
                +91&nbsp;9112564731
              </a>

              <p> Bengaluru, Karnataka, India</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
          variants={item}
        >
          <p>
            © {currentYear} Vishal Kumar Singh. All rights reserved.
          </p>

          <motion.p
            className="flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            Made with
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            using Next.js & Tailwind CSS
          </motion.p>
        </motion.div>

      </div>
    </motion.footer>
  )
}
