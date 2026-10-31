'use client'

import { motion } from 'framer-motion'
import { Bot, Code2, Cloud, TrendingUp, Star, GraduationCap } from 'lucide-react'

// all the services cynbit offers
const services = [
  {
    icon: Bot,
    title: 'AI Automation & Agents',
    desc: 'Goal-driven AI agents that handle complex workflows across platforms — not just chatbots.',
    tag: '🔥 Popular',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    desc: 'End-to-end web and mobile apps built with modern stacks and designed to scale.',
    tag: null,
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    desc: 'Scalable infrastructure on AWS, Azure, and GCP built for reliability and cost efficiency.',
    tag: null,
  },
  {
    icon: TrendingUp,
    title: 'Technical SEO & Growth',
    desc: 'Data-driven SEO strategies that compound over time and drive consistent organic traffic.',
    tag: null,
  },
  {
    icon: Star,
    title: 'Revio',
    desc: 'AI-powered review management for multi-location businesses — with crisis detection and role-based access.',
    tag: '🆕 Product',
  },
  {
    icon: GraduationCap,
    title: 'BitElevate',
    desc: 'Developer upskilling platform with adaptive learning paths and real-time skill gap analysis.',
    tag: '🎓 EdTech',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cynbit-accent text-sm font-semibold uppercase tracking-widest mb-3">What We Build</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services That{' '}
            <span className="bg-gradient-to-r from-cynbit-teal to-cynbit-accent bg-clip-text text-transparent">Scale</span>
          </h2>
          <p className="text-cynbit-muted max-w-xl mx-auto text-base">
            From AI agents to full-stack platforms — we build things that actually work in production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group bg-cynbit-card border border-cynbit-border hover:border-cynbit-teal/50 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-cynbit-teal/10 group-hover:bg-cynbit-teal/20 rounded-xl flex items-center justify-center transition-colors">
                    <Icon className="text-cynbit-accent" size={21} />
                  </div>
                  {s.tag && (
                    <span className="text-[10px] font-semibold bg-cynbit-teal/10 text-cynbit-accent border border-cynbit-teal/30 rounded-full px-2.5 py-1">
                      {s.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-cynbit-muted text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 bg-cynbit-teal/10 border border-cynbit-teal/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-2">Not sure which one you need?</h3>
          <p className="text-cynbit-muted mb-4">
            Use the chat widget — Aria will help you figure it out in about 2 minutes.
          </p>
          <p className="text-cynbit-accent text-sm font-medium">👉 Bottom-right corner</p>
        </motion.div>
      </div>
    </section>
  )
}
