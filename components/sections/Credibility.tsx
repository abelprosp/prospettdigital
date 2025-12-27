'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBrain } from 'react-icons/fa6'
import { BiBarChart, BiTargetLock } from 'react-icons/bi'
import { MdRocketLaunch } from 'react-icons/md'

export default function Credibility() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const methods = [
    {
      icon: FaBrain,
      title: 'Análise Inteligente',
      description: 'IA processa milhões de dados para identificar oportunidades invisíveis ao olho humano.',
      colorClass: 'bg-primary',
    },
    {
      icon: BiBarChart,
      title: 'Estratégia Mensurável',
      description: 'Cada ação é planejada, executada e otimizada com base em métricas precisas.',
      colorClass: 'bg-primary-light',
    },
    {
      icon: BiTargetLock,
      title: 'Execução Precisão',
      description: 'Rigor técnico combinado com criatividade estratégica para resultados excepcionais.',
      colorClass: 'bg-primary',
    },
    {
      icon: MdRocketLaunch,
      title: 'Crescimento Contínuo',
      description: 'Otimização constante através de aprendizado de máquina e ajustes em tempo real.',
      colorClass: 'bg-primary-light',
    },
  ]

  const stats = [
    { value: '300%', label: 'Aumento Médio em Tráfego' },
    { value: '85%', label: 'Taxa de Conversão' },
    { value: '24/7', label: 'Monitoramento Inteligente' },
    { value: '10x', label: 'ROI Médio' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="credibility" ref={ref} className="section-padding relative">
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
              Método Comprovado
            </motion.span>
            <h2 className="text-headline font-urban font-bold text-gray-lightest mb-6">
              Inteligência que <span className="text-gradient">Transforma</span>
            </h2>
            <p className="text-body-lg text-gray-light max-w-2xl mx-auto">
              Nossa abordagem combina análise profunda de dados, estratégia humana 
              e tecnologia de ponta para criar campanhas que realmente funcionam.
            </p>
          </motion.div>

          {/* Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
            {methods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-8 rounded-xl hover:bg-gray-dark/30 transition-all duration-300 group"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-title font-semibold text-gray-lightest mb-3">
                  {method.title}
                </h3>
                <p className="text-body text-gray-light leading-relaxed">
                  {method.description}
                </p>
                <div className={`mt-4 w-12 h-1 ${method.colorClass} rounded-full group-hover:w-full transition-all duration-300`} />
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="glass-effect p-12 rounded-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  <div className="text-4xl md:text-5xl font-urban font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-light uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}

