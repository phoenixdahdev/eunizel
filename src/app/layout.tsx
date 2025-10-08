import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import { cn } from '~/lib/utils'
import { neueMachina } from '~/fonts'

const fig = Figtree({
  variable: '--font-fig',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Eunizel Energy',
    default: 'Eunizel Energy - Solar Power Solutions & Renewable Energy',
  },
  metadataBase: new URL('https://www.eunizelenergy.com'),
  description:
    'Power your home with clean solar energy. Save thousands on electricity bills with reliable solar systems, energy storage, and smart monitoring solutions. Serving residential, commercial, and industrial clients.',
  icons: [{ rel: 'icon', url: '/favicon.svg' }],
  // openGraph: {
  //   title: 'Eunizel Energy - Solar Power Solutions & Renewable Energy',
  //   description:
  //     'Power your home with clean solar energy. Save thousands on electricity bills with reliable solar systems, energy storage, and smart monitoring solutions. Serving residential, commercial, and industrial clients.',
  //   url: 'https://www.eunizelenergy.com',
  //   siteName: 'Eunizel Energy',
  //   images: [
  //     {
  //       url: '/opengraph-image.png',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Eunizel Energy - Solar Power Solutions & Renewable Energy',
  //     },
  //   ],
  //   locale: 'en_NG',
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Eunizel Energy - Solar Power Solutions & Renewable Energy',
  //   description:
  //     'Power your home with clean solar energy. Save thousands on electricity bills with reliable solar systems, energy storage, and smart monitoring solutions.',
  //   images: ['/twitter-image.png'],
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('antialiased', fig.variable, neueMachina.variable)}>
        {children}
      </body>
    </html>
  )
}
