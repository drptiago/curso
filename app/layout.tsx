import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Claude Cowork | Automatize Tarefas com IA',
  description: 'Domine o Claude Cowork e automatize tarefas reais. Acesse o agente que monitora Upwork e Slack. Metodologia Meerkat Coding.',
  keywords: ['Claude', 'IA', 'automação', 'Upwork', 'Slack', 'agente IA', 'Meerkat Coding'],
  authors: [{ name: 'Tiago Félix' }],
  openGraph: {
    title: 'Claude Cowork | Automatize Tarefas com IA',
    description: 'Domine o Claude Cowork e automatize tarefas reais.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
