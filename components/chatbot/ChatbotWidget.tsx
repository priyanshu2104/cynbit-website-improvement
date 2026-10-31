'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageSquare, X, ChevronDown } from 'lucide-react'
import ChatWindow from './ChatWindow'

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [unread, setUnread] = useState(true)
  const [showHint, setShowHint] = useState(false)

  // Listen for custom trigger from navbar/hero "Start Discovery" buttons
  useEffect(() => {
    function handleExternalOpen() {
      setOpen(true)
      setUnread(false)
      setShowHint(false)
    }
    window.addEventListener('cynbit-open-chat', handleExternalOpen)
    return () => window.removeEventListener('cynbit-open-chat', handleExternalOpen)
  }, [])

  // Show small hint bubble after 3.5s if not opened
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open) setShowHint(true)
    }, 3500)
    return () => clearTimeout(timer)
  }, [open])

  function handleOpen() {
    setOpen(true)
    setUnread(false)
    setShowHint(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="w-[370px] max-w-[calc(100vw-2rem)] h-[580px] max-h-[calc(100vh-6rem)] bg-white border border-outline-variant/25 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header with Cynbit Teal */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-primary to-primary-container text-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-black text-sm text-white">
                    A
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-white">Aria</p>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-white/20 text-white/90">
                      AI
                    </span>
                  </div>
                  <p className="text-[11px] text-white/80">Cynbit Discovery Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close assistant"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <ChatWindow />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pop-up Hint Tooltip */}
      <AnimatePresence>
        {showHint && !open && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            className="bg-white border border-outline-variant/25 text-on-surface text-xs font-medium px-4 py-3 rounded-2xl shadow-xl max-w-[220px] text-center"
          >
            <p className="text-on-surface font-semibold mb-1">👋 Have a project in mind?</p>
            <p className="text-on-surface-variant text-[11px]">Chat with Aria to scope solutions in 2 minutes.</p>
            <button
              onClick={() => setShowHint(false)}
              className="mt-2 text-[10px] font-bold text-primary hover:underline uppercase tracking-wider block mx-auto"
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={open ? () => setOpen(false) : handleOpen}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-container shadow-xl shadow-primary/30 flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={open ? 'Close Chatbot' : 'Open Chatbot'}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="down" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <ChevronDown size={22} />
            </motion.span>
          ) : (
            <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageSquare size={22} />
            </motion.span>
          )}
        </AnimatePresence>

        {unread && !open && (
          <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-tertiary-container rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>

    </div>
  )
}
