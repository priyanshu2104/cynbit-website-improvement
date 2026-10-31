'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'
import { type ChatMessage, type ChatStep, type LeadFormData, SERVICES, BUDGETS, TIMELINES } from '@/lib/chatTypes'
import { getBotMessage, isValidEmail } from '@/lib/chatScript'
import TypingIndicator from './TypingIndicator'
import ReviewCard from './ReviewCard'
import SuccessCard from './SuccessCard'

function makeId() {
  return Math.random().toString(36).slice(2)
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [step, setStep] = useState<ChatStep>('welcome')
  const [formData, setFormData] = useState<Partial<LeadFormData>>({})
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [error, setError] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    sendBotMessage('welcome', {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function sendBotMessage(nextStep: ChatStep, data: Partial<LeadFormData>, delay = 700) {
    setTyping(true)
    setStep(nextStep)
    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        { id: makeId(), role: 'bot', text: getBotMessage(nextStep, data), timestamp: new Date() },
      ])
    }, delay)
  }

  function addUserMsg(text: string) {
    setMessages((prev) => [
      ...prev,
      { id: makeId(), role: 'user', text, timestamp: new Date() },
    ])
  }

  async function handleChip(field: keyof LeadFormData, value: string, label: string) {
    addUserMsg(label)
    const updated = { ...formData, [field]: value }
    setFormData(updated)

    if (field === 'service') sendBotMessage('ask_description', updated)
    if (field === 'budget') sendBotMessage('ask_timeline', updated)
    if (field === 'timeline') sendBotMessage('ask_email', updated)
  }

  function handleSend() {
    const val = input.trim()
    if (!val) return
    setError('')

    if (step === 'welcome') {
      addUserMsg("Yes, let's begin!")
      setInput('')
      const updated = { ...formData }
      sendBotMessage('ask_name', updated)
      return
    }

    if (step === 'ask_name') {
      if (val.length < 2) {
        setError('Please provide your name')
        return
      }
      addUserMsg(val)
      setInput('')
      const updated = { ...formData, name: val }
      setFormData(updated)
      sendBotMessage('ask_service', updated)
      return
    }

    if (step === 'ask_description') {
      if (val.length < 10) {
        setError('Please share a few more details (at least 10 characters)')
        return
      }
      addUserMsg(val)
      setInput('')
      const updated = { ...formData, projectDescription: val }
      setFormData(updated)
      sendBotMessage('ask_budget', updated)
      return
    }

    if (step === 'ask_email') {
      if (!isValidEmail(val)) {
        setError('Please provide a valid email address')
        return
      }
      addUserMsg(val)
      setInput('')
      const updated = { ...formData, email: val }
      setFormData(updated)
      sendBotMessage('review', updated)
      return
    }

    setInput('')
  }

  async function submitLead() {
    setTyping(true)
    setStep('submitting')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      setTyping(false)

      if (data.success) {
        sendBotMessage('success', formData, 200)
      } else {
        sendBotMessage('error', formData, 200)
      }
    } catch (e) {
      console.error('Lead submission failed', e)
      setTyping(false)
      sendBotMessage('error', formData, 200)
    }
  }

  function restart() {
    setMessages([])
    setFormData({})
    setInput('')
    setError('')
    sendBotMessage('welcome', {}, 300)
  }

  const showInput = ['welcome', 'ask_name', 'ask_description', 'ask_email'].includes(step)

  const placeholders: Record<string, string> = {
    welcome: 'Type anything to start…',
    ask_name: 'Your name…',
    ask_description: 'Describe your vision or challenge…',
    ask_email: 'name@company.com',
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden bg-white">
      
      {/* Messages Scroll View */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'bot' && (
                <div className="w-7 h-7 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-bold mr-2 mt-0.5">
                  A
                </div>
              )}
              <div className={msg.role === 'bot' ? 'chat-bubble-bot' : 'chat-bubble-user'}>
                <BotText text={msg.text} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {typing && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-2">
            <div className="w-7 h-7 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-bold">
              A
            </div>
            <TypingIndicator />
          </motion.div>
        )}

        {/* Step-specific Choice Pills */}
        {!typing && (
          <div>
            {step === 'ask_service' && (
              <div className="flex flex-wrap gap-2 mt-1">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleChip('service', s.id, s.label)}
                    className={`chip ${formData.service === s.id ? 'chip-selected' : ''}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}

            {step === 'ask_budget' && (
              <div className="flex flex-wrap gap-2 mt-1">
                {BUDGETS.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => handleChip('budget', b.id, b.label)}
                    className={`chip ${formData.budget === b.id ? 'chip-selected' : ''}`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            )}

            {step === 'ask_timeline' && (
              <div className="flex flex-wrap gap-2 mt-1">
                {TIMELINES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleChip('timeline', t.id, t.label)}
                    className={`chip ${formData.timeline === t.id ? 'chip-selected' : ''}`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            )}

            {step === 'review' && (
              <div className="flex gap-2 mt-2">
                <button onClick={submitLead} className="btn-primary text-xs flex-1 py-2.5">
                  Confirm & Submit
                </button>
                <button onClick={restart} className="btn-ghost text-xs py-2.5">
                  Edit
                </button>
              </div>
            )}

            {step === 'error' && (
              <button onClick={restart} className="btn-primary text-xs mt-2 py-2">
                Try again
              </button>
            )}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Review Card Before Final Submit */}
      {step === 'review' && !typing && (
        <div className="px-4 pb-2">
          <ReviewCard data={formData as LeadFormData} />
        </div>
      )}

      {/* Success Card */}
      {step === 'success' && !typing && (
        <div className="px-4 pb-2">
          <SuccessCard name={formData.name || ''} onRestart={restart} />
        </div>
      )}

      {/* Text Input Row */}
      {showInput && (
        <div className="px-4 py-3 bg-surface border-t border-outline-variant/15">
          {error && <p className="text-red-600 text-xs mb-1.5 pl-1">{error}</p>}
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={placeholders[step] || 'Type a response…'}
              className="input-field"
              disabled={typing}
              autoFocus
            />
            <button
              onClick={handleSend}
              disabled={typing || !input.trim()}
              className="btn-primary px-3.5 py-2 shrink-0 disabled:opacity-40"
              aria-label="Send message"
            >
              {typing ? <Loader2 size={16} className="animate-spin" /> : <Send size={15} />}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function BotText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>
        }
        return part.split('\n').map((line, j, arr) => (
          <span key={`${i}-${j}`}>
            {line}
            {j < arr.length - 1 && <br />}
          </span>
        ))
      })}
    </span>
  )
}
