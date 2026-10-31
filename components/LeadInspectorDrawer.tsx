'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Database, X, RefreshCw, Clock, Tag, Mail, User, DollarSign, Calendar, ExternalLink } from 'lucide-react'

interface Lead {
  id: string
  name: string
  email: string
  service: string
  projectDescription: string
  budget: string
  timeline?: string
  createdAt: string
}

export default function LeadInspectorDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)

  async function fetchLeads() {
    setLoading(true)
    try {
      const res = await fetch('/api/leads')
      const data = await res.json()
      if (data.leads) {
        setLeads([...data.leads].reverse())
      }
    } catch (e) {
      console.error('Failed to fetch leads', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      fetchLeads()
    }
  }, [isOpen])

  // Also listen for lead submission events to auto-refresh
  useEffect(() => {
    function handleLeadSubmitted() {
      if (isOpen) fetchLeads()
    }
    window.addEventListener('cynbit-lead-submitted', handleLeadSubmitted)
    return () => window.removeEventListener('cynbit-lead-submitted', handleLeadSubmitted)
  }, [isOpen])

  return (
    <>
      {/* Floating Reviewer Trigger Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-white/95 hover:bg-white text-on-surface border border-outline-variant/30 hover:border-primary shadow-lg hover:shadow-xl px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 active:scale-95 group"
          title="Review submitted leads via API"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <Database size={14} className="text-primary group-hover:rotate-12 transition-transform" />
          <span>Reviewer Lead Console</span>
          {leads.length > 0 && (
            <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-0.5 rounded-full">
              {leads.length}
            </span>
          )}
        </button>
      </div>

      {/* Slide-over Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 border-l border-outline-variant/20"
            >
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-outline-variant/15 flex items-center justify-between bg-surface">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Database size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-bold text-on-surface">Live Lead Inspector</h2>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        GET /api/leads
                      </span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant">Real-time submissions from the Aria assistant</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={fetchLeads}
                    disabled={loading}
                    className="p-2 text-on-surface-variant hover:text-primary rounded-lg hover:bg-surface-container transition-colors disabled:opacity-50"
                    title="Refresh list"
                  >
                    <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {loading && leads.length === 0 ? (
                  <div className="py-20 text-center text-on-surface-variant text-xs space-y-2">
                    <RefreshCw size={24} className="animate-spin mx-auto text-primary" />
                    <p>Loading API records…</p>
                  </div>
                ) : leads.length === 0 ? (
                  <div className="py-16 text-center text-on-surface-variant text-xs space-y-3 bg-surface rounded-2xl border border-dashed border-outline-variant/30 p-8">
                    <Database size={32} className="mx-auto text-outline-variant/60" />
                    <div>
                      <p className="font-semibold text-on-surface">No inquiries submitted yet</p>
                      <p className="text-[11px] mt-1 text-on-surface-variant max-w-xs mx-auto">
                        Test the Aria chat widget in the bottom-right corner to submit an inquiry, and it will appear here instantly.
                      </p>
                    </div>
                  </div>
                ) : (
                  leads.map((lead, index) => (
                    <div
                      key={lead.id || index}
                      className="bg-surface rounded-2xl p-4 border border-outline-variant/20 space-y-3 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                          #{lead.id.slice(0, 8)}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-on-surface-variant font-medium">
                          <Clock size={11} />
                          {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center gap-2">
                          <User size={13} className="text-on-surface-variant shrink-0" />
                          <span className="font-bold text-on-surface">{lead.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail size={13} className="text-on-surface-variant shrink-0" />
                          <a href={`mailto:${lead.email}`} className="text-primary hover:underline font-medium">
                            {lead.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag size={13} className="text-on-surface-variant shrink-0" />
                          <span className="font-semibold text-on-surface bg-white px-2 py-0.5 rounded border border-outline-variant/15 text-[11px]">
                            {lead.service}
                          </span>
                        </div>
                      </div>

                      <div className="bg-white p-2.5 rounded-xl border border-outline-variant/15 text-[11px] text-on-surface-variant leading-relaxed">
                        <span className="font-bold text-on-surface block text-[10px] uppercase mb-0.5">Project Scope:</span>
                        {lead.projectDescription}
                      </div>

                      <div className="flex items-center gap-4 text-[10px] text-on-surface-variant pt-1 border-t border-outline-variant/10">
                        <div className="flex items-center gap-1 font-medium">
                          <DollarSign size={11} className="text-primary" />
                          <span>Budget: <strong>{lead.budget}</strong></span>
                        </div>
                        {lead.timeline && (
                          <div className="flex items-center gap-1 font-medium">
                            <Calendar size={11} className="text-secondary" />
                            <span>Timeline: <strong>{lead.timeline}</strong></span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              <div className="p-4 bg-surface border-t border-outline-variant/15 text-center text-[11px] text-on-surface-variant">
                <span>Integrated with Next.js App Router API Handler</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
