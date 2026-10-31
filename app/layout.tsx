import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cynbit Technologies — AI-Powered Project Inquiry',
  description:
    'Start your project with Cynbit. Our intelligent assistant will guide you to the right solution in seconds.',
  openGraph: {
    title: 'Cynbit Technologies',
    description: 'AI Automation · Full-Stack Dev · Cloud Architecture',
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
      <body className={`${inter.className} bg-cynbit-darker text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

