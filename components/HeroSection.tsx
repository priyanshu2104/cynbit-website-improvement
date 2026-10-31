'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* background glow effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[380px] bg-cynbit-teal/10 rounded-full blur-[110px]" />
        <div className="absolute top-1/2 right-1/4 w-[280px] h-[280px] bg-cynbit-accent/5 rounded-full blur-[80px]" />
      </div>

      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#0d9488 1px, transparent 1px), linear-gradient(90deg, #0d9488 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-cynbit-teal/10 border border-cynbit-teal/30 text-cynbit-accent text-xs font-medium px-4 py-2 rounded-full mb-8"
        >
          AI Automation · Full-Stack Dev · Cloud Architecture
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          Architecting{' '}
          <span className="bg-gradient-to-r from-cynbit-teal to-cynbit-accent bg-clip-text text-transparent">
            Scalable
          </span>
          <br />
          Digital Futures
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="text-cynbit-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Cynbit builds AI agents, high-performance web systems, and cloud
          infrastructure that help businesses scale quickly and reliably.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button className="btn-primary flex items-center gap-2 text-base px-7 py-3.5">
            Start Your Project <ArrowRight size={18} />
          </button>
          <a href="https://cynbit.in" target="_blank" rel="noopener noreferrer" className="btn-ghost text-base px-7 py-3.5">
            Explore Our Work
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-cynbit-muted text-sm mt-16"
        >
          💬 Chat with Aria in the bottom-right to kick off your project
        </motion.p>
      </div>
    </section>
  )
}
