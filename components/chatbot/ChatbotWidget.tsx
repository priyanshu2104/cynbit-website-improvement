'use client'

import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X, ChevronDown } from 'lucide-react'
import ChatWindow from './ChatWindow'

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [unread, setUnread] = useState(true)
  const [showHint, setShowHint] = useState(false)

  // show hint bubble after 3 seconds if user hasn't opened chat yet
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open) setShowHint(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [open])

  function handleOpen() {
    setOpen(true)
    setUnread(false)
    setShowHint(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="w-[360px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-5rem)] bg-cynbit-dark border border-cynbit-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* header */}
            <div className="flex items-center justify-between px-4 py-3 bg-cynbit-card border-b border-cynbit-border">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cynbit-teal to-cynbit-accent flex items-center justify-center font-bold text-sm text-white">
                    A
                  </div>
                  {/* online dot */}
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-cynbit-card" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Aria</p>
                  <p className="text-xs text-cynbit-muted">Cynbit Assistant · Online</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-cynbit-muted hover:text-white p-1 rounded-lg hover:bg-cynbit-border transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <ChatWindow />
          </motion.div>
        )}
      </AnimatePresence>

      {/* small tooltip hint */}
      <AnimatePresence>
        {showHint && !open && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            className="bg-cynbit-card border border-cynbit-border text-white text-sm px-4 py-2.5 rounded-xl shadow-lg max-w-[210px] text-center"
          >
            👋 Got a project idea? Let&apos;s talk!
            <button
              onClick={() => setShowHint(false)}
              className="block mx-auto mt-1 text-cynbit-muted hover:text-white text-xs"
            >
              dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* the main FAB button */}
      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        onClick={open ? () => setOpen(false) : handleOpen}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-cynbit-teal to-cynbit-accent shadow-lg shadow-cynbit-teal/30 flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-cynbit-accent focus:ring-offset-2 focus:ring-offset-cynbit-darker"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="down" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <ChevronDown size={22} />
            </motion.span>
          ) : (
            <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>

        {unread && !open && (
          <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-cynbit-darker animate-pulse" />
        )}
      </motion.button>
    </div>
  )
}
