import './globals.css'
import { Inter } from 'next/font/google'
import Layout from '@/component/Layout'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata : Metadata = {
  title: 'PokeNext',
  icons: '/images/favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
        </body>
    </html>
  )
}
