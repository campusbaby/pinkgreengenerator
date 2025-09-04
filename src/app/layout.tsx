import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pink Green Generator - Create Brave Pink Hero Green Effects Online',
  description: 'Free online pink green photo editor. Transform your images with stunning Brave Pink Hero Green duotone effects. Privacy-first, browser-based processing. No registration required.',
  keywords: 'pink green generator, brave pink hero green, duotone photo editor, online photo filter, pink green photo effect, tiktok filter, instagram effect, social media photo editor',
  authors: [{ name: 'Pink Green Generator' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Pink Green Generator - Create Brave Pink Hero Green Effects Online',
    description: 'Free online pink green photo editor. Transform your images with stunning duotone effects that embody courage and unity.',
    type: 'website',
    url: 'https://pinkgreengenerator.app',
    siteName: 'Pink Green Generator',
    locale: 'en_US',
    images: [
      {
        url: 'https://pinkgreengenerator.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pink Green Generator - Create Brave Pink Hero Green Effects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pink Green Generator - Create Brave Pink Hero Green Effects Online',
    description: 'Free online pink green photo editor. Transform your images with stunning duotone effects that embody courage and unity.',
    images: ['https://pinkgreengenerator.app/og-image.jpg'],
    creator: '@pinkgreengenerator',
  },
  alternates: {
    canonical: 'https://pinkgreengenerator.app',
  },
  category: 'Photo Editing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://pinkgreengenerator.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Pink Green Generator",
              "url": "https://pinkgreengenerator.app",
              "description": "Free online pink green photo editor for creating Brave Pink Hero Green duotone effects",
              "applicationCategory": "MultimediaApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "creator": {
                "@type": "Organization",
                "name": "Pink Green Generator"
              },
              "featureList": [
                "Privacy-first image processing",
                "Browser-based photo editing",
                "Duotone effect creation",
                "Multiple effect options",
                "High-quality PNG export"
              ],
              "screenshot": "https://pinkgreengenerator.app/screenshot.jpg",
              "softwareVersion": "2.0",
              "dateModified": "2025-09-04"
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}