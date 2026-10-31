'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24h', label: 'Response Time' },
  { value: '4', label: 'Countries Served' },
]

export default function StatsSection() {
  return (
    <section className="py-14 border-y border-cynbit-border/40">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cynbit-teal to-cynbit-accent bg-clip-text text-transparent">
              {s.value}
            </p>
            <p className="text-cynbit-muted text-sm mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
