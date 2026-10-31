'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Cpu, Clock, Layers, Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react'

interface Option {
  id: string
  label: string
  desc: string
  baseCost: number
  weeks: number
  stack: string[]
}

const PROJECT_TYPES: Option[] = [
  {
    id: 'ai-agents',
    label: 'Autonomous AI Agents',
    desc: 'Multi-agent orchestration, tool use, memory & self-correction',
    baseCost: 250000,
    weeks: 4,
    stack: ['LangGraph', 'FastAPI', 'PostgreSQL', 'Pinecone', 'Python'],
  },
  {
    id: 'fullstack',
    label: 'Custom Web & Mobile Platform',
    desc: 'High-performance scalable app with modern UI and API backend',
    baseCost: 180000,
    weeks: 5,
    stack: ['Next.js 14', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'cloud-infra',
    label: 'Cloud & DevOps Architecture',
    desc: 'Containerized infra, auto-scaling, CI/CD, and zero-downtime cluster',
    baseCost: 150000,
    weeks: 3,
    stack: ['AWS / GCP', 'Docker', 'Kubernetes', 'Terraform', 'Redis'],
  },
  {
    id: 'revio-saas',
    label: 'AI SaaS Product (Revio Suite)',
    desc: 'Multi-tenant review management, sentiment analysis, role-based RBAC',
    baseCost: 320000,
    weeks: 6,
    stack: ['Next.js', 'FastAPI', 'Celery', 'PostgreSQL', 'OpenAI / Claude API'],
  },
]

const SCALES = [
  { id: 'mvp', label: 'MVP / Startup', multiplier: 1.0, userTier: '< 5,000 Users' },
  { id: 'growth', label: 'Growth Scale', multiplier: 1.45, userTier: '5k – 50,000 Users' },
  { id: 'enterprise', label: 'Enterprise Concurrency', multiplier: 2.1, userTier: '50k+ High Concurrency' },
]

const ADD_ONS = [
  { id: 'auth-rbac', label: 'Role-Based Access (RBAC)', cost: 35000, stack: 'NextAuth / OAuth2' },
  { id: 'vector-search', label: 'Vector DB & RAG Knowledgebase', cost: 55000, stack: 'Pinecone / Qdrant' },
  { id: 'payments', label: 'Payment & Billing Engine (Stripe/Razorpay)', cost: 40000, stack: 'Stripe API / Webhooks' },
  { id: 'seo-audit', label: 'Technical SEO & Core Web Vitals Rigor', cost: 30000, stack: 'Lighthouse 95+ Audit' },
]

export default function ProjectEstimatorSection() {
  const [selectedType, setSelectedType] = useState<string>('ai-agents')
  const [selectedScale, setSelectedScale] = useState<string>('growth')
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['vector-search'])

  function toggleAddon(id: string) {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const activeType = useMemo(
    () => PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0],
    [selectedType]
  )

  const activeScale = useMemo(
    () => SCALES.find((s) => s.id === selectedScale) || SCALES[0],
    [selectedScale]
  )

  const estimate = useMemo(() => {
    const addonsCost = selectedAddons.reduce((sum, id) => {
      const addon = ADD_ONS.find((a) => a.id === id)
      return sum + (addon ? addon.cost : 0)
    }, 0)

    const rawTotal = (activeType.baseCost + addonsCost) * activeScale.multiplier
    const minBudget = Math.round((rawTotal * 0.9) / 10000) * 10000
    const maxBudget = Math.round((rawTotal * 1.15) / 10000) * 10000
    const totalWeeks = Math.max(3, Math.round(activeType.weeks * (activeScale.id === 'enterprise' ? 1.5 : activeScale.id === 'growth' ? 1.2 : 1.0)))

    // Recommended stack items
    const addonStacks = selectedAddons
      .map((id) => ADD_ONS.find((a) => a.id === id)?.stack)
      .filter(Boolean) as string[]

    const fullStack = Array.from(new Set([...activeType.stack, ...addonStacks]))

    return {
      minBudget,
      maxBudget,
      totalWeeks,
      fullStack,
    }
  }, [activeType, activeScale, selectedAddons])

  function handleLaunchWithScope() {
    window.dispatchEvent(
      new CustomEvent('cynbit-open-chat', {
        detail: {
          serviceId: activeType.id,
          projectDescription: `Interactive Estimate: ${activeType.label} at ${activeScale.label} scale with ${selectedAddons.length} specialized add-ons.`,
        },
      })
    )
  }

  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-surface border-t border-outline-variant/15" id="estimator">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-[11px] uppercase tracking-widest mb-4">
            <Calculator size={13} />
            Self-Service Architecture & Scope Calculator
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-on-surface">
            Estimate Your Digital Solution.
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant font-medium mt-3 leading-relaxed">
            Transparent, data-driven scoping for startups and enterprises. Choose your parameters to preview sprint timelines, architecture blueprints, and budget projections.
          </p>
        </div>

        {/* 2-Column Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-white p-6 md:p-8 rounded-3xl border border-outline-variant/15 shadow-sm">
            
            {/* 1. Project Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">1</span>
                Select Solution Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((type) => {
                  const selected = selectedType === type.id
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                        selected
                          ? 'border-primary bg-primary/5 shadow-sm'
                          : 'border-outline-variant/20 hover:border-outline-variant/40 hover:bg-surface'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-on-surface">{type.label}</span>
                        {selected && <Check size={14} className="text-primary shrink-0" />}
                      </div>
                      <p className="text-[11px] text-on-surface-variant leading-snug">{type.desc}</p>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 2. Target Scale */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">2</span>
                Operational Scale & Volume
              </label>
              <div className="grid grid-cols-3 gap-3">
                {SCALES.map((scale) => {
                  const selected = selectedScale === scale.id
                  return (
                    <button
                      key={scale.id}
                      onClick={() => setSelectedScale(scale.id)}
                      className={`p-3 rounded-2xl text-center border transition-all ${
                        selected
                          ? 'border-primary bg-primary text-white shadow-md'
                          : 'border-outline-variant/20 text-on-surface hover:bg-surface'
                      }`}
                    >
                      <p className="text-xs font-bold">{scale.label}</p>
                      <p className={`text-[10px] mt-0.5 ${selected ? 'text-white/80' : 'text-on-surface-variant'}`}>
                        {scale.userTier}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 3. Add-on Capabilities */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">3</span>
                Architectural Add-ons
              </label>
              <div className="space-y-2">
                {ADD_ONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id)
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer select-none transition-all ${
                        isChecked
                          ? 'border-primary/40 bg-primary/5'
                          : 'border-outline-variant/15 hover:bg-surface'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-primary border-primary text-white' : 'border-outline-variant/40 bg-white'
                          }`}
                        >
                          {isChecked && <Check size={11} strokeWidth={3} />}
                        </div>
                        <span className="text-xs font-medium text-on-surface">{addon.label}</span>
                      </div>
                      <span className="text-[10px] font-mono text-primary font-bold px-2 py-0.5 rounded bg-white border border-outline-variant/15">
                        +{Math.round(addon.cost / 1000)}k INR
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Dynamic Output Blueprint Column (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-primary to-primary-container text-white p-7 md:p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
            
            {/* Background Orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white/90 text-[10px] font-bold uppercase tracking-wider mb-3">
                <Sparkles size={12} />
                Live Architecture Projection
              </div>
              <h3 className="text-2xl font-black text-white">{activeType.label}</h3>
              <p className="text-xs text-white/80 mt-1 font-medium">Configured for {activeScale.label}</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                <div className="flex items-center gap-1.5 text-white/80 text-[10px] font-bold uppercase tracking-wider mb-1">
                  <Clock size={12} />
                  Sprint Timeline
                </div>
                <p className="text-2xl font-black text-white">~{estimate.totalWeeks} Weeks</p>
                <p className="text-[10px] text-white/70 mt-0.5">Agile bi-weekly milestones</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                <div className="flex items-center gap-1.5 text-white/80 text-[10px] font-bold uppercase tracking-wider mb-1">
                  <Cpu size={12} />
                  Est. Budget Bracket
                </div>
                <p className="text-xl md:text-2xl font-black text-white">
                  ₹{(estimate.minBudget / 100000).toFixed(1)}L – {(estimate.maxBudget / 100000).toFixed(1)}L
                </p>
                <p className="text-[10px] text-white/70 mt-0.5">Includes architecture & QA</p>
              </div>
            </div>

            {/* Recommended Stack */}
            <div className="space-y-2 pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/90 flex items-center gap-1.5">
                <Layers size={13} />
                Recommended Tech Stack Blueprint
              </p>
              <div className="flex flex-wrap gap-1.5">
                {estimate.fullStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-semibold bg-white/20 border border-white/25 px-2.5 py-1 rounded-lg backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quality Commitment Notice */}
            <div className="pt-2 flex items-center gap-2 text-xs text-white/80 border-t border-white/15">
              <ShieldCheck size={16} className="text-emerald-300 shrink-0" />
              <span>Full source code ownership, clean architecture, and 30-day post-launch warranty.</span>
            </div>

            {/* Action Button */}
            <button
              onClick={handleLaunchWithScope}
              className="w-full bg-white hover:bg-surface-container text-primary font-bold text-xs uppercase tracking-wider py-4 rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Start Project With This Scope
              <ArrowRight size={15} />
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}
