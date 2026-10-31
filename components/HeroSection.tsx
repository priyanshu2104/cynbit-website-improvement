'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Cpu, Bot, CheckCircle2 } from 'lucide-react'

export default function HeroSection() {
  function handleStartDiscovery() {
    window.dispatchEvent(new CustomEvent('cynbit-open-chat'))
  }

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 md:px-8 lg:px-12 overflow-hidden bg-surface">
      {/* Background radial gradient blurs matching cynbit.in */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] -mr-[300px] -mt-[300px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-secondary/5 rounded-full blur-[120px] -ml-[250px] -mb-[250px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 text-left">
        
        {/* Left Column: Heading and CTAs */}
        <div className="lg:col-span-7 space-y-8 text-on-surface">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-[11px] uppercase tracking-widest shadow-sm border border-tertiary/20 cursor-default">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-fixed animate-ping" />
              The optimistic architect
            </div>
          </motion.div>

          {/* H1 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[1.08] text-on-surface text-left"
          >
            Architecting the future with{' '}
            <span className="text-gradient-primary italic block mt-1">
              AI automation.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-on-surface-variant max-w-2xl leading-relaxed font-medium text-left"
          >
            Cynbit Technologies architects the digital future with{' '}
            <strong className="text-primary font-semibold">autonomous AI agents</strong>, custom
            software development, and scalable business platforms. Based in Jaipur, Rajasthan, we
            bridge the gap between technical precision and global business growth.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={handleStartDiscovery}
              className="btn-primary text-sm font-semibold tracking-wide uppercase px-7 py-3.5 shadow-lg shadow-primary/20"
            >
              Start discovery
              <ArrowRight size={16} />
            </button>
            <a
              href="https://cynbit.in/case-studies"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm font-semibold tracking-wide uppercase px-7 py-3.5"
            >
              View work
            </a>
          </motion.div>

          {/* Interactive Chat Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2.5 pt-2 text-xs font-semibold text-primary"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Try the new interactive AI project assistant in the bottom corner
          </motion.div>
        </div>

        {/* Right Column: Cynbit Digital Architecture Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[460px]"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 bg-white/40 backdrop-blur-2xl rounded-full shadow-2xl border border-white/60 flex items-center justify-center">
            
            {/* Concentric Orbital Rings */}
            <div className="absolute inset-5 border border-dashed border-primary/20 rounded-full animate-spin" style={{ animationDuration: '45s' }} />
            <div className="absolute inset-12 border border-dotted border-secondary/20 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
            <div className="absolute left-0 right-0 h-0.5 bg-primary/20 blur-sm" />

            {/* Central Icon */}
            <div className="w-24 h-24 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-inner">
              <Bot className="text-primary w-12 h-12" />
            </div>

            {/* Floating Card 1: Automation Progress */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 md:-right-10 w-48 bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-white shadow-xl"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white">
                  <Sparkles size={14} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-primary">
                  AI Automation
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[95%]" />
                </div>
                <div className="flex justify-between text-[9px] font-bold text-on-surface-variant">
                  <span>Task Velocity</span>
                  <span>95%</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: Systems Live */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 md:-left-10 w-44 bg-white/90 backdrop-blur-xl p-3.5 rounded-2xl border border-white shadow-xl flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-tertiary-fixed flex items-center justify-center shrink-0 text-on-tertiary-fixed">
                <Cpu size={18} />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-on-surface-variant">
                  Architecture
                </p>
                <div className="flex items-center gap-1 text-[11px] font-bold text-primary">
                  <CheckCircle2 size={12} className="text-primary" />
                  Systems Online
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
