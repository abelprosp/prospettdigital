'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiArrowRight } from 'react-icons/hi'
import { HiX } from 'react-icons/hi'
import { FaInstagram } from 'react-icons/fa'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background - Vertical gradient from dark to primary */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-primary/20" />
      
      {/* Vertical grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 19%, rgba(16, 93, 252, 0.1) 20%)',
        }} />
      </div>

      {/* Main Content - Two Column Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-urban relative z-10 px-4 md:px-8 lg:px-16 py-20 md:py-0"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start order-2 lg:order-1">
            {/* Main Headline - Split style like "Discover Innovation" */}
            <motion.h1
              variants={itemVariants}
              className="font-urban font-bold mb-4 md:mb-6 leading-tight text-left w-full"
            >
              <span className="text-primary/70 block mb-2 text-xl md:text-2xl lg:text-3xl font-medium">Crescimento</span>
              <span className="text-white block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Orientado por IA</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-xl leading-relaxed text-left"
            >
              Transformamos dados em resultados. A Prospett combina inteligência artificial 
              com estratégia humana para elevar sua presença digital a novos patamares.
            </motion.p>

            {/* CTA Button - Oval/Elongated style */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 w-full md:w-auto"
            >
              <motion.a
                href="#decision"
                className="px-6 md:px-10 py-3 md:py-4 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full
                         text-white text-sm md:text-base font-medium flex items-center gap-2 md:gap-3 group hover:bg-black/90
                         transition-all duration-300 shadow-lg w-full md:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Iniciar Projeto</span>
                <HiArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Animated Circles Indicator */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mt-8 md:mt-12"
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-white/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}
              <motion.div
                className="ml-2 w-6 h-6 rounded-full border border-white/30 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <span className="text-white/50 text-xs">*</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            variants={itemVariants}
            className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] order-1 lg:order-2"
          >
            <Image
              src="/hero.png"
              alt="Prospett - Inteligência Artificial"
              fill
              className="object-contain object-center"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Available Now - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-4 md:bottom-8 left-4 md:left-8 flex items-center gap-2 z-20"
      >
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs md:text-sm text-white/70 hidden sm:inline">Oque está esperando para começar a crescer?</span>
        <span className="text-xs text-white/70 sm:hidden">Começar a crescer?</span>
      </motion.div>

      {/* Circular Icons - Top Right */}
      <div className="absolute top-4 md:top-8 right-4 md:right-8 flex flex-col gap-2 md:gap-3 z-20">
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm
                   flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60
                   transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <HiX className="w-5 h-5" />
        </motion.button>
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm
                   flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60
                   transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  )
}

