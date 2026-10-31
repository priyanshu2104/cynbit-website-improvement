import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cynbit Technologies | AI Automation & Software Solutions Jaipur',
  description:
    'Cynbit Technologies architects the digital future with autonomous AI agents, custom software development, and scalable business platforms. Based in Jaipur, Rajasthan.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Cynbit Technologies | AI Automation & Software Solutions',
    description: 'Autonomous AI Agents · Enterprise Cloud Systems · Scalable Software',
    url: 'https://cynbit.in',
    siteName: 'Cynbit Technologies',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-surface text-on-surface antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  )
}
