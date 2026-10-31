'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ExternalLink } from 'lucide-react'

interface Props {
  name: string
  onRestart: () => void
}

export default function SuccessCard({ name, onRestart }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-cynbit-card border border-cynbit-teal/40 rounded-xl p-4 text-center space-y-3"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 280 }}
        className="w-12 h-12 bg-cynbit-teal/20 rounded-full flex items-center justify-center mx-auto"
      >
        <CheckCircle className="text-cynbit-accent" size={24} />
      </motion.div>

      <p className="text-white font-semibold text-sm">Inquiry sent! 🎉</p>
      <p className="text-cynbit-muted text-xs">
        We&apos;ll get back to you within <span className="text-white font-medium">24 hours</span>, {name}.
      </p>

      <div className="flex flex-col gap-2 pt-1">
        <a
          href="https://cynbit.in"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs flex items-center justify-center gap-1.5"
        >
          Visit cynbit.in <ExternalLink size={12} />
        </a>
        <button onClick={onRestart} className="text-cynbit-muted text-xs hover:text-white transition-colors">
          Start another inquiry
        </button>
      </div>
    </motion.div>
  )
}
