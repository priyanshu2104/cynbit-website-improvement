import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/15 pt-16 pb-24 md:pb-16 px-4 md:px-8 lg:px-12 text-left">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block hover:scale-[1.02] transition-transform">
              <Image
                src="/logo.svg"
                alt="Cynbit Technologies"
                width={150}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-on-surface-variant font-medium max-w-sm leading-relaxed">
              Architecting scalable digital platforms, autonomous AI systems, and high-performance engineering solutions for global businesses.
            </p>
            <div className="space-y-2 pt-2 text-xs font-medium text-on-surface-variant">
              <div className="flex items-center gap-2.5">
                <MapPin size={15} className="text-primary shrink-0" />
                <span>Pratap Nagar, Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-primary shrink-0" />
                <a href="mailto:opportunities@cynbit.in" className="hover:text-primary">
                  opportunities@cynbit.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-primary shrink-0" />
                <a href="tel:+918947962667" className="hover:text-primary">
                  +91 89479 62667
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links: Explore */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-on-surface">Explore</p>
            <ul className="space-y-2.5 text-xs font-medium text-on-surface-variant">
              <li><Link href="https://cynbit.in/story" target="_blank" className="hover:text-primary">Our Story</Link></li>
              <li><Link href="https://cynbit.in/team" target="_blank" className="hover:text-primary">Core Team</Link></li>
              <li><Link href="#services" className="hover:text-primary">Services Hub</Link></li>
              <li><Link href="#products" className="hover:text-primary">Product Suite (Revio)</Link></li>
              <li><Link href="https://cynbit.in/bitelevate" target="_blank" className="hover:text-primary">BitElevate Ecosystem</Link></li>
            </ul>
          </div>

          {/* Quick Links: Trust & Legal */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-on-surface">Initiatives</p>
            <ul className="space-y-2.5 text-xs font-medium text-on-surface-variant">
              <li><Link href="https://cynbit.in/impact" target="_blank" className="hover:text-primary">Social Impact</Link></li>
              <li><Link href="https://cynbit.in/careers" target="_blank" className="hover:text-primary">Careers</Link></li>
              <li><Link href="https://cynbit.in/blog" target="_blank" className="hover:text-primary">Expert Blog</Link></li>
              <li><Link href="https://cynbit.in/privacy" target="_blank" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Assistant Highlight */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Prototype</p>
            <div className="p-4 bg-white rounded-2xl border border-outline-variant/15 shadow-sm text-xs space-y-2">
              <p className="font-bold text-on-surface">Aria AI Assistant</p>
              <p className="text-on-surface-variant text-[11px] leading-relaxed">
                Working prototype built for the Cynbit Full Stack Intern Assessment.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant/15 flex flex-col md:flex-row items-center justify-between text-xs text-on-surface-variant/80 gap-4">
          <p>© 2026 Cynbit Technologies Private Limited. All rights reserved.</p>
          <p className="font-medium">Designed with Cynbit Design Language</p>
        </div>
      </div>
    </footer>
  )
}
