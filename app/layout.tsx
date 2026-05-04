import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['400', '700', '900']
});

export const metadata: Metadata = {
  title: 'Gesture Fire Safety | Future of Fire Suppression',
  description: 'GESPROTECH - Automatic Fire Suppression Systems for Electrical Panels. Stop Disaster Before It Starts.',
  keywords: ['fire safety', 'fire suppression', 'electrical panel protection', 'FK-5-1-12', 'automatic fire suppression', 'GESPROTECH'],
  authors: [{ name: 'Gesture Fire Safety' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Gesture Fire Safety | Future of Fire Suppression',
    description: 'Advanced automatic fire suppression systems protecting electrical infrastructure.',
    type: 'website',
    images: [{ url: '/icon.png' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
