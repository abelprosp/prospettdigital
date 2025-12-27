import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-urban',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prospett | SEO e Marketing Orientados por IA',
  description: 'Crescimento estratégico através de inteligência artificial. Transformamos dados em resultados.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-urban antialiased`}>
        {children}
      </body>
    </html>
  )
}

