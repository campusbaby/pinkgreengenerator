import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Pink Green Generator - Create Brave Pink Hero Green Effects Online',
  description: 'Free online pink green photo editor. Transform your images with stunning Brave Pink Hero Green duotone effects. Privacy-first, browser-based processing. No registration required.',
  keywords: 'pink green generator, brave pink hero green, duotone photo editor, online photo filter, pink green photo effect, tiktok filter, instagram effect, social media photo editor',
  authors: [{ name: 'Pink Green Generator' }],
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
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-0SEN47EDMY"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-0SEN47EDMY');
                `,
              }}
            />
            {/* Microsoft Clarity */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", "t6rf0mhpse");
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}