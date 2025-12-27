'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import Credibility from '@/components/sections/Credibility'
import Desire from '@/components/sections/Desire'
import Decision from '@/components/sections/Decision'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section - Primeiro Impacto */}
      <Hero />
      
      {/* Credibility Section - Método e Rigor */}
      <Credibility />
      
      {/* Desire Section - Transformação */}
      <Desire />
      
      {/* Decision Section - CTA Final */}
      <Decision />
      
      {/* Background ambient effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      </div>
    </main>
  )
}

