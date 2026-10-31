'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import TickerSection from '@/components/TickerSection'
import PillarsSection from '@/components/PillarsSection'
import ServicesSection from '@/components/ServicesSection'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import LeadInspectorDrawer from '@/components/LeadInspectorDrawer'

const ChatbotWidget = dynamic(() => import('@/components/chatbot/ChatbotWidget'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TickerSection />
        <PillarsSection />
        <ServicesSection />
      </main>
      <Footer />
      <BottomNav />
      <ChatbotWidget />
      <LeadInspectorDrawer />
    </div>
  )
}
