'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string[];
  capabilities: { heading: string; items: string[] }[];
  secondaryImages?: string[];
}

export default function ServicePage({ title, subtitle, heroImage, description, capabilities, secondaryImages }: ServicePageProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-atlas-950/95 backdrop-blur-lg shadow-2xl shadow-black/20 py-3' : 'bg-transparent py-5'}`}>
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg transition-transform group-hover:scale-110">
              <Image src="/images/logo-icon.png" alt="Atlas GES" width={40} height={40} className="object-contain" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>ATLAS</span>
              <span className="text-xs text-atlas-400 ml-1 font-medium">GES</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-sm text-gray-300 hover:text-atlas-400 transition-colors">All Services</a>
            <a href="/#projects" className="text-sm text-gray-300 hover:text-atlas-400 transition-colors">Projects</a>
            <a href="/#contact" className="rounded-full bg-atlas-600 px-5 py-2 text-sm font-semibold text-white hover:bg-atlas-500 transition-all hover:shadow-lg hover:shadow-atlas-500/20 hover:-translate-y-0.5">
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-atlas-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-atlas-950 via-atlas-950/30 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 w-full">
          <a href="/#services" className="inline-flex items-center gap-2 text-sm text-atlas-400 hover:text-atlas-300 transition-colors mb-4">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
            Back to Services
          </a>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {title}
          </h1>
          <p className="mt-3 text-lg text-gray-300 max-w-2xl">{subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gradient-to-b from-atlas-950 to-atlas-950">
        <div className="mx-auto max-w-6xl px-6">
          {/* Description */}
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3 space-y-5">
              {description.map((p, i) => (
                <p key={i} className="text-gray-400 leading-relaxed text-lg">{p}</p>
              ))}
            </div>
            {secondaryImages && secondaryImages.length > 0 && (
              <div className="md:col-span-2 space-y-4">
                {secondaryImages.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-white/5">
                    <img src={img} alt={`${title} work`} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Capabilities */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div key={cap.heading} className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:border-atlas-500/20 hover:bg-white/[0.04] transition-all duration-300">
                <h3 className="text-lg font-bold text-atlas-400 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{cap.heading}</h3>
                <ul className="space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="h-4 w-4 mt-0.5 shrink-0 text-atlas-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <a
        href="/#contact"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full bg-atlas-600 px-6 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-atlas-600/30 hover:bg-atlas-500 hover:shadow-atlas-500/40 transition-all hover:-translate-y-1 animate-fade-in"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        Contact Us
      </a>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                <Image src="/images/logo-icon.png" alt="Atlas GES" width={32} height={32} className="object-contain" />
              </div>
              <span className="font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>ATLAS <span className="text-atlas-400">GES</span></span>
            </div>
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Atlas Earth Exploration. All rights reserved.</p>
            <a href="https://www.atlasgccsurvey.com" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-atlas-400 transition-colors">www.atlasgccsurvey.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}
