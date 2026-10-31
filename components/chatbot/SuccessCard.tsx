'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowUpRight } from 'lucide-react'

interface Props {
  name: string
  onRestart: () => void
}

export default function SuccessCard({ name, onRestart }: Props) {
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

      <p className="text-on-surface font-bold text-sm">Inquiry Received!</p>
      <p className="text-on-surface-variant text-xs font-medium leading-relaxed">
        Thank you, <strong className="text-on-surface">{name}</strong>. Our engineering leads will review your inquiry and follow up within <strong className="text-primary">24 hours</strong>.
      </p>

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
