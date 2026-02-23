"use client"

import Image from "next/image"
import Link from "next/link"
import { JSX, useEffect, useState } from "react"
import { Menu, X, FileDown } from "lucide-react"
import { cn } from "../lib/utils"

interface NavItem {
  name: string
  href: string
}

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/30"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex h-16 md:h-[72px] items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-sm overflow-hidden border border-white/10">
              <Image
                src="/logo.png"
                alt="Vishal logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <span
              className="hidden sm:block text-base font-extrabold tracking-tighter text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              VISHAL<span className="text-emerald-400">.DEV</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item: NavItem) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[12px] font-semibold tracking-[2px] uppercase text-zinc-500 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Resume */}
          <div className="hidden md:block">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-[11px] tracking-[2px] uppercase px-5 py-2.5 rounded-sm transition-all duration-200"
            >
              <FileDown size={14} />
              Resume
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-sm border border-white/10 text-zinc-400 hover:text-white transition-all duration-200"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-zinc-950/95 backdrop-blur-xl z-40 flex flex-col px-8 pt-10 pb-16">
          <div className="flex flex-col gap-6 mb-10">
            {navigation.map((item: NavItem) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-extrabold tracking-tighter text-zinc-400 hover:text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-[12px] tracking-[2px] uppercase px-6 py-4 rounded-sm transition-all duration-200 w-full"
          >
            <FileDown size={15} />
            Download Resume
          </Link>

          <p className="mt-auto text-[10px] tracking-[3px] uppercase text-zinc-700 text-center">
            Vishal Kumar Singh · Full-Stack Engineer
          </p>
        </div>
      )}
    </header>
  )
}