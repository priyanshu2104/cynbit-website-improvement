'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react'

interface Props {
  name: string
  onRestart: () => void
}

export default function SuccessCard({ name, onRestart }: Props) {
  const [copied, setCopied] = useState(false)
  const [refId] = useState(() => 'CYN-' + Math.floor(100000 + Math.random() * 900000))

  function handleCopy() {
    navigator.clipboard.writeText(`Cynbit Project Inquiry Ref: #${refId}\nApplicant: ${name}\nStatus: Queued for review`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white border border-primary/25 rounded-2xl p-4 text-center space-y-3 shadow-lg"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 280 }}
        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary"
      >
        <CheckCircle2 size={26} />
      </motion.div>

      <div>
        <p className="text-on-surface font-bold text-sm">Inquiry Received!</p>
        <p className="text-on-surface-variant text-xs font-medium leading-relaxed mt-1">
          Thank you, <strong className="text-on-surface">{name}</strong>. Our engineering leads will review your inquiry and follow up within <strong className="text-primary">24 hours</strong>.
        </p>
      </div>

      {/* Reference Card with Copy */}
      <div className="bg-surface p-2.5 rounded-xl border border-outline-variant/15 flex items-center justify-between text-xs">
        <div className="text-left">
          <span className="text-[10px] uppercase font-bold text-on-surface-variant block">Reference Number:</span>
          <span className="font-mono font-bold text-primary">#{refId}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 bg-white hover:bg-surface-container text-on-surface border border-outline-variant/20 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all active:scale-95"
        >
          {copied ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      <div className="flex flex-col gap-2 pt-1">
        <a
          href="https://cynbit.in"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs flex items-center justify-center gap-1.5 py-2.5"
        >
          Explore cynbit.in <ArrowUpRight size={14} />
        </a>
        <button
          onClick={onRestart}
          className="text-on-surface-variant text-xs hover:text-primary transition-colors py-1"
        >
          Start a new inquiry
        </button>
      </div>
    </motion.div>
  )
}
