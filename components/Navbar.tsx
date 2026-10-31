'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass-nav border-b border-outline-variant/15 shadow-sm transition-all duration-300">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 md:px-8 py-3.5 md:py-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center hover:scale-[1.02] active:scale-95 transition-transform duration-200">
            <Image
              src="/logo.svg"
              alt="Cynbit Technologies"
              width={140}
              height={44}
              priority
              className="h-8 md:h-9 w-auto"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Company Dropdown */}
            <div className="relative group">
              <button className="px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
                Company
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-white rounded-2xl shadow-xl border border-outline-variant/15 p-2 w-64 space-y-1">
                  <Link href="https://cynbit.in/story" target="_blank" className="block p-3 rounded-xl hover:bg-surface-container transition-colors">
                    <p className="text-xs font-bold text-on-surface">Our Story</p>
                    <p className="text-[11px] text-on-surface-variant">The vision behind Cynbit.</p>
                  </Link>
                  <Link href="https://cynbit.in/team" target="_blank" className="block p-3 rounded-xl hover:bg-surface-container transition-colors">
                    <p className="text-xs font-bold text-on-surface">Our Team</p>
                    <p className="text-[11px] text-on-surface-variant">Meet the architects.</p>
                  </Link>
                  <Link href="https://cynbit.in/impact" target="_blank" className="block p-3 rounded-xl hover:bg-surface-container transition-colors">
                    <p className="text-xs font-bold text-on-surface">Social Impact</p>
                    <p className="text-[11px] text-on-surface-variant">Our community initiatives.</p>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="#services" className="px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant hover:text-primary transition-colors">
              Services
            </Link>

            <Link href="#estimator" className="px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary hover:underline transition-colors flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Estimator
            </Link>

            <Link href="#pillars" className="px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant hover:text-primary transition-colors">
              Pillars
            </Link>

            <Link href="https://cynbit.in/bitelevate" target="_blank" className="px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant hover:text-primary transition-colors">
              BitElevate
            </Link>

            <Link href="https://cynbit.in/blog" target="_blank" className="px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant hover:text-primary transition-colors">
              Blog
            </Link>
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="#chat"
              onClick={(e) => {
                e.preventDefault()
                // trigger chatbot open via custom event
                window.dispatchEvent(new CustomEvent('cynbit-open-chat'))
              }}
              className="btn-primary text-xs tracking-wider uppercase font-bold px-5 py-2.5"
            >
              Start Discovery
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-on-surface-variant hover:text-primary rounded-xl"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-outline-variant/15 px-6 py-5 space-y-3 shadow-xl">
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-on-surface">
              Services
            </Link>
            <Link href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-on-surface">
              Products
            </Link>
            <Link href="https://cynbit.in/bitelevate" target="_blank" className="block py-2 text-sm font-semibold text-on-surface">
              BitElevate
            </Link>
            <Link href="https://cynbit.in/blog" target="_blank" className="block py-2 text-sm font-semibold text-on-surface">
              Blog
            </Link>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  window.dispatchEvent(new CustomEvent('cynbit-open-chat'))
                }}
                className="w-full btn-primary text-xs font-bold uppercase py-3"
              >
                Start Discovery
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

