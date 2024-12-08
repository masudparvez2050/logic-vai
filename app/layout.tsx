import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Logic Vai: Your Next-Gen AI Mentor',
  description:
    'Chat with Logic Vai, your intelligent AI Mentor. Get instant answers, personalized conversations, and powerful insights. Experience the future of AI-powered communication today!',
  openGraph: {
    images: [
      {
        url: '',
        width: 800,
        height: 600,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className={`${inter.className} bg-cover antialiased`}>
        {children}
      </body>
    </html>
  )
}
