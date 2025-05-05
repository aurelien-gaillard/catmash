import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../theme/theme.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CatMash - Vote for the Cutest Cat!',
  description: 'A fun app to vote for the cutest cats',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
