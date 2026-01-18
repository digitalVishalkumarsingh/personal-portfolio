"use client"
import Image from "next/image";

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
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
  {
    name: "Email",
    href: "mailto:digitalvishalkrsingh@gmail.com",
    icon: Mail,
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-black/60 backdrop-blur-md"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
         <Link
  href="/"
  className="flex items-center gap-2 text-xl font-bold text-white hover:text-primary transition"
>
  <span className="flex items-center justify-center rounded bg-primary p-1">
    <Image
      src="/logo.png"   
      alt="Vishal.dev logo"
      width={50}
      height={50}
      className="object-contain"
    />
  </span>
 
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium text-gray-300 transition-colors hover:text-white",
                  "after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:-translate-x-1/2",
                  "after:bg-linear-to-r after:from-primary after:to-purple-500",
                  "after:transition-all after:duration-300 hover:after:w-full",
                  pathname === item.href && "text-white after:w-full"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4 text-gray-300 hover:text-white transition" />
                </a>
              </Button>
            ))}
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
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="flex justify-center gap-4 pt-4 border-t border-white/10">
                {socialLinks.map((link) => (
                  <Button key={link.name} variant="ghost" size="icon" asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-5 w-5 text-gray-300 hover:text-white transition" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
