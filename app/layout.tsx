import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pulse Inventory',
  description: 'A Shop Inventory Management Application',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-gray-50 dark:bg-gray-900'>
      <head>
      <link rel="icon" href="/logo.svg" />
      </head>
      <body className={'${inter.className} '}>{children}</body>
    </html>
  )
}
