'use client'

import { motion } from 'framer-motion'

export default function TypingIndicator() {
  return (
    <div className="chat-bubble-bot flex items-center gap-1.5 py-3.5 px-4">
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-cynbit-muted block"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.65, repeat: Infinity, delay: i * 0.14, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
