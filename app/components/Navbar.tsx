"use client"
import Image from "next/image";
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Github, Linkedin, Mail, FileDown } from "lucide-react" // Added FileDown
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

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
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-2"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/5 border border-white/10 rounded-2xl">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-white hover:opacity-80 transition"
          >
            <div className="relative w-8 h-8 overflow-hidden rounded shadow-2xl">
              <Image
                src="/logo.png"   
                alt="Vishal logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="hidden sm:inline-block text-lg tracking-tighter">VISHAL<span className="text-blue-500">.DEV</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium text-gray-400 transition-colors hover:text-white",
                  pathname === item.href && "text-white"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="h-4 w-px bg-white/10 mr-2" /> {/* Divider */}
            <Button 
              variant="outline" 
              size="sm" 
              className="border-white/10 bg-white hover:bg-white/10 text-xs font-bold"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 h-3.5 w-3.5" /> RESUME
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 rounded-b-2xl border-t border-white/10 overflow-hidden">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-gray-300 hover:text-white transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                <a href="/resume.pdf" target="_blank">Download CV</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}