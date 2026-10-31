'use client'

import Link from 'next/link'
import { Home, Layers, Sparkles, GraduationCap, MessageSquare } from 'lucide-react'

export default function BottomNav() {
  function handleOpenChat() {
    window.dispatchEvent(new CustomEvent('cynbit-open-chat'))
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-outline-variant/15 px-4 py-2 flex items-center justify-around shadow-lg">
      <Link href="/" className="flex flex-col items-center gap-1 text-[10px] font-bold text-primary">
        <Home size={18} />
        <span>Home</span>
      </Link>

      <Link href="#services" className="flex flex-col items-center gap-1 text-[10px] font-bold text-on-surface-variant hover:text-primary">
        <Layers size={18} />
        <span>Services</span>
      </Link>

      <Link href="#estimator" className="flex flex-col items-center gap-1 text-[10px] font-bold text-on-surface-variant hover:text-primary">
        <Sparkles size={18} />
        <span>Estimator</span>
      </Link>

      <Link href="https://cynbit.in/bitelevate" target="_blank" className="flex flex-col items-center gap-1 text-[10px] font-bold text-on-surface-variant hover:text-primary">
        <GraduationCap size={18} />
        <span>BitElevate</span>
      </Link>

      <button onClick={handleOpenChat} className="flex flex-col items-center gap-1 text-[10px] font-bold text-primary">
        <MessageSquare size={18} />
        <span>Inquiry</span>
      </button>
    </div>
  )
}

