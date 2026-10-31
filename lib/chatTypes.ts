// chat types and constants for the chatbot

export type MessageRole = 'bot' | 'user'

export interface ChatMessage {
  id: string
  role: MessageRole
  text: string
  timestamp: Date
}

// all the steps in the chat flow
export type ChatStep =
  | 'welcome'
  | 'ask_name'
  | 'ask_service'
  | 'ask_description'
  | 'ask_budget'
  | 'ask_timeline'
  | 'ask_email'
  | 'review'
  | 'submitting'
  | 'success'
  | 'error'

export interface LeadFormData {
  name: string
  service: string
  projectDescription: string
  budget: string
  timeline: string
  email: string
}

// TODO: maybe fetch these from an API later
export const SERVICES = [
  { id: 'ai-agents', label: '🤖 AI Automation & Agents' },
  { id: 'fullstack', label: '💻 Full-Stack Development' },
  { id: 'cloud', label: '☁️ Cloud Architecture' },
  { id: 'seo', label: '📈 Technical SEO & Growth' },
  { id: 'revio', label: '⭐ Revio (Review Management)' },
  { id: 'bitelevate', label: '🚀 BitElevate' },
]

export const BUDGETS = [
  { id: 'under-1l', label: 'Under ₹1 Lakh' },
  { id: '1l-5l', label: '₹1L – ₹5L' },
  { id: '5l-20l', label: '₹5L – ₹20L' },
  { id: 'above-20l', label: 'Above ₹20L' },
  { id: 'not-sure', label: "Not sure yet" },
]

export const TIMELINES = [
  { id: 'asap', label: '⚡ ASAP' },
  { id: '1-month', label: '1 Month' },
  { id: '3-months', label: '1–3 Months' },
  { id: 'flexible', label: 'Flexible / Just exploring' },
]
