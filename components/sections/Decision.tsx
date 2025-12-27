'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { HiCheck, HiMail } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'

export default function Decision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Formatar a mensagem para o WhatsApp
    const whatsappNumber = '5551995501677'
    const message = `Olá! Gostaria de iniciar um projeto com a Prospett.

*Informações do Contato:*
👤 Nome: ${formData.name}
📧 Email: ${formData.email}
🏢 Empresa: ${formData.company || 'Não informado'}

*Mensagem:*
${formData.message || 'Sem mensagem adicional'}

Aguardo retorno!`

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message)
    
    // Criar o link do WhatsApp Web
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Abrir o WhatsApp (tenta abrir o app, se não conseguir abre o web)
    window.location.href = whatsappUrl
    
    // Limpar o formulário após um pequeno delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      })
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const benefits = [
    'Análise completa do seu mercado',
    'Estratégia personalizada em 48h',
    'Roadmap de crescimento claro',
    'Acesso a ferramentas premium de IA',
  ]

  return (
    <section id="decision" ref={ref} className="section-padding relative overflow-hidden">
      <div className="container-urban">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-block px-4 py-2 glass-effect rounded-full text-sm text-primary mb-6"
            >
              Pronto para Começar?
            </motion.span>
            <h2 className="text-headline font-urban font-bold text-gray-lightest mb-6">
              Vamos Construir Seu <span className="text-gradient">Futuro Digital</span>
            </h2>
            <p className="text-body-lg text-gray-light max-w-2xl mx-auto">
              Agende uma conversa estratégica. Sem compromisso, apenas insights valiosos 
              sobre como podemos acelerar seu crescimento.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="glass-effect p-8 md:p-12 rounded-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-lighter mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black-light border border-gray-dark rounded-lg 
                             text-gray-lightest focus:outline-none focus:border-primary 
                             focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-lighter mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black-light border border-gray-dark rounded-lg 
                             text-gray-lightest focus:outline-none focus:border-primary 
                             focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-lighter mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black-light border border-gray-dark rounded-lg 
                             text-gray-lightest focus:outline-none focus:border-primary 
                             focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-lighter mb-2">
                    Conte-nos sobre seu projeto
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-black-light border border-gray-dark rounded-lg 
                             text-gray-lightest focus:outline-none focus:border-primary 
                             focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-light 
                           text-white font-semibold rounded-lg urban-glow
                           hover:opacity-90 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Proposta
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column - Benefits and Contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-title font-semibold text-gray-lightest mb-6">
                  O Que Você Recebe
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 
                                    flex items-center justify-center mt-0.5">
                        <HiCheck className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-body text-gray-light">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-title font-semibold text-gray-lightest mb-6">
                  Ou Entre em Contato
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contato@prospett.com"
                    className="flex items-center gap-4 text-body text-gray-light hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center 
                                  group-hover:bg-primary/20 transition-colors">
                      <HiMail className="w-5 h-5 text-primary" />
                    </div>
                    contato@prospett.com
                  </a>
                  <a
                    href="tel:+5551995501677"
                    className="flex items-center gap-4 text-body text-gray-light hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-light/10 flex items-center justify-center 
                                  group-hover:bg-primary-light/20 transition-colors">
                      <FiPhone className="w-5 h-5 text-primary" />
                    </div>
                    +55 (51) 99550-1677
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-20 pt-12 border-t border-gray-dark/30"
      >
        <div className="container-urban">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Image
              src="/logo.png"
              alt="Prospett"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <div className="text-sm text-gray-light text-center md:text-right">
              <p>© 2024 Prospett. Todos os direitos reservados.</p>
              <p className="mt-1">SEO e Marketing Orientados por IA</p>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}

