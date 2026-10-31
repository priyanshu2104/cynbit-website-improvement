'use client'

import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import StatsSection from '@/components/StatsSection'

const ChatbotWidget = dynamic(() => import('@/components/chatbot/ChatbotWidget'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ChatbotWidget />
    </main>
  )
}

