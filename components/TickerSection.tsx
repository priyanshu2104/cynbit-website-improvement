'use client'

import { Bot, Code2, Cloud, TrendingUp } from 'lucide-react'

const highlights = [
  {
    icon: Bot,
    title: 'AI automation',
    subtitle: 'LLM & Autonomous Agents',
  },
  {
    icon: Code2,
    title: 'Software Dev',
    subtitle: 'Enterprise Web & Mobile',
  },
  {
    icon: Cloud,
    title: 'Cloud Systems',
    subtitle: 'AWS, Azure & High Availability',
  },
  {
    icon: TrendingUp,
    title: 'Technical SEO',
    subtitle: 'Organic Growth Architecture',
  },
]

export default function TickerSection() {
  return (
    <section className="border-y border-outline-variant/15 bg-white py-6 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {highlights.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.title} className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 text-primary flex items-center justify-center shrink-0 transition-colors">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface uppercase tracking-wider">{item.title}</p>
                <p className="text-[11px] text-on-surface-variant font-medium">{item.subtitle}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
