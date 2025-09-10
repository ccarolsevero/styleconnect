import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StyleConnect | Sistema de Gestão Completo para Salões e Clínicas',
  description: 'Transforme seu negócio com o StyleConnect. Sistema completo com agenda digital, gestão financeira, fidelização e presença digital. Pague uma vez, use para sempre.',
  keywords: 'styleconnect, sistema gestão salão beleza, software salão, agendamento online, gestão financeira salão, fidelização clientes, clínicas estética',
  authors: [{ name: 'StyleConnect' }],
  openGraph: {
    title: 'StyleConnect - Sistema de Gestão Completo',
    description: 'Solução completa para organizar, modernizar e fazer seu salão ou clínica crescer com ROI de +35%',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
