import type { Metadata } from 'next'
import './main.scss'
import { AOSInit } from './AOSProvider'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Heyday: Rise of Empires',
  description:
    'Welcome to the world of Heyday: Rise of Empires, a strategy-driven game set in the mystical realm of Covenant. Build your empire, unlock ancient relics, and lead your faction to glory in this immersive RTS experience!',
  openGraph: {
    images: [
      {
        // url: 'https://localhost:7012/bannerSEOonPage.jpg',
        url: 'https://godpad.io/images/hero_banner.webp',
        width: 1200,
        height: 630,
        alt: 'Heyday Banner'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heyday: Rise of Empires',
    description:
      'Welcome to the world of Heyday: Rise of Empires, a strategy-driven game set in the mystical realm of Covenant. Build your empire, unlock ancient relics, and lead your faction to glory in this immersive RTS experience!',
    images: 'https://localhost:7012/bannerSEOonPage.jpg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <AOSInit />
      <body>{children}</body>
      <GoogleAnalytics gaId='G-W5Q1T83FTD' />
    </html>
  )
}
