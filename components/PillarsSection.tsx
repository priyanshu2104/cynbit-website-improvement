'use client'

import { motion } from 'framer-motion'
import { Server, Layers, HeartHandshake, ArrowUpRight } from 'lucide-react'

export default function PillarsSection() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-surface" id="pillars">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Architecture & Vision
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-on-surface">
            Foundational pillars.
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 border border-outline-variant/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">Custom IT infrastructure</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-medium">
                High-performance web applications, distributed backend microservices, and enterprise-grade cloud systems built to handle millions of transactions securely.
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant/10 text-xs font-bold text-primary flex items-center gap-1">
              Enterprise Ready <ArrowUpRight size={14} />
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 border border-outline-variant/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">Proprietary SaaS suite</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-medium">
                Our in-house toolkits powering businesses:
              </p>
              <div className="space-y-3 mb-6">
                <div className="p-3 bg-surface rounded-xl border border-outline-variant/10">
                  <p className="text-xs font-bold text-primary">Revio</p>
                  <p className="text-[11px] text-on-surface-variant">AI-first multi-location review and reputation platform.</p>
                </div>
                <div className="p-3 bg-surface rounded-xl border border-outline-variant/10">
                  <p className="text-xs font-bold text-secondary">Cynbit Studio & TenantEase</p>
                  <p className="text-[11px] text-on-surface-variant">Career intelligence and property management ecosystems.</p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-outline-variant/10 text-xs font-bold text-secondary flex items-center gap-1">
              Explore Suite <ArrowUpRight size={14} />
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 border border-outline-variant/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center mb-6">
                <HeartHandshake size={24} />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">Human-centric impact</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-medium">
                Bridging technology with societal empowerment through non-linear developer mastery and community support:
              </p>
              <div className="space-y-3 mb-6">
                <div className="p-3 bg-surface rounded-xl border border-outline-variant/10">
                  <p className="text-xs font-bold text-tertiary">BitElevate</p>
                  <p className="text-[11px] text-on-surface-variant">Technical literacy and upskilling for tomorrow&apos;s architects.</p>
                </div>
                <div className="p-3 bg-surface rounded-xl border border-outline-variant/10">
                  <p className="text-xs font-bold text-on-surface">Manav Seva Partnership</p>
                  <p className="text-[11px] text-on-surface-variant">Tech-enabled wellness and community upliftment programs.</p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-outline-variant/10 text-xs font-bold text-tertiary flex items-center gap-1">
              Our Mission <ArrowUpRight size={14} />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
