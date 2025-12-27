'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { HiArrowTrendingUp } from 'react-icons/hi2'
import { FaGem } from 'react-icons/fa'
import { MdOutlineBolt } from 'react-icons/md'

export default function Desire() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const transformations = [
    {
      before: 'Visibilidade Limitada',
      after: 'Presença Dominante',
      description: 'De páginas obscuras a resultados na primeira página do Google.',
      icon: HiMagnifyingGlass,
    },
    {
      before: 'Tráfego Esporádico',
      after: 'Fluxo Constante',
      description: 'Visitantes qualificados chegando 24/7 através de estratégias inteligentes.',
      icon: HiArrowTrendingUp,
    },
    {
      before: 'Conversões Baixas',
      after: 'Taxa de Sucesso',
      description: 'Otimização contínua que transforma visitantes em clientes fiéis.',
      icon: FaGem,
    },
    {
      before: 'Dados Desconectados',
      after: 'Insights Acionáveis',
      description: 'Inteligência artificial que revela padrões e oportunidades ocultas.',
      icon: MdOutlineBolt,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="desire" ref={ref} className="section-padding relative overflow-hidden">
      <div className="container-urban">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.span
              className="inline-block px-4 py-2 glass-effect rounded-full text-sm text-primary mb-6"
            >
              Transformação Real
            </motion.span>
            <h2 className="text-headline font-urban font-bold text-gray-lightest mb-6">
              O Que Muda Quando a <span className="text-gradient">Prospett Assume</span>
            </h2>
            <p className="text-body-lg text-gray-light max-w-2xl mx-auto">
              Não prometemos milagres. Prometemos resultados mensuráveis, 
              crescimento sustentável e uma parceria estratégica que eleva seu negócio.
            </p>
          </motion.div>

          {/* Transformation Cards */}
          <div className="space-y-8">
            {transformations.map((transformation, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-8 md:p-12 rounded-2xl hover:bg-gray-dark/30 transition-all duration-300 group"
                whileHover={{ scale: 1.01, x: 10 }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                  {/* Icon */}
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <transformation.icon className="w-16 h-16 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
                      <div className="text-lg font-semibold text-gray-light line-through">
                        {transformation.before}
                      </div>
                      <div className="hidden md:block text-primary text-2xl">→</div>
                      <div className="text-2xl font-bold text-gradient">
                        {transformation.after}
                      </div>
                    </div>
                    <p className="text-body text-gray-light leading-relaxed">
                      {transformation.description}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <motion.div
                  className="mt-6 h-1 bg-gray-dark rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 1, ease: 'easeOut' }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-primary-light"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ delay: index * 0.2 + 0.7, duration: 0.8, ease: 'easeOut' }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}

