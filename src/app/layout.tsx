import type { Metadata } from 'next'
import { Exo, Lustria } from 'next/font/google'
import './globals.css'

const exo = Exo({
  subsets: ['latin'],
  variable: '--font-exo',
})

const lustria = Lustria({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lustria',
})

export const metadata: Metadata = {
  title: 'Aprimora Conhecimento',
  description: 'Aprimora Conhecimento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${exo.variable} ${lustria.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
