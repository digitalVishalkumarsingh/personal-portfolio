"use client"

import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Copy, Check } from "lucide-react"
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("digitalvishalkrsingh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const vibrate = () => {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate([80, 40, 80])
    }
  }

  return (
    <section id="contact" className="relative bg-black text-white py-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT - TEXT & INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 text-blue-400">
              <MessageSquare className="h-3 w-3" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Get In Touch</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
              Let&apos;s build <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600">
                something great.
              </span>
            </h2>

            <p className="text-gray-400 text-lg max-w-md mb-12 leading-relaxed font-medium">
              Currently in <span className="text-white">Bangalore</span> and open to Full-Stack or Backend roles. 
              Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="space-y-8">
              {/* EMAIL WITH COPY */}
              <div className="group flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Email Me</span>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold">digitalvishalkrsingh@gmail.com</span>
                    <button onClick={copyEmail} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-gray-500" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* LOCATION */}
              <div className="group flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-purple-500/20 transition-colors">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Location</span>
                  <span className="text-lg font-semibold">Bengaluru, KA, India</span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-12">
              <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 hover:bg-white/10" asChild>
                <a href="https://github.com/digitalVishalkumarsingh" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 hover:bg-white/10" asChild>
                <a href="https://www.linkedin.com/in/vishal-kumar-singh-597660324" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

          {/* RIGHT – ACTION CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-linear-to-br from-white/10 to-transparent border border-white/10 rounded-[2.5rem] p-10 md:p-12 overflow-hidden shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Quick Contact
              </h3>
              <p className="text-gray-400 mb-10 font-medium">
                I typically respond within a few hours. Let&apos;s start a conversation.
              </p>

              <div className="space-y-4">
                <motion.div whileTap={{ scale: 0.95 }} onClick={vibrate}>
                  <Button asChild size="lg" className="w-full h-16 text-lg bg-blue-600 hover:bg-blue-700 rounded-2xl font-bold">
                    <a href="mailto:digitalvishalkrsingh@gmail.com">
                      <Mail className="mr-3 h-6 w-6" />
                      Send an Email
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileTap={{ scale: 0.95 }} onClick={vibrate}>
                  <Button asChild variant="outline" size="lg" className="w-full h-16 text-lg border-white/10 bg-white/5 hover:bg-white/10 rounded-2xl font-bold">
                    <a href="tel:+919112564731">
                      <Phone className="mr-3 h-6 w-6" />
                      Call Directly
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* Status Indicator */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Available for immediate projects</span>
              </div>
            </div>

            {/* Background Blob for card */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 blur-[80px] -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}