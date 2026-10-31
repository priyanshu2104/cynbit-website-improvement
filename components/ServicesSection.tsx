'use client'

import { motion } from 'framer-motion'
import { Bot, Code2, Cloud, TrendingUp, Sparkles } from 'lucide-react'

const domainServices = [
  {
    icon: Bot,
    tag: 'Core Specialization',
    title: 'Autonomous AI Agents',
    description:
      'Goal-driven autonomous agents capable of multi-platform orchestration, self-correction, reasoning, and context retention beyond basic chatbot scripts.',
  },
  {
    icon: Code2,
    tag: 'Web & Mobile',
    title: 'Software Engineering',
    description:
      'Robust, responsive, and secure digital platforms engineered with modern stacks like Next.js, Node, TypeScript, and distributed cloud microservices.',
  },
  {
    icon: Cloud,
    tag: 'Cloud Infrastructure',
    title: 'Cloud & DevOps Systems',
    description:
      'Resilient serverless and containerized deployments across AWS, Google Cloud, and Azure configured for high concurrency and zero-downtime scalability.',
  },
  {
    icon: TrendingUp,
    tag: 'Growth Systems',
    title: 'Technical SEO & Marketing',
    description:
      'Structured technical SEO frameworks, Core Web Vitals optimization, and conversion-centered design that convert search visibility into enterprise revenue.',
  },
]

export default function ServicesSection() {
  function handleOpenChat() {
    window.dispatchEvent(new CustomEvent('cynbit-open-chat'))
  }

  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-white" id="services">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2">
              The Speed of a Startup. The Rigor of an Enterprise.
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-on-surface">
              Domain Mastery.
            </h2>
          </div>
          <p className="text-sm text-on-surface-variant max-w-md font-medium leading-relaxed">
            We operate at the convergence of autonomous AI engineering, enterprise-grade architecture, and high-velocity digital delivery.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domainServices.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-surface rounded-3xl p-8 md:p-10 border border-outline-variant/15 hover:border-primary/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-outline-variant/15 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white text-primary border border-primary/20">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface mb-3">{service.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-outline-variant/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-on-surface-variant">Scope Project</span>
                  <button
                    onClick={handleOpenChat}
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    Discuss Requirements →
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Interactive CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-primary-container/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
              <Sparkles size={14} />
              Interactive Lead Qualification
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-on-surface">
              Need a project estimate or solution breakdown?
            </h3>
            <p className="text-sm text-on-surface-variant max-w-xl font-medium">
              Try **Aria**, our embedded project scoping assistant. It tailors recommendations in under 2 minutes.
            </p>
          </div>
          <button
            onClick={handleOpenChat}
            className="btn-primary text-xs uppercase font-bold tracking-wider px-8 py-3.5 whitespace-nowrap shadow-md"
          >
            Launch Assistant
          </button>
        </div>

      </div>
    </section>
  )
}
